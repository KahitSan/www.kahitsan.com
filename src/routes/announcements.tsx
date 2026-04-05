import { Title, Meta, Link } from "@solidjs/meta";
import { For, Show } from 'solid-js'
import type { Component } from 'solid-js'
import { A } from '@solidjs/router'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import DollarSign from 'lucide-solid/icons/dollar-sign'

const AnnouncementsPage: Component = () => {
  const announcements = [
    {
      id: 1,
      title: 'Pricing Update - Effective November 1, 2025',
      date: 'November 1, 2025',
      month: 'NOV',
      day: '01',
      year: '2025',
      type: 'Pricing',
      icon: DollarSign,
      content:
        "We are announcing a pricing update for KahitSan—effective November 1, 2025. This adjustment accelerates our growth, enabling us to invest in improvements and strengthen KahitSan's infrastructure for long-term sustainability.",
      isPast: false,
      slug: 'pricing-update-nov-2025',
    },
  ]

  return (
    <>
      <Title>Announcements - KahitSan</Title>
      <Meta name="description" content="Stay updated with the latest news, pricing updates, and announcements from KahitSan coworking space." />
      <Meta property="og:title" content="Announcements - KahitSan" />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://www.kahitsan.com/announcements" />
      <Link rel="canonical" href="https://www.kahitsan.com/announcements" />

      <div class="min-h-screen page-bg transition-colors duration-300">
        <Header />

        <main class="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
          {/* Hero */}
          <section class="mb-20">
            <div class="text-xs font-bold tracking-[0.3em] gradient-text mb-4">NEWS & UPDATES</div>
            <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 max-w-4xl">
              Stay in the <span class="gradient-text">loop</span>.
            </h1>
            <p class="text-zinc-400 text-lg max-w-2xl">
              Important updates, pricing changes, and news from KahitSan. We keep things transparent so you always know what's happening.
            </p>
          </section>

          {/* Timeline */}
          <section>
            <div class="relative">
              {/* Timeline line */}
              <div class="absolute left-[39px] top-0 bottom-0 w-px bg-zinc-800/50 hidden md:block" />

              <div class="space-y-10">
                <For each={announcements}>{(announcement, i) => (
                  <A href={`/announcement/${announcement.slug}`} class="block group">
                    <div class="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 md:gap-10">
                      {/* Date badge */}
                      <div class="hidden md:flex flex-col items-center relative">
                        <div class="w-[18px] h-[18px] rounded-full bg-amber-500 border-4 border-zinc-950 z-10 group-hover:scale-125 transition-transform" />
                        <div class="mt-3 text-center">
                          <div class="text-amber-400 text-xs font-black tracking-widest">{announcement.month}</div>
                          <div class="text-2xl font-black text-white leading-none">{announcement.day}</div>
                          <div class="text-zinc-500 text-[10px] tracking-widest">{announcement.year}</div>
                        </div>
                      </div>

                      {/* Card */}
                      <div class="relative">
                        <div class="clip-corner-both p-[1px] bg-gradient-to-br from-amber-500/20 to-transparent group-hover:from-amber-500/40 transition-all">
                          <div class="bg-zinc-950 clip-corner-both p-8 md:p-10 relative overflow-hidden">
                            {/* Background number */}
                            <span class="text-[8rem] font-black text-amber-500/[0.03] absolute -top-6 -right-2 select-none pointer-events-none leading-none">
                              {String(i() + 1).padStart(2, '0')}
                            </span>

                            <div class="relative z-10">
                              {/* Mobile date */}
                              <div class="flex items-center gap-3 mb-4 md:hidden">
                                <div class="w-3 h-3 rounded-full bg-amber-500" />
                                <span class="text-amber-400 text-xs font-bold tracking-widest uppercase">{announcement.date}</span>
                              </div>

                              <div class="flex items-start gap-5">
                                <div class="p-3 bg-amber-500/10 clip-corner shrink-0 group-hover:bg-amber-500/20 transition-colors">
                                  <announcement.icon size={24} class="text-amber-400" />
                                </div>
                                <div class="flex-1">
                                  <div class="flex flex-wrap items-center gap-3 mb-3">
                                    <span class="px-3 py-1 bg-zinc-800/60 text-zinc-400 text-[10px] font-bold uppercase tracking-widest clip-corner">
                                      {announcement.type}
                                    </span>
                                    <Show when={announcement.isPast}>
                                      <span class="px-3 py-1 bg-zinc-800/40 text-zinc-600 text-[10px] font-bold uppercase tracking-widest clip-corner">
                                        Past
                                      </span>
                                    </Show>
                                  </div>
                                  <h2 class="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                                    {announcement.title}
                                  </h2>
                                  <p class="text-zinc-400 leading-relaxed mb-6">{announcement.content}</p>
                                  <span class="inline-flex items-center gap-2 text-amber-400 text-sm font-bold tracking-widest uppercase group-hover:gap-3 transition-all">
                                    Read More
                                    <span class="text-lg">&rarr;</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </A>
                )}</For>
              </div>
            </div>
          </section>

          {/* Empty state hint */}
          <Show when={announcements.length === 1}>
            <div class="mt-20 text-center">
              <div class="inline-block clip-corner bg-zinc-900/30 border border-zinc-800/30 px-8 py-6">
                <p class="text-zinc-500 text-sm">
                  More announcements will appear here as they are published.
                </p>
              </div>
            </div>
          </Show>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default AnnouncementsPage
