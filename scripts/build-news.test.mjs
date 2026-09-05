import assert from 'node:assert/strict'
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { afterEach, test } from 'node:test'
import { buildNews } from './build-news.mjs'

const roots = []

afterEach(async () => {
  await Promise.all(roots.splice(0).map((root) => rm(root, { recursive: true, force: true })))
})

const createRoot = async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'kahitsan-news-'))
  roots.push(root)
  await mkdir(path.join(root, 'content', 'news'), { recursive: true })
  return root
}

const writePost = async (root, slug, source) => {
  await writeFile(path.join(root, 'content', 'news', `${slug}.md`), source)
}

test('builds typed News data, sanitizes HTML, and adds sitemap routes', async () => {
  const root = await createRoot()
  await writePost(
    root,
    'company-update',
    `---
title: Company update
slug: company-update
published: 2026-09-05
category: Company
summary: A concise update.
status: published
---

## Details

| Item | Value |
| --- | --- |
| Status | Current |

<script>alert('bad')</script>

[Unsafe link](javascript:alert('bad'))
`
  )

  await buildNews(root)

  const generated = await readFile(path.join(root, 'src', 'generated', 'news.ts'), 'utf8')
  const sitemap = await readFile(path.join(root, 'public', 'sitemap.xml'), 'utf8')
  assert.match(generated, /statusLabel: ['"]Published['"]/)
  assert.match(generated, /<div class=\\?['"]ks-news-table-scroll\\?['"] tabindex=\\?['"]0\\?['"]>/)
  assert.match(generated, /<table>/)
  assert.doesNotMatch(generated, /<script|javascript:/i)
  assert.match(sitemap, /\/announcement\/company-update/)
})

test('rejects impossible calendar dates', async () => {
  const root = await createRoot()
  await writePost(
    root,
    'bad-date',
    `---
title: Bad date
slug: bad-date
published: 2026-02-30
category: Company
summary: Invalid date fixture.
status: published
---

## Details
`
  )

  await assert.rejects(buildNews(root), /not a valid calendar date/)
})

test('rejects article-body h1 headings and unsupported statuses', async () => {
  const root = await createRoot()
  await writePost(
    root,
    'bad-heading',
    `---
title: Bad heading
slug: bad-heading
published: 2026-09-05
category: Company
summary: Invalid heading fixture.
status: published
---

# Duplicate page heading
`
  )
  await assert.rejects(buildNews(root), /cannot contain an h1/)

  await rm(path.join(root, 'content', 'news', 'bad-heading.md'))
  await writePost(
    root,
    'bad-status',
    `---
title: Bad status
slug: bad-status
published: 2026-09-05
category: Company
summary: Invalid status fixture.
status: mystery
---

## Details
`
  )
  await assert.rejects(buildNews(root), /unsupported status/)
})

test('rejects inherited object keys as statuses', async () => {
  const root = await createRoot()
  await writePost(
    root,
    'inherited-status',
    `---
title: Inherited status
slug: inherited-status
published: 2026-09-05
category: Company
summary: Invalid inherited status fixture.
status: constructor
---

## Details
`
  )

  await assert.rejects(buildNews(root), /unsupported status "constructor"/)
})
