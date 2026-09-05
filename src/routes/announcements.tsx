import { Link, Meta, Title } from '@solidjs/meta'
import { A } from '@solidjs/router'
import { For } from 'solid-js'
import type { Component } from 'solid-js'
import Footer from '~/components/Footer'
import { formatNewsDate, newsPosts } from '~/lib/news'

const AnnouncementsPage: Component = () => {
  return (
    <>
      <Title>KahitSan News</Title>
      <Meta name="description" content="News and updates from KahitSan Solutions Corp." />
      <Meta property="og:title" content="KahitSan News" />
      <Meta property="og:description" content="News and updates from KahitSan Solutions Corp." />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://www.kahitsan.com/announcements" />
      <Link rel="canonical" href="https://www.kahitsan.com/announcements" />

      <div class="min-h-screen page-bg transition-colors duration-300">
        <main class="pt-20 pb-12 md:pt-32 md:pb-24 px-6 md:px-12 max-w-7xl mx-auto">
          <section class="mb-12 border-y border-zinc-800/60 py-10 md:mb-16 md:py-14">
            <div class="grid grid-cols-1 gap-y-5 lg:grid-cols-12 lg:gap-x-10 xl:gap-x-14">
              <h1 class="ks-display-heading lg:col-span-8">
                KahitSan <span class="ks-heading-accent">News</span>
              </h1>
              <p class="max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg lg:col-span-4 lg:pt-2">
                Company updates, product notes, and notices from KahitSan Solutions Corp.
              </p>
            </div>
          </section>

          <section aria-label="News posts" class="border-y border-zinc-800/60">
            <For each={newsPosts}>
              {(post) => (
                <article class="grid grid-cols-1 gap-y-5 border-b border-zinc-800/60 py-8 last:border-b-0 md:py-10 lg:grid-cols-12 lg:gap-x-10 xl:gap-x-14">
                  <div class="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-bold uppercase tracking-widest lg:col-span-3 lg:items-start lg:content-start">
                    <span class="text-amber-400">{post.category}</span>
                    <span class="text-zinc-600 lg:hidden" aria-hidden="true">
                      /
                    </span>
                    <time class="text-zinc-500" datetime={post.published}>
                      {formatNewsDate(post.published)}
                    </time>
                    <span class="border border-zinc-700 px-2.5 py-1 text-zinc-400 lg:basis-full lg:w-fit">
                      {post.statusLabel}
                    </span>
                  </div>
                  <A
                    href={`/announcement/${post.slug}`}
                    class="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-4 focus-visible:ring-offset-zinc-950 lg:col-span-9"
                  >
                    <h2 class="ks-record-title mb-3 text-2xl transition-colors group-hover:text-amber-400 md:text-3xl">
                      {post.title}
                    </h2>
                    <p class="mb-4 max-w-3xl leading-relaxed text-zinc-400">{post.summary}</p>
                    <span class="text-amber-400 text-sm font-bold">
                      Read article <span aria-hidden="true">&rarr;</span>
                    </span>
                  </A>
                </article>
              )}
            </For>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default AnnouncementsPage
