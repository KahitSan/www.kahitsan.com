import { createComponent, isServer, ssr, ssrHydrationKey, escape, getRequestEvent, delegateEvents } from 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/solid-js/web/dist/server.js';
import { _ as _t } from '../nitro/nitro.mjs';
import { Suspense, createSignal, onCleanup, children, createMemo, getOwner, sharedConfig, untrack, Show, on, createRoot } from 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/solid-js/dist/server.js';
import { Transition } from 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/solid-transition-group/dist/index.js';
import { O as Oe, z as ze, C as Ce, v as ve, U as Ue, H as He, a as I, e as ee, B as Be, Q, g as ge, q as qe } from './routing-BSRz0T-p.mjs';
import 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/destr/dist/index.mjs';
import 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/nitropack/node_modules/h3/dist/index.mjs';
import 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/hookable/dist/index.mjs';
import 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/ofetch/dist/node.mjs';
import 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/node-mock-http/dist/index.mjs';
import 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/ufo/dist/index.mjs';
import 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/unstorage/dist/index.mjs';
import 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/unstorage/drivers/fs.mjs';
import 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/ohash/dist/index.mjs';
import 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/klona/dist/index.mjs';
import 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/defu/dist/defu.mjs';
import 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/scule/dist/index.mjs';
import 'node:async_hooks';
import 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/unctx/dist/index.mjs';
import 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/radix3/dist/index.mjs';
import 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/vinxi/lib/app-fetch.js';
import 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/vinxi/lib/app-manifest.js';
import 'node:fs';
import 'node:url';
import 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/pathe/dist/index.mjs';
import 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/cookie-es/dist/index.mjs';
import 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/solid-js/web/storage/dist/storage.js';
import 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/h3/dist/index.mjs';
import 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/seroval/dist/esm/production/index.mjs';
import 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/seroval-plugins/dist/esm/production/web.mjs';

const T = (t) => (r) => {
  const { base: o } = r, n = children(() => r.children), e = createMemo(() => Oe(n(), r.base || ""));
  let s;
  const u = ze(t, e, () => s, { base: o, singleFlight: r.singleFlight, transformUrl: r.transformUrl });
  return t.create && t.create(u), createComponent(Ce.Provider, { value: u, get children() {
    return createComponent(nt, { routerState: u, get root() {
      return r.root;
    }, get preload() {
      return r.rootPreload || r.rootLoad;
    }, get children() {
      return [(s = getOwner()) && null, createComponent(ot, { routerState: u, get branches() {
        return e();
      } })];
    } });
  } });
};
function nt(t) {
  const r = t.routerState.location, o = t.routerState.params, n = createMemo(() => t.preload && untrack(() => {
    t.preload({ params: o, location: r, intent: Ue() || "initial" });
  }));
  return createComponent(Show, { get when() {
    return t.root;
  }, keyed: true, get fallback() {
    return t.children;
  }, children: (e) => createComponent(e, { params: o, location: r, get data() {
    return n();
  }, get children() {
    return t.children;
  } }) });
}
function ot(t) {
  if (isServer) {
    const e = getRequestEvent();
    if (e && e.router && e.router.dataOnly) {
      at(e, t.routerState, t.branches);
      return;
    }
    e && ((e.router || (e.router = {})).matches || (e.router.matches = t.routerState.matches().map(({ route: s, path: u, params: f }) => ({ path: s.originalPath, pattern: s.pattern, match: u, params: f, info: s.info }))));
  }
  const r = [];
  let o;
  const n = createMemo(on(t.routerState.matches, (e, s, u) => {
    let f = s && e.length === s.length;
    const h = [];
    for (let l = 0, w = e.length; l < w; l++) {
      const p = s && s[l], g = e[l];
      u && p && g.route.key === p.route.key ? h[l] = u[l] : (f = false, r[l] && r[l](), createRoot((R) => {
        r[l] = R, h[l] = He(t.routerState, h[l - 1] || t.routerState.base, C(() => n()[l + 1]), () => {
          var _a;
          const b = t.routerState.matches();
          return (_a = b[l]) != null ? _a : b[0];
        });
      }));
    }
    return r.splice(e.length).forEach((l) => l()), u && f ? u : (o = h[0], h);
  }));
  return C(() => n() && o)();
}
const C = (t) => () => createComponent(Show, { get when() {
  return t();
}, keyed: true, children: (r) => createComponent(ee.Provider, { value: r, get children() {
  return r.outlet();
} }) });
function at(t, r, o) {
  const n = new URL(t.request.url), e = I(o, new URL(t.router.previousUrl || t.request.url).pathname), s = I(o, n.pathname);
  for (let u = 0; u < s.length; u++) {
    (!e[u] || s[u].route !== e[u].route) && (t.router.dataOnly = true);
    const { route: f, params: h } = s[u];
    f.preload && f.preload({ params: h, location: r.location, intent: "preload" });
  }
}
function it([t, r], o, n) {
  return [t, n ? (e) => r(n(e)) : r];
}
function st(t) {
  let r = false;
  const o = (e) => typeof e == "string" ? { value: e } : e, n = it(createSignal(o(t.get()), { equals: (e, s) => e.value === s.value && e.state === s.state }), void 0, (e) => (!r && t.set(e), sharedConfig.registry && !sharedConfig.done && (sharedConfig.done = true), e));
  return t.init && onCleanup(t.init((e = t.get()) => {
    r = true, n[1](o(e)), r = false;
  })), T({ signal: n, create: t.create, utils: t.utils });
}
function ut(t, r, o) {
  return t.addEventListener(r, o), () => t.removeEventListener(r, o);
}
function ct(t, r) {
  const o = t && document.getElementById(t);
  o ? o.scrollIntoView() : r && window.scrollTo(0, 0);
}
function lt(t) {
  const r = new URL(t);
  return r.pathname + r.search;
}
function dt(t) {
  let r;
  const o = { value: t.url || (r = getRequestEvent()) && lt(r.request.url) || "" };
  return T({ signal: [() => o, (n) => Object.assign(o, n)] })(t);
}
const ht = /* @__PURE__ */ new Map();
function mt({ preload: t = true, explicitLinks: r = false, actionBase: o = "/_server", transformUrl: n } = {}) {
  return (e) => {
    const s = e.base.path(), u = e.navigatorFactory(e.base);
    let f, h;
    function l(a) {
      return a.namespaceURI === "http://www.w3.org/2000/svg";
    }
    function w(a) {
      if (a.defaultPrevented || a.button !== 0 || a.metaKey || a.altKey || a.ctrlKey || a.shiftKey) return;
      const i = a.composedPath().find((E) => E instanceof Node && E.nodeName.toUpperCase() === "A");
      if (!i || r && !i.hasAttribute("link")) return;
      const d = l(i), c = d ? i.href.baseVal : i.href;
      if ((d ? i.target.baseVal : i.target) || !c && !i.hasAttribute("state")) return;
      const v = (i.getAttribute("rel") || "").split(/\s+/);
      if (i.hasAttribute("download") || v && v.includes("external")) return;
      const y = d ? new URL(c, document.baseURI) : new URL(c);
      if (!(y.origin !== window.location.origin || s && y.pathname && !y.pathname.toLowerCase().startsWith(s.toLowerCase()))) return [i, y];
    }
    function p(a) {
      const i = w(a);
      if (!i) return;
      const [d, c] = i, A = e.parsePath(c.pathname + c.search + c.hash), v = d.getAttribute("state");
      a.preventDefault(), u(A, { resolve: false, replace: d.hasAttribute("replace"), scroll: !d.hasAttribute("noscroll"), state: v ? JSON.parse(v) : void 0 });
    }
    function g(a) {
      const i = w(a);
      if (!i) return;
      const [d, c] = i;
      n && (c.pathname = n(c.pathname)), e.preloadRoute(c, d.getAttribute("preload") !== "false");
    }
    function R(a) {
      clearTimeout(f);
      const i = w(a);
      if (!i) return h = null;
      const [d, c] = i;
      h !== d && (n && (c.pathname = n(c.pathname)), f = setTimeout(() => {
        e.preloadRoute(c, d.getAttribute("preload") !== "false"), h = d;
      }, 20));
    }
    function b(a) {
      if (a.defaultPrevented) return;
      let i = a.submitter && a.submitter.hasAttribute("formaction") ? a.submitter.getAttribute("formaction") : a.target.getAttribute("action");
      if (!i) return;
      if (!i.startsWith("https://action/")) {
        const c = new URL(i, ve);
        if (i = e.parsePath(c.pathname + c.search), !i.startsWith(o)) return;
      }
      if (a.target.method.toUpperCase() !== "POST") throw new Error("Only POST forms are supported for Actions");
      const d = ht.get(i);
      if (d) {
        a.preventDefault();
        const c = new FormData(a.target, a.submitter);
        d.call({ r: e, f: a.target }, a.target.enctype === "multipart/form-data" ? c : new URLSearchParams(c));
      }
    }
    delegateEvents(["click", "submit"]), document.addEventListener("click", p), t && (document.addEventListener("mousemove", R, { passive: true }), document.addEventListener("focusin", g, { passive: true }), document.addEventListener("touchstart", g, { passive: true })), document.addEventListener("submit", b), onCleanup(() => {
      document.removeEventListener("click", p), t && (document.removeEventListener("mousemove", R), document.removeEventListener("focusin", g), document.removeEventListener("touchstart", g)), document.removeEventListener("submit", b);
    });
  };
}
function ft(t) {
  if (isServer) return dt(t);
  const r = () => {
    const n = window.location.pathname.replace(/^\/+/, "/") + window.location.search, e = window.history.state && window.history.state._depth && Object.keys(window.history.state).length === 1 ? void 0 : window.history.state;
    return { value: n + window.location.hash, state: e };
  }, o = ge();
  return st({ get: r, set({ value: n, replace: e, scroll: s, state: u }) {
    e ? window.history.replaceState(Be(u), "", n) : window.history.pushState(u, "", n), ct(decodeURIComponent(window.location.hash.slice(1)), s), Q();
  }, init: (n) => ut(window, "popstate", qe(n, (e) => {
    if (e) return !o.confirm(e);
    {
      const s = r();
      return !o.confirm(s.value, { state: s.state });
    }
  })), create: mt({ preload: t.preload, explicitLinks: t.explicitLinks, actionBase: t.actionBase, transformUrl: t.transformUrl }), utils: { go: (n) => window.history.go(n), beforeLeave: o } })(t);
}
var gt = ["<div", ' class="page-transition-container relative min-h-screen">', "</div>"];
function wt(t) {
  return ssr(gt, ssrHydrationKey(), escape(createComponent(Transition, { name: "slide-up", mode: "outin", get children() {
    return createComponent(Suspense, { get children() {
      return t.children;
    } });
  } })));
}
function Ot() {
  return createComponent(ft, { root: wt, get children() {
    return createComponent(_t, {});
  } });
}

export { Ot as default };
//# sourceMappingURL=app-ABX6Lkj2.mjs.map
