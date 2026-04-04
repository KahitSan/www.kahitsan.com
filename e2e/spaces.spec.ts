import { test, expect } from './fixtures'

test.describe('Solutions Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/solutions')
  })

  test('has correct page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Solutions & Pricing - KahitSan Coworking/)
  })

  test('shows hero heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /workspaces/i })).toBeVisible()
  })

  test('shows pricing tier cards', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Entrance Area', exact: true })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Inner Area', exact: true })).toBeVisible()
    await expect(page.getByText('Call Booth').first()).toBeVisible()
  })

  test('shows advanced memberships section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Advanced Memberships/i })).toBeVisible()
    await expect(page.getByText('All-Access Membership').first()).toBeVisible()
    await expect(page.getByText('Whole Inner Area').first()).toBeVisible()
  })

  test('shows Partner Organizations section', async ({ page }) => {
    await expect(page.getByText('Partner Organizations')).toBeVisible()
  })
})
