// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
});


//  $(function(){

//     $(".dropdown-menu li a").click(function(){

//       $(".btn:first-child").text($(this).text());
//       $(".btn:first-child").val($(this).text());

//    });

// });

var marker;

function initMap() {
  var mapCanvas = document.getElementById('map');

  var latLng = new google.maps.LatLng(38.748745, -105.041035);

  var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    };

  var map = new google.maps.Map(mapCanvas, mapOptions);

  var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h3 id="firstHeading" class="firstHeading">Maroon Bells</h3>'+
    '<div class="img-container"><img src="http://www.stayaspensnowmass.com/sites/default/files/styles/flexslider_full/public/images/gallery/bell3.jpg"></div>' +
    '<div id="bodyContent">'+
    '<p>Awesome hike ' +
    'more info '+
    'some other stuff</p>'+
    '<p>For more information:'+
    '<div><a href="https://en.wikipedia.org/wiki/Maroon_Bells">https://en.wikipedia.org/wiki/Maroon_Bells</a></div>'+
    '</div>'+
    '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  marker = new google.maps.Marker({
    animation: google.maps.Animation.DROP,
    position: latLng,
    map: map,
    title: "kick ass camping spot"
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
  // marker.addListener('click', toggleBounce);
}


// function toggleBounce() {
//   if (marker.getAnimation() !== null) {
//     marker.setAnimation(null);
//   } else {
//     marker.setAnimation(google.maps.Animation.BOUNCE);
//   }
// }
