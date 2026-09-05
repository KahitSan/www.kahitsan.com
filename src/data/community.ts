import ateneoLogo from '~/assets/images/community/Ateneo.png?w=79;157&as=picture'
import uapsaLogo from '~/assets/images/community/UAPSA BISCAST Logo.png?w=80;160&as=picture'
import acesLogo from '~/assets/images/community/ACES_LOGO.png?w=80;160&as=picture'
import uapgaLogo from '~/assets/images/community/UAPGA CAMARINES-TERM LOGO.png?w=93;185&as=picture'
import type {
  CommunityData,
  CommunityRecord,
  FeaturedEvent,
  Partnership,
  Sponsorship,
} from '~/types/community'

// Add records here. Category views below remain derived from this single source.
export const communityRecords: readonly CommunityRecord[] = [
  {
    id: 'ce-blaze-2025',
    category: 'event',
    status: 'past',
    logoKey: 'aces',
    date: {
      start: '2025-04',
      label: 'April 2025',
    },
    title: 'CE BLAZE: Civil Engineering Days 2025',
    location: 'BISCAST Pavilion',
    organization: 'Association of Civil Engineering Students',
    description:
      'KahitSan Coworking participated in the organization’s Civil Engineering Days program at the BISCAST Pavilion.',
    icon: acesLogo,
    socialLinks: {
      facebook: 'https://www.facebook.com/photo/?fbid=1051016330382402&set=a.457555103061864',
    },
  },
  {
    id: 'aces-partnership-2025',
    category: 'partnership',
    status: 'past',
    featured: true,
    logoKey: 'aces',
    date: {
      start: '2025-09-03',
      label: 'September 3, 2025',
    },
    name: 'BISCAST Association of Civil Engineering Students (ACES)',
    discount: '20% discount',
    description: 'Published terms list discounted access to KahitSan Coworking for ACES members.',
    icon: acesLogo,
    socialLinks: {
      facebook: 'https://www.facebook.com/biscastaces',
    },
  },
  {
    id: 'uapsa-biscast-partnership-2025',
    category: 'partnership',
    status: 'past',
    featured: true,
    logoKey: 'uapsa',
    date: {
      start: '2025-10-09',
      label: 'October 9, 2025',
    },
    name: 'UAPSA BISCAST Chapter',
    discount: '20% discount',
    description:
      'Published terms list discounted access to KahitSan Coworking for UAPSA BISCAST members.',
    icon: uapsaLogo,
    socialLinks: {
      facebook: 'https://www.facebook.com/uapsabiscast1999',
    },
  },
  {
    id: 'uapga-camarines-partnership-2025',
    category: 'partnership',
    status: 'past',
    featured: true,
    logoKey: 'uapga',
    date: {
      start: '2025-10-31',
      label: 'October 31, 2025',
    },
    name: 'UAPGA CAMARINES CHAPTER',
    discount: '20% discount',
    description:
      'Published terms list discounted access to KahitSan Coworking for UAPGA Camarines Chapter members.',
    icon: uapgaLogo,
    socialLinks: {
      facebook: 'https://www.facebook.com/uapgacamarines',
    },
  },
  {
    id: 'tosp-bikol-regional-search-2026',
    category: 'sponsorship',
    status: 'past',
    date: {
      start: '2026-08-21',
      end: '2026-08-24',
      label: 'August 21-24, 2026',
    },
    name: 'TOSP-Bikol Alumni Community',
    event: 'Regional Search for the 59th Ten Outstanding Students of the Philippines',
    description:
      'KahitSan Coworking provided digital coworking vouchers in support of the regional search and its recognition of Bicolano student leaders.',
  },
  {
    id: 'adnu-orsem-2025',
    category: 'sponsorship',
    status: 'past',
    featured: true,
    logoKey: 'ateneo',
    date: {
      start: '2025-06-23',
      end: '2025-06-25',
      label: 'June 23-25, 2025',
    },
    name: 'Ateneo De Naga University - Senior High School Guidance Office',
    event: 'Senior High School Orientation Seminar (ORSEM)',
    theme: 'Adhika: Thriving with Hope Towards Youthful Potential',
    description:
      'Supporting student orientation through coworking vouchers for ORSEM preparation and activities.',
    icon: ateneoLogo,
  },
  {
    id: 'adnu-mental-health-month-2025',
    category: 'sponsorship',
    status: 'past',
    logoKey: 'ateneo',
    date: {
      start: '2025-10-01',
      end: '2025-10-17',
      label: 'October 1-17, 2025',
    },
    name: 'Ateneo De Naga University - College Guidance Center',
    event: 'Mental Health Month 2025',
    theme: 'Atamanon asin Padanayon: Mental Health, We Care',
    description:
      'Supporting mental health awareness by providing coworking vouchers for Mental Health Month activities and programs.',
    icon: ateneoLogo,
    socialLinks: {
      facebook:
        'https://www.facebook.com/adnu.college.guidance.center/posts/pfbid032Q2uZYextZaQ5Z6goZnRWrMC8bGthiQ4EzP1EiptSxoSCxPNK4ArRiqva66EY1uBl',
    },
  },
]

const isEvent = (record: CommunityRecord): record is FeaturedEvent => record.category === 'event'

const isPartnership = (record: CommunityRecord): record is Partnership =>
  record.category === 'partnership'

const isSponsorship = (record: CommunityRecord): record is Sponsorship =>
  record.category === 'sponsorship'

// Category views keep existing consumers typed while records remain the only content source.
export const communityData: CommunityData = {
  records: communityRecords,
  events: communityRecords.filter(isEvent),
  partnerships: communityRecords.filter(isPartnership),
  sponsorships: communityRecords.filter(isSponsorship),
}
