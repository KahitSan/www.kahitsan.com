import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { test } from 'node:test'
import { createLighthouseConfig, lighthouseCategories } from '../lighthouse.config.mjs'
import { summarizeLighthouseResult, validateAuditBudget } from './lighthouse-audit.mjs'

const readJson = async (path) => JSON.parse(await readFile(path, 'utf8'))

test('pins Lighthouse and runs audits against a fresh production build', async () => {
  const packageJson = await readJson('package.json')
  assert.equal(packageJson.devDependencies.lighthouse, '13.4.1')
  assert.match(packageJson.scripts['audit:lighthouse'], /^npm run build && /)
  assert.match(packageJson.scripts['audit:lighthouse:mobile'], /^npm run build && /)
  assert.match(packageJson.scripts['audit:lighthouse:desktop'], /^npm run build && /)
})

test('uses reproducible Lighthouse mobile and desktop profiles', () => {
  const mobile = createLighthouseConfig('mobile').settings
  const desktop = createLighthouseConfig('desktop').settings

  assert.deepEqual(mobile.onlyCategories, lighthouseCategories)
  assert.deepEqual(desktop.onlyCategories, lighthouseCategories)
  assert.equal(mobile.formFactor, 'mobile')
  assert.equal(mobile.screenEmulation.width, 412)
  assert.equal(mobile.throttling.cpuSlowdownMultiplier, 4)
  assert.equal(desktop.formFactor, 'desktop')
  assert.equal(desktop.screenEmulation.width, 1350)
  assert.equal(desktop.throttling.cpuSlowdownMultiplier, 1)
})

test('budget targets 100 for every selected category on core routes', async () => {
  const budget = validateAuditBudget(await readJson('lighthouse-budget.json'))
  assert.deepEqual(
    budget.categories.map((category) => category.id),
    lighthouseCategories
  )
  assert.ok(budget.categories.every((category) => category.minimumScore === 1))
  assert.deepEqual(
    budget.routes.map((route) => route.path),
    ['/', '/coworking', '/community', '/announcements', '/about', '/contact']
  )
})

test('summarizes exact category scores and scored audit failures', () => {
  const budget = validateAuditBudget({
    version: 1,
    profiles: ['mobile'],
    routes: [{ name: 'home', path: '/' }],
    categories: [
      { id: 'performance', minimumScore: 1 },
      { id: 'seo', minimumScore: 1 },
    ],
  })
  const summary = summarizeLighthouseResult(
    {
      lighthouseVersion: '13.4.1',
      requestedUrl: 'http://127.0.0.1:1234/',
      finalDisplayedUrl: 'http://127.0.0.1:1234/',
      fetchTime: '2026-09-05T00:00:00.000Z',
      categories: {
        performance: {
          title: 'Performance',
          score: 0.99,
          auditRefs: [{ id: 'largest-contentful-paint' }],
        },
        seo: {
          title: 'SEO',
          score: 1,
          auditRefs: [{ id: 'structured-data' }],
        },
      },
      audits: {
        'largest-contentful-paint': {
          id: 'largest-contentful-paint',
          title: 'Largest Contentful Paint',
          score: 0.91,
          scoreDisplayMode: 'numeric',
          displayValue: '1.4 s',
        },
        'structured-data': {
          id: 'structured-data',
          title: 'Structured data is valid',
          score: null,
          scoreDisplayMode: 'manual',
        },
      },
    },
    budget
  )

  assert.equal(summary.categories.performance.percent, 99)
  assert.equal(summary.categories.performance.passed, false)
  assert.equal(summary.categories.seo.percent, 100)
  assert.equal(summary.passed, false)
  assert.deepEqual(
    summary.failingAudits.map((audit) => audit.id),
    ['largest-contentful-paint']
  )
})
