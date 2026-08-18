// Service worker : app shell + dépendances CDN en cache pour un usage hors-ligne complet.
const CACHE_NAME = 'vy-carnet-voyage-v1';
const APP_SHELL = ['./voyages.html', './manifest.webmanifest'];
const RUNTIME_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com', 'cdnjs.cloudflare.com'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  const isSameOrigin = url.origin === self.location.origin;
  const isKnownCdn = RUNTIME_HOSTS.includes(url.hostname);
  if (!isSameOrigin && !isKnownCdn) return;

  event.respondWith(
    caches.open(CACHE_NAME).then((cache) =>
      cache.match(event.request).then((cached) => {
        const network = fetch(event.request).then((response) => {
          // Les ressources CDN cross-origin reviennent "opaque" (sans CORS) : on les met quand même
          // en cache, seules les vraies erreurs réseau sont ignorées.
          if (response && (response.ok || response.type === 'opaque')) cache.put(event.request, response.clone());
          return response;
        }).catch(() => cached);
        return cached || network;
      })
    )
  );
});
