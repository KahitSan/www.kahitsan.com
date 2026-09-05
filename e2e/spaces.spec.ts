import { test, expect } from './fixtures'
import { expectResponsivePicture } from './imageAssertions'

const pricingCardSizes =
  '(max-width: 767px) calc(100vw - 50px), (max-width: 1279px) calc(33.333vw - 55.333px), 372px'
const allAccessSizes =
  '(max-width: 767px) calc(100vw - 50px), (max-width: 1023px) calc(100vw - 98px), (max-width: 1279px) calc(41.667vw - 40.833px), 493px'
const floorPlanSizes =
  '(max-width: 767px) calc(100vw - 50px), (max-width: 1279px) calc(100vw - 98px), 1182px'

test.describe('Coworking Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/coworking')
  })

  test('has local coworking title and heading', async ({ page }) => {
    await expect(page).toHaveTitle(/Coworking Space & Pricing in Naga City/)
    await expect(page.getByRole('heading', { name: /Coworking in Naga City/ })).toBeVisible()
  })

  test('shows pricing before decision guide', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Current walk-in rates' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Which option fits?' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Entrance Area', exact: true })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Inner Area', exact: true })).toBeVisible()
    await expect(page.getByText('Call Booth').first()).toBeVisible()
  })

  test('uses audited responsive workspace images', async ({ page }) => {
    await expectResponsivePicture(page.getByAltText('Entrance Area'), {
      widths: [327, 372, 717, 744, 1303],
      sizes: pricingCardSizes,
      metadataWidth: 1303,
    })
    await expectResponsivePicture(page.getByAltText('Inner Area'), {
      widths: [327, 372, 717, 744, 1434],
      sizes: pricingCardSizes,
      metadataWidth: 1434,
    })
    await expectResponsivePicture(page.getByAltText('Call Booth'), {
      widths: [327, 372, 717, 744, 1434],
      sizes: pricingCardSizes,
      metadataWidth: 1434,
    })
    await expectResponsivePicture(page.getByAltText('All-Access Membership'), {
      widths: [327, 493, 717, 925, 985, 1434, 1850],
      sizes: allAccessSizes,
      metadataWidth: 1850,
    })
    await expectResponsivePicture(
      page.getByAltText(
        'Floor plan showing the workspace areas at KahitSan Coworking on Panganiban Drive'
      ),
      {
        widths: [327, 640, 717, 1182],
        sizes: floorPlanSizes,
        metadataWidth: 1182,
      }
    )
  })

  test('shows membership, floor plan, and location', async ({ page }) => {
    const floorPlan = page.getByAltText(
      'Floor plan showing the workspace areas at KahitSan Coworking on Panganiban Drive'
    )
    await expect(floorPlan).toHaveAttribute('loading', 'eager')
    await expect
      .poll(() =>
        floorPlan.evaluate((image) => {
          const floorPlanImage = image as HTMLImageElement
          return floorPlanImage.complete && floorPlanImage.naturalWidth > 0
        })
      )
      .toBe(true)

    await expect(
      page.getByRole('heading', { level: 2, name: 'All-Access Membership' })
    ).toBeVisible()
    await expect(page.getByTestId('all-access-layout')).toHaveClass(/lg:grid-cols-12/)
    await expect(page.getByTestId('all-access-media')).toHaveClass(/lg:col-span-5/)
    await expect(page.getByTestId('all-access-details')).toHaveClass(/lg:col-span-4/)
    await expect(page.getByTestId('all-access-pricing')).toHaveClass(/lg:col-span-3/)
    await expect(page.getByRole('heading', { name: 'Panganiban Drive floor plan' })).toBeVisible()
    await expect(floorPlan).not.toHaveClass(/ks-muted-media/)
    await expect(page.getByRole('heading', { name: 'Visit KahitSan Coworking' })).toBeVisible()
  })

  test('offers contact and visit actions near the decision guide', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Contact us' })).toHaveAttribute('href', '/contact')
    await expect(page.getByRole('link', { name: 'Plan a visit' })).toHaveAttribute(
      'href',
      '#location'
    )
  })

  test('labels dated partnerships without presenting them as current discounts', async ({
    page,
  }) => {
    await expect(page.getByRole('heading', { name: 'Partnership records' })).toBeVisible()
    await expect(page.getByText('Past partnership').first()).toBeVisible()
    await expect(page.getByText(/20% discount at the time/).first()).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Partner discounts' })).toHaveCount(0)
  })
})
