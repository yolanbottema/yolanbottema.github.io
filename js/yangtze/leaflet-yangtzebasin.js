var map = L.map('yangtzebasin', { scrollWheelZoom: false }).setView([32.629, 106.371],5);
L.tileLayer('https://api.mapbox.com/styles/v1/yolan/ck4mx20is1u0m1cnuswrk7tso/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoieW9sYW4iLCJhIjoiY2puYmk0ZXByMDF3bDN2cDZueGZqNDJsayJ9.g1Mg6-OOpeAcSC4ykvwCEw', {
    // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 15,
    id: 'mapbox.streets',
}).addTo(map);

