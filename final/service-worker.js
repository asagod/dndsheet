const HOST='https://asagod.github.io/dndsheet/final'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register(`${HOST}/service-worker.js`)
    .then(function () { console.log('Service Worker Registered'); });
}

var cacheName = 'dndsheet';
var filesToCache = [
  `${HOST}/imagens/icons/icon-128x128.png`,
  `${HOST}/imagens/icons/icon-144x144.png`,
  `${HOST}/imagens/icons/icon-152x152.png`,
  `${HOST}/imagens/icons/icon-192x192.png`,
  `${HOST}/imagens/icons/icon-256x256.png`,
  `${HOST}/imagens/edit.png`,
  `${HOST}/imagens/remove.png`,
  `${HOST}/styles/app.css`,
  `${HOST}/index.html`,
  `${HOST}/scripts/store.js`,
  `${HOST}/scripts/todo.js`,
  `${HOST}/service-worker.js`,
  `${HOST}/manifest.json`
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(cacheName).then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});
