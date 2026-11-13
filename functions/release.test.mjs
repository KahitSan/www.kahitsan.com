import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
import { test } from 'node:test'

test('deployed output contains advanced-mode contact proxy worker', async () => {
  const workerPath = '.output/public/_worker.js'
  await access(workerPath)

  const worker = await readFile(workerPath, 'utf8')
  assert.match(worker, /['"]\/api\/contact-feedback['"]/)
  assert.match(worker, /CONTACT_API_URL/)
  assert.match(worker, /CONTACT_API_KEY/)
  assert.match(worker, /env\.ASSETS\.fetch\(request\)/)
  assert.doesNotMatch(worker, /VITE_API_(?:URL|KEY)/)
})

test('deployed pages contain a minified analytics bootstrap', async () => {
  const homepage = await readFile('.output/public/index.html', 'utf8')
  const script = [...homepage.matchAll(/<script>([\s\S]*?)<\/script>/g)]
    .map((match) => match[1])
    .find((content) => content.includes('__kahitSanAnalyticsBootstrap'))

  assert.ok(script, 'analytics bootstrap script is missing')
  assert.match(script, /G-V8DDGHSHDP/)
  assert.match(script, /kahitsan:analytics-page-view/)
  assert.doesNotMatch(script, /\n|\r/)
  assert.ok(script.length < 1100, `analytics bootstrap is not minified: ${script.length} bytes`)
})

test('deployed agent discovery files pass the Lighthouse validators', async () => {
  const [{ default: LlmsTxt }, { default: ArdSchema }] = await Promise.all([
    import('lighthouse/core/audits/agentic/llms-txt.js'),
    import('lighthouse/core/audits/agentic/ard-schema.js'),
  ])
  const summary = await readFile('.output/public/llms.txt', 'utf8')
  assert.equal(LlmsTxt.audit({ LlmsTxt: { status: 200, content: summary } }).score, 1)

  const manifest = await readFile('.output/public/.well-known/ard.json', 'utf8')
  assert.equal(await readFile('.output/public/.well-known/ai-catalog.json', 'utf8'), manifest)
  assert.equal(
    ArdSchema.audit({
      AgentResourceDiscovery: {
        status: 200,
        content: manifest,
        catalogUrl: 'https://www.kahitsan.com/.well-known/ard.json',
        discoverySource: 'htmlLink',
        discoverySignals: { htmlLink: 'https://www.kahitsan.com/.well-known/ard.json' },
        failedSources: [],
      },
    }).score,
    1
  )

  const homepage = await readFile('.output/public/index.html', 'utf8')
  assert.match(homepage, /rel="ard" href="\/\.well-known\/ard.json"/)
  assert.match(homepage, /rel="ai-catalog" href="\/\.well-known\/ai-catalog.json"/)
})

test('homepage prioritizes the hero before JavaScript without preloading it on other routes', async () => {
  const homepage = await readFile('.output/public/index.html', 'utf8')
  const preloads = [...homepage.matchAll(/<link\b[^>]*rel="preload"[^>]*>/g)].filter(([link]) =>
    link.includes('entrance-area')
  )
  assert.equal(preloads.length, 1)
  assert.ok(preloads[0].index < homepage.indexOf('rel="modulepreload"'))
  assert.match(preloads[0][0], /fetchpriority="high"/)

  const about = await readFile('.output/public/about/index.html', 'utf8')
  assert.doesNotMatch(about, /<link\b[^>]*rel="preload"[^>]*entrance-area/)
})
