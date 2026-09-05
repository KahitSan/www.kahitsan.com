import { createHandler, StartServer } from '@solidjs/start/server'
import { transformSync } from 'esbuild'

const googleAnalyticsBootstrapSource = `(function(){
  if (window.__kahitSanAnalyticsBootstrap) return;
  window.__kahitSanAnalyticsBootstrap = true;

  var measurementId = 'G-V8DDGHSHDP';
  var pageViewEvent = 'kahitsan:analytics-page-view';
  var interactionEvents = ['pointerdown', 'keydown', 'touchstart', 'scroll', 'click'];
  var listenerOptions = { capture: true, passive: true };
  var queuedPagePaths = [];
  var lastPagePath;
  var started = false;

  function gtag() {
    window.dataLayer.push(arguments);
  }

  function sendPageView(pagePath) {
    gtag('event', 'page_view', { page_path: pagePath });
  }

  function receivePageView(event) {
    var pagePath = event.detail && event.detail.pagePath;
    if (typeof pagePath !== 'string' || !pagePath || pagePath === lastPagePath) return;

    lastPagePath = pagePath;
    if (started) sendPageView(pagePath);
    else queuedPagePaths.push(pagePath);
  }

  function removeLoadTriggers() {
    clearTimeout(fallbackTimer);
    for (var index = 0; index < interactionEvents.length; index += 1) {
      window.removeEventListener(interactionEvents[index], loadGoogleAnalytics, listenerOptions);
    }
  }

  function loadGoogleAnalytics() {
    if (started) return;
    started = true;
    removeLoadTriggers();

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || gtag;
    window.gtag('js', new Date());
    window.gtag('config', measurementId, { send_page_view: false });

    while (queuedPagePaths.length) sendPageView(queuedPagePaths.shift());

    var script = document.createElement('script');
    script.async = true;
    script.dataset.kahitsanGoogleAnalytics = 'true';
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
    document.head.appendChild(script);
  }

  window.addEventListener(pageViewEvent, receivePageView);
  for (var index = 0; index < interactionEvents.length; index += 1) {
    window.addEventListener(interactionEvents[index], loadGoogleAnalytics, listenerOptions);
  }
  var fallbackTimer = setTimeout(loadGoogleAnalytics, 10000);
})();`

const googleAnalyticsBootstrap = transformSync(googleAnalyticsBootstrapSource, {
  minify: true,
  target: 'es2017',
}).code.trim()

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="dns-prefetch" href="https://maps.googleapis.com" />
          <link rel="icon" href="/favicon/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          {assets}
          <script
            // eslint-disable-next-line solid/no-innerhtml
            innerHTML={googleAnalyticsBootstrap}
          />
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
))
