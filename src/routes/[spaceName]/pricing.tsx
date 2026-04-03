import { Title, Meta } from "@solidjs/meta";
import { useParams } from "@solidjs/router";
import SpacesPage from '~/pages/SpacesPage'

export default function SpaceNamePricingRoute() {
  const params = useParams()
  const spaceName = () => {
    const name = params.spaceName
    return name ? name.charAt(0).toUpperCase() + name.slice(1) : 'Space'
  }

  return (
    <>
      <Title>Pricing - {spaceName()} - KahitSan Coworking</Title>
      <Meta name="description" content={`Pricing for ${spaceName()} coworking space at KahitSan, Naga City.`} />
      <SpacesPage />
    </>
  )
}
