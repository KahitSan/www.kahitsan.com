const XSS_PATTERNS = [
  /<script[\s\S]*?>[\s\S]*?<\/script>/gi,
  /<iframe[\s\S]*?>/gi,
  /javascript:/gi,
  /on\w+\s*=/gi,
  /<img[\s\S]*?onerror[\s\S]*?>/gi,
  /<svg[\s\S]*?onload[\s\S]*?>/gi,
  /eval\s*\(/gi,
  /expression\s*\(/gi,
  /<embed[\s\S]*?>/gi,
  /<object[\s\S]*?>/gi,
  /vbscript:/gi,
  /data:text\/html/gi,
  /document\.cookie/gi,
  /document\.write/gi,
]

export function detectXSS(url: string): boolean {
  if (!url) return false
  let decodedUrl = url
  try {
    for (let i = 0; i < 3; i++) {
      const decoded = decodeURIComponent(decodedUrl)
      if (decoded === decodedUrl) break
      decodedUrl = decoded
    }
  } catch {
    return true
  }
  for (const pattern of XSS_PATTERNS) {
    if (pattern.test(decodedUrl)) return true
  }
  return false
}

const XSS_MESSAGES = [
  "Nice try! But we've seen that trick before. 🕵️",
  "Impressive attempt! Unfortunately, we're not running a hacking workshop today. 🎭",
  "We see what you did there... and we're not impressed. 🤨",
  "Ah, a wild script tag appears! It's not very effective... 🛡️",
  "Your JavaScript won't run here, but our security will. 🚨",
]

export function getXSSMessage(): string {
  return XSS_MESSAGES[Math.floor(Math.random() * XSS_MESSAGES.length)]
}
