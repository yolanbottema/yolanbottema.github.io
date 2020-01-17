    var map = L.map('chongming', { scrollWheelZoom: false }).setView([31.638, 121.526], 9);
    L.tileLayer('https://api.mapbox.com/styles/v1/yolan/ck4mx20is1u0m1cnuswrk7tso/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoieW9sYW4iLCJhIjoiY2puYmk0ZXByMDF3bDN2cDZueGZqNDJsayJ9.g1Mg6-OOpeAcSC4ykvwCEw', {
        // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 15,
        id: 'mapbox.streets',
    }).addTo(map)

        var chongmingshp = L.geoJson(chongmingshp, {
        style: function (feature) {
            return {
                color: "#DA1B83",
                weight: 2,
                opacity: 1
            }
        }
    }).addTo(map).bindPopup("<b>Chongming Dongtan Nature Reserve</b><br>Chongming eiland");

    var legend = L.control({ position: "bottomright" });

    legend.onAdd = function (map) {
        var div = L.DomUtil.create("div", "legenda");
        div.innerHTML += "<h4>Legenda</h4>";
        div.innerHTML += '<i style="background: #DA1B83"></i><span>Chongming Dongtan Nature Reserve</span><br>';
        return div;
    };

    legend.addTo(map);