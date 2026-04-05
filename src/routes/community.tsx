import { Title, Meta, Link } from "@solidjs/meta";
import { For, Show } from 'solid-js'
import type { Component } from 'solid-js'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Facebook from 'lucide-solid/icons/facebook'
import Instagram from 'lucide-solid/icons/instagram'
import ExternalLink from 'lucide-solid/icons/external-link'
import Video from 'lucide-solid/icons/video'
import Button from '~/components/ui/Button/Button'
import type { FeaturedEvent, Partnership, Sponsorship } from '~/types/community'
import { communityData } from '~/data/community'

const SocialMediaButtons = (props: { socialLinks?: any }) => {
  if (!props.socialLinks) return null
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'facebook': return () => <Facebook size={14} />
      case 'instagram': return () => <Instagram size={14} />
      case 'tiktok': return () => <Video size={14} />
      default: return () => <ExternalLink size={14} />
    }
  }
  return (
    <div class="flex flex-wrap gap-2 mt-4">
      <For each={Object.entries(props.socialLinks)}>{([platform, url]) => (
        <Show when={url}>
          {(() => (
            <Button
              as="a"
              href={url as string}
              target="_blank"
              rel="noopener noreferrer"
              intent="secondary"
              variant="clip1"
              size="sm"
              icon={getSocialIcon(platform)}
              iconPosition="left"
              class="text-xs bg-blue-500/20 border-blue-500/40 text-blue-400 hover:bg-blue-500/30"
              noPulse
              noGlow
            >
              {platform.charAt(0).toUpperCase() + platform.slice(1)}
            </Button>
          ))()}
        </Show>
      )}</For>
    </div>
  )
}

const CommunityPage: Component = () => {
  const community = communityData

  return (
    <>
      <Title>Community Engagement - KahitSan</Title>
      <Meta name="description" content="Join our vibrant community. Events, partnerships with BISCAST ACES and UAPSA, and sponsorship programs." />
      <Meta property="og:title" content="Community Engagement - KahitSan" />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://www.kahitsan.com/community" />
      <Link rel="canonical" href="https://www.kahitsan.com/community" />

      <div class="min-h-screen page-bg transition-colors duration-300">
        <Header />

        <main class="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
          {/* Hero */}
          <section class="mb-24">
            <div class="text-xs font-bold tracking-[0.3em] gradient-text mb-4">COMMUNITY</div>
            <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 max-w-4xl">
              Building <span class="gradient-text">together</span> with our community.
            </h1>
            <p class="text-zinc-400 text-lg max-w-2xl">
              We support local organizations, sponsor educational programs, and host events that bring people together. Here's what we've been up to.
            </p>
          </section>

          {/* Partnerships — Full-width cards */}
          <section class="mb-32 relative">
            <div class="absolute -top-10 -right-10 w-64 h-64 bg-amber-500/5 rounded-full blur-[100px] -z-10" />
            <div class="flex items-end justify-between mb-12">
              <div>
                <div class="text-xs font-bold tracking-[0.3em] gradient-text mb-2">PARTNER ORGANIZATIONS</div>
                <h2 class="text-3xl md:text-4xl font-bold text-white">Partnerships</h2>
              </div>
              <div class="hidden md:block text-zinc-500 text-right max-w-xs text-sm">
                Members of these organizations enjoy exclusive discounts on all workspace bookings.
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <For each={community.partnerships}>{(partner: Partnership) => (
                <div class="bg-zinc-900/60 clip-corner-both p-[1px] group hover:bg-amber-500/20 transition-colors duration-500">
                  <div class="bg-zinc-950 clip-corner-both h-full flex flex-col">
                    {/* Logo area */}
                    <div class="flex items-center justify-center p-4 bg-zinc-900/50 min-h-[160px]">
                      <img
                        src={partner.icon}
                        alt={partner.name}
                        class="h-36 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    {/* Details */}
                    <div class="flex flex-col flex-1 p-8">
                      <span class="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 text-[10px] font-black uppercase tracking-tighter w-fit mb-4">
                        {partner.discount}
                      </span>
                      <h3 class="text-lg font-bold text-white mb-2">{partner.name}</h3>
                      <p class="text-zinc-500 text-xs mb-3">{partner.effectiveDate}</p>
                      <p class="text-zinc-400 text-sm leading-relaxed mb-auto">{partner.description}</p>
                      <SocialMediaButtons socialLinks={partner.socialLinks} />
                    </div>
                  </div>
                </div>
              )}</For>
            </div>
          </section>

          {/* Featured Events — Timeline style */}
          <section class="mb-32 relative">
            <div class="absolute -bottom-10 -left-10 w-72 h-72 bg-amber-500/5 rounded-full blur-[100px] -z-10" />
            <div class="mb-12">
              <div class="text-xs font-bold tracking-[0.3em] gradient-text mb-2">HIGHLIGHTS</div>
              <h2 class="text-3xl md:text-4xl font-bold text-white">Featured Events</h2>
            </div>

            <div class="space-y-8">
              <For each={community.featuredEvents}>{(event: FeaturedEvent) => (
                <div class="relative clip-corner-both bg-zinc-900/40 border border-zinc-800/30 overflow-hidden group hover:border-amber-500/20 transition-all">
                  <div class="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-0">
                    {/* Left — Logo + Date */}
                    <div class="flex flex-col items-center justify-center p-8 bg-zinc-900/60 border-b md:border-b-0 md:border-r border-zinc-800/30">
                      <img
                        src={event.icon}
                        alt={event.organization}
                        class="h-20 w-auto object-contain mb-4 grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      <span class="text-amber-400 text-xs font-bold tracking-widest uppercase">{event.date}</span>
                    </div>
                    {/* Right — Content */}
                    <div class="p-8 md:p-10">
                      <h3 class="text-2xl font-bold text-white mb-3">{event.title}</h3>
                      <p class="text-zinc-400 leading-relaxed mb-4">{event.description}</p>
                      <div class="flex flex-wrap gap-4 text-xs text-zinc-500 mb-2">
                        <span class="flex items-center gap-1.5">
                          <div class="w-1.5 h-1.5 rounded-full bg-amber-500" />
                          {event.location}
                        </span>
                        <span class="flex items-center gap-1.5">
                          <div class="w-1.5 h-1.5 rounded-full bg-amber-500" />
                          {event.organization}
                        </span>
                      </div>
                      <SocialMediaButtons socialLinks={event.socialLinks} />
                    </div>
                  </div>
                </div>
              )}</For>
            </div>
          </section>

          {/* Sponsorships — Numbered cards */}
          <section class="mb-32 relative">
            <div class="absolute -top-10 right-20 w-64 h-64 bg-amber-500/5 rounded-full blur-[100px] -z-10" />
            <div class="mb-12">
              <div class="text-xs font-bold tracking-[0.3em] gradient-text mb-2">GIVING BACK</div>
              <h2 class="text-3xl md:text-4xl font-bold text-white">Sponsorships</h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <For each={community.sponsorships}>{(sponsorship: Sponsorship, i) => (
                <div class="relative group">
                  <div class="absolute inset-0 bg-amber-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div class="relative clip-corner p-[1px] bg-gradient-to-br from-amber-500/20 to-transparent">
                    <div class="bg-zinc-950 p-10 h-full clip-corner">
                      <span class="text-6xl font-black text-amber-500/10 absolute top-4 right-8">
                        {String(i() + 1).padStart(2, '0')}
                      </span>
                      <div class="flex items-center gap-4 mb-6">
                        <img
                          src={sponsorship.icon}
                          alt={sponsorship.name}
                          class="h-14 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                        <div class="h-px flex-1 bg-zinc-800/50" />
                      </div>
                      <h3 class="text-xl font-bold text-white mb-2">{sponsorship.name}</h3>
                      <div class="mb-4">
                        <p class="text-amber-400 font-bold text-sm">{sponsorship.event}</p>
                        <p class="text-zinc-500 text-xs">{sponsorship.eventDate}</p>
                        <Show when={sponsorship.theme}>
                          <p class="text-zinc-400 text-xs italic mt-1">"{sponsorship.theme}"</p>
                        </Show>
                      </div>
                      <p class="text-zinc-400 leading-relaxed">{sponsorship.description}</p>
                      <SocialMediaButtons socialLinks={sponsorship.socialLinks} />
                    </div>
                  </div>
                </div>
              )}</For>
            </div>
          </section>

          {/* CTA */}
          <section>
            <div class="clip-corner-both bg-zinc-900/30 p-12 md:p-20 relative border border-amber-500/10 overflow-hidden">
              <div class="relative z-10 text-center max-w-2xl mx-auto">
                <h2 class="text-3xl md:text-4xl font-bold mb-6">
                  Host Your Event <span class="gradient-text">With Us</span>
                </h2>
                <p class="text-zinc-400 text-lg mb-8">
                  Looking to organize a workshop, meetup, or community event? Our spaces are built for gatherings that matter.
                </p>
                <Button
                  as="a"
                  href="https://www.facebook.com/KahitSan"
                  target="_blank"
                  rel="noopener noreferrer"
                  intent="primary"
                  variant="clip1"
                  size="lg"
                  effect="scan-line"
                  icon={() => <Facebook size={18} />}
                  iconPosition="left"
                >
                  Get in Touch
                </Button>
              </div>
              <div class="absolute -bottom-16 -right-16 text-[12rem] font-black text-white/[0.02] select-none pointer-events-none uppercase">KHTS</div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default CommunityPage
