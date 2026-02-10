// Este es el Service Worker básico para que Android permita la instalación
self.addEventListener('fetch', function(event) {
    event.respondWith(
        fetch(event.request).catch(function() {
            return new Response("Fuera de línea");
        })
    );
});
