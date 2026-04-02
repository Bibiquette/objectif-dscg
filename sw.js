const CACHE_NAME = 'objectif-dcg-v1';
const ASSETS = [
  './',
  'index.html',
  'jeu-flux.html',
  'jeu-immo.html',
  'jeu-bfr-tycoon.html',
  'jeu-prov.html',
  'jeu-anglais.html',
  'manifest.json',
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// Installation du Service Worker et mise en cache de TOUS les jeux
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Mise en cache des ressources de révision...');
      return cache.addAll(ASSETS);
    })
  );
});

// Stratégie de récupération : priorité au réseau, sinon cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});