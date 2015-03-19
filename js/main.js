//GEOLOCALISATION
function myPosition(position) {
    var infoPos = "<h1>My Position</h1>\n";
    infoPos += "Latitude : "+position.coords.latitude+"\n";
    infoPos += "Longitude : "+position.coords.longitude+"\n";
    infoPos += "Altitude : "+position.coords.altitude+"\n";
    document.getElementById('position').innerHTML = infoPos;
}

if(navigator.geolocation) {
    console.log('Geolocation OK');
    navigator.geolocation.getCurrentPosition(myPosition);
} else {
    console.log('Geolocation KO');
}

//NOTIFICATION
if(Notification) {
    console.log('Notification OK');
    Notification.requestPermission( function(status) {
        console.log('Notification permission : '+status);
        var n = new Notification("HTML5 API TEST" , {body: "Welcome Ninja !"});
    });
} else {
    console.log('Notification KO');
}