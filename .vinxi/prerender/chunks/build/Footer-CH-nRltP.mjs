import { ssr, ssrHydrationKey, escape, createComponent, ssrAttribute, ssrElement, mergeProps as mergeProps$1, Dynamic } from 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/solid-js/web/dist/server.js';
import { createSignal, mergeProps, splitProps, createMemo, For } from 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/solid-js/dist/server.js';
import { r as re$1, o as oe$1 } from './logo-DgyhZf2V.mjs';
import { W as We, $ as $e, M as Me, E as E$1 } from '../nitro/nitro.mjs';

function f(e) {
  e = mergeProps({ inactiveClass: "inactive", activeClass: "active" }, e);
  const [, t] = splitProps(e, ["href", "state", "class", "activeClass", "inactiveClass", "end"]), s = We(() => e.href), a = $e(s), v = Me(), m = createMemo(() => {
    const p = s();
    if (p === void 0) return [false, false];
    const u = E$1(p.split(/[?#]/, 1)[0]).toLowerCase(), h = decodeURI(E$1(v.pathname).toLowerCase());
    return [e.end ? u === h : h.startsWith(u + "/") || h === u, u === h];
  });
  return ssrElement("a", mergeProps$1(t, { get href() {
    return a() || e.href;
  }, get state() {
    return JSON.stringify(e.state);
  }, get classList() {
    return { ...e.class && { [e.class]: true }, [e.inactiveClass]: !m()[0], [e.activeClass]: m()[0], ...t.classList };
  }, link: true, get "aria-current"() {
    return m()[1] ? "page" : void 0;
  } }), void 0, true);
}
/**
* @license lucide-solid v0.544.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var S = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round" }, d = S, x = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), L = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, s, a) => a ? a.toUpperCase() : s.toLowerCase()), W = (e) => {
  const t = L(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, B = (...e) => e.filter((t, s, a) => !!t && t.trim() !== "" && a.indexOf(t) === s).join(" ").trim(), I = (e) => {
  const [t, s] = splitProps(e, ["color", "size", "strokeWidth", "children", "class", "name", "iconNode", "absoluteStrokeWidth"]);
  return ssrElement("svg", mergeProps$1(d, { get width() {
    var _a;
    return (_a = t.size) != null ? _a : d.width;
  }, get height() {
    var _a;
    return (_a = t.size) != null ? _a : d.height;
  }, get stroke() {
    var _a;
    return (_a = t.color) != null ? _a : d.stroke;
  }, get "stroke-width"() {
    var _a, _b;
    return t.absoluteStrokeWidth ? Number((_a = t.strokeWidth) != null ? _a : d["stroke-width"]) * 24 / Number(t.size) : Number((_b = t.strokeWidth) != null ? _b : d["stroke-width"]);
  }, get class() {
    return B("lucide", "lucide-icon", ...t.name != null ? [`lucide-${x(W(t.name))}`, `lucide-${x(t.name)}`] : [], t.class != null ? t.class : "");
  } }, s), () => escape(createComponent(For, { get each() {
    return t.iconNode;
  }, children: ([a, v]) => createComponent(Dynamic, mergeProps$1({ component: a }, v)) })), true);
}, c = I, U = [["path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0", key: "1r0f0z" }], ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]], K = (e) => createComponent(c, mergeProps$1(e, { iconNode: U, name: "map-pin" })), O = K, q = [["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }], ["path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", key: "r6nss1" }]], F = (e) => createComponent(c, mergeProps$1(e, { iconNode: q, name: "house" })), R = F, T = [["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }], ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }], ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }], ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]], Z = (e) => createComponent(c, mergeProps$1(e, { iconNode: T, name: "users" })), D = Z, E = [["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }], ["path", { d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326", key: "11g9vi" }]], J = (e) => createComponent(c, mergeProps$1(e, { iconNode: E, name: "bell" })), V = J, X = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }], ["path", { d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662", key: "154egf" }]], G = (e) => createComponent(c, mergeProps$1(e, { iconNode: X, name: "circle-user" })), Q = G, Y = [["path", { d: "M4 5h16", key: "1tepv9" }], ["path", { d: "M4 12h16", key: "1lakjw" }], ["path", { d: "M4 19h16", key: "1djgab" }]], ee = (e) => createComponent(c, mergeProps$1(e, { iconNode: Y, name: "menu" })), te = ee, ae = [["path", { d: "M18 6 6 18", key: "1bl5f8" }], ["path", { d: "m6 6 12 12", key: "d8bk6v" }]], re = (e) => createComponent(c, mergeProps$1(e, { iconNode: ae, name: "x" })), se = re, ne = ["<img", ' alt="KahitSan" class="h-10 w-auto">'], ie = ["<header", ' class="fixed top-0 left-0 right-0 z-50 bg-zinc-900/70 backdrop-blur-xl border-b border-zinc-800/50"><div class="max-w-7xl mx-auto px-4"><div class="flex items-center justify-between h-16"><!--$-->', '<!--/--><nav class="hidden md:flex items-center gap-1">', '</nav><button class="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all" aria-label="Toggle menu">', "</button></div></div></header>"], oe = ["<nav", ' class="', '"><div class="flex flex-col p-4 gap-2">', "</div></nav>"], le = ["<span", ' class="text-sm font-medium">', "</span>"], ce = ["<div", ' class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"></div>'], de = ["<span", ' class="text-base font-medium">', "</span>"];
const y = [{ icon: R, label: "Home", href: "/" }, { icon: O, label: "Spaces", href: "/spaces" }, { icon: D, label: "Community", href: "/community" }, { icon: V, label: "Announcements", href: "/announcements" }, { icon: Q, label: "Account", href: "/account" }], pe = () => {
  const [e, t] = createSignal(false), s = () => t(false);
  return [ssr(ie, ssrHydrationKey(), escape(createComponent(f, { href: "/", class: "flex items-center gap-3 hover:opacity-80 transition-opacity", get children() {
    return ssr(ne, ssrHydrationKey() + ssrAttribute("src", escape(re$1, true), false));
  } })), escape(y.map((a) => createComponent(oe$1, { as: f, get href() {
    return a.href;
  }, get end() {
    return a.href === "/";
  }, variant: "clip1", intent: "secondary", get icon() {
    return a.icon;
  }, iconPosition: "left", activeClass: "!bg-amber-600/20 !border-amber-600/60 !text-amber-400", inactiveClass: "!bg-transparent !border-transparent", class: "px-4 py-2 transition-all duration-200", get children() {
    return ssr(le, ssrHydrationKey(), escape(a.label));
  } }))), e() ? escape(createComponent(se, { size: 24 })) : escape(createComponent(te, { size: 24 }))), e() && ssr(ce, ssrHydrationKey()), ssr(oe, ssrHydrationKey(), `fixed top-16 right-0 bottom-0 w-64 z-40 bg-zinc-900/95 backdrop-blur-xl border-l border-zinc-800/50 transform transition-transform duration-300 md:hidden ${e() ? "translate-x-0" : "translate-x-full"}`, escape(y.map((a) => createComponent(oe$1, { as: f, get href() {
    return a.href;
  }, get end() {
    return a.href === "/";
  }, variant: "clip1", intent: "secondary", get icon() {
    return a.icon;
  }, iconPosition: "left", activeClass: "!bg-amber-600/20 !border-amber-600/60 !text-amber-400", inactiveClass: "!bg-transparent !border-transparent", class: "w-full justify-start px-4 py-3 transition-all duration-200", onClick: s, get children() {
    return ssr(de, ssrHydrationKey(), escape(a.label));
  } }))))];
};
var ue = ["<footer", ' class="border-t border-zinc-800/50 py-8 mt-24"><div class="max-w-7xl mx-auto px-4"><div class="flex flex-col items-center gap-6"><div class="flex flex-wrap justify-center gap-6 text-sm"><a href="#" class="text-zinc-400 hover:text-white transition-colors">About</a><a href="#" class="text-zinc-400 hover:text-white transition-colors">Contact</a><a href="#" class="text-zinc-400 hover:text-white transition-colors">Terms</a><a href="#" class="text-zinc-400 hover:text-white transition-colors">Privacy</a></div><div class="text-center space-y-2"><p class="text-zinc-400 text-sm">\xA9 2025 KahitSan Solutions Corp</p><p class="text-zinc-500 text-xs">*Pantry access available when no events in the inner area</p></div></div></div></footer>'];
const be = () => ssr(ue, ssrHydrationKey());

export { D, O, be as b, c, f, pe as p };
//# sourceMappingURL=Footer-CH-nRltP.mjs.map
