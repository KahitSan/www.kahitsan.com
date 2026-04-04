import { Title, Meta, Link } from "@solidjs/meta";
import { For, Show } from 'solid-js'
import type { Component } from 'solid-js'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Calendar from 'lucide-solid/icons/calendar'
import MapPin from 'lucide-solid/icons/map-pin'
import Users from 'lucide-solid/icons/users'
import Facebook from 'lucide-solid/icons/facebook'
import Star from 'lucide-solid/icons/star'
import Building2 from 'lucide-solid/icons/building-2'
import Gift from 'lucide-solid/icons/gift'
import Instagram from 'lucide-solid/icons/instagram'
import ExternalLink from 'lucide-solid/icons/external-link'
import Video from 'lucide-solid/icons/video'
import Button from '~/components/ui/Button/Button'
import type { FeaturedEvent, Partnership, Sponsorship } from '~/types/community'
import { communityData } from '~/data/community'

const CommunityPage: Component = () => {
  const IconRenderer = (props: { icon: any; alt: string; className?: string }) => {
    if (typeof props.icon === 'string') {
      return <img src={props.icon} alt={props.alt} class={`h-32 object-contain ${props.className || ''}`} />
    }
    return <props.icon size={24} class={`text-amber-400 ${props.className || ''}`} />
  }

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
    const getPlatformStyling = (platform: string) => {
      switch (platform) {
        case 'facebook': return { class: 'bg-blue-500/20 border-blue-500/40 text-blue-400 hover:bg-blue-500/30', intent: 'secondary' as const }
        case 'instagram': return { class: 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/40 text-purple-400', intent: 'secondary' as const }
        default: return { class: 'bg-zinc-700/40 border-zinc-600/40 text-zinc-400', intent: 'secondary' as const }
      }
    }
    return (
      <div class="flex flex-wrap gap-2 mt-4">
        <For each={Object.entries(props.socialLinks)}>{([platform, url]) => (
          <Show when={url}>
            {(() => {
              const styling = getPlatformStyling(platform)
              return (
                <Button
                  as="a"
                  href={url as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  intent={styling.intent}
                  variant="clip1"
                  size="sm"
                  icon={getSocialIcon(platform)}
                  iconPosition="left"
                  class={`text-xs ${styling.class}`}
                  noPulse
                  noGlow
                  title={platform.charAt(0).toUpperCase() + platform.slice(1)}
                >
                  {platform.charAt(0).toUpperCase() + platform.slice(1)}
                </Button>
              )
            })()}
          </Show>
        )}</For>
      </div>
    )
  }

  const community = communityData

  return (
    <>
      <Title>Community Engagement - KahitSan</Title>
      <Meta name="description" content="Join our vibrant community. Events, partnerships with BISCAST ACES and UAPSA, and sponsorship programs." />
      <Meta property="og:title" content="Community Engagement - KahitSan" />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://www.kahitsan.com/community" />
      <Link rel="canonical" href="https://www.kahitsan.com/community" />

      <div class="min-h-screen" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)' }}>
        <Header />

        <div class="relative py-24 px-4">
          <div class="absolute inset-0 pointer-events-none overflow-hidden">
            <div class="absolute top-0 right-0 w-96 h-96 opacity-10" style="background:radial-gradient(circle at top right, rgba(201, 169, 97, 0.3) 0%, transparent 60%)" />
          </div>

          <div class="relative z-10 max-w-6xl mx-auto">
            <div class="text-center mb-12">
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/30 border border-zinc-800/50 mb-3">
                <Users size={16} class="text-amber-400" />
                <span class="text-xs font-bold">Building Together</span>
              </div>
              <h1 class="text-3xl md:text-4xl font-bold mb-3">
                Community <span class="gradient-text">Engagement</span>
              </h1>
              <p class="text-base md:text-lg text-zinc-400">
                Supporting local events, partnerships, and educational programs
              </p>
            </div>

            {/* Featured Events */}
            <div class="mb-16">
              <h2 class="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
                <Star size={24} class="text-amber-500" />
                <span><span class="gradient-text">Featured</span> Events</span>
              </h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <For each={community.featuredEvents}>{(event: FeaturedEvent) => (
                  <div class="backdrop-blur-sm border border-zinc-800/50 clip-corner p-6 relative overflow-hidden group hover:border-zinc-700/50 hover:scale-[1.02] transition-all" style={{ background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)' }}>
                    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <div class="relative z-10">
                      <div class="flex items-start gap-4 mb-4">
                        <div class="rounded-lg shrink-0">
                          <IconRenderer icon={event.icon} alt={event.organization} />
                        </div>
                        <div class="flex-1">
                          <h3 class="text-lg font-bold text-white mb-2">{event.title}</h3>
                          <div class="flex items-center gap-2 text-xs text-zinc-400 mb-2">
                            <Calendar size={12} />
                            {event.date}
                          </div>
                        </div>
                      </div>
                      <p class="text-sm text-zinc-300 mb-4 leading-relaxed">{event.description}</p>
                      <div class="space-y-2 text-xs">
                        <div class="flex items-center gap-2 text-zinc-500">
                          <MapPin size={12} class="text-amber-400" />
                          <span>{event.location}</span>
                        </div>
                        <div class="flex items-center gap-2 text-zinc-500">
                          <Users size={12} class="text-amber-400" />
                          <span><span class="text-amber-500">Organization:</span> {event.organization}</span>
                        </div>
                      </div>
                      <SocialMediaButtons socialLinks={event.socialLinks} />
                    </div>
                  </div>
                )}</For>
              </div>
            </div>

            {/* Partnerships */}
            <div class="mb-16">
              <h2 class="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
                <Building2 size={24} class="text-amber-500" />
                <span class="gradient-text">Partnerships</span>
              </h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <For each={community.partnerships}>{(partner: Partnership) => (
                  <div class="backdrop-blur-sm border border-zinc-800/50 clip-corner p-6 relative overflow-hidden group hover:border-zinc-700/50 hover:scale-[1.02] transition-all" style={{ background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)' }}>
                    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <div class="relative z-10">
                      <div class="flex items-start gap-4">
                        <div class="rounded-lg shrink-0">
                          <IconRenderer icon={partner.icon} alt={partner.name} />
                        </div>
                        <div class="flex-1">
                          <h3 class="text-lg font-bold text-white mb-3">{partner.name}</h3>
                          <div class="mb-3">
                            <div class="inline-block px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-bold mb-2">
                              {partner.discount}
                            </div>
                            <p class="text-xs text-zinc-500">{partner.effectiveDate}</p>
                          </div>
                          <p class="text-sm text-zinc-300 leading-relaxed">{partner.description}</p>
                          <SocialMediaButtons socialLinks={partner.socialLinks} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}</For>
              </div>
            </div>

            {/* Sponsorships */}
            <div class="mb-12">
              <h2 class="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
                <Gift size={24} class="text-amber-500" />
                <span class="gradient-text">Sponsorships</span>
              </h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <For each={community.sponsorships}>{(sponsorship: Sponsorship) => (
                  <div class="backdrop-blur-sm border border-zinc-800/50 clip-corner p-6 relative overflow-hidden group hover:border-zinc-700/50 hover:scale-[1.02] transition-all" style={{ background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)' }}>
                    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <div class="relative z-10">
                      <div class="flex items-start gap-4">
                        <div class="rounded-lg shrink-0">
                          <IconRenderer icon={sponsorship.icon} alt={sponsorship.name} />
                        </div>
                        <div class="flex-1">
                          <h3 class="text-lg font-bold text-white mb-3">{sponsorship.name}</h3>
                          <div class="mb-3 space-y-1">
                            <p class="text-sm font-bold text-white">{sponsorship.event}</p>
                            <p class="text-xs text-zinc-400">{sponsorship.eventDate}</p>
                            <Show when={sponsorship.theme}>
                              <p class="text-xs text-amber-400 italic">"{sponsorship.theme}"</p>
                            </Show>
                          </div>
                          <p class="text-sm text-zinc-300 leading-relaxed">{sponsorship.description}</p>
                          <SocialMediaButtons socialLinks={sponsorship.socialLinks} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}</For>
              </div>
            </div>

            {/* CTA */}
            <div class="backdrop-blur-sm border border-zinc-800/50 clip-corner p-8 text-center" style={{ background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)' }}>
              <h3 class="text-xl md:text-2xl font-bold mb-3">
                Host Your Event <span class="gradient-text">With Us</span>
              </h3>
              <p class="text-sm md:text-base text-zinc-400 mb-6 max-w-2xl mx-auto">
                Looking to organize a workshop, meetup, or community event? Our space is perfect for gatherings.
              </p>
              <a
                href="https://www.facebook.com/KahitSan"
                class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-500/20 border border-amber-500/30 text-amber-400 hover:bg-amber-500/30 transition-all font-medium"
              >
                <Facebook size={18} />
                <span>Get in Touch</span>
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default CommunityPage
