const CONTACT_PATH = '/api/contact-feedback'
export const MAX_CONTACT_BODY_BYTES = 32 * 1024

const jsonError = (status, error, extraHeaders = {}) =>
  new Response(JSON.stringify({ error }), {
    status,
    headers: {
      'Cache-Control': 'no-store',
      'Content-Type': 'application/json; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
      ...extraHeaders,
    },
  })

class BodyTooLargeError extends Error {}

const readRequestBody = async (request) => {
  const contentLength = request.headers.get('content-length')
  if (contentLength !== null) {
    const declaredBytes = Number(contentLength)
    if (!Number.isSafeInteger(declaredBytes) || declaredBytes < 0) {
      throw new TypeError('Invalid Content-Length')
    }
    if (declaredBytes > MAX_CONTACT_BODY_BYTES) throw new BodyTooLargeError()
  }

  if (!request.body) return ''

  const reader = request.body.getReader()
  const chunks = []
  let totalBytes = 0

  try {
    while (true) {
      const { done, value } = await reader.read()
      if (done) break

      totalBytes += value.byteLength
      if (totalBytes > MAX_CONTACT_BODY_BYTES) {
        await reader.cancel()
        throw new BodyTooLargeError()
      }
      chunks.push(value)
    }
  } finally {
    reader.releaseLock()
  }

  const body = new Uint8Array(totalBytes)
  let offset = 0
  for (const chunk of chunks) {
    body.set(chunk, offset)
    offset += chunk.byteLength
  }

  return new TextDecoder('utf-8', { fatal: true }).decode(body)
}

const getContactEndpoint = (configuredUrl) => {
  const endpoint = new URL(configuredUrl)
  if (!['http:', 'https:'].includes(endpoint.protocol) || endpoint.username || endpoint.password) {
    throw new TypeError('Invalid contact API URL')
  }

  endpoint.hash = ''
  endpoint.search = ''
  const basePath = endpoint.pathname.replace(/\/+$/, '')
  endpoint.pathname = basePath.endsWith(CONTACT_PATH) ? basePath : `${basePath}${CONTACT_PATH}`
  return endpoint
}

const copyResponseHeaders = (upstream) => {
  const headers = new Headers({
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
  })

  for (const name of [
    'content-language',
    'content-type',
    'retry-after',
    'x-ratelimit-limit',
    'x-ratelimit-remaining',
    'x-ratelimit-reset',
  ]) {
    const value = upstream.headers.get(name)
    if (value !== null) headers.set(name, value)
  }

  return headers
}

export const handleContactFeedback = async (request, env) => {
  if (request.method !== 'POST') {
    return jsonError(405, 'Method not allowed.', { Allow: 'POST' })
  }

  const contentType = request.headers.get('content-type')?.split(';', 1)[0].trim().toLowerCase()
  if (contentType !== 'application/json') {
    return jsonError(415, 'Content-Type must be application/json.')
  }

  let body
  try {
    body = await readRequestBody(request)
  } catch (error) {
    if (error instanceof BodyTooLargeError) {
      return jsonError(413, 'Request body is too large.')
    }
    return jsonError(400, 'Invalid request body.')
  }

  let payload
  try {
    payload = JSON.parse(body)
  } catch {
    return jsonError(400, 'Request body must contain valid JSON.')
  }

  if (payload === null || Array.isArray(payload) || typeof payload !== 'object') {
    return jsonError(400, 'Request body must be a JSON object.')
  }

  const apiUrl = typeof env.CONTACT_API_URL === 'string' ? env.CONTACT_API_URL.trim() : ''
  const apiKey = typeof env.CONTACT_API_KEY === 'string' ? env.CONTACT_API_KEY.trim() : ''
  if (!apiUrl || !apiKey) {
    return jsonError(503, 'Contact service is unavailable.')
  }

  let endpoint
  try {
    endpoint = getContactEndpoint(apiUrl)
  } catch {
    return jsonError(503, 'Contact service is unavailable.')
  }

  let upstream
  try {
    upstream = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-API-Key': apiKey,
      },
      body: JSON.stringify(payload),
      redirect: 'manual',
    })
  } catch {
    return jsonError(502, 'Contact service is unavailable.')
  }

  return new Response(upstream.body, {
    status: upstream.status,
    statusText: upstream.statusText,
    headers: copyResponseHeaders(upstream),
  })
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    if (url.pathname === CONTACT_PATH) return handleContactFeedback(request, env)
    return env.ASSETS.fetch(request)
  },
}
