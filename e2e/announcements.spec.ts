import { test, expect } from '@playwright/test'

test.describe('Announcements Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/announcements')
  })

  test('has correct page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Announcements - KahitSan/)
  })

  test('shows Announcements heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Announcements' })).toBeVisible()
  })

  test('shows pricing update announcement', async ({ page }) => {
    await expect(page.getByText('Pricing Update - Effective November 1, 2025')).toBeVisible()
    await expect(page.getByText('November 1, 2025').first()).toBeVisible()
  })

  test('announcement is clickable', async ({ page }) => {
    await page.getByText('Pricing Update - Effective November 1, 2025').click()
    await expect(page).toHaveURL('/announcement/pricing-update-nov-2025')
  })

  test('screenshot - announcements page', async ({ page }) => {
    await expect(page).toHaveScreenshot('announcements.png', { fullPage: true })
  })
})

test.describe('Pricing Update Announcement', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/announcement/pricing-update-nov-2025')
  })

  test('has correct page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Pricing Update - November 2025 - KahitSan/)
  })

  test('shows pricing update heading', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: /Pricing Update - Effective November 1, 2025/ })
    ).toBeVisible()
  })

  test('shows pricing tables', async ({ page }) => {
    await expect(page.getByText('Entrance Area').first()).toBeVisible()
    await expect(page.getByText('Inner Area').first()).toBeVisible()
    await expect(page.getByText('Call Booth').first()).toBeVisible()
    await expect(page.getByText('All-Access Membership').first()).toBeVisible()
  })

  test('shows Why This Change section', async ({ page }) => {
    await expect(page.getByText('Why This Change?')).toBeVisible()
    await expect(page.getByText('Hasten KahitSan Development')).toBeVisible()
  })

  test('screenshot - pricing update announcement', async ({ page }) => {
    await expect(page).toHaveScreenshot('pricing-update-announcement.png', { fullPage: true })
  })
})
