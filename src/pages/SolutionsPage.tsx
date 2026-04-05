import { For, Show } from 'solid-js'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Button from '~/components/ui/Button/Button'
import { pricingData, additionalPricingData, formatDuration, PricingType, type PricingOption } from './SpacesPage/Panganiban/pricingData'
import { communityData } from '~/data/community'
import logo from '~/assets/kahitsan-coworking-logo-dark.png'
import floorPlan from '~/assets/floor_plan.png'

function HourlyTierCard(props: { option: PricingOption }) {
  return (
    <div class="bg-zinc-900/60 clip-corner-both p-[1px] group hover:bg-amber-500/20 transition-colors duration-500">
      <div class="bg-zinc-950 clip-corner-both h-full flex flex-col">
        <Show when={props.option.coverImage}>
          <img
            src={props.option.coverImage}
            alt={props.option.name}
            class="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </Show>
        <div class="flex flex-col flex-1 p-8">
          <h3 class="text-2xl font-bold text-white mb-2">{props.option.name}</h3>
          <p class="text-zinc-400 mb-6 text-sm">{props.option.description}</p>

          <div class="mt-auto space-y-3">
            {/* Main package */}
            <div class="flex justify-between items-center border-b border-zinc-800/50 pb-2">
              <span class="text-xs uppercase font-bold tracking-wider text-zinc-500">
                {formatDuration(props.option.mainPricing.duration)}
              </span>
              <div class="text-right">
                <span class="gradient-text font-bold">₱{props.option.mainPricing.walkinPrice}</span>
                <span class="text-zinc-600 text-xs ml-1">/ ₱{props.option.mainPricing.partnerPrice}</span>
              </div>
            </div>
            {/* Additional tiers */}
            <For each={props.option.additionalPricing}>
              {(tier) => (
                <div class="flex justify-between items-center border-b border-zinc-800/50 pb-2">
                  <span class="text-xs uppercase font-bold tracking-wider text-zinc-500">
                    <Show when={tier.pricingType === PricingType.EXTENSION} fallback={formatDuration(tier.duration)}>
                      +{formatDuration(tier.duration)} ext.
                    </Show>
                  </span>
                  <div class="text-right">
                    <span class="text-zinc-300 font-bold">₱{tier.walkinPrice}</span>
                    <span class="text-zinc-600 text-xs ml-1">/ ₱{tier.partnerPrice}</span>
                  </div>
                </div>
              )}
            </For>
            {/* Legend */}
            <div class="text-zinc-600 text-[10px] uppercase tracking-wider text-right pt-1">
              walk-in / partner
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SolutionsPage() {
  const allAccess = additionalPricingData.find(o => o.id === 'all-access-membership')!
  const wholeInner = additionalPricingData.find(o => o.id === 'whole-inner-area')!

  return (
    <div class="min-h-screen page-bg transition-colors duration-300">
      <Header />

      <main class="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Hero */}
        <section class="mb-20">
          <div class="text-xs font-bold tracking-[0.3em] gradient-text mb-4">PRICING & SOLUTIONS</div>
          <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 max-w-4xl">
            Flexible <span class="gradient-text">workspaces</span> for focused productivity.
          </h1>
          <p class="text-zinc-400 text-lg max-w-2xl">
            From open collaboration zones to private call booths. 24/7 access with free
            unlimited coffee, high-speed internet, and power outlets at every table.
          </p>
          <div class="flex flex-wrap gap-6 mt-8 text-sm">
            <For each={[
              'Starts at 4 hours',
              'Hourly extensions',
              'Free unlimited coffee',
              'High-speed internet',
              'Power at each table',
            ]}>
              {(item) => (
                <div class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span class="text-zinc-500">{item}</span>
                </div>
              )}
            </For>
          </div>
        </section>

        {/* Floor Plan */}
        <section class="mb-32 relative">
          <div class="absolute -top-10 -right-10 w-64 h-64 bg-amber-500/5 rounded-full blur-[100px] -z-10" />
          <div class="text-xs font-bold tracking-[0.3em] gradient-text mb-4">PANGANIBAN DRIVE</div>
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-8">Floor Plan</h2>
          <div class="clip-corner-both overflow-hidden bg-zinc-900/60 p-[1px]">
            <div class="clip-corner-both overflow-hidden">
              <img
                src={floorPlan}
                alt="KahitSan Panganiban Drive Floor Plan"
                class="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Hourly Pricing Tiers */}
        <section class="mb-32 relative">
          <div class="absolute -bottom-10 -left-10 w-72 h-72 bg-amber-500/5 rounded-full blur-[100px] -z-10" />
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <For each={pricingData}>
              {(option) => <HourlyTierCard option={option} />}
            </For>
          </div>
        </section>

        {/* Premium Memberships — Bento Layout */}
        <section class="mb-32 relative">
          <div class="absolute -top-10 right-20 w-64 h-64 bg-amber-500/5 rounded-full blur-[100px] -z-10" />
          <div class="flex items-end justify-between mb-12">
            <div>
              <div class="text-xs font-bold tracking-[0.3em] gradient-text mb-2">EXCLUSIVE ACCESS</div>
              <h2 class="text-3xl md:text-4xl font-bold text-white">Advanced Memberships</h2>
            </div>
            <div class="hidden md:block text-zinc-500 text-right max-w-xs text-sm">
              24/7 biometric authentication for seamless, cardless entry.
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* All-Access — wider card */}
            <div class="md:col-span-3 bg-amber-500/10 p-[1px] clip-corner-both">
              <div class="bg-zinc-900 h-full clip-corner-both flex flex-col">
                <Show when={allAccess.coverImage}>
                  <img
                    src={allAccess.coverImage}
                    alt={allAccess.name}
                    class="w-full h-56 object-cover"
                  />
                </Show>
                <div class="flex flex-col md:flex-row gap-10 p-10 flex-1">
                  <div class="flex-1 flex flex-col">
                    <span class="bg-amber-500/20 text-amber-400 px-3 py-1 text-[10px] font-black uppercase tracking-tighter w-fit mb-6">
                      Most Popular
                    </span>
                    <h3 class="text-3xl font-bold text-white mb-4">{allAccess.name}</h3>
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
                  <div class="w-full md:w-1/3 bg-zinc-950/50 clip-corner p-6 flex flex-col justify-center items-center text-center">
                    <div class="text-4xl font-bold gradient-text mb-1">
                      ₱{allAccess.mainPricing.walkinPrice.toLocaleString()}
                    </div>
                    <div class="text-zinc-500 uppercase text-[10px] tracking-widest mb-4">Monthly / Walk-in</div>
                    <div class="text-2xl font-bold text-zinc-300 mb-1">
                      ₱{allAccess.mainPricing.partnerPrice.toLocaleString()}
                    </div>
                    <div class="text-zinc-500 uppercase text-[10px] tracking-widest mb-6">Monthly / Partner</div>
                    <For each={allAccess.additionalPricing}>
                      {(tier) => (
                        <div class="w-full p-3 bg-zinc-800/50 clip-corner mb-2 text-center">
                          <div class="text-zinc-400 text-xs font-bold mb-1">{formatDuration(tier.duration)}</div>
                          <div class="text-zinc-300 text-sm">
                            ₱{tier.partnerPrice.toLocaleString()} / ₱{tier.walkinPrice.toLocaleString()}
                          </div>
                          <Show when={tier.savings}>
                            <div class="text-green-400 text-xs mt-1">{tier.savings}</div>
                          </Show>
                        </div>
                      )}
                    </For>
                  </div>
                </div>
              </div>
            </div>

            {/* Whole Inner Area — narrower card */}
            <div class="md:col-span-2 bg-zinc-900 clip-corner-both flex flex-col">
              <Show when={wholeInner.coverImage}>
                <img
                  src={wholeInner.coverImage}
                  alt={wholeInner.name}
                  class="w-full h-48 object-cover"
                />
              </Show>
              <div class="flex flex-col flex-1 p-10">
                <h3 class="text-2xl font-bold text-white mb-4">{wholeInner.name}</h3>
                <p class="text-zinc-400 text-sm mb-8">{wholeInner.description}</p>

                <div class="space-y-4 mb-8">
                  <div class="p-4 bg-zinc-950 clip-corner flex justify-between items-center">
                    <span class="text-xs uppercase font-bold text-zinc-500">
                      {formatDuration(wholeInner.mainPricing.duration)}
                    </span>
                    <div class="text-right">
                      <span class="gradient-text font-bold">₱{wholeInner.mainPricing.walkinPrice.toLocaleString()}</span>
                      <span class="text-zinc-500 text-xs ml-2">walk-in</span>
                    </div>
                  </div>
                  <div class="p-4 bg-zinc-950 clip-corner flex justify-between items-center">
                    <span class="text-xs uppercase font-bold text-zinc-500">Partner Rate</span>
                    <span class="text-zinc-300 font-bold">₱{wholeInner.mainPricing.partnerPrice.toLocaleString()}</span>
                  </div>
                  <For each={wholeInner.additionalPricing}>
                    {(tier) => (
                      <div class="p-4 bg-zinc-950 clip-corner flex justify-between items-center">
                        <span class="text-xs uppercase font-bold text-zinc-500">+{formatDuration(tier.duration)} ext.</span>
                        <span class="text-zinc-400 text-sm">
                          ₱{tier.partnerPrice.toLocaleString()} / ₱{tier.walkinPrice.toLocaleString()}
                        </span>
                      </div>
                    )}
                  </For>
                </div>

              </div>
            </div>
          </div>

          <p class="text-zinc-500 text-xs mt-6 italic">
            *Pantry access may be limited when the Whole Inner Area is reserved for events.
          </p>
        </section>

        {/* Partner Organizations */}
        <section class="py-24 border-t border-zinc-800/50 relative">
          <div class="absolute -bottom-10 -left-10 w-64 h-64 bg-amber-500/5 rounded-full blur-[100px] -z-10" />
          <div class="text-center mb-16">
            <div class="text-xs font-bold tracking-[0.3em] text-zinc-500 mb-4">STRATEGIC ALLIANCES</div>
            <h2 class="text-3xl font-bold text-white">Partner Organizations</h2>
            <p class="text-zinc-400 text-sm mt-4 max-w-xl mx-auto">
              Members of these organizations enjoy exclusive discounts on all workspace bookings.
            </p>
          </div>

          <div class="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-60 hover:opacity-100 transition-opacity duration-700">
            <For each={communityData.partnerships}>
              {(partnership) => (
                <img
                  src={partnership.icon}
                  alt={`${partnership.name} Logo`}
                  class="w-24 h-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                  title={`${partnership.name} — ${partnership.discount}`}
                />
              )}
            </For>
          </div>

          <div class="mt-12 text-center">
            <p class="text-zinc-500 text-sm max-w-xl mx-auto italic">
              "KahitSan partners enjoy up to 20% reduction on workspace rates."
            </p>
          </div>
        </section>

        {/* Location */}
        <section class="py-24 border-t border-zinc-800/50 relative">
          <div class="absolute -top-10 -right-10 w-72 h-72 bg-amber-500/5 rounded-full blur-[100px] -z-10" />
          <div class="text-center mb-12">
            <div class="text-xs font-bold tracking-[0.3em] gradient-text mb-4">FIND US</div>
            <h2 class="text-3xl font-bold text-white">Our Location</h2>
            <p class="text-zinc-400 text-sm mt-4 max-w-xl mx-auto">
              Panganiban Drive, Naga City, Camarines Sur
            </p>
          </div>

          <div class="clip-corner-both overflow-hidden bg-zinc-900/60 p-[1px]">
            <div class="clip-corner-both overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=KahitSan+Coworking+Space,+Panganiban+Drive,+Naga+City,+Philippines&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="400"
                style="border:0;"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="KahitSan Coworking Space location"
              />
            </div>
          </div>

          <div class="mt-8 text-center">
            <Button
              as="a"
              href="https://share.google/TFC9YSJ3R8ExKdnUH"
              target="_blank"
              rel="noopener noreferrer"
              intent="primary"
              variant="clip1"
              effect="scan-line"
            >
              Open in Google Maps
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
