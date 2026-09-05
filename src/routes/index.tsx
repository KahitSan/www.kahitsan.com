import { Link, Meta, Title } from '@solidjs/meta'
import { A } from '@solidjs/router'
import { For, type Component } from 'solid-js'
import ExternalLink from 'lucide-solid/icons/external-link'
import MapPin from 'lucide-solid/icons/map-pin'
import ClickToLoadMap from '~/components/ClickToLoadMap'
import Footer from '~/components/Footer'
import Button from '~/components/ui/Button/Button'
import { Picture } from '~/components/ui'
import hilingaLogo from '~/assets/hilinga-logo.png?w=72;144&as=picture'
import entranceArea from '~/assets/images/panganiban/entrance-area.jpg?w=327;558;717;925;1116;1303&as=picture'
import innerArea from '~/assets/images/panganiban/inner-area.jpg?w=327;662;717;925;1324;1434;1850&as=picture'
import { communityRecords } from '~/data/community'

const homeEntranceSizes =
  '(max-width: 767px) calc(100vw - 50px), (max-width: 1023px) calc(100vw - 98px), (max-width: 1279px) calc(50vw - 82px), 558px'
const homeInnerSizes =
  '(max-width: 767px) calc(100vw - 50px), (max-width: 1023px) calc(100vw - 98px), (max-width: 1279px) calc(58.333vw - 84.667px), 662px'
const organizationLogoSizes = {
  aces: '(max-width: 767px) 54px, 70px',
  uapsa: '(max-width: 767px) 50px, 65px',
  uapga: '(max-width: 767px) 72px, 93px',
  ateneo: '(max-width: 767px) 61px, 79px',
} as const

const organizations = communityRecords
  .filter(
    (
      record
    ): record is Extract<
      (typeof communityRecords)[number],
      { category: 'partnership' | 'sponsorship' }
    > => Boolean(record.featured) && record.category !== 'event' && Boolean(record.icon)
  )
  .map((record) => ({
    name: record.name,
    relationship:
      record.category === 'partnership' ? 'Coworking partnership' : 'Community sponsorship',
    icon: record.icon!,
    logoKey: record.logoKey,
  }))

const HomePage: Component = () => {
  return (
    <>
      <Title>KahitSan Solutions Corp. | Coworking and Hilinga</Title>
      <Meta
        name="description"
        content="KahitSan Solutions Corp. is the Naga City company behind KahitSan Coworking and Hilinga."
      />
      <Meta
        name="keywords"
        content="KahitSan Solutions Corp., KahitSan Coworking, Hilinga, coworking space, Naga City"
      />
      <Meta property="og:title" content="KahitSan Solutions Corp." />
      <Meta
        property="og:description"
        content="The Naga City company behind KahitSan Coworking and Hilinga."
      />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://www.kahitsan.com" />
      <Link rel="canonical" href="https://www.kahitsan.com" />
      <Link
        rel="preload"
        as="image"
        imagesrcset={entranceArea.sources?.avif}
        imagesizes={homeEntranceSizes}
        type="image/avif"
        fetchpriority="high"
      />

      <main class="min-h-screen page-bg">
        <section class="ks-grid-surface border-b border-zinc-800/60">
          <div class="px-6 pt-24 pb-14 md:px-12 md:pt-28 md:pb-20 max-w-7xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div class="lg:col-span-6">
                <p class="ks-heading-kicker mb-4">Naga City, Philippines</p>
                <h1 class="ks-display-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight mb-6">
                  KahitSan <span class="ks-heading-accent">Solutions Corp.</span>
                </h1>
                <p class="text-zinc-300 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
                  We operate KahitSan Coworking and build Hilinga, combining a dependable place to
                  work with practical business software.
                </p>
                <div class="flex flex-wrap gap-4">
                  <Button as={A} href="/coworking" intent="primary" variant="clip1">
                    Explore Coworking
                  </Button>
                  <Button as={A} href="/about" intent="secondary" variant="clip1">
                    About the Company
                  </Button>
                </div>
              </div>

              <div class="lg:col-span-6 ks-media-frame clip-corner-both border border-zinc-800/70">
                <Picture
                  src={entranceArea}
                  alt="KahitSan Coworking entrance area on Panganiban Drive in Naga City"
                  class="ks-muted-media w-full h-full min-h-[320px] md:min-h-[480px] object-cover"
                  decoding="async"
                  sizes={homeEntranceSizes}
                  fetchpriority="high"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          class="px-6 py-14 md:px-12 md:py-20 border-b border-zinc-800/60"
          aria-labelledby="organization-proof"
        >
          <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <header class="lg:col-span-4">
              <p class="ks-heading-kicker mb-4">Community relationships</p>
              <h2 id="organization-proof" class="ks-section-title mb-5">
                Organizations we have worked with
              </h2>
              <p class="text-zinc-400 leading-relaxed mb-7">
                These relationships include coworking partnerships, event participation, and
                community sponsorships.
              </p>
              <Button as={A} href="/community" intent="secondary" variant="clip1">
                View Community
              </Button>
            </header>

            <div class="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-800 border border-zinc-800">
              <For each={organizations}>
                {(organization) => (
                  <article
                    class="group card-bg min-h-52 p-5 flex flex-col items-center text-center"
                    data-organization-card=""
                  >
                    <div
                      class="h-20 md:h-24 w-full flex items-center justify-center"
                      data-organization-logo-row=""
                    >
                      <div class="org-logo-wrap w-20 h-20 md:w-24 md:h-24 p-3 flex items-center justify-center">
                        <Picture
                          src={organization.icon}
                          alt={`${organization.name} logo`}
                          class="org-logo w-full h-full object-contain"
                          data-logo={organization.logoKey}
                          sizes={
                            organization.logoKey
                              ? organizationLogoSizes[organization.logoKey]
                              : '80px'
                          }
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                    <div
                      class="mt-5 w-full flex flex-1 flex-col items-center"
                      data-organization-text=""
                    >
                      <h3 class="ks-record-title text-sm">{organization.name}</h3>
                      <p class="mt-auto pt-2 text-xs text-zinc-400">{organization.relationship}</p>
                    </div>
                  </article>
                )}
              </For>
            </div>
          </div>
        </section>

        <section
          class="px-6 py-14 md:px-12 md:py-20 border-b border-zinc-800/60"
          aria-labelledby="coworking-heading"
        >
          <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div class="lg:col-span-5">
                <p class="ks-heading-kicker mb-4">Physical workspace</p>
                <h2
                  id="coworking-heading"
                  class="ks-section-title text-3xl md:text-5xl font-bold tracking-tight mb-5"
                >
                  KahitSan Coworking
                </h2>
                <p class="text-zinc-300 text-lg leading-relaxed mb-3">
                  Flexible workspace on Panganiban Drive, Naga City, with high-speed internet, power
                  at each table, and unlimited coffee.
                </p>
                <p class="text-zinc-400 mb-8">
                  Walk in for a few hours or choose monthly 24/7 access.
                </p>

                <dl class="border-t border-zinc-800/80 mb-8">
                  <div class="flex items-baseline justify-between gap-6 py-4">
                    <dt class="text-zinc-300">Entrance Area</dt>
                    <dd class="font-bold tabular-nums text-amber-100">₱129 / 4 hours</dd>
                  </div>
                  <div class="flex items-baseline justify-between gap-6 py-4 border-t border-zinc-800/80">
                    <dt class="text-zinc-300">Inner Area</dt>
                    <dd class="font-bold tabular-nums text-amber-100">₱189 / 4 hours</dd>
                  </div>
                  <div class="flex items-baseline justify-between gap-6 py-4 border-y border-zinc-800/80">
                    <dt class="text-zinc-300">Call Booth</dt>
                    <dd class="font-bold tabular-nums text-amber-100">₱379 / 5 hours</dd>
                  </div>
                </dl>

                <Button as={A} href="/coworking" intent="primary" variant="clip1">
                  View Spaces and Pricing
                </Button>
              </div>

              <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <figure class="sm:col-span-2 ks-media-frame clip-corner-both border border-zinc-800/70">
                  <Picture
                    src={innerArea}
                    alt="Desks and ergonomic chairs in the KahitSan Coworking inner area"
                    class="ks-muted-media w-full h-[280px] md:h-[360px] object-cover"
                    loading="lazy"
                    decoding="async"
                    sizes={homeInnerSizes}
                  />
                </figure>
                <div class="border border-zinc-800 p-5 clip-corner bg-zinc-950/35">
                  <h3 class="ks-record-title font-bold mb-2">A place to focus</h3>
                  <p class="text-sm text-zinc-400 leading-relaxed">
                    Open seating and a quieter inner area for study, remote work, and individual
                    projects.
                  </p>
                </div>
                <div class="border border-zinc-800 p-5 clip-corner bg-zinc-950/35">
                  <h3 class="ks-record-title font-bold mb-2">Room for private calls</h3>
                  <p class="text-sm text-zinc-400 leading-relaxed">
                    A sound-proof call booth for two-person meetings and focused conversations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          class="px-6 py-14 md:px-12 md:py-20 border-b border-zinc-800/60"
          aria-labelledby="hilinga-heading"
        >
          <div class="max-w-7xl mx-auto">
            <div class="ks-grid-surface grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border border-zinc-800 p-7 md:p-10 clip-corner-both">
              <div class="lg:col-span-5 flex items-center gap-5">
                <div class="w-20 h-20 md:w-24 md:h-24 shrink-0 bg-[#f4efe4] p-3 clip-corner">
                  <Picture
                    src={hilingaLogo}
                    alt="Hilinga logo"
                    class="ks-logo-media w-full h-full object-contain"
                    sizes="(max-width: 767px) 56px, 72px"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div>
                  <p class="ks-heading-kicker mb-3">Software product</p>
                  <h2 id="hilinga-heading" class="ks-section-title text-3xl md:text-4xl font-bold">
                    Hilinga
                  </h2>
                </div>
              </div>
              <div class="lg:col-span-7">
                <p class="text-zinc-300 text-lg leading-relaxed mb-7 max-w-2xl">
                  Hilinga is business software shaped by the real operating problems we encounter
                  while building and running services.
                </p>
                <Button
                  as="a"
                  href="https://www.hilinga.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  intent="secondary"
                  variant="clip1"
                  icon={() => <ExternalLink size={17} aria-hidden="true" />}
                  iconPosition="right"
                >
                  Visit Hilinga
                  <span class="sr-only"> (opens in a new tab)</span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section class="px-6 py-14 md:px-12 md:py-20" aria-labelledby="office-location">
          <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            <div class="lg:col-span-4 border border-zinc-800 p-7 md:p-9 clip-corner-both flex flex-col justify-between bg-zinc-950/35">
              <div>
                <p class="ks-heading-kicker mb-4">Main office</p>
                <h2
                  id="office-location"
                  class="ks-section-title text-3xl md:text-4xl font-bold mb-5"
                >
                  Panganiban Drive
                </h2>
                <p class="text-zinc-300 leading-relaxed mb-6">
                  KahitSan Solutions Corp. operates from KahitSan Coworking in Naga City.
                </p>
                <div class="flex items-start gap-3 text-sm text-zinc-400 mb-8">
                  <MapPin size={18} class="text-amber-500 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Panganiban Drive, Naga City, Camarines Sur, Philippines</span>
                </div>
              </div>
              <Button
                as="a"
                href="https://share.google/TFC9YSJ3R8ExKdnUH"
                target="_blank"
                rel="noopener noreferrer"
                intent="primary"
                variant="clip1"
                icon={() => <ExternalLink size={16} aria-hidden="true" />}
                iconPosition="right"
              >
                Open in Google Maps
              </Button>
            </div>

            <ClickToLoadMap
              testId="home-location-map"
              locationName="KahitSan Coworking, Panganiban Drive"
              address="Panganiban Drive, Naga City, Camarines Sur, Philippines"
              embedUrl="https://maps.google.com/maps?q=KahitSan+Coworking+Space,+Panganiban+Drive,+Naga+City,+Philippines&t=&z=17&ie=UTF8&iwloc=&output=embed"
              title="KahitSan Solutions Corp. main office at KahitSan Coworking"
              class="lg:col-span-8 min-h-[340px] md:min-h-[430px]"
            />
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

export default HomePage
