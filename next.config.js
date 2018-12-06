const withOffline = require('next-offline');
const isProd = (process.env.NODE_ENV || 'production') === 'production'

module.exports = withOffline({
  workboxOpts: {
    //assetPrefix for github pages production deployment
    modifyUrlPrefix: {
      'app': isProd ? '/portfolio' : ''
      //'app': assetPrefix,
    },
    //offlineGoogleAnalytics: true,
    //Determine the maximum size of files that will be precached. Set limit to 5mb:
    maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
    runtimeCaching: [
      {
        urlPattern: /.*\.(?:woff|woff2|eot|ttf)/,
        handler: 'cacheFirst',
        options: {
          cacheName: 'font-cache',
          cacheableResponse: {
            statuses: [0, 200],
          }
        }
      },
      {
        urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif)/,
        handler: 'cacheFirst',
        options: {
          cacheName: 'image-font-cache',
          expiration: {
            maxEntries:150,
            maxAgeSeconds: 30 * 24 * 60 * 60
          },
          cacheableResponse: {
            statuses: [0, 200],
          }
        }
      },
      {
        urlPattern: /catalog/,
        handler: 'staleWhileRevalidate',
        options: {
          cacheName: 'api-cache',
          cacheableResponse: {
            statuses: [200],
          }
        }
      },
      {
        urlPattern: /api/,
        handler: 'networkFirst',
        options: {
          cacheableResponse: {
            statuses: [0, 200],
            headers: {
              'x-test': 'true'
            }
          }
        }
      },
      {
        urlPattern: /^https?.*/,
        handler: 'networkFirst'
      }
    ]
  }
  //assetPrefix: isProd ? '/portfolio' : ''
  //assetPrefix: process.env.NODE_ENV === 'production' ? 'https://williamvelazquez.github.io/portfolio' : ''
  //assetPrefix: process.env.NODE_ENV === 'production' ? '/{portfolio}' : ''
  //assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : ''
  //Provide own no-op service worker in development
  //Useful to test web push notifications in development
  //devSwSrc: '/path/to/my/dev/service-worker.js'
  //swDest: 'custom-sw-name.js',

  //https://github.com/hanford/next-offline
  //https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#generatesw_plugin
});