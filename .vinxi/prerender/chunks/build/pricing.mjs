import { createComponent } from 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/solid-js/web/dist/server.js';
import { i as it, Y as Ye, Z as Ze } from './routing-CzLrmEq0.mjs';
import { S as St } from './SpacesPage-BWaAZEZx.mjs';
import 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/solid-js/dist/server.js';
import './Footer-C8XgOVG9.mjs';
import './logo-U6xfzMsi.mjs';
import './community-D45MwejX.mjs';

function P() {
  const r = it(), t = () => {
    const a = r.spaceName;
    return a ? a.charAt(0).toUpperCase() + a.slice(1) : "Space";
  };
  return [createComponent(Ye, { get children() {
    return ["Pricing - ", t(), " - KahitSan Coworking"];
  } }), createComponent(Ze, { name: "description", get content() {
    return `Pricing for ${t()} coworking space at KahitSan, Naga City.`;
  } }), createComponent(St, {})];
}

export { P as default };
//# sourceMappingURL=pricing.mjs.map
