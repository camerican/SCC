  
//40.7070526,-74.0054724,16.11z
  function initMap() {
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
        center: {lat: 40.707, lng: -74.005},
        zoom: 16
    });
  }