import { Title, Meta, Link } from "@solidjs/meta";
import SolutionsPage from '~/pages/SolutionsPage'

export default function SolutionsRoute() {
  return (
    <>
      <Title>Solutions & Pricing - KahitSan Coworking</Title>
      <Meta name="description" content="Flexible coworking solutions with hourly rates, memberships, and private spaces. 24/7 access, high-speed internet, and unlimited coffee at KahitSan, Naga City." />
      <Meta property="og:title" content="Solutions & Pricing - KahitSan Coworking" />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://www.kahitsan.com/solutions" />
      <Link rel="canonical" href="https://www.kahitsan.com/solutions" />
      <SolutionsPage />
    </>
  )
}
