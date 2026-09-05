import { test, expect } from './fixtures'
import { expectResponsivePicture } from './imageAssertions'

test.describe('Navigation', () => {
  test('desktop navigation exposes company offerings', async ({ page, viewport }) => {
    if ((viewport?.width ?? 1280) < 992) test.skip()
    await page.goto('/')
    const nav = page.getByRole('navigation', { name: 'Main navigation' })
    await expect(nav.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/')
    await expect(nav.getByRole('link', { name: 'Coworking' })).toHaveAttribute('href', '/coworking')
    await expect(nav.getByRole('link', { name: /Hilinga/ })).toHaveAttribute(
      'href',
      'https://www.hilinga.com'
    )
    await expect(nav.getByRole('link', { name: 'News' })).toHaveAttribute('href', '/announcements')
    await expect(nav.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/contact')
  })

  test('logo links home', async ({ page }) => {
    await page.goto('/community')
    await page.locator('header img[alt="KahitSan Solutions Corp."]').click()
    await expect(page).toHaveURL('/')
  })

  test('header logo uses shared responsive corporate variants', async ({ page }) => {
    await page.goto('/')
    await expectResponsivePicture(page.locator('header img[alt="KahitSan Solutions Corp."]'), {
      widths: [132, 226, 263, 452],
      sizes: '132px',
      metadataWidth: 452,
    })
  })

  test('mobile navigation uses native-style bottom tabs', async ({ page, viewport }) => {
    if ((viewport?.width ?? 1280) >= 768) test.skip()
    await page.goto('/')
    const nav = page.getByRole('navigation', { name: 'Mobile navigation' })
    await expect(nav).toBeVisible()
    await expect(nav.getByRole('link', { name: 'Home' })).toBeVisible()
    await expect(nav.getByRole('link', { name: 'Coworking' })).toBeVisible()
    const hilingaLink = nav.getByRole('link', { name: /Hilinga.*opens in a new tab/i })
    await expect(hilingaLink).toBeVisible()
    await expect(hilingaLink).toHaveAttribute('target', '_blank')
    await expect(hilingaLink.locator('svg.lucide-external-link')).toBeVisible()
    await expect(nav.getByRole('link', { name: 'Community' })).toBeVisible()
    await expect(nav.getByRole('button', { name: 'More' })).toBeVisible()
  })

  test('mobile More sheet exposes company pages', async ({ page, viewport }) => {
    if ((viewport?.width ?? 1280) >= 768) test.skip()
    await page.goto('/')
    const moreButton = page.getByRole('button', { name: 'More' })
    await moreButton.click()
    const dialog = page.getByRole('dialog', { name: 'More menu' })
    const nav = page.getByRole('navigation', { name: 'More navigation' })
    await expect(dialog).toHaveJSProperty('open', true)
    await expect(page.locator('html')).toHaveCSS('overflow', 'hidden')
    await expect(dialog.getByRole('button', { name: 'Close more menu' })).toBeFocused()
    await expect(nav.getByRole('link', { name: /News/ })).toBeVisible()
    await expect(nav.getByRole('link', { name: /About/ })).toBeVisible()
    await expect(nav.getByRole('link', { name: /Contact/ })).toBeVisible()

    await page.keyboard.press('Shift+Tab')
    await expect(nav.getByRole('link', { name: /Contact/ })).toBeFocused()
    await page.keyboard.press('Tab')
    await expect(dialog.getByRole('button', { name: 'Close more menu' })).toBeFocused()

    await page.keyboard.press('Escape')
    await expect(dialog).toBeHidden()
    await expect(page.locator('html')).not.toHaveCSS('overflow', 'hidden')
    await expect(moreButton).toBeFocused()
  })

  test('tablet navigation exposes every company destination', async ({ page }) => {
    await page.setViewportSize({ width: 900, height: 900 })
    await page.goto('/')

    await page.locator('summary[aria-label="Navigation menu"]').click()
    const nav = page.getByRole('navigation', { name: 'Tablet navigation' })

    await expect(nav).toBeVisible()
    await expect(nav.getByRole('link', { name: 'Coworking' })).toHaveAttribute('href', '/coworking')
    await expect(nav.getByRole('link', { name: /Hilinga/ })).toHaveAttribute(
      'href',
      'https://www.hilinga.com'
    )
    await expect(nav.getByRole('link', { name: 'News' })).toHaveAttribute('href', '/announcements')
    await expect(nav.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/contact')
  })

  test('navigation switches at its content-fit breakpoint without JavaScript', async ({
    browser,
  }) => {
    for (const expectation of [
      { width: 991, desktopVisible: false, tabletVisible: true },
      { width: 992, desktopVisible: true, tabletVisible: false },
    ]) {
      const context = await browser.newContext({
        baseURL: 'http://localhost:3458',
        javaScriptEnabled: false,
        viewport: { width: expectation.width, height: 800 },
      })
      const page = await context.newPage()
      await page.goto('/')

      const desktopNav = page.getByRole('navigation', { name: 'Main navigation' })
      const tabletButton = page.locator('summary[aria-label="Navigation menu"]')
      if (expectation.desktopVisible) {
        await expect(desktopNav).toBeVisible()
      } else {
        await expect(desktopNav).toBeHidden()
      }
      if (expectation.tabletVisible) {
        await expect(tabletButton).toBeVisible()
        await tabletButton.click()
        await expect(page.getByRole('navigation', { name: 'Tablet navigation' })).toBeVisible()
      } else {
        await expect(tabletButton).toBeHidden()
      }

      const widths = await page.evaluate(() => ({
        client: document.documentElement.clientWidth,
        scroll: document.documentElement.scrollWidth,
      }))
      expect(widths.scroll).toBe(widths.client)
      await context.close()
    }
  })

  test('News navigation stays active on article pages', async ({ page, viewport }) => {
    await page.goto('/announcement/pricing-update-nov-2025')

    if ((viewport?.width ?? 1280) >= 992) {
      await expect(
        page
          .getByRole('navigation', { name: 'Main navigation' })
          .getByRole('link', { name: 'News' })
      ).toHaveAttribute('aria-current', 'page')
      return
    }

    if ((viewport?.width ?? 1280) < 768) {
      await expect(
        page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('button', {
          name: 'More',
        })
      ).toHaveAttribute('aria-current', 'page')
    }
  })

  test('about page prioritizes contact and keeps Facebook secondary', async ({ page }) => {
    await page.goto('/about')
    const section = page.locator('section').filter({
      has: page.getByRole('heading', { name: 'Talk to the team' }),
    })
    const contactLink = section.getByRole('link', { name: 'Contact KahitSan' })
    const facebookLink = section.getByRole('link', { name: /Message on Facebook/ })

    await expect(contactLink).toHaveAttribute('href', '/contact')
    await expect(contactLink).toHaveClass(/bg-amber-600\/20/)
    await expect(facebookLink).toHaveAttribute('href', 'https://www.facebook.com/KahitSan')
    await expect(facebookLink).toHaveClass(/bg-slate-600\/20/)
  })

  test('footer and About page credit the website creator', async ({ page }) => {
    await page.goto('/')
    const creditLink = page.getByRole('link', { name: 'Luis Edward M. Miranda' })
    await expect(creditLink).toHaveAttribute('href', '/about#website-credit')

    await creditLink.click()
    await expect(page).toHaveURL('/about#website-credit')
    const creditSection = page.locator('#website-credit')
    await expect(creditSection.getByRole('heading', { name: 'Website credit' })).toBeVisible()
    await expect(creditSection).toContainText(
      'Luis Edward M. Miranda designed and developed this website for KahitSan Solutions Corp.'
    )
  })

  test('structured data identifies company publisher and website creator', async ({ page }) => {
    await page.goto('/')
    const structuredData = await page.locator('script[type="application/ld+json"]').textContent()
    const graph = JSON.parse(structuredData ?? '{}')['@graph'] as Array<{
      '@type': string
      '@id': string
      name?: string
      creator?: { '@id': string }
      publisher?: { '@id': string }
    }>

    const person = graph.find((entity) => entity['@type'] === 'Person')
    const website = graph.find((entity) => entity['@type'] === 'WebSite')
    expect(person?.name).toBe('Luis Edward M. Miranda')
    expect(website?.creator?.['@id']).toBe(person?.['@id'])
    expect(website?.publisher?.['@id']).toBe('https://www.kahitsan.com/#organization')
  })
})

test.describe('404 Page', () => {
  test('shows corporate not found page', async ({ page }) => {
    await page.goto('/404')
    await expect(page.getByText('404')).toBeVisible()
    await expect(page.getByText('Page Not Found')).toBeVisible()
    const logo = page.locator('img[alt="KahitSan Solutions Corp. logo"]')
    await expectResponsivePicture(logo, {
      widths: [132, 226, 263, 452],
      sizes: '226px',
      metadataWidth: 452,
    })
  })
})
