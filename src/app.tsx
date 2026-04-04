import { Router, useLocation } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { type JSX, Suspense, createEffect, onMount } from "solid-js";
import { isServer } from "solid-js/web";
import { MetaProvider } from "@solidjs/meta";
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
      <Suspense>
        <div class="page-enter" ref={pageRef}>
          {props.children}
        </div>
      </Suspense>
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
