import { Title, Meta, Link } from "@solidjs/meta";
import SpacesPage from '~/pages/SpacesPage'

export default function SpacesRoute() {
  return (
    <>
      <Title>Spaces - KahitSan Coworking</Title>
      <Meta name="description" content="Explore our modern coworking spaces. Choose from dedicated desks, private offices, meeting rooms, and comfortable lounge areas." />
      <Meta property="og:title" content="Spaces - KahitSan Coworking" />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://www.kahitsan.com/spaces" />
      <Link rel="canonical" href="https://www.kahitsan.com/spaces" />
      <SpacesPage />
    </>
  )
}
