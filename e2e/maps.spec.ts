import { test, expect } from './fixtures'

const embedUrl =
  'https://maps.google.com/maps?q=KahitSan+Coworking+Space,+Panganiban+Drive,+Naga+City,+Philippines&t=&z=17&ie=UTF8&iwloc=&output=embed'
const externalMapUrl = 'https://share.google/TFC9YSJ3R8ExKdnUH'

const mapCases = [
  {
    name: 'home',
    route: '/',
    testId: 'home-location-map',
    iframeTitle: 'KahitSan Solutions Corp. main office at KahitSan Coworking',
  },
  {
    name: 'coworking',
    route: '/coworking',
    testId: 'coworking-location-map',
    iframeTitle: 'KahitSan Coworking Space location',
  },
] as const

const isGoogleMapsRequest = (url: string) => {
  const parsedUrl = new URL(url)

  return (
    parsedUrl.hostname === 'maps.google.com' ||
    parsedUrl.hostname === 'maps.googleapis.com' ||
    parsedUrl.hostname === 'maps.gstatic.com' ||
    (parsedUrl.hostname === 'www.google.com' && parsedUrl.pathname.startsWith('/maps'))
  )
}

test.describe('Click-to-load maps', () => {
  for (const mapCase of mapCases) {
    test(`${mapCase.name} loads Google Maps only after explicit click`, async ({ page }) => {
      const googleMapsRequests: string[] = []
      page.on('request', (request) => {
        if (isGoogleMapsRequest(request.url())) googleMapsRequests.push(request.url())
      })
      await page.route('https://maps.google.com/**', async (route) => {
        await route.fulfill({
          status: 200,
          contentType: 'text/html',
          body: '<!doctype html><html><body>Interactive map test response</body></html>',
        })
      })

      await page.goto(mapCase.route)
      await page.waitForLoadState('networkidle')

      const map = page.getByTestId(mapCase.testId)
      const loadButton = map.getByRole('button', { name: 'Load interactive map' })

      await expect(map).toHaveAttribute('data-map-state', 'idle')
      await expect(map.locator('iframe')).toHaveCount(0)
      await expect(map.getByText('KahitSan Coworking, Panganiban Drive')).toBeVisible()
      await expect(
        map.getByText('Panganiban Drive, Naga City, Camarines Sur, Philippines')
      ).toBeVisible()
      await expect(loadButton).toBeVisible()
      const mapPinContainer = map.locator('svg.lucide-map-pin').first().locator('..')
      await expect(mapPinContainer).toHaveCSS('border-width', '0px')
      await expect(mapPinContainer).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
      await expect(page.getByRole('link', { name: 'Open in Google Maps' })).toHaveAttribute(
        'href',
        externalMapUrl
      )
      expect(googleMapsRequests).toEqual([])

      const mapRequest = page.waitForRequest((request) => isGoogleMapsRequest(request.url()))
      await loadButton.click()
      await mapRequest

      await expect(map).toHaveAttribute('data-map-state', 'loaded')
      await expect(map.getByRole('button', { name: 'Load interactive map' })).toHaveCount(0)
      const iframe = map.getByTitle(mapCase.iframeTitle)
      await expect(iframe).toHaveAttribute('src', embedUrl)
      await expect(iframe).toBeFocused()
      expect(googleMapsRequests.some((url) => new URL(url).hostname === 'maps.google.com')).toBe(
        true
      )
    })
  }
})

test.describe('Map fallback without JavaScript', () => {
  test.use({ javaScriptEnabled: false })

  for (const mapCase of mapCases) {
    test(`${mapCase.name} keeps directions available without JavaScript`, async ({ page }) => {
      const googleMapsRequests: string[] = []
      page.on('request', (request) => {
        if (isGoogleMapsRequest(request.url())) googleMapsRequests.push(request.url())
      })

      await page.goto(mapCase.route)

      await expect(page.getByRole('link', { name: 'Open in Google Maps' })).toHaveAttribute(
        'href',
        externalMapUrl
      )
      await expect(page.getByTestId(mapCase.testId).locator('iframe')).toHaveCount(0)
      await expect(page.getByText(/Interactive map requires JavaScript/)).toBeVisible()
      expect(googleMapsRequests).toEqual([])
    })
  }
})
