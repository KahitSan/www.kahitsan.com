export interface SocialLinks {
  facebook?: string
  instagram?: string
  tiktok?: string
  website?: string
}

export interface FeaturedEvent {
  id: number
  title: string
  date: string
  location: string
  organization: string
  description: string
  icon: string
  socialLinks?: SocialLinks
}

export interface Partnership {
  id: number
  name: string
  discount: string
  effectiveDate: string
  description: string
  icon: string
  socialLinks?: SocialLinks
}

export interface Sponsorship {
  id: number
  name: string
  event: string
  eventDate: string
  theme?: string
  description: string
  icon: string
  socialLinks?: SocialLinks
}

export interface CommunityData {
  featuredEvents: FeaturedEvent[]
  partnerships: Partnership[]
  sponsorships: Sponsorship[]
}
