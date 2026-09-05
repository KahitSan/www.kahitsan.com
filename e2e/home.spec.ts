import { test, expect } from './fixtures'
import { expectResponsivePicture } from './imageAssertions'

const homeEntranceSizes =
  '(max-width: 767px) calc(100vw - 50px), (max-width: 1023px) calc(100vw - 98px), (max-width: 1279px) calc(50vw - 82px), 558px'
const homeInnerSizes =
  '(max-width: 767px) calc(100vw - 50px), (max-width: 1023px) calc(100vw - 98px), (max-width: 1279px) calc(58.333vw - 84.667px), 662px'

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('presents KahitSan as company behind two offerings', async ({ page }) => {
    await expect(page).toHaveTitle(/KahitSan Solutions Corp.*Coworking and Hilinga/)
    await expect(page.getByRole('heading', { name: 'KahitSan Solutions Corp.' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'KahitSan Coworking' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Hilinga' })).toBeVisible()
  })

  test('links to coworking and Hilinga', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Explore Coworking' })).toHaveAttribute(
      'href',
      '/coworking'
    )
    await expect(page.getByRole('link', { name: /Visit Hilinga/ })).toHaveAttribute(
      'href',
      'https://www.hilinga.com'
    )
  })

  test('keeps current coworking rates visible', async ({ page }) => {
    await expect(page.getByText('₱129 / 4 hours')).toBeVisible()
    await expect(page.getByText('₱189 / 4 hours')).toBeVisible()
    await expect(page.getByText('₱379 / 5 hours')).toBeVisible()
  })

  test('uses audited responsive images and generated dimensions', async ({ page }) => {
    await expectResponsivePicture(
      page.getByAltText('KahitSan Coworking entrance area on Panganiban Drive in Naga City'),
      {
        widths: [327, 558, 717, 925, 1116, 1303],
        sizes: homeEntranceSizes,
        metadataWidth: 1303,
      }
    )
    await expectResponsivePicture(
      page.getByAltText('Desks and ergonomic chairs in the KahitSan Coworking inner area'),
      {
        widths: [327, 662, 717, 925, 1324, 1434, 1850],
        sizes: homeInnerSizes,
        metadataWidth: 1850,
      }
    )
    await expectResponsivePicture(page.getByAltText('Hilinga logo'), {
      widths: [72, 144],
      sizes: '(max-width: 767px) 56px, 72px',
      metadataWidth: 144,
    })

    for (const logo of [
      {
        key: 'aces',
        widths: [80, 160],
        sizes: '(max-width: 767px) 54px, 70px',
        metadataWidth: 160,
      },
      {
        key: 'uapsa',
        widths: [80, 160],
        sizes: '(max-width: 767px) 50px, 65px',
        metadataWidth: 160,
      },
      {
        key: 'uapga',
        widths: [93, 185],
        sizes: '(max-width: 767px) 72px, 93px',
        metadataWidth: 185,
      },
      {
        key: 'ateneo',
        widths: [79, 157],
        sizes: '(max-width: 767px) 61px, 79px',
        metadataWidth: 157,
      },
    ]) {
      await expectResponsivePicture(
        page.locator(`[data-organization-card] img[data-logo="${logo.key}"]`),
        logo
      )
    }
  })

  test('aligns organization logo and text rows without clipping UAPGA', async ({ page }) => {
    const cards = page.locator('[data-organization-card]')
    await expect(cards).toHaveCount(4)
    await cards.first().scrollIntoViewIfNeeded()
    await expect(cards.locator('img')).toHaveCount(4)
    await page.waitForFunction(() =>
      [...document.querySelectorAll<HTMLImageElement>('[data-organization-card] img')].every(
        (image) => image.complete && image.naturalWidth > 0
      )
    )

    const geometry = await cards.evaluateAll((elements) =>
      elements.map((card) => {
        const bounds = (element: Element) => {
          const rect = element.getBoundingClientRect()
          return {
            top: rect.top,
            right: rect.right,
            bottom: rect.bottom,
            left: rect.left,
            width: rect.width,
          }
        }
        const image = card.querySelector<HTMLImageElement>('.org-logo')!

        return {
          cardTop: card.getBoundingClientRect().top,
          frame: bounds(card.querySelector('.org-logo-wrap')!),
          frameBorderWidth: getComputedStyle(card.querySelector('.org-logo-wrap')!).borderWidth,
          textTop: card.querySelector('[data-organization-text]')!.getBoundingClientRect().top,
          relationshipBottom: card.querySelector('p')!.getBoundingClientRect().bottom,
          image: bounds(image),
          logo: image.dataset.logo,
        }
      })
    )

    const rows: (typeof geometry)[] = []
    for (const card of geometry) {
      const row = rows.find((candidate) => Math.abs(candidate[0].cardTop - card.cardTop) < 1)
      if (row) row.push(card)
      else rows.push([card])
    }

    for (const row of rows) {
      for (const key of ['frame', 'textTop', 'relationshipBottom'] as const) {
        const values = row.map((card) => (key === 'frame' ? card.frame.top : card[key]))
        expect(Math.max(...values) - Math.min(...values)).toBeLessThanOrEqual(1)
      }
    }

    expect(geometry.every((card) => card.frameBorderWidth === '0px')).toBe(true)

    const firstLogo = cards.first().locator('.org-logo')
    const defaultOpacity = Number(
      await firstLogo.evaluate((logo) => getComputedStyle(logo).opacity)
    )
    await cards.first().hover()
    await expect(firstLogo).toHaveCSS('opacity', '1')
    expect(defaultOpacity).toBeLessThan(1)

    const uapga = geometry.find((card) => card.logo === 'uapga')!
    expect(uapga.image.width / uapga.frame.width).toBeGreaterThan(0.88)
    expect(uapga.image.left).toBeGreaterThanOrEqual(uapga.frame.left)
    expect(uapga.image.top).toBeGreaterThanOrEqual(uapga.frame.top)
    expect(uapga.image.right).toBeLessThanOrEqual(uapga.frame.right)
    expect(uapga.image.bottom).toBeLessThanOrEqual(uapga.frame.bottom)
  })

  test('does not advertise speculative services', async ({ page }) => {
    await expect(page.getByText('Future Services')).toHaveCount(0)
    await expect(page.getByText('Business Registration')).toHaveCount(0)
    await expect(page.getByText('Event Management')).toHaveCount(0)
    await expect(page.getByText('Custom Software')).toHaveCount(0)
  })

  test('shows corporate footer', async ({ page }) => {
    const footer = page.locator('footer')
    await expect(footer).toContainText('KahitSan Solutions Corp.')
    await expect(footer.getByRole('link', { name: 'Coworking' })).toBeVisible()
    await expect(footer.getByRole('link', { name: /Hilinga/ })).toBeVisible()
  })
})
