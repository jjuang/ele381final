var map;
var heatmap;

var heatmapData = [
  {location: new google.maps.LatLng(40.3456455, -74.6558775), weight: 20531836},
  {location: new google.maps.LatLng(40.3456458, -74.6558778), weight: 5551223481},
];

function initialize() {
  // Initalize the map of Princeton
  var mapOptions = {
    center: { lat: 40.3456455, lng: -74.6558775},
    zoom: 17
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);

  // Initialize the heatmap
  heatmap = new google.maps.visualization.HeatmapLayer({
    data: heatmapData,
    map: map,
    radius: 35,
    maxIntensity: 100000000
    //maxIntensity: 5551223481
  });

  heatmap.setMap(map);
  heatmap.setData(heatmapData);
}


// TODO: read from csv file. time will equal column number
// the values will be weights
function getNewData(time) {
  var latitude = 40.3456455 + time;
  var longitude = -74.6558775;
  return [new google.maps.LatLng(latitude, longitude)];
}

// Redraws the heatmap once every 100 milliseconds.
// This will be used to visualize changes in the heatmap over time.
// Currently it adds a small constant to the longitude as a test 
// so we can see it moving.
function updateHeatmap() {
  var counter = 0;
  window.setInterval(function() {
    heatmap.setData(getNewData(counter));
    counter = counter + 0.000001;
  }, 100);

}

// Important: The array of JSON you want is data.things
var test = function(data){
  console.log(data.things[0].weight);
  newData = [];
  for(var i = 0; i < data.things.length; i++) {
    var obj = data.things[i];
    newData.push({location:new google.maps.LatLng(data.things[i].latitude, 
      data.things[i].longitude), weight:parseInt(obj.weight)});
  }
  heatmap.setData(newData);
} 

function redraw() {
  var counter = 0;
  console.log("redraw called");

  

  window.setInterval(function() {
    counter = counter + 1;
    $.ajax({
      url: "/getlocations/" + counter,
      success: test,
      contentType: "application/json"
    })
  }, 1000);
}

google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(window, 'ready', redraw());
  

  //    $.getJSON("/getlocations/1", test));

    
