import console from 'node:console'
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { pathToFileURL } from 'node:url'
import matter from 'gray-matter'
import { marked } from 'marked'
import { format, resolveConfig } from 'prettier'
import sanitizeHtml from 'sanitize-html'

const requiredFields = ['title', 'slug', 'published', 'category', 'summary', 'status']
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const newsCategories = ['Company', 'Coworking', 'Hilinga']
const newsStatusLabels = {
  published: 'Published',
  updated: 'Updated',
  superseded: 'Superseded',
  archived: 'Archived',
}
const staticSitemapRoutes = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/coworking', changefreq: 'weekly', priority: '0.9' },
  { path: '/community', changefreq: 'monthly', priority: '0.7' },
  { path: '/announcements', changefreq: 'monthly', priority: '0.7' },
  { path: '/about', changefreq: 'monthly', priority: '0.7' },
  { path: '/contact', changefreq: 'monthly', priority: '0.7' },
  { path: '/privacy', changefreq: 'yearly', priority: '0.3' },
  { path: '/terms', changefreq: 'yearly', priority: '0.3' },
]

const getFrontMatterScalar = (frontMatter, field, file) => {
  const escapedField = field.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const match = frontMatter.match(new RegExp(`^[ \\t]*${escapedField}[ \\t]*:[ \\t]*(.+)$`, 'm'))
  if (!match) throw new Error(`${file}: missing required front matter field "${field}"`)

  const value = match[1].trim()
  const quoted =
    (value.startsWith("'") && value.endsWith("'")) || (value.startsWith('"') && value.endsWith('"'))
  return quoted ? value.slice(1, -1) : value
}

const toIsoDate = (frontMatter, field, file) => {
  const normalized = getFrontMatterScalar(frontMatter, field, file)
  if (!/^\d{4}-\d{2}-\d{2}$/.test(normalized)) {
    throw new Error(`${file}: front matter field "${field}" must use YYYY-MM-DD`)
  }

  const [year, month, day] = normalized.split('-').map(Number)
  const parsed = new Date(Date.UTC(year, month - 1, day))
  if (
    parsed.getUTCFullYear() !== year ||
    parsed.getUTCMonth() !== month - 1 ||
    parsed.getUTCDate() !== day
  ) {
    throw new Error(`${file}: front matter field "${field}" is not a valid calendar date`)
  }

  return normalized
}

const buildSitemap = (posts) => {
  const routes = [
    ...staticSitemapRoutes,
    ...posts.map((post) => ({
      path: `/announcement/${post.slug}`,
      changefreq: 'yearly',
      priority: '0.3',
    })),
  ]

  const entries = routes
    .map(
      (route) =>
        `  <url>\n    <loc>https://www.kahitsan.com${route.path}</loc>\n    <changefreq>${route.changefreq}</changefreq>\n    <priority>${route.priority}</priority>\n  </url>`
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`
}

export const buildNews = async (root = process.cwd()) => {
  const contentDirectory = path.join(root, 'content', 'news')
  const outputDirectory = path.join(root, 'src', 'generated')
  const outputFile = path.join(outputDirectory, 'news.ts')
  const sitemapFile = path.join(root, 'public', 'sitemap.xml')
  const files = (await readdir(contentDirectory)).filter((file) => file.endsWith('.md')).sort()
  const posts = []

  for (const file of files) {
    const source = await readFile(path.join(contentDirectory, file), 'utf8')
    const { data, content, matter: frontMatter } = matter(source)

    for (const field of requiredFields) {
      if (data[field] === undefined || String(data[field]).trim() === '') {
        throw new Error(`${file}: missing required front matter field "${field}"`)
      }
    }

    const slug = String(data.slug).trim()
    const category = String(data.category).trim()
    const status = String(data.status).trim()
    const published = toIsoDate(frontMatter, 'published', file)
    const effective = data.effective ? toIsoDate(frontMatter, 'effective', file) : undefined

    if (!slugPattern.test(slug)) throw new Error(`${file}: invalid slug "${slug}"`)
    if (file !== `${slug}.md`) throw new Error(`${file}: filename must match slug "${slug}.md"`)
    if (posts.some((post) => post.slug === slug))
      throw new Error(`${file}: duplicate slug "${slug}"`)
    if (!newsCategories.includes(category)) {
      throw new Error(`${file}: unsupported category "${category}"`)
    }
    if (!Object.hasOwn(newsStatusLabels, status)) {
      throw new Error(`${file}: unsupported status "${status}"`)
    }
    if (effective && effective < published) {
      throw new Error(`${file}: effective date cannot be earlier than published date`)
    }

    const tokens = marked.lexer(content, { gfm: true })
    let hasLevelOneHeading = false
    marked.walkTokens(tokens, (token) => {
      if (token.type === 'heading' && token.depth === 1) hasLevelOneHeading = true
      if (token.type === 'html' && /<\/?h1(?:\s|>)/i.test(token.raw)) hasLevelOneHeading = true
    })
    if (hasLevelOneHeading) {
      throw new Error(`${file}: article body cannot contain an h1 heading`)
    }

    const rendered = marked.parser(tokens, { gfm: true, breaks: false })
    const allowedTags = [
      ...new Set([
        ...sanitizeHtml.defaults.allowedTags.filter((tag) => tag !== 'h1'),
        'h2',
        'h3',
        'table',
        'thead',
        'tbody',
        'tr',
        'th',
        'td',
      ]),
    ]
    const html = sanitizeHtml(rendered, {
      allowedTags,
      allowedAttributes: {
        a: ['href', 'title'],
      },
      allowedSchemes: ['http', 'https', 'mailto'],
      allowProtocolRelative: false,
    }).replaceAll(
      /(<table>)([\s\S]*?<\/table>)/g,
      '<div class="ks-news-table-scroll" tabindex="0">$1$2</div>'
    )

    posts.push({
      title: String(data.title).trim(),
      slug,
      published,
      effective,
      category,
      summary: String(data.summary).trim(),
      status,
      statusLabel: newsStatusLabels[status],
      html,
    })
  }

  posts.sort((left, right) => right.published.localeCompare(left.published))

  const categoryType = newsCategories.map((category) => JSON.stringify(category)).join(' | ')
  const statusType = Object.keys(newsStatusLabels)
    .map((status) => JSON.stringify(status))
    .join(' | ')
  const generatedSource = `// Generated by scripts/build-news.mjs. Edit content/news/*.md instead.\n\nexport type NewsCategory = ${categoryType}\nexport type NewsStatus = ${statusType}\n\nexport interface NewsPost {\n  title: string\n  slug: string\n  published: string\n  effective?: string\n  category: NewsCategory\n  summary: string\n  status: NewsStatus\n  statusLabel: string\n  html: string\n}\n\nexport const newsPosts: NewsPost[] = ${JSON.stringify(posts, null, 2)}\n\nexport const getNewsPost = (slug: string) => newsPosts.find((post) => post.slug === slug)\n\nexport const newsRoutes = newsPosts.map((post) => \`/announcement/\${post.slug}\`)\n`
  const prettierConfig = await resolveConfig(outputFile)
  const formattedSource = await format(generatedSource, {
    ...(prettierConfig ?? {}),
    filepath: outputFile,
  })

  await mkdir(outputDirectory, { recursive: true })
  await mkdir(path.dirname(sitemapFile), { recursive: true })
  await writeFile(outputFile, formattedSource)
  await writeFile(sitemapFile, buildSitemap(posts))
  console.log(`Generated ${posts.length} news post${posts.length === 1 ? '' : 's'} and sitemap.`)
  return posts
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await buildNews()
}
