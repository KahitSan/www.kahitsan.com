import axe from 'axe-core'
import { test, expect } from './fixtures'

const routes = [
  '/',
  '/coworking',
  '/community',
  '/announcements',
  '/announcement/pricing-update-nov-2025',
  '/announcement/pricing-update-september-2026',
  '/about',
  '/contact',
  '/privacy',
  '/terms',
  '/404',
]

const themes = ['dark', 'light'] as const

const contextualHeadingAccents = [
  { route: '/', text: 'Solutions Corp.' },
  { route: '/coworking', text: 'how you work.' },
  { route: '/community', text: 'community' },
  { route: '/announcements', text: 'News' },
  { route: '/about', text: 'Solutions Corp.' },
  { route: '/contact', text: 'Contact' },
  { route: '/privacy', text: 'Privacy' },
  { route: '/terms', text: 'Service' },
]

interface AxeViolation {
  id: string
  impact: string | null
  help: string
  nodes: Array<{
    target: string[]
    failureSummary?: string
  }>
}

test.describe('WCAG accessibility', () => {
  test('display headings use solid contextual accents instead of gradient text', async ({
    page,
  }) => {
    for (const { route, text } of contextualHeadingAccents) {
      await page.goto(route)
      const heading = page.getByRole('heading', { level: 1 })
      const accent = heading.locator('.ks-heading-accent')

      await expect(accent).toHaveText(text)
      await expect(heading).toHaveCSS('background-image', 'none')
      await expect(accent).toHaveCSS('background-image', 'none')
      await expect(accent).not.toHaveCSS('-webkit-text-fill-color', 'rgba(0, 0, 0, 0)')
    }
  })

  for (const route of routes) {
    for (const theme of themes) {
      test(`${route} has no axe violations in ${theme} mode`, async ({ page }) => {
        await page.goto(route)
        await page.evaluate((selectedTheme) => {
          localStorage.setItem('kahitsan-theme', selectedTheme)
        }, theme)
        await page.reload({ waitUntil: 'domcontentloaded' })
        await page.waitForFunction(
          (selectedTheme) => document.documentElement.classList.contains(selectedTheme),
          theme
        )
        await page.addScriptTag({ content: axe.source })

        const violations = await page.evaluate(async () => {
          const axeRuntime = (
            window as unknown as Window & {
              axe: {
                run: (
                  context: Document,
                  options: {
                    runOnly: { type: 'tag'; values: string[] }
                  }
                ) => Promise<{ violations: AxeViolation[] }>
              }
            }
          ).axe

          const audit = await axeRuntime.run(document, {
            runOnly: {
              type: 'tag',
              values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'],
            },
          })

          return audit.violations
        })

        expect(violations).toEqual([])
      })
    }
  }

  for (const theme of themes) {
    test(`mobile More dialog has no axe violations in ${theme} mode`, async ({
      page,
      viewport,
    }) => {
      if ((viewport?.width ?? 1280) >= 768) test.skip()

      await page.goto('/')
      await page.evaluate((selectedTheme) => {
        localStorage.setItem('kahitsan-theme', selectedTheme)
      }, theme)
      await page.reload({ waitUntil: 'domcontentloaded' })
      await page.getByRole('button', { name: 'More' }).click()
      await expect(page.getByRole('dialog', { name: 'More menu' })).toBeVisible()
      await page.addScriptTag({ content: axe.source })

      const violations = await page.evaluate(async () => {
        const axeRuntime = (
          window as unknown as Window & {
            axe: {
              run: (
                context: Document,
                options: { runOnly: { type: 'tag'; values: string[] } }
              ) => Promise<{ violations: AxeViolation[] }>
            }
          }
        ).axe

        return (
          await axeRuntime.run(document, {
            runOnly: {
              type: 'tag',
              values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'],
            },
          })
        ).violations
      })

      expect(violations).toEqual([])
    })
  }
})
