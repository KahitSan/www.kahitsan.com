import { expect, test } from './fixtures'

test.describe('Contact form', () => {
  test('focuses and describes missing reply and message fields', async ({ page }) => {
    await page.goto('/contact')

    await page.getByRole('button', { name: 'Send Message' }).click()
    const email = page.getByLabel('Email')
    await expect(email).toBeFocused()
    await expect(email).toHaveAttribute('aria-invalid', 'true')
    await expect(
      page.getByText('Enter an email address or phone number so we can reply.')
    ).toBeVisible()

    await email.fill('hello@example.com')
    await page.getByRole('button', { name: 'Send Message' }).click()
    const message = page.getByLabel('Message *')
    await expect(message).toBeFocused()
    await expect(message).toHaveAttribute('aria-invalid', 'true')
    await expect(page.getByText('Enter a message before sending this form.')).toBeVisible()
  })

  test('submits through same-origin contact endpoint', async ({ page }) => {
    let submittedPayload: unknown
    await page.route('**/api/contact-feedback', async (route) => {
      const request = route.request()
      submittedPayload = request.postDataJSON()
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ ok: true }),
      })
    })

    await page.goto('/contact')
    await page.getByLabel('Email').fill('hello@example.com')
    await page.getByLabel('Message *').fill('Hello from the website')
    await page.getByRole('button', { name: 'Send Message' }).click()

    await expect(page.getByRole('status')).toContainText('Message sent')
    assertSameOriginPayload(submittedPayload)
  })
})

const assertSameOriginPayload = (payload: unknown) => {
  expect(payload).toEqual({
    email: 'hello@example.com',
    message: 'Hello from the website',
  })
}
