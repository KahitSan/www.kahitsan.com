import { test, expect } from './fixtures'

test.describe('KahitSan News', () => {
  test('lists current and retained Markdown-driven pricing notices', async ({ page }) => {
    await page.goto('/announcements')
    await expect(page).toHaveTitle(/KahitSan News/)
    await expect(page.getByRole('heading', { name: 'KahitSan News' })).toBeVisible()
    await expect(
      page.getByRole('heading', { name: 'Pricing Update: September 2026' })
    ).toBeVisible()
    await expect(page.getByText('Published', { exact: true })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Pricing Update: November 2025' })).toBeVisible()
    await expect(page.getByText('Superseded', { exact: true })).toBeVisible()
  })

  test('renders the September 2026 pricing update from Markdown', async ({ page }) => {
    await page.goto('/announcement/pricing-update-september-2026')
    await expect(page).toHaveTitle(/Pricing Update: September 2026/)
    await expect(
      page.getByRole('heading', { name: 'Pricing Update: September 2026' })
    ).toBeVisible()
    await expect(
      page.getByRole('heading', { name: 'Pricing effective September 1, 2026' })
    ).toBeVisible()
    await expect(page.getByText('September 1, 2026', { exact: true })).toHaveCount(2)
    await expect(page.getByRole('table').first()).toContainText('₱129')
    await expect(page.getByRole('table').nth(3)).toContainText('₱10,499')
    await expect(page.getByRole('link', { name: 'KahitSan Coworking page' })).toHaveAttribute(
      'href',
      '/coworking'
    )
  })

  test('renders the retained notice from Markdown', async ({ page }) => {
    await page.goto('/announcement/pricing-update-nov-2025')
    await expect(page).toHaveTitle(/Pricing Update: November 2025/)
    await expect(page.getByRole('heading', { name: 'Pricing Update: November 2025' })).toBeVisible()
    await expect(
      page.getByRole('heading', { name: 'Pricing effective November 1, 2025' })
    ).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Entrance Area' })).toBeVisible()
    await expect(page.getByRole('table').first()).toContainText('₱118')
    await expect(page.getByRole('link', { name: /current coworking rates/i })).toHaveAttribute(
      'href',
      '/coworking'
    )
  })

  test('uses full table width on desktop and preserves mobile scrolling', async ({
    page,
    viewport,
  }) => {
    await page.goto('/announcement/pricing-update-nov-2025')
    const table = page.getByRole('table').first()
    const scrollRegion = page.locator('.ks-news-table-scroll').first()

    const geometry = await table.evaluate((element) => {
      const firstRow = element.querySelector('tr')
      const tableBounds = element.getBoundingClientRect()
      const rowBounds = firstRow?.getBoundingClientRect()
      return {
        clientWidth: element.clientWidth,
        scrollWidth: element.scrollWidth,
        tableRight: tableBounds.right,
        rowRight: rowBounds?.right ?? 0,
      }
    })

    if ((viewport?.width ?? 1280) >= 768) {
      expect(Math.abs(geometry.tableRight - geometry.rowRight)).toBeLessThanOrEqual(2)
      return
    }

    const scrollGeometry = await scrollRegion.evaluate((element) => ({
      clientWidth: element.clientWidth,
      scrollWidth: element.scrollWidth,
    }))
    expect(scrollGeometry.scrollWidth).toBeGreaterThan(scrollGeometry.clientWidth)
    await scrollRegion.focus()
    await expect(scrollRegion).toBeFocused()
  })
})
