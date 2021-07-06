//API Do mapa
var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([-44, -19.86]),
        zoom: 14
    })
});

//API Responsavel pela geolocalização
function log(position) {
    console.log(position)
}
navigator.geolocation.getCurrentPosition(log)

var lat = position.coords.latitude

var lon = position.coords.longitude