import { Title, Meta } from "@solidjs/meta";
import NotFound from '~/components/ui/NotFound/NotFound'
import Logo from '~/assets/logo.png'

export default function NotFoundPage() {
  return (
    <>
      <Title>404 - Page Not Found - KahitSan</Title>
      <Meta name="description" content="The page you are looking for could not be found." />
      <NotFound
        logo={<img src={Logo} alt="KahitSan Logo" width={200} height={200} />}
      />
    </>
  )
}
