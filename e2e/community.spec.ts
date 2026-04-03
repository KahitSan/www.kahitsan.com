import { test, expect } from '@playwright/test'

test.describe('Community Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/community')
  })

  test('has correct page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Community Engagement - KahitSan/)
  })

  test('shows Community Engagement heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Community Engagement/i })).toBeVisible()
  })

  test('shows Featured Events section', async ({ page }) => {
    await expect(page.getByText('Featured').first()).toBeVisible()
    await expect(page.getByText('Events').first()).toBeVisible()
  })

  test('shows CE BLAZE event', async ({ page }) => {
    await expect(page.getByText('CE BLAZE')).toBeVisible()
    await expect(page.getByText('BISCAST Pavilion')).toBeVisible()
  })

  test('shows Partnerships section with ACES', async ({ page }) => {
    await expect(page.getByText('Partnerships', { exact: true })).toBeVisible()
    await expect(page.getByText('BISCAST Association of Civil Engineering Students')).toBeVisible()
    await expect(page.getByText('20% discount').first()).toBeVisible()
  })

  test('shows UAPSA BISCAST partnership', async ({ page }) => {
    await expect(page.getByText('UAPSA BISCAST Chapter')).toBeVisible()
  })

  test('shows Sponsorships section with Ateneo', async ({ page }) => {
    await expect(page.getByText('Sponsorships')).toBeVisible()
    await expect(page.getByText('Ateneo De Naga University').first()).toBeVisible()
  })

  test('shows Host Your Event CTA', async ({ page }) => {
    await expect(page.getByText('Host Your Event')).toBeVisible()
    await expect(page.getByRole('link', { name: 'Get in Touch' })).toBeVisible()
  })
})
