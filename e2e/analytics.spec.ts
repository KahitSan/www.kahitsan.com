import { test, expect } from './fixtures'

const measurementId = 'G-V8DDGHSHDP'

test.describe('Google Analytics', () => {
  test('waits for interaction, loads once, and sends current page without duplication', async ({
    page,
  }) => {
    const tagManagerRequests: string[] = []

    await page.route('https://www.googletagmanager.com/**', async (route) => {
      tagManagerRequests.push(route.request().url())
      await route.fulfill({ status: 200, contentType: 'application/javascript', body: '' })
    })

    await page.goto('/')
    await page.waitForTimeout(1000)

    expect(tagManagerRequests).toEqual([])
    await expect(
      page.locator(
        'link[rel="preconnect"][href="https://www.googletagmanager.com"], link[rel="preconnect"][href="https://www.google-analytics.com"]'
      )
    ).toHaveCount(0)

    await page.getByRole('link', { name: 'Explore Coworking' }).click()
    await expect(page).toHaveURL('/coworking')
    await expect.poll(() => tagManagerRequests.length).toBe(1)

    await page.keyboard.press('Tab')
    await page.mouse.wheel(0, 200)
    await page.evaluate(() => {
      window.dispatchEvent(
        new CustomEvent('kahitsan:analytics-page-view', {
          detail: { pagePath: window.location.pathname },
        })
      )
    })
    await page.waitForTimeout(100)

    expect(tagManagerRequests).toHaveLength(1)

    const analyticsCommands = await page.evaluate(() => {
      const dataLayer =
        (window as Window & { dataLayer?: Array<ArrayLike<unknown>> }).dataLayer ?? []
      return dataLayer.map((entry) => Array.from(entry))
    })
    const configCommands = analyticsCommands.filter(([command]) => command === 'config')
    const pageViewPaths = analyticsCommands
      .filter(([command, event]) => command === 'event' && event === 'page_view')
      .map(([, , parameters]) => (parameters as { page_path: string }).page_path)

    expect(configCommands).toEqual([['config', measurementId, { send_page_view: false }]])
    expect(pageViewPaths).toEqual(['/', '/coworking'])
  })

  test('uses a conservative ten-second fallback', async ({ page }) => {
    const tagManagerRequests: string[] = []
    const startTime = new Date('2026-09-05T00:00:00Z')

    await page.clock.install({ time: startTime })
    await page.clock.pauseAt(startTime)
    await page.route('https://www.googletagmanager.com/**', async (route) => {
      tagManagerRequests.push(route.request().url())
      await route.fulfill({ status: 200, contentType: 'application/javascript', body: '' })
    })

    await page.goto('/', { waitUntil: 'domcontentloaded' })
    await page.clock.runFor(9999)
    expect(tagManagerRequests).toEqual([])

    await page.clock.runFor(1)
    await expect.poll(() => tagManagerRequests.length).toBe(1)
  })
})
