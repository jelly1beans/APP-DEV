const CACHE_NAME = "app-dev-cache-v1";

const urlsToCache = [
  "/",
  "/home.html",
  "/login.html",
  "/signup.html",
  "/notes.html",
  "/profile.html",
  "/quiz.html",
  "/home.css",
  "/login.css",
  "/notes.css",
  "/profile.css",
  "/quiz.css",
  "/manifest.json",
  "/icon-192.png",
  "/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
