import { createComponent, ssr, ssrHydrationKey, ssrAttribute, escape, ssrElement, mergeProps } from 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/solid-js/web/dist/server.js';
import { c as ct, l as lt, t as tt } from '../nitro/nitro.mjs';
import { splitProps } from 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/solid-js/dist/server.js';
import { X, V } from './logo-Cs-eLjvO.mjs';
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
import 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/solid-transition-group/dist/index.js';

var b = ['<div class="text-center"><!--$-->', "<!--/--><!--$-->", '<!--/--><h3 class="text-2xl font-bold text-white mb-3">', '</h3><p class="text-sm text-zinc-400 max-w-md mb-8">', "</p><!--$-->", "<!--/--></div>"], v = ["<div", ' class="flex items-center justify-center mx-auto mb-6">', "</div>"], B = ["<h1", ' class="text-6xl font-bold text-amber-500 mb-4">', "</h1>"];
const $ = (a) => {
  const [t, i] = splitProps(a, ["title", "heading", "message", "buttonText", "navigateTo", "logo", "hideButton", "onButtonClick", "class"]), r = tt(), l = () => {
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
  return [createComponent(ct, { children: "404 - Page Not Found - KahitSan" }), createComponent(lt, { name: "description", content: "The page you are looking for could not be found." }), createComponent($, { get logo() {
    return ssr(k, ssrHydrationKey() + ssrAttribute("src", escape(X, true), false));
  } })];
}

export { P as default };
//# sourceMappingURL=_...404_2.mjs.map
