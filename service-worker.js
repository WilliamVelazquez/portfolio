self.__precacheManifest = [
  {
    "url": "https://williamvelazquez.github.io/portfolio/_next/static\\2nwYsELOxxQwNbox9t9~M\\pages\\index.js"
  },
  {
    "url": "https://williamvelazquez.github.io/portfolio/_next/static\\2nwYsELOxxQwNbox9t9~M\\pages\\contact.js"
  },
  {
    "url": "https://williamvelazquez.github.io/portfolio/_next/static\\2nwYsELOxxQwNbox9t9~M\\pages\\about.js"
  },
  {
    "url": "https://williamvelazquez.github.io/portfolio/_next/static\\2nwYsELOxxQwNbox9t9~M\\pages\\_error.js"
  },
  {
    "url": "https://williamvelazquez.github.io/portfolio/_next/static\\2nwYsELOxxQwNbox9t9~M\\pages\\_app.js"
  },
  {
    "url": "https://williamvelazquez.github.io/portfolio/_next/static/runtime/webpack-42652fa8b82c329c0559.js"
  },
  {
    "url": "https://williamvelazquez.github.io/portfolio/_next/static/runtime/main-d41b31acb9d15328b905.js"
  },
  {
    "url": "https://williamvelazquez.github.io/portfolio/_next/static/chunks/commons.0ff2839d39a8931b6640.js"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
  
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/.*\.(?:woff|woff2|eot|ttf)/, workbox.strategies.cacheFirst({ "cacheName":"font-cache", plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
workbox.routing.registerRoute(/.*\.(?:png|jpg|jpeg|svg|gif)/, workbox.strategies.cacheFirst({ "cacheName":"image-font-cache", plugins: [new workbox.expiration.Plugin({"maxEntries":150,"maxAgeSeconds":2592000,"purgeOnQuotaError":false}), new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
workbox.routing.registerRoute(/catalog/, workbox.strategies.staleWhileRevalidate({ "cacheName":"api-cache", plugins: [new workbox.cacheableResponse.Plugin({"statuses":[200]})] }), 'GET');
workbox.routing.registerRoute(/api/, workbox.strategies.networkFirst({ plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0,200],"headers":{"x-test":"true"}})] }), 'GET');
workbox.routing.registerRoute(/^https?.*/, workbox.strategies.networkFirst(), 'GET');
