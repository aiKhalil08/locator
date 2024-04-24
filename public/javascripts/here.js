// /**
//  * Moves the map to display over Ola Ibrahim
//  *
//  * @param  {H.Map} map      A HERE Map instance within the application
//  */
// function moveMapToHome(map){
//   map.setCenter({lat:52.5159, lng:13.3777});
//   map.setZoom(14);
// }

// window.apikey = 'y0m2-_po-B07-RuT_sdUSkPsNRA2bYzu18wrGP5n3T4';

// /**
//  * Boilerplate map initialization code starts below:
//  */

// //Step 1: initialize communication with the platform
// // In your own code, replace variable window.apikey with your own apikey
// var platform = new H.service.Platform({
//   apikey: 'y0m2-_po-B07-RuT_sdUSkPsNRA2bYzu18wrGP5n3T4'
// });
// var defaultLayers = platform.createDefaultLayers();

// //Step 2: initialize a map - this map is centered over Europe
// var map = new H.Map(document.getElementById('map'),
//   defaultLayers.vector.normal.map,{
//   center: {lat:50, lng:5},
//   zoom: 4,
//   pixelRatio: window.devicePixelRatio || 1
// });
// // add a resize listener to make sure that the map occupies the whole container
// window.addEventListener('resize', () => map.getViewPort().resize());

// //Step 3: make the map interactive
// // MapEvents enables the event system
// // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
// var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// // Create the default UI components
// var ui = H.ui.UI.createDefault(map, defaultLayers);

// // Now use the map as required...
// window.onload = function () {
//     moveMapToHome(map);
// }


// alert('here n')

// Initialize the platform object
var platform = new H.service.Platform({
    'apikey': 'y0m2-_po-B07-RuT_sdUSkPsNRA2bYzu18wrGP5n3T4'
  });

  // Obtain the default map types from the platform object
  var maptypes = platform.createDefaultLayers();

  // Instantiate (and display) the map
  var map = new H.Map(
    document.getElementById('mapContainer'),
    maptypes.vector.normal.map,
    {
      zoom: 10,
      center: { lat: 6.554072, lng: 3.219292 }
    });