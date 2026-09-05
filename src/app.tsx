import { Router, useLocation } from '@solidjs/router'
import type { RouteSectionProps } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start/router'
import { Suspense, ErrorBoundary, createEffect } from 'solid-js'
import { isServer } from 'solid-js/web'
import { MetaProvider, Title } from '@solidjs/meta'
import NotFound from '~/components/ui/NotFound/NotFound'
import Header from '~/components/Header'
import DarkLogo from '~/assets/kahitsan-corp-logo-dark.png?w=132;226;263;452&as=picture'
import LightLogo from '~/assets/kahitsan-corp-logo-light.png?w=132;226;263;452&as=picture'
import { Picture } from '~/components/ui'
import { ThemeProvider, useTheme } from '~/lib/theme'
import './assets/css/app.css'

const analyticsPageViewEvent = 'kahitsan:analytics-page-view'

function AppLayout(props: RouteSectionProps) {
  const location = useLocation()
  const { theme } = useTheme()

  createEffect(() => {
    const path = location.pathname
    if (!isServer) {
      window.dispatchEvent(new CustomEvent(analyticsPageViewEvent, { detail: { pagePath: path } }))
    }
  })

  return (
    <div class="page-transition-container relative min-h-screen">
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'KahitSan Solutions Corp.',
          url: 'https://www.kahitsan.com',
          sameAs: [
            'https://www.facebook.com/KahitSan',
            'https://www.instagram.com/kahitsan_com/',
            'https://www.tiktok.com/@kahitsan21',
          ],
          brand: [
            {
              '@type': 'Brand',
              name: 'KahitSan Coworking',
              url: 'https://www.kahitsan.com/coworking',
            },
            { '@type': 'Brand', name: 'Hilinga', url: 'https://www.hilinga.com' },
          ],
        })}
      </script>
      <Header />
      <ErrorBoundary
        fallback={() => (
          <div class="min-h-screen page-bg transition-colors duration-300">
            <Title>Something went wrong - KahitSan</Title>
            <NotFound
              title=""
              heading="Something went wrong"
              message="An unexpected error occurred. Please try refreshing the page."
              buttonText="Go Back Home"
              logo={
                <Picture
                  src={theme() === 'dark' ? DarkLogo : LightLogo}
                  alt="KahitSan Solutions Corp. logo"
                  class="w-[226px] h-auto"
                  sizes="226px"
                  loading="lazy"
                  decoding="async"
                />
              }
            />
          </div>
        )}
      >
        <Suspense>{props.children}</Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <MetaProvider>
        <Router root={AppLayout}>
          <FileRoutes />
        </Router>
      </MetaProvider>
    </ThemeProvider>
  )
}
