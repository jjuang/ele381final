var map;
var heatmap;
var day = moment(new Date(2013, 0, 1)); //January 1st 2013

var currentTime = 0;

var uploadGradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
];

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
  heatmapDownload = new google.maps.visualization.HeatmapLayer({
    data: heatmapData,
    map: map,
    radius: 35,
    maxIntensity: 100000000
    //maxIntensity: 5551223481
  });

  heatmapUpload = new google.maps.visualization.HeatmapLayer({
    data: heatmapData,
    radius: 35,
    //maxIntensity: 100000000,
    gradient: uploadGradient
   });

  heatmapDownload.setMap(map);
  heatmapUpload.setMap(map);

}

$(function() {

  $( "#datepicker" ).datepicker({
    defaultDate:"01/01/2013",
    yearRange: "2013:2014",
    onSelect: function(date) {
      var selected = moment(date, "MM/DD/YYYY");
      var counter = selected.diff(day, 'hours');
      console.log(counter);
      currentTime = counter;
      redrawOnce(counter);
    }
  });

  $( "#accordion" ).accordion();

  //$("input#great").switchButton();

  $('input').iCheck({
    checkboxClass: 'icheckbox_flat-green',
    radioClass: 'iradio_flat-green'
  });

});

// play, forward, etc button bar
$(function() {

    $( "#beginning" ).button({
      text: false,
      icons: {
        primary: "ui-icon-seek-start"
      }
    })
    .click(function() {
        if(currentTime - 24 > 0) {
          currentTime = currentTime - 24;
          redrawOnce(currentTime);
        }
    });

    $( "#rewind" ).button({
      text: false,
      icons: {
        primary: "ui-icon-seek-prev"
      }
    })
    .click(function() {
      if(currentTime - 1 > 0) {
        currentTime = currentTime - 1;
        redrawOnce(currentTime);
      }
    });

    $( "#play" ).button({
      text: false,
      icons: {
        primary: "ui-icon-play"
      }
    })
    .click(function() {
      var options;
      if ( $( this ).text() === "play" ) {
        redraw(currentTime);

        options = {
          label: "pause",
          icons: {
            primary: "ui-icon-pause"
          }
        };
      } else {
        window.clearInterval(prevInterval);

        options = {
          label: "play",
          icons: {
            primary: "ui-icon-play"
          }
        };
      }
      $( this ).button( "option", options );
    });


    $( "#forward" ).button({
      text: false,
      icons: {
        primary: "ui-icon-seek-next"
      }
    })
    .click(function() {
      if (currentTime + 1 < 8760) {
        currentTime = currentTime + 1;
        redrawOnce(currentTime);
      }
    });


    $( "#end" ).button({
      text: false,
      icons: {
        primary: "ui-icon-seek-end"
      }
    })
    .click(function() {
      if (currentTime + 24 < 8760) {
        currentTime = currentTime + 24;
        redrawOnce(currentTime);
      }
    });

});



// TODO: read from csv file. time will equal column number
// the values will be weights
function getNewData(time) {
  var latitude = 40.3456455 + time;
  var longitude = -74.6558775;
  return [new google.maps.LatLng(latitude, longitude)];
}



// Important: The array of JSON you want is data.things
var test = function(data){
  //console.log(data.things[0].weight);
  newUploadData = [];
  newDownloadData = [];
  for(var i = 0; i < data.things.length; i++) {
    var obj = data.things[i];
    if (obj.direction == "rx") {
      newUploadData.push({location:new google.maps.LatLng(data.things[i].latitude, 
      data.things[i].longitude), weight:parseInt(obj.weight)});
    } else if (obj.direction == "tx") {
      newDownloadData.push({location:new google.maps.LatLng(data.things[i].latitude, 
      data.things[i].longitude), weight:parseInt(obj.weight)});
    }
  }
  heatmapUpload.setData(newUploadData);
  heatmapDownload.setData(newDownloadData);
} 



var prevInterval;

function redraw(counter) {
  //console.log(prevInterval);
  window.clearInterval(prevInterval);

  prevInterval = window.setInterval(function() {
    counter = counter + 1;
    currentTime = counter;
    //console.log(counter);
    $.ajax({
      url: "/getlocations/" + counter,
      success: test,
      contentType: "application/json"
    })

    var timeDiv = document.getElementById("timeText");
    timeDiv.textContent = moment(new Date(2013, 0, 1)).add(counter, 'hours').format("dddd, MMMM Do YYYY, h:mm a");;

  }, 1000);
}

function redrawOnce(counter) {
  currentTime = counter;

   $.ajax({
      url: "/getlocations/" + counter,
      success: test,
      contentType: "application/json"
    });

   var timeDiv = document.getElementById("timeText");
   timeDiv.textContent = moment(new Date(2013, 0, 1)).add(counter, 'hours').format("dddd, MMMM Do YYYY, h:mm a");;
}

function toggleHeatmapDownload() {
  heatmapDownload.setMap(heatmapDownload.getMap() ? null : map);
}

function toggleHeatmapUpload() {
  heatmapUpload.setMap(heatmapUpload.getMap() ? null : map);
}
function changeOpacity() {
  heatmapDownload.set('opacity', heatmapDownload.get('opacity') ? null : 0.2);
  heatmapUpload.set('opacity', heatmapUpload.get('opacity') ? null : 0.2);
}


google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(window, 'load', 
  $(function() {
  var timeDiv = document.getElementById("timeText");
  timeDiv.textContent = moment(new Date(2013, 0, 1)).format("dddd, MMMM Do YYYY, h:mm a");

  $.ajax({
      url: "/getlocations/" + 0,
      success: test,
      contentType: "application/json"
    })
  }));
  

  //    $.getJSON("/getlocations/1", test));

    
