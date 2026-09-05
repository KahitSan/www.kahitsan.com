import process from 'node:process'

export const lighthouseCategories = ['performance', 'accessibility', 'best-practices', 'seo']

const profiles = {
  mobile: {
    formFactor: 'mobile',
    throttling: {
      rttMs: 150,
      throughputKbps: 1638.4,
      requestLatencyMs: 562.5,
      downloadThroughputKbps: 1474.56,
      uploadThroughputKbps: 675,
      cpuSlowdownMultiplier: 4,
    },
    screenEmulation: {
      mobile: true,
      width: 412,
      height: 823,
      deviceScaleFactor: 1.75,
      disabled: false,
    },
    emulatedUserAgent:
      'Mozilla/5.0 (Linux; Android 11; moto g power (2022)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Mobile Safari/537.36',
  },
  desktop: {
    formFactor: 'desktop',
    throttling: {
      rttMs: 40,
      throughputKbps: 10240,
      requestLatencyMs: 0,
      downloadThroughputKbps: 0,
      uploadThroughputKbps: 0,
      cpuSlowdownMultiplier: 1,
    },
    screenEmulation: {
      mobile: false,
      width: 1350,
      height: 940,
      deviceScaleFactor: 1,
      disabled: false,
    },
    emulatedUserAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
  },
}

export const createLighthouseConfig = (formFactor = 'mobile') => {
  const profile = profiles[formFactor]
  if (!profile) throw new Error(`Unsupported Lighthouse form factor: ${formFactor}`)

  return {
    extends: 'lighthouse:default',
    settings: {
      ...profile,
      onlyCategories: lighthouseCategories,
      throttlingMethod: 'simulate',
      locale: 'en-US',
      maxWaitForFcp: 30000,
      maxWaitForLoad: 45000,
      disableFullPageScreenshot: true,
      // These diagnostics give misleading failures on a local HTTP/1 static server or headless Chrome.
      skipAudits: ['insights/modern-http-insight', 'bf-cache'],
    },
  }
}

export default createLighthouseConfig(process.env.LIGHTHOUSE_FORM_FACTOR ?? 'mobile')
