import entranceAreaImage from '~/assets/images/panganiban/entrance-area.jpg?w=327;373;746'
import innerAreaImage from '~/assets/images/panganiban/inner-area.jpg?w=327;373;746'
import callBoothImage from '~/assets/images/panganiban/call-booth.jpg?w=327;373;746'
import allAccessMembershipImage from '~/assets/images/panganiban/all-access-membership.jpg?w=327;373;746'

export const PricingType = {
  NONE: 'none',
  EXTENSION: 'extension',
  LEGACY: 'legacy',
} as const

export type PricingType = (typeof PricingType)[keyof typeof PricingType]

export interface PricingOption {
  id: string
  name: string
  description?: string
  icon: 'clock' | 'sparkles' | 'users' | 'star'
  color: 'amber' | 'blue' | 'green' | 'purple'
  durationPrefix?: string
  coverImage?: string
  mainPricing: {
    duration: { value: number; unit: 'hours' | 'months' }
    partnerPrice: number
    walkinPrice: number
  }
  additionalPricing: Array<{
    duration: { value: number; unit: 'hours' | 'months'; customText?: string }
    partnerPrice: number
    walkinPrice: number
    savings?: string
    partnerLabel?: string
    walkinLabel?: string
    pricingType?: PricingType
  }>
}

export function formatDuration(duration: {
  value: number
  unit: 'hours' | 'months'
  customText?: string
}): string {
  if (duration.customText) return duration.customText
  switch (duration.unit) {
    case 'hours':
      return `${duration.value} hours`
    case 'months':
      return `${duration.value} Month${duration.value > 1 ? 's' : ''}`
    default:
      return `${duration.value}`
  }
}

export const pricingData: PricingOption[] = [
  {
    id: 'entrance-area',
    name: 'Entrance Area',
    description: 'Prime location near entrance with relaxed vibe and comfortable seating',
    icon: 'clock',
    color: 'amber',
    durationPrefix: 'for',
    coverImage: entranceAreaImage.img.src,
    mainPricing: { duration: { value: 4, unit: 'hours' }, partnerPrice: 129, walkinPrice: 129 },
    additionalPricing: [
      { duration: { value: 8, unit: 'hours' }, partnerPrice: 149, walkinPrice: 149 },
      {
        duration: { value: 1, unit: 'hours' },
        partnerPrice: 39,
        walkinPrice: 39,
        pricingType: PricingType.EXTENSION,
      },
    ],
  },
  {
    id: 'inner-area',
    name: 'Inner Area',
    description: 'Premium workspace with ergonomic chairs, dedicated WiFi, and quiet environment',
    icon: 'sparkles',
    color: 'blue',
    durationPrefix: 'for',
    coverImage: innerAreaImage.img.src,
    mainPricing: { duration: { value: 4, unit: 'hours' }, partnerPrice: 189, walkinPrice: 189 },
    additionalPricing: [
      { duration: { value: 8, unit: 'hours' }, partnerPrice: 229, walkinPrice: 229 },
      {
        duration: { value: 1, unit: 'hours' },
        partnerPrice: 39,
        walkinPrice: 39,
        pricingType: PricingType.EXTENSION,
      },
    ],
  },
  {
    id: 'call-booth',
    name: 'Call Booth',
    description: 'Sound-proof private space perfect for 2-person meetings and calls',
    icon: 'users',
    color: 'green',
    durationPrefix: 'for',
    coverImage: callBoothImage.img.src,
    mainPricing: { duration: { value: 5, unit: 'hours' }, partnerPrice: 379, walkinPrice: 379 },
    additionalPricing: [
      {
        duration: { value: 1, unit: 'hours' },
        partnerPrice: 89,
        walkinPrice: 89,
        pricingType: PricingType.EXTENSION,
      },
    ],
  },
]

export const additionalPricingData: PricingOption[] = [
  {
    id: 'all-access-membership',
    name: 'All-Access Membership',
    description: '24/7 biometric access - enter anytime without front desk hassle',
    icon: 'star',
    color: 'amber',
    durationPrefix: 'for',
    coverImage: allAccessMembershipImage.img.src,
    mainPricing: { duration: { value: 1, unit: 'months' }, partnerPrice: 3999, walkinPrice: 3999 },
    additionalPricing: [
      { duration: { value: 3, unit: 'months', customText: '3-Month Bundle' }, partnerPrice: 10499, walkinPrice: 10499 },
    ],
  },
]
