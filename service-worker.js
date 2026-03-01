self.addEventListener("install", function(e){
    e.waitUntil(
        caches.open("app-cache").then(function(cache){
            return cache.addAll(["home.html","home.css","notes.html","notes.css","quiz.html","quiz.css","login.html","login.css","signup.html","profile.html","profile.css"]);
        })
    );
});

self.addEventListener("fetch", function(e){
    e.respondWith(
        caches.match(e.request).then(function(response){
            return response || fetch(e.request);
        })
    );
});