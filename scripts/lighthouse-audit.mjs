import console from 'node:console'
import { spawn } from 'node:child_process'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { clearTimeout, setTimeout } from 'node:timers'
import { fileURLToPath, pathToFileURL, URL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const budgetPath = path.join(root, 'lighthouse-budget.json')
const configPath = path.join(root, 'lighthouse.config.mjs')
const outputDirectory = path.join(root, '.output', 'lighthouse')
const staticDirectory = path.join(root, '.output', 'public')
const serveBin = path.join(root, 'node_modules', 'serve', 'build', 'main.js')
const lighthouseBin = path.join(root, 'node_modules', 'lighthouse', 'cli', 'index.js')
const ignoredScoreModes = new Set(['informative', 'manual', 'notApplicable'])

const ansiPattern = new RegExp(`${String.fromCharCode(27)}\\[[0-?]*[ -/]*[@-~]`, 'g')
const stripAnsi = (value) => value.replaceAll(ansiPattern, '')

export const validateAuditBudget = (budget) => {
  if (budget.version !== 1) throw new Error('Lighthouse budget version must be 1')
  if (!Array.isArray(budget.profiles) || budget.profiles.length === 0) {
    throw new Error('Lighthouse budget must define at least one profile')
  }
  for (const profile of budget.profiles) {
    if (!['mobile', 'desktop'].includes(profile)) {
      throw new Error(`Unsupported Lighthouse budget profile: ${profile}`)
    }
  }
  if (!Array.isArray(budget.routes) || budget.routes.length === 0) {
    throw new Error('Lighthouse budget must define at least one route')
  }
  for (const route of budget.routes) {
    if (!route.name || !route.path?.startsWith('/')) {
      throw new Error('Each Lighthouse route needs a name and an absolute path')
    }
  }
  if (!Array.isArray(budget.categories) || budget.categories.length === 0) {
    throw new Error('Lighthouse budget must define at least one category')
  }
  for (const category of budget.categories) {
    if (!category.id || category.minimumScore < 0 || category.minimumScore > 1) {
      throw new Error('Each Lighthouse category needs an id and score from 0 to 1')
    }
  }
  return budget
}

export const summarizeLighthouseResult = (lhr, budget) => {
  const categories = Object.fromEntries(
    budget.categories.map(({ id, minimumScore }) => {
      const result = lhr.categories[id]
      const score = result?.score ?? null
      return [
        id,
        {
          title: result?.title ?? id,
          score,
          percent: score === null ? null : Math.round(score * 100),
          minimumScore,
          passed: score !== null && score >= minimumScore,
        },
      ]
    })
  )

  const selectedAuditIds = new Set(
    budget.categories.flatMap(({ id }) =>
      (lhr.categories[id]?.auditRefs ?? []).map((reference) => reference.id)
    )
  )
  const failingAudits = [...selectedAuditIds]
    .map((id) => lhr.audits[id])
    .filter(
      (audit) =>
        audit &&
        !ignoredScoreModes.has(audit.scoreDisplayMode) &&
        (audit.score === null || audit.score < 1)
    )
    .map((audit) => ({
      id: audit.id,
      title: audit.title,
      score: audit.score,
      scoreDisplayMode: audit.scoreDisplayMode,
      displayValue: audit.displayValue ?? null,
      numericValue: audit.numericValue ?? null,
      numericUnit: audit.numericUnit ?? null,
      errorMessage: audit.errorMessage ?? null,
    }))

  return {
    lighthouseVersion: lhr.lighthouseVersion,
    requestedUrl: lhr.requestedUrl,
    finalDisplayedUrl: lhr.finalDisplayedUrl,
    fetchTime: lhr.fetchTime,
    categories,
    failingAudits,
    passed: Object.values(categories).every((category) => category.passed),
  }
}

const parseFormFactors = (arguments_, configuredProfiles) => {
  const formFactorArgument = arguments_.find((argument) => argument.startsWith('--form-factor='))
  if (!formFactorArgument) return configuredProfiles

  const formFactor = formFactorArgument.split('=', 2)[1]
  if (!configuredProfiles.includes(formFactor)) {
    throw new Error(`Form factor must be one of: ${configuredProfiles.join(', ')}`)
  }
  return [formFactor]
}

const startStaticServer = async () => {
  const child = spawn(
    process.execPath,
    [
      serveBin,
      staticDirectory,
      '--listen',
      'tcp://127.0.0.1:0',
      '--no-clipboard',
      '--no-port-switching',
      '--no-request-logging',
    ],
    { cwd: root, stdio: ['ignore', 'pipe', 'pipe'] }
  )

  let output = ''
  const baseUrl = await new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error(`Static server did not start:\n${stripAnsi(output).trim()}`))
    }, 10000)
    const inspectOutput = (chunk) => {
      output += chunk.toString()
      const match = stripAnsi(output).match(/http:\/\/127\.0\.0\.1:(\d+)/)
      if (!match) return
      clearTimeout(timeout)
      resolve(`http://127.0.0.1:${match[1]}`)
    }
    child.stdout.on('data', inspectOutput)
    child.stderr.on('data', inspectOutput)
    child.once('error', (error) => {
      clearTimeout(timeout)
      reject(error)
    })
    child.once('exit', (code) => {
      clearTimeout(timeout)
      reject(new Error(`Static server exited with code ${code}:\n${stripAnsi(output).trim()}`))
    })
  })

  return { child, baseUrl }
}

const stopStaticServer = async (child) => {
  if (child.exitCode !== null || child.signalCode !== null) return
  child.kill('SIGTERM')
  await new Promise((resolve) => {
    const timeout = setTimeout(resolve, 5000)
    child.once('exit', () => {
      clearTimeout(timeout)
      resolve()
    })
  })
}

const runLighthouse = async ({ baseUrl, formFactor, route, reportPath }) => {
  const url = new URL(route.path, baseUrl).href
  const chromeFlags = '--headless=new --no-sandbox --disable-dev-shm-usage'
  const child = spawn(
    process.execPath,
    [
      lighthouseBin,
      url,
      `--config-path=${configPath}`,
      '--output=json',
      `--output-path=${reportPath}`,
      `--chrome-flags=${chromeFlags}`,
      '--no-enable-error-reporting',
      '--quiet',
    ],
    {
      cwd: root,
      env: { ...process.env, LIGHTHOUSE_FORM_FACTOR: formFactor },
      stdio: ['ignore', 'ignore', 'pipe'],
    }
  )

  let errorOutput = ''
  child.stderr.on('data', (chunk) => {
    errorOutput += chunk.toString()
  })
  const exitCode = await new Promise((resolve, reject) => {
    child.once('error', reject)
    child.once('exit', resolve)
  })
  if (exitCode !== 0) {
    throw new Error(
      `Lighthouse failed for ${formFactor} ${route.path} with code ${exitCode}:\n${stripAnsi(errorOutput).trim()}`
    )
  }
}

const printResult = (formFactor, route, result) => {
  const scores = Object.values(result.categories)
    .map((category) => `${category.title} ${category.percent ?? 'error'}`)
    .join(', ')
  console.log(`${formFactor} ${route.path}: ${scores}`)
  for (const audit of result.failingAudits) {
    const detail = audit.displayValue ?? audit.errorMessage ?? `score ${audit.score ?? 'error'}`
    console.log(`  - ${audit.id}: ${detail}`)
  }
}

export const runAudit = async (arguments_ = process.argv.slice(2)) => {
  const budget = validateAuditBudget(JSON.parse(await readFile(budgetPath, 'utf8')))
  const formFactors = parseFormFactors(arguments_, budget.profiles)
  await readFile(path.join(staticDirectory, 'index.html'))
  await mkdir(outputDirectory, { recursive: true })

  const { child: server, baseUrl } = await startStaticServer()
  const results = []
  console.log(`Auditing production static output at ${baseUrl}`)

  try {
    for (const formFactor of formFactors) {
      for (const route of budget.routes) {
        const reportPath = path.join(outputDirectory, `${formFactor}-${route.name}.json`)
        await runLighthouse({ baseUrl, formFactor, route, reportPath })
        const lhr = JSON.parse(await readFile(reportPath, 'utf8'))
        const result = summarizeLighthouseResult(lhr, budget)
        results.push({ formFactor, route, reportPath: path.relative(root, reportPath), ...result })
        printResult(formFactor, route, result)
      }
    }
  } finally {
    await stopStaticServer(server)
  }

  const summary = {
    lighthouseVersion: results[0]?.lighthouseVersion ?? null,
    budget: path.relative(root, budgetPath),
    config: path.relative(root, configPath),
    results,
    passed: results.every((result) => result.passed),
  }
  const summaryPath = path.join(outputDirectory, 'summary.json')
  await writeFile(summaryPath, `${JSON.stringify(summary, null, 2)}\n`)
  console.log(`Summary: ${path.relative(root, summaryPath)}`)

  if (!summary.passed) process.exitCode = 1
  return summary
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await runAudit().catch((error) => {
    console.error(error)
    process.exitCode = 1
  })
}
