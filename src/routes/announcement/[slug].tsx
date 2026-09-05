import { Link, Meta, Title } from '@solidjs/meta'
import { A, useParams } from '@solidjs/router'
import { Show, createMemo, type Component } from 'solid-js'
import Footer from '~/components/Footer'
import NotFound from '~/components/ui/NotFound/NotFound'
import { formatNewsDate, getNewsPost } from '~/lib/news'

const NewsArticlePage: Component = () => {
  const params = useParams<{ slug: string }>()
  const post = createMemo(() => getNewsPost(params.slug))

  return (
    <Show
      when={post()}
      keyed
      fallback={
        <>
          <Title>News Post Not Found | KahitSan</Title>
          <NotFound
            title="404"
            heading="News post not found"
            message="This post does not exist or is no longer available."
            buttonText="Back to News"
            navigateTo="/announcements"
          />
        </>
      }
    >
      {(article) => (
        <>
          <Title>{article.title} | KahitSan News</Title>
          <Meta name="description" content={article.summary} />
          <Meta property="og:title" content={`${article.title} | KahitSan News`} />
          <Meta property="og:description" content={article.summary} />
          <Meta property="og:type" content="article" />
          <Meta
            property="og:url"
            content={`https://www.kahitsan.com/announcement/${article.slug}`}
          />
          <Link rel="canonical" href={`https://www.kahitsan.com/announcement/${article.slug}`} />

          <div class="min-h-screen page-bg transition-colors duration-300">
            <main class="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-16 md:pt-32 md:pb-24">
              <A
                href="/announcements"
                class="inline-block text-sm font-semibold text-amber-500 mb-8 hover:text-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                &larr; KahitSan News
              </A>

              <article class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
                <header class="ks-grid-surface border-y border-zinc-800/60 px-6 py-8 md:px-8 md:py-10 lg:col-span-4 lg:sticky lg:top-24">
                  <div class="flex flex-wrap gap-2 mb-5 text-xs font-bold uppercase tracking-widest">
                    <span class="text-amber-500">{article.category}</span>
                    <span class="border border-zinc-700 px-2 py-1 text-zinc-400">
                      {article.statusLabel}
                    </span>
                  </div>
                  <h1 class="ks-display-heading text-3xl md:text-4xl mb-6">{article.title}</h1>
                  <p class="text-zinc-400 leading-relaxed mb-6">{article.summary}</p>
                  <dl class="border-t border-zinc-800/70 text-sm">
                    <div class="py-4 border-b border-zinc-800/70">
                      <dt class="text-zinc-500 mb-1">Published</dt>
                      <dd class="text-zinc-300">
                        <time datetime={article.published}>
                          {formatNewsDate(article.published)}
                        </time>
                      </dd>
                    </div>
                    <Show when={article.effective} keyed>
                      {(effective) => (
                        <div class="py-4 border-b border-zinc-800/70">
                          <dt class="text-zinc-500 mb-1">Effective date</dt>
                          <dd class="text-zinc-300">
                            <time datetime={effective}>{formatNewsDate(effective)}</time>
                          </dd>
                        </div>
                      )}
                    </Show>
                  </dl>
                </header>

                <div
                  class="ks-news-body lg:col-span-8"
                  // Markdown is sanitized during scripts/build-news.mjs.
                  // eslint-disable-next-line solid/no-innerhtml
                  innerHTML={article.html}
                />
              </article>
            </main>
            <Footer />
          </div>
        </>
      )}
    </Show>
  )
}

export default NewsArticlePage
