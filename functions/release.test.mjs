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
