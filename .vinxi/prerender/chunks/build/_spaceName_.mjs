import { createComponent } from 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/solid-js/web/dist/server.js';
import { i as it, Y as Ye, Z as Ze } from './routing-CzLrmEq0.mjs';
import { S as St } from './SpacesPage-BWaAZEZx.mjs';
import 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/solid-js/dist/server.js';
import './Footer-C8XgOVG9.mjs';
import './logo-U6xfzMsi.mjs';
import './community-D45MwejX.mjs';

function h() {
  const r = it(), t = () => {
    const e = r.spaceName;
    return e ? e.charAt(0).toUpperCase() + e.slice(1) : "Space";
  };
  return [createComponent(Ye, { get children() {
    return [t(), " - KahitSan Coworking"];
  } }), createComponent(Ze, { name: "description", get content() {
    return `View the ${t()} coworking space at KahitSan, Naga City.`;
  } }), createComponent(St, {})];
}

export { h as default };
//# sourceMappingURL=_spaceName_.mjs.map
