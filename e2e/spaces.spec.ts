import { test, expect } from '@playwright/test'

test.describe('Spaces Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/spaces')
  })

  test('has correct page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Spaces - KahitSan Coworking/)
  })

  test('shows Our Spaces heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Our Spaces/i })).toBeVisible()
  })

  test('shows space selector dropdown', async ({ page }) => {
    // Dropdown should show Panganiban Drive by default
    await expect(page.locator('[data-dropdown-container]')).toBeVisible()
    await expect(page.locator('[data-dropdown-container]')).toContainText('Panganiban Drive')
  })

  test('shows floor plan canvas', async ({ page }) => {
    await expect(page.locator('canvas')).toBeVisible()
  })

  test('shows zoom controls', async ({ page }) => {
    await expect(page.getByTitle('Zoom In')).toBeVisible()
    await expect(page.getByTitle('Zoom Out')).toBeVisible()
    await expect(page.getByTitle('Fit to Screen')).toBeVisible()
    await expect(page.getByTitle('Enter Fullscreen')).toBeVisible()
  })

  test('shows Show Pricing button', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Show Pricing' })).toBeVisible()
  })

  test('navigate to pricing from floor plan', async ({ page }) => {
    const btn = page.getByRole('button', { name: 'Show Pricing' })
    await btn.scrollIntoViewIfNeeded()
    await btn.click({ force: true })
    await expect(page).toHaveURL('/panganiban/pricing')
  })

  test('shows Diversion Road closed when selected', async ({ page }) => {
    // Open dropdown by clicking the trigger button inside the container
    await page.locator('[data-dropdown-container] button').first().click()
    // Select "Diversion Road" from the dropdown options
    await page.locator('[data-dropdown-container] button', { hasText: 'Diversion Road' }).last().click()
    await expect(page.getByText('Diversion Road is Currently Closed')).toBeVisible()
    await expect(page.getByRole('button', { name: 'View Panganiban Drive' })).toBeVisible()
  })
})

test.describe('Pricing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/panganiban/pricing')
  })

  test('has correct page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Panganiban - KahitSan Coworking/)
  })

  test('shows pricing cards', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Entrance Area', exact: true })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Inner Area', exact: true })).toBeVisible()
    await expect(page.getByText('Call Booth').first()).toBeVisible()
  })

  test('shows partner pricing', async ({ page }) => {
    // Partner prices
    await expect(page.getByText('₱79').first()).toBeVisible()
    await expect(page.getByText('₱119').first()).toBeVisible()
  })

  test('shows back button', async ({ page }) => {
    await expect(page.getByRole('button', { name: /Back to Floor Plan/i })).toBeVisible()
  })

  test('back button navigates to spaces', async ({ page }) => {
    await page.getByRole('button', { name: /Back to Floor Plan/i }).click()
    await expect(page).toHaveURL('/spaces')
  })

  test('shows Partner Organizations section', async ({ page }) => {
    await expect(page.getByText('Partner').first()).toBeVisible()
    await expect(page.getByText('Organizations').first()).toBeVisible()
  })
})
