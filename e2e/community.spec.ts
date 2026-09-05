import { expect, test } from './fixtures'
import { expectResponsivePicture } from './imageAssertions'

test.describe('Community Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/community')
  })

  test('presents three category sections', async ({ page }) => {
    await expect(page).toHaveTitle(/Community \| KahitSan Coworking/)
    await expect(page.getByRole('heading', { level: 1 })).toContainText('KahitSan Coworking')
    await expect(page.getByRole('main').getByRole('heading', { level: 2 })).toHaveText([
      'Partnerships',
      'Featured events',
      'Sponsorships',
    ])
    await expect(page.getByRole('heading', { name: 'Current and upcoming' })).toHaveCount(0)
    await expect(page.getByRole('heading', { name: 'Community activity' })).toHaveCount(0)
    await expect(
      page.getByText(
        'An ongoing record of community work. New entries are added as relationships and activities are confirmed.'
      )
    ).toHaveCount(0)
  })

  test('shows category-appropriate dates without status labels', async ({ page }) => {
    const partnerships = page.getByRole('region', { name: 'Partnerships' })
    const featuredEvents = page.getByRole('region', { name: 'Featured events' })
    const sponsorships = page.getByRole('region', { name: 'Sponsorships' })

    await expect(partnerships.getByText('Partnership start')).toHaveCount(3)
    await expect(partnerships.getByText('End date not published in record.')).toHaveCount(3)
    await expect(featuredEvents.getByText('Event date')).toBeVisible()
    await expect(sponsorships.getByText('Sponsorship period')).toHaveCount(3)
    await expect(partnerships.getByText('Published benefit: 20% discount').first()).toBeVisible()
    await expect(
      page.getByText(/^(Current|Upcoming|Past) (partnership|event|sponsorship)$/)
    ).toHaveCount(0)
    await expect(featuredEvents.getByText('CE BLAZE')).toBeVisible()
    await expect(
      partnerships.getByText('BISCAST Association of Civil Engineering Students')
    ).toBeVisible()
    await expect(partnerships.getByText('October 31, 2025')).toBeVisible()
    await expect(sponsorships.getByText('June 23-25, 2025')).toBeVisible()
    await expect(sponsorships.getByText('August 21-24, 2026')).toBeVisible()
    await expect(sponsorships.getByText('TOSP-Bikol Alumni Community')).toBeVisible()
  })

  test('presents TOSP Bikol sponsorship without inventing a logo', async ({ page }) => {
    const card = page.getByRole('article').filter({ hasText: 'TOSP-Bikol Alumni Community' })

    await expect(card).toContainText(
      'Regional Search for the 59th Ten Outstanding Students of the Philippines'
    )
    await expect(card).toContainText('provided digital coworking vouchers')
    await expect(card.getByRole('img')).toHaveCount(0)
  })

  test('keeps community social links as buttons', async ({ page }) => {
    const facebookLink = page.getByRole('link', { name: 'Facebook' }).first()

    await expect(facebookLink).toBeVisible()
    await expect(facebookLink).toHaveAttribute('target', '_blank')
    await expect(facebookLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  test('keeps responsive logo metadata through community records', async ({ page }) => {
    for (const logo of [
      {
        key: 'aces',
        widths: [80, 160],
        sizes: '(max-width: 639px) 42px, 50px',
        metadataWidth: 160,
      },
      {
        key: 'uapsa',
        widths: [80, 160],
        sizes: '(max-width: 639px) 39px, 46px',
        metadataWidth: 160,
      },
      {
        key: 'uapga',
        widths: [93, 185],
        sizes: '(max-width: 639px) 56px, 66px',
        metadataWidth: 185,
      },
      {
        key: 'ateneo',
        widths: [79, 157],
        sizes: '(max-width: 639px) 48px, 56px',
        metadataWidth: 157,
      },
    ]) {
      await expectResponsivePicture(page.locator(`main img[data-logo="${logo.key}"]`).first(), logo)
    }
  })

  test('shows unframed logos with subtle card hover and focus treatment', async ({ page }) => {
    const card = page.getByRole('article').filter({ hasText: 'BISCAST Association' }).first()
    const logoWrap = card.locator('.org-logo-wrap')
    const logo = card.locator('.org-logo')
    const defaultOpacity = Number(await logo.evaluate((image) => getComputedStyle(image).opacity))

    await expect(logoWrap).toHaveCSS('border-width', '0px')
    expect(defaultOpacity).toBeLessThan(1)

    await card.hover()
    await expect(logo).toHaveCSS('opacity', '1')

    await card.getByRole('link').first().focus()
    await expect(logo).toHaveCSS('opacity', '1')
  })

  test('removes archive framing and unsupported event hosting', async ({ page }) => {
    await expect(page.getByText(/historical record/i)).toHaveCount(0)
    await expect(page.getByText(/community archive/i)).toHaveCount(0)
    await expect(page.getByText('Host Your Event')).toHaveCount(0)
  })
})
