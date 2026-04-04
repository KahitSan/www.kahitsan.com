import { test, expect } from './fixtures'

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

  test('shows Explore Solutions and View Community buttons', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Explore Solutions' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'View Community' })).toBeVisible()
  })

  test('shows services section', async ({ page }) => {
    const services = page.locator('section#services')
    await expect(services).toBeVisible()
    await expect(services).toContainText('Coworking Spaces')
    await expect(services).toContainText('Software')
  })

  test('shows coworking spaces bento grid', async ({ page }) => {
    await expect(page.getByText('Entrance Area')).toBeVisible()
    await expect(page.getByText('Inner Area')).toBeVisible()
    await expect(page.getByText('Call Booths')).toBeVisible()
  })

  test('shows future services cards', async ({ page }) => {
    await expect(page.getByText('Business Registration')).toBeVisible()
    await expect(page.getByText('Event Management')).toBeVisible()
    await expect(page.getByText('Custom Software')).toBeVisible()
  })

  test('shows connect section with social links', async ({ page }) => {
    const connect = page.locator('section#connect')
    await expect(connect).toBeVisible()
    await expect(connect).toContainText('Connect')
    await expect(connect.getByRole('link', { name: 'Facebook', exact: true })).toBeVisible()
    await expect(connect.getByRole('link', { name: 'Instagram', exact: true })).toBeVisible()
  })

  test('shows location status', async ({ page }) => {
    await expect(page.getByText('Panganiban Drive — Open')).toBeVisible()
  })

  test('shows navigation header', async ({ page }) => {
    const header = page.locator('header')
    await expect(header).toBeVisible()
    await expect(header).toContainText('Solutions')
    await expect(header).toContainText('Community')
    await expect(header).toContainText('Announcements')
  })

  test('shows footer', async ({ page }) => {
    const footer = page.locator('footer')
    await expect(footer).toBeVisible()
    await expect(footer).toContainText('KahitSan Solutions Corp')
  })

  test('navigate to solutions via button', async ({ page }) => {
    await page.getByRole('link', { name: 'Explore Solutions' }).click()
    await expect(page).toHaveURL('/solutions')
  })
})
