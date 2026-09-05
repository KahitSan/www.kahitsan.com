import type { PictureData } from '~/components/ui/Picture'

export interface SocialLinks {
  facebook?: string
  instagram?: string
  tiktok?: string
  website?: string
}

export type CommunityCategory = 'event' | 'partnership' | 'sponsorship'

export type CommunityStatus = 'current' | 'upcoming' | 'past'

export interface CommunityDate {
  start: string
  end?: string
  label: string
}

interface CommunityRecordBase {
  id: string
  category: CommunityCategory
  status: CommunityStatus
  featured?: boolean
  logoKey?: 'aces' | 'uapsa' | 'uapga' | 'ateneo'
  date: CommunityDate
  description: string
  icon?: PictureData
  socialLinks?: SocialLinks
}

export interface FeaturedEvent extends CommunityRecordBase {
  category: 'event'
  title: string
  location: string
  organization: string
}

export interface Partnership extends CommunityRecordBase {
  category: 'partnership'
  name: string
  discount: string
}

export interface Sponsorship extends CommunityRecordBase {
  category: 'sponsorship'
  name: string
  event: string
  theme?: string
}

export type CommunityRecord = FeaturedEvent | Partnership | Sponsorship

export interface CommunityData {
  records: readonly CommunityRecord[]
  events: readonly FeaturedEvent[]
  partnerships: readonly Partnership[]
  sponsorships: readonly Sponsorship[]
}
