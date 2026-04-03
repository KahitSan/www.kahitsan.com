import { mergeProps, splitProps, createSignal, createMemo, onCleanup, createUniqueId, useContext, createRenderEffect, createContext } from 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/solid-js/dist/server.js';
import { createComponent, Dynamic, mergeProps as mergeProps$1, ssr, ssrHydrationKey, ssrAttribute, escape, ssrStyleProperty } from 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/solid-js/web/dist/server.js';

const J = createContext(), m = (o, n, a) => (N({ tag: o, props: n, setting: a, id: createUniqueId(), get name() {
  return n.name || n.property;
} }), null);
function N(o) {
  const n = useContext(J);
  if (!n) throw new Error("<MetaProvider /> should be in the tree");
  createRenderEffect(() => {
    const a = n.addTag(o);
    onCleanup(() => n.removeTag(o, a));
  });
}
const Z = (o) => m("title", o, { escape: true, close: true }), ee = (o) => m("meta", o), te = (o) => m("link", o), r = { "ks-hud-scan-line": "_ks-hud-scan-line_1d4op_1", "ks-hud-clip-top-left-bottom-right": "_ks-hud-clip-top-left-bottom-right_1d4op_1", "ks-hud-clip-top-right-bottom-left": "_ks-hud-clip-top-right-bottom-left_1d4op_1", "ks-hud-clip-minimal-top-left-bottom-right": "_ks-hud-clip-minimal-top-left-bottom-right_1d4op_1", "ks-hud-clip-minimal-top-right-bottom-left": "_ks-hud-clip-minimal-top-right-bottom-left_1d4op_1", "ks-hud-glow": "_ks-hud-glow_1d4op_1", "ks-hud-pulse": "_ks-hud-pulse_1d4op_1", "ks-interactive": "_ks-interactive_1d4op_39", "ks-btn-ripple": "_ks-btn-ripple_1d4op_4", "ks-btn-ripple-effect": "_ks-btn-ripple-effect_1d4op_9", "ks-btn-ripple-fade": "_ks-btn-ripple-fade_1d4op_20" };
var Q = ["<span", ' style="', '"></span>'];
function _(...o) {
  return o.filter(Boolean).join(" ");
}
const C = { primary: { textColor: "text-amber-400", background: "bg-amber-600/20 border-amber-600/60", hover: "hover:bg-amber-600/30 hover:border-amber-500", colors: { ripple: "rgba(255, 255, 255, 0.3)", effect: "rgba(201, 169, 97, 0.4)", effectBg: "rgba(201, 169, 97, 0.1)", effectBorder: "rgba(201, 169, 97, 0.4)", effectGlow: "rgba(201, 169, 97, 0.3)" } }, danger: { textColor: "text-red-400", background: "bg-red-600/20 border-red-600/60", hover: "hover:bg-red-600/30 hover:border-red-500", colors: { ripple: "rgba(255, 255, 255, 0.3)", effect: "rgba(255, 68, 68, 0.4)", effectBg: "rgba(255, 68, 68, 0.1)", effectBorder: "rgba(255, 68, 68, 0.4)", effectGlow: "rgba(255, 68, 68, 0.3)" } }, secondary: { textColor: "text-slate-400", background: "bg-slate-600/20 border-slate-600/60", hover: "hover:bg-slate-600/30 hover:border-slate-500", colors: { ripple: "rgba(255, 255, 255, 0.3)", effect: "rgba(148, 163, 184, 0.4)", effectBg: "rgba(148, 163, 184, 0.1)", effectBorder: "rgba(148, 163, 184, 0.4)", effectGlow: "rgba(148, 163, 184, 0.3)" } } }, w = { clip1: { effects: ["clip-top-left-bottom-right"], baseClasses: "px-4 py-2 border", overrideType: false }, clip2: { effects: ["clip-top-right-bottom-left"], baseClasses: "px-4 py-2 border", overrideType: false }, ghost: { effects: [], baseClasses: "px-4 py-2 bg-transparent border-transparent hover:bg-current/10 hover:border-transparent", overrideType: true }, link: { effects: [], baseClasses: "px-0 py-0 bg-transparent border-transparent underline-offset-4 hover:underline hover:bg-transparent hover:border-transparent", overrideType: true } }, oe = (o) => {
  const a = mergeProps({ as: "button", intent: "primary", variant: "clip1", noRipple: false, noScanline: false, noGlow: false, noPulse: false, iconPosition: "left" }, o), [t, x] = splitProps(a, ["as", "intent", "variant", "noRipple", "noScanline", "noGlow", "noPulse", "icon", "iconPosition", "class", "children", "onClick", "disabled"]), [M, u] = createSignal([]);
  let P = 0;
  const k = createMemo(() => !t.children && t.icon), p = createMemo(() => C[t.intent] || C.primary), b = createMemo(() => w[t.variant] || w.clip1), c = createMemo(() => !(t.noRipple || t.variant === "link")), T = createMemo(() => {
    const e = [...b().effects];
    return t.noScanline || e.push("scanline"), e;
  }), G = createMemo(() => T().map((e) => ({ scanline: r["ks-hud-scan-line"], "clip-top-left-bottom-right": r["ks-hud-clip-top-left-bottom-right"], "clip-top-right-bottom-left": r["ks-hud-clip-top-right-bottom-left"], "clip-minimal-top-left-bottom-right": r["ks-hud-clip-minimal-top-left-bottom-right"], "clip-minimal-top-right-bottom-left": r["ks-hud-clip-minimal-top-right-bottom-left"], glow: r["ks-hud-glow"], pulse: r["ks-hud-pulse"] })[e]).filter(Boolean)), $ = createMemo(() => {
    const e = p().colors;
    return { "--ks-effect-color": e.effect, "--ks-effect-bg": e.effectBg, "--ks-effect-border": e.effectBorder, "--ks-effect-bg-hover": e.effect.replace("0.1", "0.2"), "--ks-effect-border-hover": e.effect.replace("0.4", "0.6"), "--ks-effect-glow": e.effectGlow, "--ks-effect-glow-hover": e.effectGlow.replace("0.3", "0.5"), "--ks-effect-pulse-bg": e.effectBg, "--ks-effect-pulse-bg-mid": e.effect.replace("0.4", "0.2"), "--ks-effect-pulse-glow": e.effectGlow.replace("0.3", "0.2"), "--ks-effect-pulse-glow-mid": e.effectGlow, "--ks-ripple-color": e.ripple };
  }), D = createMemo(() => {
    const e = "select-none inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus:outline-none text-sm rounded", l = p().textColor, g = b().overrideType ? "" : `${p().background} ${p().hover}`, h = b().baseClasses;
    return _(e, l, g, h, t.class, c() && r["ks-btn-ripple"], !c() && r["ks-interactive"], k() && "aspect-square !p-2", ...G(), t.disabled && "opacity-50 cursor-not-allowed");
  }), R = (e) => {
    t.disabled || c();
  }, v = () => {
    if (!c() || t.disabled) return;
    const e = Date.now() - P, l = Math.max(0, 400 - e);
    setTimeout(() => {
      u((g) => g.map((h) => ({ ...h, isFading: true }))), setTimeout(() => u([]), 400);
    }, l);
  }, S = () => {
    t.disabled || v();
  }, z = (e) => {
    t.onClick && !t.disabled && t.onClick(e);
  }, I = createMemo(() => {
    const e = t.icon;
    if (k() && e) return createComponent(e, {});
    if (e && t.children) {
      const l = createComponent(e, {});
      return t.iconPosition === "left" ? [l, t.children] : [t.children, l];
    }
    return e ? createComponent(e, {}) : t.children;
  });
  return onCleanup(() => u([])), createComponent(Dynamic, mergeProps$1({ get component() {
    return t.as;
  }, get class() {
    return D();
  }, get style() {
    return $();
  }, onMouseDown: R, onMouseUp: v, onMouseLeave: S, onClick: z, get disabled() {
    return t.disabled;
  } }, x, { get children() {
    return [I(), c() && M().map((e) => ssr(Q, ssrHydrationKey() + ssrAttribute("class", escape(_(r["ks-btn-ripple-effect"], e.isFading && r["ks-btn-ripple-fade"]), true), false), ssrStyleProperty("left:", `${escape(e.x, true) - escape(e.size, true) / 2}px`) + ssrStyleProperty(";top:", `${escape(e.y, true) - escape(e.size, true) / 2}px`) + ssrStyleProperty(";width:", `${escape(e.size, true)}px`) + ssrStyleProperty(";height:", `${escape(e.size, true)}px`) + ssrStyleProperty(";background-color:", "var(--ks-ripple-color, rgba(255, 255, 255, 0.3))")))];
  } }));
}, re = "/_server/assets/logo-DwX9Dwwm.png";

export { Z, ee as e, oe as o, re as r, te as t };
//# sourceMappingURL=logo-qWxlYysH.mjs.map
