import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="preconnect" href="https://www.googletagmanager.com" />
          <link rel="preconnect" href="https://www.google-analytics.com" />
          <link rel="dns-prefetch" href="https://maps.googleapis.com" />
          <link rel="icon" href="/favicon/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          {assets}
          <script innerHTML={`(function(){var l=document.querySelectorAll('link[rel="stylesheet"]');for(var i=0;i<l.length;i++){l[i].media='print';l[i].onload=function(){this.media='all'};}})();`} />
          <script innerHTML={`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}function loadGA(){var s=document.createElement('script');s.src='https://www.googletagmanager.com/gtag/js?id=G-V8DDGHSHDP';s.async=true;document.head.appendChild(s);gtag('js',new Date());gtag('config','G-V8DDGHSHDP');}if('requestIdleCallback' in window){requestIdleCallback(loadGA)}else{setTimeout(loadGA,3000)}`} />
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
