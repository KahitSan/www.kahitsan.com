import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { type JSX, Suspense } from "solid-js";
import { MetaProvider } from "@solidjs/meta";
import { Transition } from "solid-transition-group";
import "./assets/css/app.css";

function AppLayout(props: { children: JSX.Element }) {
  return (
    <div class="page-transition-container relative min-h-screen">
      <Transition name="slide-up" mode="outin">
        <Suspense>{props.children}</Suspense>
      </Transition>
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
