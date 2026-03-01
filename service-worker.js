self.addEventListener("install", function(e){
    e.waitUntil(
        caches.open("app-cache").then(function(cache){
            return cache.addAll(["pages/home.html","styles/home.css","pages/notes.html","styles/notes.css","pages/quiz.html","styles/quiz.css","pages/login.html","styles/login.css","pages/signup.html","pages/profile.html","styles/profile.css"]);
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