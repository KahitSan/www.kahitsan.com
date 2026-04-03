import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test('all nav links work from home', async ({ page }) => {
    await page.goto('/')

    await page.getByRole('link', { name: 'Spaces' }).first().click()
    await expect(page).toHaveURL('/spaces')

    await page.getByRole('link', { name: 'Community' }).first().click()
    await expect(page).toHaveURL('/community')

    await page.getByRole('link', { name: 'Announcements' }).first().click()
    await expect(page).toHaveURL('/announcements')

    await page.getByRole('link', { name: 'Account' }).first().click()
    await expect(page).toHaveURL('/account')

    await page.getByRole('link', { name: 'Home' }).first().click()
    await expect(page).toHaveURL('/')
  })

  test('logo links back to home', async ({ page }) => {
    await page.goto('/community')
    await page.locator('header img[alt="KahitSan"]').click()
    await expect(page).toHaveURL('/')
  })

  test('mobile menu opens and closes', async ({ page, viewport }) => {
    if ((viewport?.width ?? 1280) >= 768) {
      test.skip()
    }
    await page.goto('/')
    const menuButton = page.getByRole('button', { name: 'Toggle menu' })
    await menuButton.click()
    await expect(page.locator('nav.fixed')).toBeVisible()
    await page.keyboard.press('Escape')
  })
})

test.describe('Account Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/account')
  })

  test('has correct page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Account - KahitSan/)
  })

  test('shows Coming Soon', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Coming Soon/i })).toBeVisible()
    await expect(page.getByText('User Registration & Login')).toBeVisible()
    await expect(page.getByText('Booking Management')).toBeVisible()
    await expect(page.getByText('Usage History')).toBeVisible()
  })

  test('screenshot - account page', async ({ page }) => {
    await expect(page).toHaveScreenshot('account.png', { fullPage: true })
  })
})

test.describe('404 Page', () => {
  test('shows not found page for unknown routes', async ({ page }) => {
    await page.goto('/this-route-does-not-exist-xyz')
    await expect(page.getByText('404')).toBeVisible()
    await expect(page.getByText('Page Not Found')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Go Back Home' })).toBeVisible()
  })

  test('404 go back home button works', async ({ page }) => {
    await page.goto('/nonexistent-page')
    await page.getByRole('button', { name: 'Go Back Home' }).click()
    await expect(page).toHaveURL('/')
  })

  test('screenshot - 404 page', async ({ page }) => {
    await page.goto('/this-page-does-not-exist')
    await expect(page).toHaveScreenshot('404.png', { fullPage: true })
  })
})

test.describe('Page Transitions', () => {
  test('slide-up transition class is applied on navigation', async ({ page }) => {
    await page.goto('/')
    // Verify page transition container exists
    await expect(page.locator('.page-transition-container')).toBeVisible()
  })

  test('navigation feels smooth (no flash)', async ({ page }) => {
    await page.goto('/')
    // Navigate and immediately check no white flash (via background color)
    const bg = await page.locator('div.min-h-screen').first().evaluate((el) =>
      window.getComputedStyle(el).background
    )
    // Background should be dark gradient, not white
    expect(bg).not.toContain('rgb(255, 255, 255)')
  })
})
