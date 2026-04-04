import { test as base, expect } from '@playwright/test'

/**
 * Extended test fixture that captures browser console errors.
 * Any uncaught JS error (like SolidJS template/hydration failures)
 * will cause the test to fail, even if the assertion itself passes.
 */
export const test = base.extend<{ consoleErrors: string[] }>({
  consoleErrors: async ({ page }, use) => {
    const errors: string[] = []

    page.on('pageerror', (error) => {
      errors.push(error.message)
    })

    await use(errors)

    expect(errors, 'Page should have no JS errors').toEqual([])
  },
})

export { expect }
