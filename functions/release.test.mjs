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
