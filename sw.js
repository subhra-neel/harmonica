// Offline cache + update prompt. To release an update: change VERSION here AND APP_VERSION in index.html.
const VERSION = '1.4';
const CACHE = 'harmonica-tabs-' + VERSION;
const FILES = ['./', 'index.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', e => {
  // No skipWaiting here: the page shows an "Update" button and asks the new worker to take over.
  e.waitUntil(caches.open(CACHE).then(c =>
    Promise.all(FILES.map(u => fetch(new Request(u, { cache: 'reload' })).then(r => c.put(u, r))))
  ));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k.startsWith('harmonica-tabs') && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', e => {
  if (e.data === 'SKIP_WAITING') self.skipWaiting();
  else if (e.data === 'GET_VERSION' && e.ports[0]) e.ports[0].postMessage(VERSION);
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request)));
});
