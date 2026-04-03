const CACHE_NAME = 'objectif-dcg-v2'; // Passage en v2 pour forcer la mise à jour chez les utilisateurs
const ASSETS = [
  './',
  'index.html',
  'jeu-flux.html',
  'jeu-immo.html',
  'jeu-bfr-tycoon.html',
  'jeu-prov.html',
  'jeu-anglais.html',
  'jeu-theories.html', // Inclus dans le cache
  'manifest.json',
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// Installation du Service Worker et mise en cache des ressources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Mise en cache v2 des ressources de révision...');
      return cache.addAll(ASSETS);
    })
  );
  // Force le service worker à devenir actif immédiatement
  self.skipWaiting();
});

// Nettoyage automatique de l'ancien cache (v1) lors de l'activation
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Suppression de l\'ancien cache :', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // Prend le contrôle des clients immédiatement
  self.clients.claim();
});

// Stratégie : Réseau en priorité, sinon Cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});