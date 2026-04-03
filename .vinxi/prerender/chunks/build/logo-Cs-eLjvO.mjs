import { createComponent, Dynamic, mergeProps as mergeProps$1, ssr, ssrHydrationKey, ssrAttribute, escape, ssrStyleProperty } from 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/solid-js/web/dist/server.js';
import { mergeProps, splitProps, createSignal, createMemo, onCleanup } from 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/solid-js/dist/server.js';

const o = { "ks-hud-scan-line": "_ks-hud-scan-line_1d4op_1", "ks-hud-clip-top-left-bottom-right": "_ks-hud-clip-top-left-bottom-right_1d4op_1", "ks-hud-clip-top-right-bottom-left": "_ks-hud-clip-top-right-bottom-left_1d4op_1", "ks-hud-clip-minimal-top-left-bottom-right": "_ks-hud-clip-minimal-top-left-bottom-right_1d4op_1", "ks-hud-clip-minimal-top-right-bottom-left": "_ks-hud-clip-minimal-top-right-bottom-left_1d4op_1", "ks-hud-glow": "_ks-hud-glow_1d4op_1", "ks-hud-pulse": "_ks-hud-pulse_1d4op_1", "ks-interactive": "_ks-interactive_1d4op_39", "ks-btn-ripple": "_ks-btn-ripple_1d4op_4", "ks-btn-ripple-effect": "_ks-btn-ripple-effect_1d4op_9", "ks-btn-ripple-fade": "_ks-btn-ripple-fade_1d4op_20" };
var E = ["<span", ' style="', '"></span>'];
function m(...f) {
  return f.filter(Boolean).join(" ");
}
const k = { primary: { textColor: "text-amber-400", background: "bg-amber-600/20 border-amber-600/60", hover: "hover:bg-amber-600/30 hover:border-amber-500", colors: { ripple: "rgba(255, 255, 255, 0.3)", effect: "rgba(201, 169, 97, 0.4)", effectBg: "rgba(201, 169, 97, 0.1)", effectBorder: "rgba(201, 169, 97, 0.4)", effectGlow: "rgba(201, 169, 97, 0.3)" } }, danger: { textColor: "text-red-400", background: "bg-red-600/20 border-red-600/60", hover: "hover:bg-red-600/30 hover:border-red-500", colors: { ripple: "rgba(255, 255, 255, 0.3)", effect: "rgba(255, 68, 68, 0.4)", effectBg: "rgba(255, 68, 68, 0.1)", effectBorder: "rgba(255, 68, 68, 0.4)", effectGlow: "rgba(255, 68, 68, 0.3)" } }, secondary: { textColor: "text-slate-400", background: "bg-slate-600/20 border-slate-600/60", hover: "hover:bg-slate-600/30 hover:border-slate-500", colors: { ripple: "rgba(255, 255, 255, 0.3)", effect: "rgba(148, 163, 184, 0.4)", effectBg: "rgba(148, 163, 184, 0.1)", effectBorder: "rgba(148, 163, 184, 0.4)", effectGlow: "rgba(148, 163, 184, 0.3)" } } }, v = { clip1: { effects: ["clip-top-left-bottom-right"], baseClasses: "px-4 py-2 border", overrideType: false }, clip2: { effects: ["clip-top-right-bottom-left"], baseClasses: "px-4 py-2 border", overrideType: false }, ghost: { effects: [], baseClasses: "px-4 py-2 bg-transparent border-transparent hover:bg-current/10 hover:border-transparent", overrideType: true }, link: { effects: [], baseClasses: "px-0 py-0 bg-transparent border-transparent underline-offset-4 hover:underline hover:bg-transparent hover:border-transparent", overrideType: true } }, V = (f) => {
  const _ = mergeProps({ as: "button", intent: "primary", variant: "clip1", noRipple: false, noScanline: false, noGlow: false, noPulse: false, iconPosition: "left" }, f), [t, w] = splitProps(_, ["as", "intent", "variant", "noRipple", "noScanline", "noGlow", "noPulse", "icon", "iconPosition", "class", "children", "onClick", "disabled"]), [C, p] = createSignal([]);
  let x = 0;
  const g = createMemo(() => !t.children && t.icon), c = createMemo(() => k[t.intent] || k.primary), d = createMemo(() => v[t.variant] || v.clip1), l = createMemo(() => !(t.noRipple || t.variant === "link")), B = createMemo(() => {
    const e = [...d().effects];
    return t.noScanline || e.push("scanline"), e;
  }), P = createMemo(() => B().map((e) => ({ scanline: o["ks-hud-scan-line"], "clip-top-left-bottom-right": o["ks-hud-clip-top-left-bottom-right"], "clip-top-right-bottom-left": o["ks-hud-clip-top-right-bottom-left"], "clip-minimal-top-left-bottom-right": o["ks-hud-clip-minimal-top-left-bottom-right"], "clip-minimal-top-right-bottom-left": o["ks-hud-clip-minimal-top-right-bottom-left"], glow: o["ks-hud-glow"], pulse: o["ks-hud-pulse"] })[e]).filter(Boolean)), M = createMemo(() => {
    const e = c().colors;
    return { "--ks-effect-color": e.effect, "--ks-effect-bg": e.effectBg, "--ks-effect-border": e.effectBorder, "--ks-effect-bg-hover": e.effect.replace("0.1", "0.2"), "--ks-effect-border-hover": e.effect.replace("0.4", "0.6"), "--ks-effect-glow": e.effectGlow, "--ks-effect-glow-hover": e.effectGlow.replace("0.3", "0.5"), "--ks-effect-pulse-bg": e.effectBg, "--ks-effect-pulse-bg-mid": e.effect.replace("0.4", "0.2"), "--ks-effect-pulse-glow": e.effectGlow.replace("0.3", "0.2"), "--ks-effect-pulse-glow-mid": e.effectGlow, "--ks-ripple-color": e.ripple };
  }), G = createMemo(() => {
    const e = "select-none inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus:outline-none text-sm rounded", s = c().textColor, u = d().overrideType ? "" : `${c().background} ${c().hover}`, b = d().baseClasses;
    return m(e, s, u, b, t.class, l() && o["ks-btn-ripple"], !l() && o["ks-interactive"], g() && "aspect-square !p-2", ...P(), t.disabled && "opacity-50 cursor-not-allowed");
  }), D = (e) => {
    t.disabled || l();
  }, h = () => {
    if (!l() || t.disabled) return;
    const e = Date.now() - x, s = Math.max(0, 400 - e);
    setTimeout(() => {
      p((u) => u.map((b) => ({ ...b, isFading: true }))), setTimeout(() => p([]), 400);
    }, s);
  }, T = () => {
    t.disabled || h();
  }, $ = (e) => {
    t.onClick && !t.disabled && t.onClick(e);
  }, R = createMemo(() => {
    const e = t.icon;
    if (g() && e) return createComponent(e, {});
    if (e && t.children) {
      const s = createComponent(e, {});
      return t.iconPosition === "left" ? [s, t.children] : [t.children, s];
    }
    return e ? createComponent(e, {}) : t.children;
  });
  return onCleanup(() => p([])), createComponent(Dynamic, mergeProps$1({ get component() {
    return t.as;
  }, get class() {
    return G();
  }, get style() {
    return M();
  }, onMouseDown: D, onMouseUp: h, onMouseLeave: T, onClick: $, get disabled() {
    return t.disabled;
  } }, w, { get children() {
    return [R(), l() && C().map((e) => ssr(E, ssrHydrationKey() + ssrAttribute("class", escape(m(o["ks-btn-ripple-effect"], e.isFading && o["ks-btn-ripple-fade"]), true), false), ssrStyleProperty("left:", `${escape(e.x, true) - escape(e.size, true) / 2}px`) + ssrStyleProperty(";top:", `${escape(e.y, true) - escape(e.size, true) / 2}px`) + ssrStyleProperty(";width:", `${escape(e.size, true)}px`) + ssrStyleProperty(";height:", `${escape(e.size, true)}px`) + ssrStyleProperty(";background-color:", "var(--ks-ripple-color, rgba(255, 255, 255, 0.3))")))];
  } }));
}, X = "/_build/assets/logo-DwX9Dwwm.png";

export { V, X };
//# sourceMappingURL=logo-Cs-eLjvO.mjs.map
