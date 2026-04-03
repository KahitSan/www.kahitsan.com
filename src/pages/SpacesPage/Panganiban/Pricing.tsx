import Clock from 'lucide-solid/icons/clock'
import Sparkles from 'lucide-solid/icons/sparkles'
import Users from 'lucide-solid/icons/users'
import Star from 'lucide-solid/icons/star'
import Button from '~/components/ui/Button/Button'
import {
  pricingData,
  additionalPricingData,
  type PricingOption,
  formatDuration,
  PricingType,
} from './pricingData'
import { Show } from 'solid-js'
import logo from '~/assets/logo.png'
import { communityData } from '~/data/community'

interface PanganibanPricingProps {
  onBack: () => void
}

const iconMap = {
  clock: Clock,
  sparkles: Sparkles,
  users: Users,
  star: Star,
}

function PricingCard(props: { option: PricingOption }) {
  const Icon = iconMap[props.option.icon]

  return (
    <div
      class="backdrop-blur-sm border border-zinc-800/50 clip-corner overflow-hidden group hover:border-zinc-700/50 hover:scale-[1.02] transition-all"
      style={{ background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)' }}
    >
      <div class="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

      <div class="relative z-10">
        <Show when={props.option.coverImage}>
          <div class="relative h-48 overflow-hidden rounded-t-lg">
            <img
              src={props.option.coverImage}
              alt={props.option.name}
              class="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                ;(e.currentTarget.nextElementSibling as HTMLElement)?.classList.remove('hidden')
              }}
            />
            <div class="hidden absolute inset-0 w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
              <div class="text-zinc-500 text-2xl font-semibold">{props.option.name}</div>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
            <div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/90 to-transparent pointer-events-none" />
          </div>
        </Show>

        <div class="p-3">
          <div class={`flex items-center gap-4 px-6 mb-8`}>
            <div class="p-3 rounded-lg bg-zinc-800/50">
              <div class="text-zinc-400">
                <Icon size={20} />
              </div>
            </div>
            <div>
              <h3 class="text-lg font-bold text-white mb-1">{props.option.name}</h3>
              {props.option.description && (
                <p class="text-zinc-500 text-sm">{props.option.description}</p>
              )}
            </div>
          </div>

          <div class="mb-8">
            <div class="relative flex items-stretch justify-center">
              <div class="relative w-[60%] max-w-[260px]">
                <div
                  class="relative h-32 bg-zinc-600/20 border border-zinc-700/50 transition-all group-hover:border-zinc-600 group-hover:bg-zinc-600/30"
                  style={{
                    'clip-path':
                      'polygon(0 15%, 5% 0, 100% 0, 100% 15%, 100% 30%, 105% 50%, 100% 56%, 100% 85%, 100% 100%, 5% 100%, 0 85%)',
                  }}
                >
                  <div class="flex flex-col items-center justify-center h-full pr-2 pb-2">
                    <div class="text-zinc-400 text-xs uppercase tracking-wider mb-1 font-bold">
                      Org Partner
                    </div>
                    <div class="gradient-text text-3xl sm:text-4xl font-bold">
                      ₱{props.option.mainPricing.partnerPrice.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>

              <div class="relative w-[40%] max-w-[180px] -ml-2">
                <div
                  class="relative h-32 bg-zinc-800/90 border border-zinc-700/50 transition-all group-hover:border-zinc-600 group-hover:bg-zinc-800"
                  style={{
                    'clip-path':
                      'polygon(0 40%, 5% 50%, 0 60%, 0 85%, 5% 100%, 95% 100%, 100% 85%, 100% 15%, 95% 0, 5% 0, 0 15%)',
                  }}
                >
                  <div class="flex flex-col items-center justify-center h-full pl-2 pb-2">
                    <div class="text-zinc-500 text-xs uppercase tracking-wider mb-1">Walk-in</div>
                    <div class="text-zinc-400 text-lg sm:text-xl font-bold">
                      ₱{props.option.mainPricing.walkinPrice.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>

              {props.option.durationPrefix && (
                <div class="absolute bottom-2 italic text-amber-500">
                  {props.option.durationPrefix}{' '}
                  <b>{formatDuration(props.option.mainPricing.duration)}</b>
                </div>
              )}
            </div>
          </div>

          <div
            class={
              props.option.additionalPricing.length === 1
                ? 'space-y-2'
                : 'grid grid-cols-1 sm:grid-cols-2 gap-2'
            }
          >
            {props.option.additionalPricing.map((pricing) => {
              const pricingType = pricing.pricingType || PricingType.NONE
              const isSingleItem = props.option.additionalPricing.length === 1

              return (
                <div
                  class={`${isSingleItem ? 'flex items-center justify-between p-4' : 'flex flex-col justify-between p-3'} rounded-lg border border-zinc-700/50 hover:bg-zinc-800/60 hover:border-zinc-600/30 transition-all ${
                    pricingType === PricingType.EXTENSION
                      ? 'bg-gradient-to-r from-amber-400/20 via-zinc-800/40 to-zinc-800/30'
                      : pricingType === PricingType.LEGACY
                        ? 'bg-gradient-to-r from-zinc-800/30 via-zinc-800/40 to-zinc-500/20'
                        : 'bg-zinc-800/30'
                  }`}
                >
                  {isSingleItem ? (
                    <>
                      <span
                        class={`${pricingType === PricingType.LEGACY ? 'text-green-300' : 'text-zinc-300'} text-sm ${pricingType !== PricingType.NONE ? 'font-bold' : 'font-medium'}`}
                      >
                        <Show when={pricingType === PricingType.EXTENSION}>+</Show>
                        {formatDuration(pricing.duration)}
                      </span>
                      <div class="flex items-center gap-4">
                        <div class="text-right">
                          <div class="gradient-text mb-1 text-xl font-bold">
                            ₱{pricing.partnerPrice.toLocaleString()}
                          </div>
                          <div class="text-zinc-500 text-xs uppercase tracking-wider font-medium">
                            {pricing.partnerLabel || 'org partner'}
                          </div>
                          {pricing.savings && (
                            <div class="text-green-400 text-xs mt-1">{pricing.savings}</div>
                          )}
                        </div>
                        <div class="w-px h-10 bg-zinc-700/50" />
                        <div class="text-right">
                          <div class="text-zinc-300 mb-1 text-base font-medium">
                            ₱{pricing.walkinPrice.toLocaleString()}
                          </div>
                          <div class="text-zinc-500 text-xs uppercase tracking-wider">
                            {pricing.walkinLabel || 'walk-in'}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div class="flex items-center justify-between mb-2">
                        <span
                          class={`${pricingType === PricingType.LEGACY ? 'text-green-300' : 'text-zinc-300'} text-sm ${pricingType !== PricingType.NONE ? 'font-bold' : 'font-medium'}`}
                        >
                          <Show when={pricingType === PricingType.EXTENSION}>+</Show>
                          {formatDuration(pricing.duration)}
                        </span>
                        {pricing.savings && (
                          <div class="text-green-400 text-xs font-medium">{pricing.savings}</div>
                        )}
                      </div>
                      <div class="flex items-center justify-between gap-2">
                        <div class="text-right flex-1">
                          <div class="gradient-text mb-1 text-lg font-bold">
                            ₱{pricing.partnerPrice.toLocaleString()}
                          </div>
                          <div class="text-zinc-500 text-xs uppercase tracking-wider font-medium">
                            {pricing.partnerLabel || 'org partner'}
                          </div>
                        </div>
                        <div class="w-px h-8 bg-zinc-700/50" />
                        <div class="text-right flex-1">
                          <div class="text-zinc-300 mb-1 text-sm font-medium">
                            ₱{pricing.walkinPrice.toLocaleString()}
                          </div>
                          <div class="text-zinc-500 text-xs uppercase tracking-wider">
                            {pricing.walkinLabel || 'walk-in'}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PanganibanPricing(props: PanganibanPricingProps) {
  return (
    <>
      <section
        class="relative w-full"
        style={{ background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)' }}
      >
        <div class="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            class="absolute inset-0 opacity-10"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(201, 169, 97, 0.3) 0%, rgba(201, 169, 97, 0.05) 40%, transparent 70%)',
            }}
          />
        </div>
        <div class="relative z-10 px-4" style={{ 'padding-top': '2rem', 'padding-bottom': '2rem' }}>
          <div class="max-w-7xl mx-auto">
            <div class="h-8" />
            <div class="mb-8">
              <Button onClick={props.onBack} intent="secondary" size="md">
                ← Back to Floor Plan
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        class="relative w-full"
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)' }}
      >
        <div class="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            class="absolute inset-0 opacity-20"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(201, 169, 97, 0.6) 0%, rgba(201, 169, 97, 0.1) 40%, transparent 70%)',
            }}
          />
        </div>

        <div class="relative mt-20 z-10" style={{ 'padding-top': '2rem', 'padding-bottom': '4rem' }}>
          <div class="max-w-4xl mx-auto text-center mb-16 px-4">
            <div class="flex items-center justify-center gap-4 mb-6">
              <img src={logo} alt="Kahit San Logo" class="w-30 object-contain" />
              <h2 class="text-4xl md:text-5xl font-bold text-white">
                Choose Your <span class="gradient-text">Workspace</span>
              </h2>
            </div>
            <p class="text-zinc-300 text-lg max-w-3xl mx-auto leading-relaxed">
              From productive individual areas to private call booths. 24/7 access with free
              unlimited coffee, high-speed internet, and power outlets at every table.
            </p>
            <div class="flex flex-wrap justify-center gap-8 mt-8 text-sm">
              {[
                { color: 'bg-green-400', label: 'Starts at 4 hours' },
                { color: 'bg-amber-400', label: 'Hourly extensions' },
                { color: 'bg-blue-400', label: 'Free unlimited coffee' },
                { color: 'bg-purple-400', label: 'High-speed internet' },
                { color: 'bg-amber-400', label: 'Power at each table' },
              ].map((item) => (
                <div class="flex items-center gap-2">
                  <div class={`w-2 h-2 rounded-full ${item.color}`} />
                  <span class="text-zinc-400">{item.label}</span>
                </div>
              ))}
            </div>
            <div class="text-center mt-6">
              <div class="text-zinc-500 text-sm">Last updated: November 1, 2025</div>
            </div>
          </div>

          <div class="relative z-10 mb-16 px-4">
            <div class="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 items-start">
              {pricingData.map((option) => (
                <PricingCard option={option} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        class="relative w-full"
        style={{ background: 'linear-gradient(135deg, #151515 0%, #1f1f1f 100%)' }}
      >
        <div class="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            class="absolute inset-0 opacity-15"
            style={{
              background:
                'radial-gradient(ellipse at bottom, rgba(201, 169, 97, 0.2) 0%, transparent 60%)',
            }}
          />
        </div>

        <div class="relative z-10" style={{ 'padding-top': '4rem', 'padding-bottom': '4rem' }}>
          <div class="absolute left-1/2 top-0 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent" />

          <div class="max-w-4xl mx-auto text-center mt-16 mb-12 px-4">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 mb-6 border border-purple-500/20">
              <div class="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span class="text-purple-400 font-medium text-sm">Memberships & Private Spaces</span>
            </div>
            <div class="flex items-center justify-center gap-4 mb-4">
              <img src={logo} alt="Kahit San Logo" class="w-30 object-contain" />
              <h3 class="text-3xl md:text-4xl font-bold text-white">
                Premium <span class="gradient-text">Access</span>
              </h3>
            </div>
            <p class="text-zinc-300 text-lg max-w-3xl mx-auto leading-relaxed">
              24/7 biometric access for unlimited productivity, or reserve our entire inner area for
              your team events and workshops.
            </p>
          </div>

          <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-start px-4">
            {additionalPricingData.map((option) => (
              <PricingCard option={option} />
            ))}
          </div>
        </div>
      </section>

      <section
        class="relative w-full"
        style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #252525 100%)' }}
      >
        <div class="relative z-10" style={{ 'padding-top': '4rem', 'padding-bottom': '4rem' }}>
          <div class="max-w-4xl mx-auto text-center mb-12">
            <div class="flex items-center justify-center gap-4 mb-8">
              <img src={logo} alt="Kahit San Logo" class="w-30 object-contain" />
              <h3 class="text-3xl md:text-4xl font-bold text-white">
                Partner <span class="gradient-text">Organizations</span>
              </h3>
            </div>
            <p class="text-zinc-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Members of these organizations enjoy exclusive discounts on all workspace bookings
            </p>
          </div>

          <div class="max-w-6xl mx-auto">
            <div class="flex flex-wrap items-center justify-center gap-12 md:gap-20">
              {communityData.partnerships.map((partnership) => (
                <img
                  src={partnership.icon}
                  alt={`${partnership.name} Logo`}
                  class="w-30 h-auto object-contain opacity-70 transition-opacity duration-300"
                  title={partnership.name}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
