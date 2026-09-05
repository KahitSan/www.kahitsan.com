import { Link, Meta, Title } from '@solidjs/meta'
import { For, Match, Show, Switch } from 'solid-js'
import type { Component } from 'solid-js'
import ExternalLink from 'lucide-solid/icons/external-link'
import Facebook from 'lucide-solid/icons/facebook'
import Instagram from 'lucide-solid/icons/instagram'
import Video from 'lucide-solid/icons/video'
import Footer from '~/components/Footer'
import { Picture } from '~/components/ui'
import Button from '~/components/ui/Button/Button'
import { communityData } from '~/data/community'
import type { CommunityRecord, SocialLinks } from '~/types/community'
import type { PictureData } from '~/components/ui/Picture'

const socialPlatforms = [
  { key: 'facebook', label: 'Facebook', icon: () => <Facebook size={14} /> },
  { key: 'instagram', label: 'Instagram', icon: () => <Instagram size={14} /> },
  { key: 'tiktok', label: 'TikTok', icon: () => <Video size={14} /> },
  { key: 'website', label: 'Website', icon: () => <ExternalLink size={14} /> },
] satisfies readonly {
  key: keyof SocialLinks
  label: string
  icon: Component
}[]

const byMostRecentDate = <Record extends CommunityRecord>(left: Record, right: Record) =>
  (right.date.end ?? right.date.start).localeCompare(left.date.end ?? left.date.start)

const partnershipRecords = [...communityData.partnerships].sort(byMostRecentDate)
const featuredEventRecords = [...communityData.events].sort(byMostRecentDate)
const sponsorshipRecords = [...communityData.sponsorships].sort(byMostRecentDate)

const SocialMediaButtons = (props: { socialLinks?: SocialLinks }) => (
  <Show when={props.socialLinks} keyed>
    {(socialLinks) => (
      <div class="mt-4 flex flex-wrap gap-2">
        <For each={socialPlatforms}>
          {(platform) => (
            <Show when={socialLinks[platform.key]} keyed>
              {(socialUrl) => (
                <Button
                  as="a"
                  href={socialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  intent="secondary"
                  variant="clip1"
                  size="sm"
                  icon={platform.icon}
                  iconPosition="left"
                  class="border-blue-500/40 bg-blue-500/20 text-xs text-blue-400 hover:bg-blue-500/30"
                  noPulse
                  noGlow
                >
                  {platform.label}
                </Button>
              )}
            </Show>
          )}
        </For>
      </div>
    )}
  </Show>
)

const getRecordTitle = (record: CommunityRecord) => {
  switch (record.category) {
    case 'event':
      return record.title
    case 'partnership':
    case 'sponsorship':
      return record.name
  }
}

const getRecordLogoAlt = (record: CommunityRecord) => {
  const organization = record.category === 'event' ? record.organization : record.name
  return `${organization} logo`
}

const communityLogoSizes = {
  aces: '(max-width: 639px) 42px, 50px',
  uapsa: '(max-width: 639px) 39px, 46px',
  uapga: '(max-width: 639px) 56px, 66px',
  ateneo: '(max-width: 639px) 48px, 56px',
} as const

const RecordLogo = (props: {
  src: PictureData
  alt: string
  logoKey?: CommunityRecord['logoKey']
}) => (
  <div class="org-logo-wrap flex h-16 w-16 shrink-0 items-center justify-center p-2.5 sm:h-[72px] sm:w-[72px]">
    <Picture
      src={props.src}
      alt={props.alt}
      class="org-logo h-full w-full object-contain"
      data-logo={props.logoKey}
      sizes={props.logoKey ? communityLogoSizes[props.logoKey] : '50px'}
      loading="lazy"
      decoding="async"
    />
  </div>
)

const RecordDate = (props: { record: CommunityRecord }) => {
  const partnership = () => (props.record.category === 'partnership' ? props.record : undefined)
  const event = () => (props.record.category === 'event' ? props.record : undefined)
  const sponsorship = () => (props.record.category === 'sponsorship' ? props.record : undefined)

  return (
    <Switch>
      <Match when={partnership()} keyed>
        {(record) => (
          <div class="space-y-1">
            <p class="text-xs font-bold uppercase tracking-widest text-amber-400">
              Partnership start
            </p>
            <time dateTime={record.date.start} class="block text-sm text-zinc-500">
              {record.date.label}
            </time>
            <p class="text-xs leading-relaxed text-zinc-500">End date not published in record.</p>
          </div>
        )}
      </Match>
      <Match when={event()} keyed>
        {(record) => (
          <div class="space-y-1">
            <p class="text-xs font-bold uppercase tracking-widest text-amber-400">Event date</p>
            <time dateTime={record.date.start} class="block text-sm text-zinc-500">
              {record.date.label}
            </time>
          </div>
        )}
      </Match>
      <Match when={sponsorship()} keyed>
        {(record) => (
          <div class="space-y-1">
            <p class="text-xs font-bold uppercase tracking-widest text-amber-400">
              Sponsorship period
            </p>
            <time dateTime={record.date.start} class="block text-sm text-zinc-500">
              {record.date.label}
            </time>
          </div>
        )}
      </Match>
    </Switch>
  )
}

const RecordDetails = (props: { record: CommunityRecord }) => {
  const event = () => (props.record.category === 'event' ? props.record : undefined)
  const partnership = () => (props.record.category === 'partnership' ? props.record : undefined)
  const sponsorship = () => (props.record.category === 'sponsorship' ? props.record : undefined)

  return (
    <Switch>
      <Match when={event()} keyed>
        {(record) => (
          <>
            <p class="text-sm leading-relaxed text-zinc-400 md:text-base">{record.description}</p>
            <div class="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-500">
              <span>{record.location}</span>
              <span>{record.organization}</span>
            </div>
          </>
        )}
      </Match>
      <Match when={partnership()} keyed>
        {(record) => (
          <>
            <p class="font-bold text-amber-400">Published benefit: {record.discount}</p>
            <p class="mt-3 text-sm leading-relaxed text-zinc-400 md:text-base">
              {record.description}
            </p>
          </>
        )}
      </Match>
      <Match when={sponsorship()} keyed>
        {(record) => (
          <>
            <p class="font-bold text-zinc-300">{record.event}</p>
            <Show when={record.theme} keyed>
              {(theme) => <p class="mt-1 text-sm text-zinc-500">Theme: “{theme}”</p>}
            </Show>
            <p class="mt-3 text-sm leading-relaxed text-zinc-400 md:text-base">
              {record.description}
            </p>
          </>
        )}
      </Match>
    </Switch>
  )
}

const CommunityRecordCard = (props: { record: CommunityRecord }) => (
  <article class="group flex min-w-0 flex-col border-t border-zinc-800/60 py-5 md:py-7">
    <div class="flex items-start gap-4">
      <Show when={props.record.icon} keyed>
        {(icon) => (
          <RecordLogo
            src={icon}
            alt={getRecordLogoAlt(props.record)}
            logoKey={props.record.logoKey}
          />
        )}
      </Show>
      <div class="min-w-0 flex-1 space-y-2">
        <RecordDate record={props.record} />
        <h3 class="ks-record-title">{getRecordTitle(props.record)}</h3>
      </div>
    </div>
    <div class="mt-4 flex-1">
      <RecordDetails record={props.record} />
    </div>
    <SocialMediaButtons socialLinks={props.record.socialLinks} />
  </article>
)

const CommunitySection = (props: {
  id: string
  title: string
  description: string
  records: readonly CommunityRecord[]
  emptyMessage: string
  class?: string
}) => (
  <section
    id={props.id}
    class={`scroll-mt-24 md:scroll-mt-32 ${props.class ?? ''}`}
    aria-labelledby={`${props.id}-heading`}
  >
    <div class="grid grid-cols-1 gap-y-6 lg:grid-cols-12 lg:gap-x-10 xl:gap-x-14">
      <header class="space-y-3 lg:col-span-3 lg:pr-3">
        <h2 id={`${props.id}-heading`} class="ks-section-title">
          {props.title}
        </h2>
        <p class="max-w-sm text-sm leading-relaxed text-zinc-400 md:text-base">
          {props.description}
        </p>
      </header>

      <div class="lg:col-span-9">
        <Show
          when={props.records.length > 0}
          fallback={
            <div class="border-y border-zinc-800/60 py-6 md:py-8">
              <p class="max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">
                {props.emptyMessage}
              </p>
            </div>
          }
        >
          <div class="grid grid-cols-1 border-b border-zinc-800/60 md:grid-cols-2 md:gap-x-7 xl:gap-x-10">
            <For each={props.records}>{(record) => <CommunityRecordCard record={record} />}</For>
          </div>
        </Show>
      </div>
    </div>
  </section>
)

const CommunityPage: Component = () => {
  return (
    <>
      <Title>Community | KahitSan Coworking</Title>
      <Meta
        name="description"
        content="A continually updated record of KahitSan Coworking partnerships, sponsorships, and events in Naga City."
      />
      <Meta property="og:title" content="Community | KahitSan Coworking" />
      <Meta
        property="og:description"
        content="Follow KahitSan Coworking partnerships, sponsorships, and events in Naga City."
      />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://www.kahitsan.com/community" />
      <Link rel="canonical" href="https://www.kahitsan.com/community" />

      <div class="page-bg min-h-screen transition-colors duration-300">
        <main class="mx-auto max-w-7xl px-6 pt-20 pb-12 md:px-12 md:pt-32 md:pb-24">
          <section
            id="community"
            class="mb-14 scroll-mt-24 md:mb-24 md:scroll-mt-32"
            aria-labelledby="community-heading"
          >
            <div class="grid grid-cols-1 gap-y-5 lg:grid-cols-12 lg:gap-x-10 xl:gap-x-14">
              <div class="space-y-5 lg:col-span-9 lg:col-start-4">
                <h1 id="community-heading" class="ks-display-heading max-w-4xl">
                  KahitSan Coworking in the <span class="ks-heading-accent">community</span>
                </h1>
                <p class="max-w-3xl text-lg leading-relaxed text-zinc-300 md:text-xl">
                  Partnerships, sponsorships, and events connecting our coworking space with student
                  and professional organizations in Naga City.
                </p>
              </div>
            </div>
          </section>

          <CommunitySection
            id="partnerships"
            title="Partnerships"
            description="Published partnerships with student and professional organizations. Records show known start dates without assuming contract end dates."
            records={partnershipRecords}
            emptyMessage="No partnership records are published yet."
            class="mb-14 md:mb-24"
          />

          <CommunitySection
            id="featured-events"
            title="Featured events"
            description="Selected community events where KahitSan Coworking participated."
            records={featuredEventRecords}
            emptyMessage="No featured event records are published yet."
            class="mb-14 md:mb-24"
          />

          <CommunitySection
            id="sponsorships"
            title="Sponsorships"
            description="Programs KahitSan Coworking supported through coworking vouchers."
            records={sponsorshipRecords}
            emptyMessage="No sponsorship records are published yet."
          />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default CommunityPage
