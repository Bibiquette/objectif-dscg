const CACHE_NAME = 'objectifdcg-v1';

const urlsToCache = [
  './',
  './index.html',
  './jeu-conso.html',
  './jeu-contrats.html',
  './jeu-droit.html',
  './jeu-flux.html',
  './jeu-immo.html',
  './jeu-prov.html',
  './jeu-social.html',
  './jeu-theories.html',
  './jeu-tva.html',
  './jeu-anglais.html',
  './jeu-bfr-tycoon.html',
  './manifest.json'
  // Ajoute icon-192.png et icon-512.png quand tu les auras créées
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});