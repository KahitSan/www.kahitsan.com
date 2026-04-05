import { Router, useLocation } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { type JSX, Suspense, ErrorBoundary, createEffect, onMount } from "solid-js";
import { isServer } from "solid-js/web";
import { MetaProvider, Title } from "@solidjs/meta";
import NotFound from "~/components/ui/NotFound/NotFound";
import Header from "~/components/Header";
import Logo from "~/assets/kahitsan-coworking-logo-dark.png";
import { ThemeProvider } from "~/lib/theme";
import "./assets/css/app.css";

function AppLayout(props: { children: JSX.Element }) {
  const location = useLocation();
  let pageRef: HTMLDivElement | undefined;

  // Re-trigger the CSS animation and track page view on every route change (client-only)
  createEffect(() => {
    const path = location.pathname;
    if (!isServer) {
      if (pageRef) {
        pageRef.style.animation = "none";
        pageRef.offsetHeight; // force reflow
        pageRef.style.animation = "";
      }
      // Track SPA navigation in Google Analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'page_view', { page_path: path });
      }
    }
  });

  return (
    <div class="page-transition-container relative min-h-screen">
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
              logo={<img src={Logo} alt="KahitSan Logo" width={200} height={200} />}
            />
          </div>
        )}
      >
        <Suspense>
          <div class="page-enter" ref={pageRef}>
            {props.children}
          </div>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
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
  );
}
