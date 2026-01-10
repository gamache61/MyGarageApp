const CACHE_NAME = 'mygarage-v1';
const ASSETS = [
  './',
  './index.html',
  'https://cdn-icons-png.flaticon.com/512/2555/2555013.png'
];

// Install the Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Fetch assets from cache if offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});