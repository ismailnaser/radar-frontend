import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

/** هدف البروكسي: 127.0.0.1 يتفادى مشاكل IPv6/localhost على ويندوز */
function apiProxyTarget(mode) {
  const env = loadEnv(mode, process.cwd(), '')
  return (env.VITE_PROXY_TARGET || 'http://127.0.0.1:8000').replace(/\/$/, '')
}

export default defineConfig(({ mode }) => {
  const target = apiProxyTarget(mode)
  const proxy = {
    '/api': { target, changeOrigin: true, secure: false },
    '/media': { target, changeOrigin: true, secure: false },
  }
  return {
    plugins: [
      react(),
      VitePWA({
        registerType: 'autoUpdate',
        manifestFilename: 'manifest.webmanifest',
        includeAssets: [
          'logo.png',
          'favicon-32.png',
          'favicon-48.png',
          'pwa-96.png',
          'pwa-128.png',
          'pwa-144.png',
          'pwa-192.png',
          'pwa-256.png',
          'pwa-384.png',
          'pwa-512.png',
          'pwa-maskable-192.png',
          'pwa-maskable-512.png',
          'apple-touch-icon-120.png',
          'apple-touch-icon-152.png',
          'apple-touch-icon-167.png',
          'apple-touch-icon-180.png',
        ],
        manifest: {
          name: 'رادار - دليلك للمحلات القريبة',
          short_name: 'رادار',
          description: 'دليلك للمحلات القريبة',
          lang: 'ar',
          dir: 'rtl',
          start_url: '/',
          scope: '/',
          display: 'standalone',
          background_color: '#ffffff',
          theme_color: '#f5c000',
          icons: [
            { src: '/pwa-96.png', sizes: '96x96', type: 'image/png', purpose: 'any' },
            { src: '/pwa-128.png', sizes: '128x128', type: 'image/png', purpose: 'any' },
            { src: '/pwa-144.png', sizes: '144x144', type: 'image/png', purpose: 'any' },
            { src: '/pwa-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
            { src: '/pwa-256.png', sizes: '256x256', type: 'image/png', purpose: 'any' },
            { src: '/pwa-384.png', sizes: '384x384', type: 'image/png', purpose: 'any' },
            { src: '/pwa-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
            { src: '/pwa-maskable-192.png', sizes: '192x192', type: 'image/png', purpose: 'any maskable' },
            { src: '/pwa-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
          ],
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,webmanifest,woff,woff2,ttf,eot,json}'],
          navigateFallback: '/index.html',
          runtimeCaching: [
            {
              urlPattern: ({ url }) => url.pathname.startsWith('/api/'),
              handler: 'NetworkFirst',
              options: {
                cacheName: 'api-cache',
                networkTimeoutSeconds: 6,
                expiration: { maxEntries: 80, maxAgeSeconds: 60 * 60 * 24 * 3 },
                cacheableResponse: { statuses: [0, 200] },
              },
            },
            {
              urlPattern: ({ url }) => url.pathname.startsWith('/media/'),
              handler: 'CacheFirst',
              options: {
                cacheName: 'media-cache',
                expiration: { maxEntries: 120, maxAgeSeconds: 60 * 60 * 24 * 30 },
                cacheableResponse: { statuses: [0, 200] },
              },
            },
          ],
        },
        devOptions: {
          enabled: true,
        },
      }),
    ],
    server: {
      port: 3000,
      /** ويندوز: يقلل تعارض localhost ↔ IPv6 مع البروكسي إلى Django على 127.0.0.1 */
      host: '127.0.0.1',
      proxy,
    },
    preview: {
      port: 3000,
      proxy,
    },
  }
})
