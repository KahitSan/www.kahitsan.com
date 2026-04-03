import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('has correct page title', async ({ page }) => {
    await expect(page).toHaveTitle(/KahitSan - Coworking Space in Naga City/)
  })

  test('shows hero section with typing animation', async ({ page }) => {
    const hero = page.locator('section#hero')
    await expect(hero).toBeVisible()
    await expect(hero.locator('h1')).toContainText('Productivity starts')
  })

  test('shows Explore Spaces and View Community buttons', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Explore Spaces' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'View Community' })).toBeVisible()
  })

  test('shows services section with pricing info', async ({ page }) => {
    const services = page.locator('section#services')
    await expect(services).toBeVisible()
    await expect(services).toContainText('Coworking Spaces')
    await expect(services).toContainText('₱79')
    await expect(services).toContainText('Future Services')
  })

  test('shows connect section with social links', async ({ page }) => {
    const connect = page.locator('section#connect')
    await expect(connect).toBeVisible()
    await expect(connect).toContainText('Connect')
    await expect(page.getByRole('link', { name: 'Facebook' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Instagram' })).toBeVisible()
  })

  test('shows location status (Panganiban open, Diversion closed)', async ({ page }) => {
    const connect = page.locator('section#connect')
    await expect(connect).toContainText('Panganiban Drive - Open')
    await expect(connect).toContainText('Diversion Road - Closed')
  })

  test('shows navigation header', async ({ page }) => {
    const header = page.locator('header')
    await expect(header).toBeVisible()
    await expect(header).toContainText('Spaces')
    await expect(header).toContainText('Community')
    await expect(header).toContainText('Announcements')
  })

  test('shows footer', async ({ page }) => {
    const footer = page.locator('footer')
    await expect(footer).toBeVisible()
    await expect(footer).toContainText('KahitSan Solutions Corp')
  })

  test('navigate to spaces via button', async ({ page }) => {
    await page.getByRole('link', { name: 'Explore Spaces' }).click()
    await expect(page).toHaveURL('/spaces')
  })

  test('screenshot - home page', async ({ page }) => {
    await page.waitForTimeout(500) // wait for typing animation
    await expect(page).toHaveScreenshot('home.png', { fullPage: true })
  })
})
