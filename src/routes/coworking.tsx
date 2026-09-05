import { Link, Meta, Title } from '@solidjs/meta'
import SolutionsPage from '~/pages/SolutionsPage'

export default function CoworkingRoute() {
  return (
    <>
      <Title>Coworking Space & Pricing in Naga City - KahitSan</Title>
      <Meta
        name="description"
        content="Compare current coworking rates, workspace options, and All-Access Membership at KahitSan Coworking on Panganiban Drive, Naga City."
      />
      <Meta property="og:title" content="KahitSan Coworking Space & Pricing in Naga City" />
      <Meta
        property="og:description"
        content="Compare current workspace rates and membership options at KahitSan Coworking on Panganiban Drive, Naga City."
      />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://www.kahitsan.com/coworking" />
      <Link rel="canonical" href="https://www.kahitsan.com/coworking" />
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'CoworkingSpace',
          name: 'KahitSan Coworking',
          url: 'https://www.kahitsan.com/coworking',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Panganiban Drive',
            addressLocality: 'Naga City',
            addressRegion: 'Camarines Sur',
            addressCountry: 'PH',
          },
          parentOrganization: {
            '@type': 'Organization',
            name: 'KahitSan Solutions Corp.',
            url: 'https://www.kahitsan.com',
          },
        })}
      </script>
      <SolutionsPage />
    </>
  )
}
