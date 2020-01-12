// Rivier shapefile
var map = L.map('parana-rivier', { scrollWheelZoom: false }).setView([-27.429, -56.470], 6);
L.tileLayer('https://api.mapbox.com/styles/v1/yolan/ck4mx20is1u0m1cnuswrk7tso/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoieW9sYW4iLCJhIjoiY2puYmk0ZXByMDF3bDN2cDZueGZqNDJsayJ9.g1Mg6-OOpeAcSC4ykvwCEw', {
    // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 15,
    id: 'mapbox.streets',
}).addTo(map);

var paranarivier = L.geoJson(paranarivier, {
    style: function (feature) {
        return {
            color: "#DA1B83",
            weight: 5,
            opacity: 1
        }
    }
}).addTo(map).bindPopup("<b>Paraná Rivier</b><br>Argentinië");



var legend = L.control({ position: "bottomright" });

legend.onAdd = function (map) {
    var div = L.DomUtil.create("div", "legenda");
    div.innerHTML += "<h4>Legenda</h4>";
    div.innerHTML += '<i style="background: #DA1B83"></i><span>Rio Paraná</span><br>';
    return div;
};

legend.addTo(map);
