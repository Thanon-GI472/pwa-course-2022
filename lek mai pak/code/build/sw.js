const VERSION = 3;

self.addEventListener('install', function(event){
    console.log("[SW] installing service worker version " + VERSION);
    event.waitUntil(
        caches.open('gi472-chat').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
            ])
        })
    )
})

self.addEventListener('fetch', function(event) {
    caches.match(event.request).then(function(response) {
        if(response) {
            console.log("Intersect with cache", response);
            return response;
        }

        return fetch(event.request);
    });
});