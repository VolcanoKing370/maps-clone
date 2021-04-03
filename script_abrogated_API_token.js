mapboxgl.accessToken = 'YOUR MAPBOX API TOKEN HERE!!! :)';

navigator.geolocation.getCurrentPosition(successLoc, 
    errorLoc, {
        enableHighAccuracy: true
})

function successLoc(position){
    mapSetup([position.coords.longitude, position.coords.latitude] )
}

function errorLoc(){
    mapSetup([-2.24, 53.48])
}

function mapSetup(center){
    const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: center,
        zoom : 15
    })

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'top-right');

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    })

    map.addControl(directions, 'top-left')
}