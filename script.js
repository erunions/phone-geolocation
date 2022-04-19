"use strict";

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

function createMap(position) {
    const {longitude, latitude} = position.coords;

    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        interactive: false,
        center: [longitude, latitude],
        antialias: true,
        pitch: 40,
        zoom: 16
    })

    const marker = new mapboxgl.Marker()
    .setLngLat([longitude, latitude])
    .addTo(map);
}

function errorHandler() {
    console.log('Geolocation error');
}

if (navigator.geolocation) {
    navigator.geolocation.watchPosition(createMap, errorHandler);
} else {
    console.log('Geolocation is not supported by your browser');
}

mapboxgl.accessToken = `pk.eyJ1IjoibGllY2h0ZW5zdGllbmZhbjIiLCJhIjoiY2wyNTRiajZqMW0wdjNpanJwYnN2dXQ5ZiJ9.Li9sZfg5_t0TzjBuhcUdRQ`;