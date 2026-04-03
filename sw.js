const CACHE_NAME = 'objectif-dcg-v3'; // Passage en v3
const ASSETS = [
  './',
  'index.html',
  'jeu-flux.html',
  'jeu-immo.html',
  'jeu-bfr-tycoon.html',
  'jeu-prov.html',
  'jeu-anglais.html',
  'jeu-theories.html',
  'jeu-droit.html', // Nouveau fichier ajouté au cache
  'manifest.json',
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Mise en cache v3...');
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});