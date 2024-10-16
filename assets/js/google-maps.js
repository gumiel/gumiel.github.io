function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: -17.392033, lng: -66.208277};
//-17.392033, 
    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Barrio sausalito en Colcapirua, Cochabamba' // Title Location
    });
}