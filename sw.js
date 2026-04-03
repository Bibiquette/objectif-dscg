const CACHE_NAME = 'objectif-dcg-v4'; // Changement de version pour forcer la mise à jour
const ASSETS = [
  './',
  'index.html',
  'jeu-flux.html',
  'jeu-immo.html',
  'jeu-bfr-tycoon.html',
  'jeu-prov.html',
  'jeu-anglais.html',
  'jeu-theories.html',
  'jeu-droit.html',    // Ajout UE 1
  'jeu-contrats.html', // Ajout UE 2
  'manifest.json',
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://cdn.jsdelivr.net/npm/chart.js'
];

// Installation du Service Worker et mise en cache des fichiers
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Mise en cache v4 des modules de révision...');
      return cache.addAll(ASSETS);
    })
  );
  // Force l'activation immédiate du nouveau SW sans attendre la fermeture des onglets
  self.skipWaiting();
});

// Activation et nettoyage des anciens caches (v1, v2, v3...)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Suppression de l\'ancien cache détecté :', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // Prend immédiatement le contrôle des pages ouvertes
  self.clients.claim();
});

// Stratégie de récupération : Réseau en priorité pour les mises à jour, sinon Cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});