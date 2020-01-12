
    var map = L.map('mapid', { scrollWheelZoom: false }).setView([29.507, 105.300], 5);
    L.tileLayer('https://api.mapbox.com/styles/v1/yolan/ck4mx20is1u0m1cnuswrk7tso/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoieW9sYW4iLCJhIjoiY2puYmk0ZXByMDF3bDN2cDZueGZqNDJsayJ9.g1Mg6-OOpeAcSC4ykvwCEw', {
        // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 15,
        id: 'mapbox.streets',
    }).addTo(map)



    var yangtzebasin = L.geoJson(yangtzebasin, {
        style: function (feature) {
            return {
                color: "#05529d",
                weight: 4,
                opacity: 1
            }
        }
    }).addTo(map).bindPopup("<b>Yangtze Basin</b><br>China");

    var yangtzerivier = L.geoJson(yangtzerivier, {
        style: function (feature) {
            return {
                color: "#DA1B83",
                weight: 5,
                opacity: 1
            }
        }
    }).addTo(map).bindPopup("<b>Yangtze Rivier</b><br>China");

    var legend = L.control({ position: "bottomright" });

    legend.onAdd = function (map) {
        var div = L.DomUtil.create("div", "legenda");
        div.innerHTML += "<h4>Legenda</h4>";
        div.innerHTML += '<i style="background: #DC4E9B"></i><span>Yangtze rivier</span><br>';
        div.innerHTML += '<i style="background: #05529d"></i><span>Yangtze basin</span><br>';
        return div;
    };

    legend.addTo(map);