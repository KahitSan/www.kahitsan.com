import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { test } from 'node:test'

test('legacy coworking URLs use Cloudflare 301 redirects and are not prerendered', async () => {
  const [redirects, config] = await Promise.all([
    readFile('public/_redirects', 'utf8'),
    readFile('app.config.ts', 'utf8'),
  ])

  assert.match(redirects, /^\/solutions\s+\/coworking\s+301$/m)
  assert.match(redirects, /^\/spaces\s+\/coworking\s+301$/m)
  assert.match(redirects, /^\/spaces\/\*\s+\/coworking\s+301$/m)
  assert.doesNotMatch(config, /^\s*'\/solutions',\s*$/m)
  assert.doesNotMatch(config, /^\s*'\/spaces',\s*$/m)
})
