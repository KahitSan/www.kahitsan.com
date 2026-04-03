import { Title, Meta, Link } from "@solidjs/meta";
import type { Component } from 'solid-js'
import { A } from '@solidjs/router'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Calendar from 'lucide-solid/icons/calendar'
import DollarSign from 'lucide-solid/icons/dollar-sign'
import ChevronRight from 'lucide-solid/icons/chevron-right'

const AnnouncementsPage: Component = () => {
  const announcements = [
    {
      id: 1,
      title: 'Pricing Update - Effective November 1, 2025',
      date: 'November 1, 2025',
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

      <div class="min-h-screen" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)' }}>
        <Header />

        <div class="relative py-24 px-4">
          <div class="absolute inset-0 pointer-events-none overflow-hidden">
            <div class="absolute top-20 left-1/4 w-72 h-72 opacity-10" style="background:radial-gradient(ellipse, rgba(201, 169, 97, 0.3) 0%, transparent 60%)" />
          </div>

          <div class="relative z-10 max-w-4xl mx-auto">
            <div class="text-center mb-12">
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/30 border border-zinc-800/50 mb-3">
                <Calendar size={16} class="text-amber-400" />
                <span class="text-xs font-bold">Latest Updates</span>
              </div>
              <h1 class="text-3xl md:text-4xl font-bold mb-3 gradient-text">Announcements</h1>
              <p class="text-base md:text-lg text-zinc-400">
                Stay updated with our latest news and schedule changes
              </p>
            </div>

            <div class="space-y-6">
              {announcements.map((announcement) => (
                <A href={`/announcement/${announcement.slug}`} class="block">
                  <div class="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 clip-corner p-8 relative overflow-hidden group hover:border-zinc-700/50 transition-all cursor-pointer">
                    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <div class="relative z-10">
                      <div class="flex items-start gap-4">
                        <div class="p-3 rounded-lg bg-amber-500/20 border border-amber-500/30 shrink-0">
                          <announcement.icon size={24} class="text-amber-400" />
                        </div>
                        <div class="flex-1">
                          <div class="flex items-start justify-between gap-4 mb-3">
                            <div>
                              <h3 class="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-amber-500 transition-colors">
                                {announcement.title}
                              </h3>
                              <div class="flex items-center gap-3 text-sm text-zinc-400">
                                <span class="flex items-center gap-1">
                                  <Calendar size={14} />
                                  {announcement.date}
                                </span>
                                <span class="px-2 py-0.5 rounded bg-zinc-800/50 text-xs">
                                  {announcement.type}
                                </span>
                              </div>
                            </div>
                            <div class="flex items-center gap-2">
                              {announcement.isPast && (
                                <span class="px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-xs text-zinc-500">
                                  Past
                                </span>
                              )}
                              <ChevronRight size={20} class="text-zinc-400 group-hover:text-amber-500 transition-colors" />
                            </div>
                          </div>
                          <p class="text-zinc-300 leading-relaxed">{announcement.content}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </A>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default AnnouncementsPage
