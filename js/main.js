//GEOLOCALISATION
function myPosition(position) {
    var infoPos = "<h1>My Position</h1>\n";
    infoPos += "Latitude : "+position.coords.latitude+"\n";
    infoPos += "Longitude : "+position.coords.longitude+"\n";
    infoPos += "Altitude : "+position.coords.altitude+"\n";
    document.getElementById('position').innerHTML = infoPos;
}

if(navigator.geolocation) {
    console.log('Geolocation KO');
    navigator.geolocation.getCurrentPosition(myPosition);
} else {
    console.log('Geolocation KO');
}