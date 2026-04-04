import { Router, useLocation } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { type JSX, Suspense, ErrorBoundary, createEffect, onMount } from "solid-js";
import { isServer } from "solid-js/web";
import { MetaProvider, Title } from "@solidjs/meta";
import NotFound from "~/components/ui/NotFound/NotFound";
import Logo from "~/assets/logo.png";
import "./assets/css/app.css";

function AppLayout(props: { children: JSX.Element }) {
  const location = useLocation();
  let pageRef: HTMLDivElement | undefined;

  // Re-trigger the CSS animation on every route change (client-only)
  createEffect(() => {
    location.pathname; // track as dependency
    if (!isServer && pageRef) {
      pageRef.style.animation = "none";
      pageRef.offsetHeight; // force reflow
      pageRef.style.animation = "";
    }
  });

  return (
    <div class="page-transition-container relative min-h-screen">
      <ErrorBoundary
        fallback={() => (
          <div class="min-h-screen" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)' }}>
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
    <MetaProvider>
      <Router root={AppLayout}>
        <FileRoutes />
      </Router>
    </MetaProvider>
  );
}
