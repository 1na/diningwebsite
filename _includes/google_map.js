 function initMap() {
  var myLatLng = {lat: 52.220405, lng: 5.958588};
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    center: myLatLng,
    zoom: 16
  });
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Zenzez Dining'
  });
}