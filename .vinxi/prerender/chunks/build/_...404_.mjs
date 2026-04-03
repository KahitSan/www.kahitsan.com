import { createComponent, ssr, ssrHydrationKey, ssrAttribute, escape, ssrElement, mergeProps } from 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/solid-js/web/dist/server.js';
import { Y as Ye, Z as Ze, s as st } from './routing-CzLrmEq0.mjs';
import { splitProps } from 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/solid-js/dist/server.js';
import { X, V } from './logo-U6xfzMsi.mjs';

var b = ['<div class="text-center"><!--$-->', "<!--/--><!--$-->", '<!--/--><h3 class="text-2xl font-bold text-white mb-3">', '</h3><p class="text-sm text-zinc-400 max-w-md mb-8">', "</p><!--$-->", "<!--/--></div>"], v = ["<div", ' class="flex items-center justify-center mx-auto mb-6">', "</div>"], B = ["<h1", ' class="text-6xl font-bold text-amber-500 mb-4">', "</h1>"];
const $ = (a) => {
  const [t, i] = splitProps(a, ["title", "heading", "message", "buttonText", "navigateTo", "logo", "hideButton", "onButtonClick", "class"]), r = st(), l = () => {
    t.onButtonClick ? t.onButtonClick() : r(t.navigateTo || "/");
  };
  return ssrElement("div", mergeProps({ get class() {
    return `flex items-center justify-center min-h-screen ${t.class || ""}`;
  } }, i), () => ssr(b, t.logo && ssr(v, ssrHydrationKey(), escape(t.logo)), t.title !== "" && ssr(B, ssrHydrationKey(), escape(t.title || "404")), escape(t.heading || "Page Not Found"), escape(t.message || "The page you're looking for doesn't exist or has been moved."), !t.hideButton && escape(createComponent(V, { intent: "primary", size: "lg", onClick: l, get children() {
    return t.buttonText || "Go Back Home";
  } }))), true);
};
var k = ["<img", ' alt="KahitSan Logo" width="200" height="200">'];
function P() {
  return [createComponent(Ye, { children: "404 - Page Not Found - KahitSan" }), createComponent(Ze, { name: "description", content: "The page you are looking for could not be found." }), createComponent($, { get logo() {
    return ssr(k, ssrHydrationKey() + ssrAttribute("src", escape(X, true), false));
  } })];
}

export { P as default };
//# sourceMappingURL=_...404_.mjs.map
