var mapbox = L.tileLayer('https://api.mapbox.com/styles/v1/yolan/ck4mx20is1u0m1cnuswrk7tso/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoieW9sYW4iLCJhIjoiY2puYmk0ZXByMDF3bDN2cDZueGZqNDJsayJ9.g1Mg6-OOpeAcSC4ykvwCEw', {
    // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 15,
    id: 'mapbox.streets',
});

var map = L.map('deltagebied', {
    center: [-33.182, -59.799],
    zoom: 8,
    layers: [mapbox],
    scrollWheelZoom: false 
});


var paranadeltashp = L.geoJson(paranadeltashp, {
    style: function (feature) {
        return {
            color: "#DA1B83",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.5
        }
    }
}).bindPopup("<b>Paraná Delta</b><br>Argentinië");

var paranadeltashp2 = L.geoJson(paranadeltashp2, {
    style: function (feature) {
        return {
            color: "#DA1B83",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.5
        }
    }
}).bindPopup("<b>Paraná Delta</b><br>Argentinië");

var paranapavon = L.geoJson(paranapavon, {
    style: function (feature) {
        return {
            color: "#05529d",
            weight: 3,
            opacity: 1
        }
    }
}).bindPopup("<b>Paraná Pavón</b><br>Argentinië");

var paranaibicuy = L.geoJson(paranaibicuy, {
    style: function (feature) {
        return {
            color: "#4b6eb0",
            weight: 3,
            opacity: 1
        }
    }
}).bindPopup("<b>Paraná Ibicuy</b><br>Argentinië");

var paranadelaspalmas = L.geoJson(paranadelaspalmas, {
    style: function (feature) {
        return {
            color: "#7b8fc5",
            weight: 3,
            opacity: 1
        }
    }
}).bindPopup("<b>Paraná de las Palmas</b><br>Argentinië");

var paranaguazu = L.geoJson(paranaguazu, {
    style: function (feature) {
        return {
            color: "#a9b3d9",
            weight: 3,
            opacity: 1
        }
    }
}).bindPopup("<b>Paraná Guazú</b><br>Argentinië");

var paranamini = L.geoJson(paranamini, {
    style: function (feature) {
        return {
            color: "#d2dfed",
            weight: 3,
            opacity: 1
        }
    }
}).bindPopup("<b>Paraná Miní</b><br>Argentinië");

var aftakkingen = L.layerGroup([paranadelaspalmas, paranaguazu, paranaibicuy, paranamini, paranapavon]);
var deltagebied = L.layerGroup([paranadeltashp, paranadeltashp2]);

var overlayerLayers2 = {
    'Paraná deltagebied' : deltagebied
}
var overlayerLayers = {
    // 'Paraná Miní' : paranamini,
    // 'Paraná Guazú' : paranaguazu,
    // 'Paraná de las Palmas' : paranadelaspalmas,
    // 'Paraná Pavón' : paranapavon,
    // 'Paraná Ibicuy' : paranaibicuy
    'Aftakkingen' : aftakkingen
};

L.control.layers(overlayerLayers2, overlayerLayers).addTo(map);

var legend = L.control({ position: "bottomleft" });

legend.onAdd = function (map) {
    var div = L.DomUtil.create("div", "legenda");
    div.innerHTML += "<h4>Legenda</h4>";
    div.innerHTML += '<i style="background: #DA1B83"></i><span>Paraná Delta</span><br>';
    div.innerHTML += '<i style="background: #05529d"></i><span>Paraná Pavón</span><br>';
    div.innerHTML += '<i style="background: #4b6eb0"></i><span>Paraná Ibicuy</span><br>';
    div.innerHTML += '<i style="background: #7b8fc5"></i><span>Paraná de las Palmas</span><br>';
    div.innerHTML += '<i style="background: #a9b3d9"></i><span>Paraná Guazú</span><br>';
    div.innerHTML += '<i style="background: #d2dfed"></i><span>Paraná Miní</span><br>';
    return div;
};

legend.addTo(map);


