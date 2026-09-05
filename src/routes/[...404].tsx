import { Title, Meta } from '@solidjs/meta'
import NotFound from '~/components/ui/NotFound/NotFound'
import DarkLogo from '~/assets/kahitsan-corp-logo-dark.png?w=132;226;263;452&as=picture'
import LightLogo from '~/assets/kahitsan-corp-logo-light.png?w=132;226;263;452&as=picture'
import { Picture } from '~/components/ui'
import { useTheme } from '~/lib/theme'

export default function NotFoundPage() {
  const { theme } = useTheme()

  return (
    <>
      <Title>404 - Page Not Found - KahitSan</Title>
      <Meta name="description" content="The page you are looking for could not be found." />
      <NotFound
        logo={
          <Picture
            src={theme() === 'dark' ? DarkLogo : LightLogo}
            alt="KahitSan Solutions Corp. logo"
            class="w-[226px] h-auto"
            sizes="226px"
          />
        }
      />
    </>
  )
}
