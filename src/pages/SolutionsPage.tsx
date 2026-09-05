import { For, Show } from 'solid-js'
import Footer from '~/components/Footer'
import Button from '~/components/ui/Button/Button'
import {
  pricingData,
  additionalPricingData,
  formatDuration,
  PricingType,
  type PricingOption,
} from './SpacesPage/Panganiban/pricingData'
import { communityData } from '~/data/community'
import floorPlan from '~/assets/floor_plan.png?w=327;640;717;1182&as=picture'
import { Picture } from '~/components/ui'
import ExternalLink from 'lucide-solid/icons/external-link'
import MapPin from 'lucide-solid/icons/map-pin'
import ClickToLoadMap from '~/components/ClickToLoadMap'

const pricingCardSizes =
  '(max-width: 767px) calc(100vw - 50px), (max-width: 1279px) calc(33.333vw - 55.333px), 372px'
const allAccessSizes =
  '(max-width: 767px) calc(100vw - 50px), (max-width: 1023px) calc(100vw - 98px), (max-width: 1279px) calc(41.667vw - 40.833px), 493px'
const floorPlanSizes =
  '(max-width: 767px) calc(100vw - 50px), (max-width: 1279px) calc(100vw - 98px), 1182px'

type PartnershipStatus = (typeof communityData.partnerships)[number]['status']

const partnershipStatusLabels: Record<PartnershipStatus, string> = {
  current: 'Current partnership',
  upcoming: 'Upcoming partnership',
  past: 'Past partnership',
}

const getPartnershipDiscountLabel = (status: PartnershipStatus, discount: string) => {
  if (status === 'past') return `${discount} at the time`
  if (status === 'upcoming') return `${discount} when active`
  return discount
}

function HourlyTierCard(props: { option: PricingOption }) {
  return (
    <div class="bg-zinc-900/60 clip-corner-both p-[1px] group hover:bg-amber-500/20 transition-colors duration-500">
      <div class="bg-zinc-950 clip-corner-both h-full flex flex-col">
        <Show when={props.option.coverImage} keyed>
          {(coverImage) => (
            <div class="ks-media-frame">
              <Picture
                src={coverImage}
                alt={props.option.name}
                class="ks-muted-media w-full h-48 object-cover"
                sizes={pricingCardSizes}
                loading="lazy"
                decoding="async"
              />
            </div>
          )}
        </Show>
        <div class="flex flex-col flex-1 p-5 md:p-8">
          <h3 class="ks-record-title text-xl md:text-2xl font-bold mb-2">{props.option.name}</h3>
          <p class="text-zinc-400 mb-6 text-sm">{props.option.description}</p>

          <div class="mt-auto space-y-3">
            {/* Main package */}
            <div class="flex justify-between items-center border-b border-zinc-800/50 pb-2">
              <span class="text-xs uppercase font-bold tracking-wider text-zinc-500">
                {formatDuration(props.option.mainPricing.duration)}
              </span>
              <div class="text-right">
                <span class="font-bold text-amber-400">
                  ₱{props.option.mainPricing.walkinPrice}
                </span>
              </div>
            </div>
            {/* Additional tiers */}
            <For each={props.option.additionalPricing}>
              {(tier) => (
                <div class="flex justify-between items-center border-b border-zinc-800/50 pb-2">
                  <span class="text-xs uppercase font-bold tracking-wider text-zinc-500">
                    <Show
                      when={tier.pricingType === PricingType.EXTENSION}
                      fallback={formatDuration(tier.duration)}
                    >
                      +{formatDuration(tier.duration)} ext.
                    </Show>
                  </span>
                  <div class="text-right">
                    <span class="text-zinc-300 font-bold">₱{tier.walkinPrice}</span>
                  </div>
                </div>
              )}
            </For>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SolutionsPage() {
  const allAccess = additionalPricingData.find((o) => o.id === 'all-access-membership')!

  const decisionGuide = [
    {
      need: 'A casual work session',
      choice: 'Entrance Area',
      detail: 'Comfortable seating near the entrance.',
    },
    {
      need: 'Quieter focused work',
      choice: 'Inner Area',
      detail: 'Ergonomic chairs and dedicated WiFi.',
    },
    {
      need: 'Private calls or a two-person meeting',
      choice: 'Call Booth',
      detail: 'A sound-proof private space.',
    },
    {
      need: 'Regular access at any hour',
      choice: 'All-Access Membership',
      detail: '24/7 entry through biometric access.',
    },
  ]

  return (
    <div class="min-h-screen page-bg transition-colors duration-300">
      <main class="pt-20 pb-12 md:pt-32 md:pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Hero */}
        <section class="ks-grid-surface mb-12 md:mb-20 border-y border-zinc-800/60 px-6 py-10 md:px-10 md:py-14">
          <p class="ks-heading-kicker mb-4">KahitSan Coworking</p>
          <h1 class="ks-display-heading text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6 max-w-4xl">
            Coworking in Naga City, priced for <span class="ks-heading-accent">how you work.</span>
          </h1>
          <p class="text-zinc-400 text-base md:text-lg max-w-2xl">
            Choose an open workspace, a quieter inner area, a private call booth, or monthly 24/7
            access at our Panganiban Drive location.
          </p>
          <div class="flex flex-wrap gap-6 mt-8 text-sm">
            <For
              each={[
                'Short stays from 4 hours',
                'Hourly extensions',
                'Unlimited coffee',
                'High-speed internet',
                'Power at each table',
              ]}
            >
              {(item) => (
                <div class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span class="text-zinc-500">{item}</span>
                </div>
              )}
            </For>
          </div>
        </section>

        {/* Current Pricing */}
        <section class="mb-16 md:mb-32" aria-labelledby="current-pricing">
          <div class="mb-8 md:mb-12">
            <h2
              id="current-pricing"
              class="ks-section-title text-2xl md:text-3xl lg:text-4xl font-bold mb-3"
            >
              Current walk-in rates
            </h2>
            <p class="text-zinc-400 max-w-2xl">
              Pick a workspace and starting duration. Extend by the hour where listed.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <For each={pricingData}>{(option) => <HourlyTierCard option={option} />}</For>
          </div>
        </section>

        {/* Decision Guide */}
        <section class="mb-16 md:mb-32" aria-labelledby="decision-guide">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div class="lg:col-span-4">
              <h2 id="decision-guide" class="ks-section-title text-2xl md:text-3xl font-bold mb-3">
                Which option fits?
              </h2>
              <p class="text-zinc-400">
                Start with what you need from the space. Duration and rates are listed above.
              </p>
              <div class="mt-6 flex flex-wrap gap-3">
                <Button as="a" href="/contact" intent="primary" variant="clip1">
                  Contact us
                </Button>
                <Button
                  as="a"
                  href="#location"
                  intent="secondary"
                  variant="clip2"
                  icon={() => <MapPin size={16} aria-hidden="true" />}
                  iconPosition="left"
                >
                  Plan a visit
                </Button>
              </div>
            </div>
            <dl class="border-t border-zinc-800 lg:col-span-8">
              <For each={decisionGuide}>
                {(item) => (
                  <div class="grid grid-cols-1 sm:grid-cols-[1fr_1.1fr] gap-2 sm:gap-6 py-5 border-b border-zinc-800">
                    <dt class="text-zinc-400 text-sm">{item.need}</dt>
                    <dd>
                      <div class="ks-record-title font-bold">{item.choice}</div>
                      <div class="text-zinc-500 text-sm mt-1">{item.detail}</div>
                    </dd>
                  </div>
                )}
              </For>
            </dl>
          </div>
        </section>

        {/* Membership */}
        <section class="mb-16 md:mb-32">
          <div class="flex items-end justify-between mb-8 md:mb-12">
            <div>
              <h2 class="ks-section-title text-2xl md:text-3xl lg:text-4xl font-bold">
                All-Access Membership
              </h2>
            </div>
            <div class="hidden md:block text-zinc-500 text-right max-w-xs text-sm">
              Monthly 24/7 biometric access, with a three-month bundle available.
            </div>
          </div>

          <div class="bg-amber-500/10 p-[1px] clip-corner-both">
            <div
              data-testid="all-access-layout"
              class="bg-zinc-900 h-full clip-corner-both grid grid-cols-1 lg:grid-cols-12 overflow-hidden"
            >
              <Show when={allAccess.coverImage} keyed>
                {(coverImage) => (
                  <div data-testid="all-access-media" class="ks-media-frame lg:col-span-5">
                    <Picture
                      src={coverImage}
                      alt={allAccess.name}
                      class="ks-muted-media w-full h-56 lg:h-full lg:min-h-[420px] object-cover"
                      sizes={allAccessSizes}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                )}
              </Show>
              <div
                data-testid="all-access-details"
                class="lg:col-span-4 p-6 md:p-10 flex flex-col justify-center"
              >
                <h3 class="ks-record-title text-2xl md:text-3xl font-bold mb-4">
                  {allAccess.name}
                </h3>
                <p class="text-zinc-400 mb-8">{allAccess.description}</p>
                <ul class="space-y-4">
                  <li class="flex items-center gap-3 text-sm text-zinc-300">
                    <span class="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    Biometric Entry & Identification
                  </li>
                  <li class="flex items-center gap-3 text-sm text-zinc-300">
                    <span class="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    High-speed Fiber Connection
                  </li>
                  <li class="flex items-center gap-3 text-sm text-zinc-300">
                    <span class="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    Complimentary Unlimited Coffee
                  </li>
                </ul>
              </div>
              <div
                data-testid="all-access-pricing"
                class="lg:col-span-3 border-t border-zinc-800/60 bg-zinc-950/50 p-6 md:p-8 flex flex-col justify-center items-center text-center lg:border-t-0 lg:border-l"
              >
                <div class="mb-1 text-3xl font-bold text-amber-400 md:text-4xl">
                  ₱{allAccess.mainPricing.walkinPrice.toLocaleString()}
                </div>
                <div class="text-zinc-500 uppercase text-[10px] tracking-widest mb-4">
                  Monthly / Walk-in
                </div>
                <For each={allAccess.additionalPricing}>
                  {(tier) => (
                    <div class="w-full p-3 bg-zinc-800/50 clip-corner mb-2 text-center">
                      <div class="text-zinc-400 text-xs font-bold mb-1">
                        {formatDuration(tier.duration)}
                      </div>
                      <div class="text-zinc-300 text-sm">₱{tier.walkinPrice.toLocaleString()}</div>
                      <Show when={tier.savings}>
                        <div class="text-green-400 text-xs mt-1">{tier.savings}</div>
                      </Show>
                    </div>
                  )}
                </For>
              </div>
            </div>
          </div>
        </section>

        {/* Floor Plan */}
        <section class="mb-16 md:mb-32">
          <h2 class="ks-section-title text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            Panganiban Drive floor plan
          </h2>
          <p class="text-zinc-400 mb-6 md:mb-8 max-w-2xl">
            Compare the entrance area, inner area, and call booth before choosing your seat.
          </p>
          <div class="clip-corner-both overflow-hidden bg-zinc-900/60 p-[1px]">
            <div class="clip-corner-both overflow-hidden">
              <Picture
                src={floorPlan}
                alt="Floor plan showing the workspace areas at KahitSan Coworking on Panganiban Drive"
                class="w-full h-auto"
                loading="eager"
                decoding="async"
                sizes={floorPlanSizes}
              />
            </div>
          </div>
        </section>

        {/* Location */}
        <section
          id="location"
          class="mb-16 md:mb-32 scroll-mt-24 border-y border-zinc-800/60 py-12 md:scroll-mt-32 md:py-16"
        >
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            <div class="ks-grid-surface lg:col-span-4 border border-zinc-800 p-7 md:p-9 clip-corner-both flex flex-col justify-between">
              <div>
                <p class="ks-heading-kicker mb-4">Location</p>
                <h2 class="ks-section-title text-2xl md:text-3xl font-bold mb-5">
                  Visit KahitSan Coworking
                </h2>
                <div class="flex items-start gap-3 text-zinc-400 mb-8">
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
              testId="coworking-location-map"
              locationName="KahitSan Coworking, Panganiban Drive"
              address="Panganiban Drive, Naga City, Camarines Sur, Philippines"
              embedUrl="https://maps.google.com/maps?q=KahitSan+Coworking+Space,+Panganiban+Drive,+Naga+City,+Philippines&t=&z=17&ie=UTF8&iwloc=&output=embed"
              title="KahitSan Coworking Space location"
              class="lg:col-span-8 min-h-[360px] md:min-h-[430px]"
            />
          </div>
        </section>

        {/* Partnership Records */}
        <section class="pb-12 md:pb-24">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <header class="lg:col-span-3">
              <h2 class="ks-section-title text-2xl md:text-3xl font-bold mb-4">
                Partnership records
              </h2>
              <p class="text-zinc-400 text-sm leading-relaxed">
                Discount terms below come from dated community records. Check each status, then
                contact us to confirm current eligibility before booking.
              </p>
            </header>

            <div class="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800">
              <For each={communityData.partnerships}>
                {(partnership) => (
                  <div class="group min-h-40 bg-zinc-950/90 p-5 flex flex-col items-center justify-center text-center">
                    <Picture
                      src={partnership.icon}
                      alt={`${partnership.name} logo`}
                      class="ks-logo-media w-20 h-20 object-contain mb-4"
                      title={`${partnership.name}: ${getPartnershipDiscountLabel(
                        partnership.status,
                        partnership.discount
                      )}`}
                      sizes="80px"
                      loading="lazy"
                      decoding="async"
                    />
                    <p class="ks-record-title text-sm font-bold">{partnership.name}</p>
                    <p class="mt-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                      {partnershipStatusLabels[partnership.status]}
                    </p>
                    <p class="text-xs text-amber-400 mt-1">
                      {getPartnershipDiscountLabel(partnership.status, partnership.discount)}
                    </p>
                    <time dateTime={partnership.date.start} class="mt-1 text-xs text-zinc-500">
                      {partnership.date.label}
                    </time>
                  </div>
                )}
              </For>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
