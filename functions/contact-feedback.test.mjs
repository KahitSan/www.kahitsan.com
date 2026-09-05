import assert from 'node:assert/strict'
import { afterEach, test } from 'node:test'
import worker, { handleContactFeedback, MAX_CONTACT_BODY_BYTES } from './_worker.js'

const originalFetch = globalThis.fetch

afterEach(() => {
  globalThis.fetch = originalFetch
})

const env = {
  CONTACT_API_URL: 'https://api.example.com',
  CONTACT_API_KEY: 'server-secret',
}

const request = (body = { email: 'hello@example.com', message: 'Hello' }, init = {}) =>
  new Request('https://www.kahitsan.com/api/contact-feedback', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    ...init,
  })

test('rejects unsupported methods, content types, and oversized bodies', async () => {
  const methodResponse = await handleContactFeedback(
    new Request('https://www.kahitsan.com/api/contact-feedback'),
    env
  )
  assert.equal(methodResponse.status, 405)
  assert.equal(methodResponse.headers.get('allow'), 'POST')

  const contentTypeResponse = await handleContactFeedback(
    new Request('https://www.kahitsan.com/api/contact-feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: '{}',
    }),
    env
  )
  assert.equal(contentTypeResponse.status, 415)

  const body = `"${'x'.repeat(MAX_CONTACT_BODY_BYTES)}"`
  const oversizedResponse = await handleContactFeedback(
    new Request('https://www.kahitsan.com/api/contact-feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
    }),
    env
  )
  assert.equal(oversizedResponse.status, 413)
})

test('rejects malformed JSON, non-object JSON, and missing runtime bindings', async () => {
  const malformedResponse = await handleContactFeedback(
    new Request('https://www.kahitsan.com/api/contact-feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: '{',
    }),
    env
  )
  assert.equal(malformedResponse.status, 400)

  const arrayResponse = await handleContactFeedback(request([]), env)
  assert.equal(arrayResponse.status, 400)

  const missingBindingResponse = await handleContactFeedback(request(), {})
  assert.equal(missingBindingResponse.status, 503)
})

test('forwards JSON with server-side key and preserves safe upstream response data', async () => {
  let forwardedRequest
  globalThis.fetch = async (input, init) => {
    forwardedRequest = new Request(input, init)
    return new Response(JSON.stringify({ error: 'Slow down.' }), {
      status: 429,
      headers: {
        'Content-Type': 'application/json',
        'Retry-After': '60',
        'Set-Cookie': 'should-not-leak=1',
      },
    })
  }

  const payload = { email: 'hello@example.com', message: 'Hello' }
  const response = await handleContactFeedback(request(payload), env)

  assert.equal(forwardedRequest.url, 'https://api.example.com/api/contact-feedback')
  assert.equal(forwardedRequest.method, 'POST')
  assert.equal(forwardedRequest.headers.get('x-api-key'), env.CONTACT_API_KEY)
  assert.equal(forwardedRequest.headers.get('content-type'), 'application/json')
  assert.deepEqual(await forwardedRequest.json(), payload)
  assert.equal(response.status, 429)
  assert.equal(response.headers.get('retry-after'), '60')
  assert.equal(response.headers.get('set-cookie'), null)
  assert.deepEqual(await response.json(), { error: 'Slow down.' })
})

test('falls back to static assets for non-contact requests', async () => {
  let assetRequest
  const response = await worker.fetch(new Request('https://www.kahitsan.com/contact'), {
    ASSETS: {
      fetch(input) {
        assetRequest = input
        return new Response('asset')
      },
    },
  })

  assert.equal(assetRequest.url, 'https://www.kahitsan.com/contact')
  assert.equal(await response.text(), 'asset')
})
