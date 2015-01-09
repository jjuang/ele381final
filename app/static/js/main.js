var map;
var heatmap;
var day = moment(new Date(2013, 11, 1)); //December 1st 2013

var currentTime = 0;
var newSpeed = 1000; //currentSpeed

var color0 = ['rgba(50,136,189,0)','rgb(50,136,189)','rgb(102,194,165)','rgb(171,221,164)','rgb(230,245,152)','rgb(255,255,191)','rgb(254,224,139)','rgb(253,174,97)','rgb(244,109,67)','rgb(213,62,79)'];
var color1 = ['rgba(26,152,80,0)','rgb(26,152,80)','rgb(102,189,99)','rgb(166,217,106)','rgb(217,239,139)','rgb(255,255,191)','rgb(254,224,139)','rgb(253,174,97)','rgb(244,109,67)','rgb(215,48,39)'];
var color2 = ['rgba(215,48,39,0)','rgb(215,48,39)','rgb(244,109,67)','rgb(253,174,97)','rgb(254,224,144)','rgb(255,255,191)','rgb(224,243,248)','rgb(171,217,233)','rgb(116,173,209)','rgb(69,117,180)'];
var color3 = ['rgba(140,81,10,0)','rgb(140,81,10)','rgb(191,129,45)','rgb(223,194,125)','rgb(246,232,195)','rgb(255,255,191)','rgb(199,234,229)','rgb(128,205,193)','rgb(53,151,143)','rgb(1,102,94)'];
var color4 = ['rgba(27,120,55,0)','rgb(27,120,55)','rgb(90,174,97)','rgb(166,219,160)','rgb(217,240,211)','rgb(247,247,247)','rgb(231,212,232)','rgb(194,165,207)','rgb(153,112,171)','rgb(118,42,131)'];

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

  heatmapAll = new google.maps.visualization.HeatmapLayer({
    data: heatmapData,
    map: map,
    radius: 35,
    maxIntensity: 90620657
    //maxIntensity: 5551223481
  });


  // Initialize the heatmap
  heatmapDownload = new google.maps.visualization.HeatmapLayer({
    data: heatmapData,
    map: map,
    radius: 35,
    maxIntensity: 90620657    
  });

  heatmapUpload = new google.maps.visualization.HeatmapLayer({
    map:map,
    data: heatmapData,
    maxIntensity: 90620657,
    radius: 35
   });
  
  heatmapAcademic = new google.maps.visualization.HeatmapLayer({
    data: heatmapData,
    radius: 35,
    maxIntensity: 90620657,
    gradient:color1
  });

  heatmapResidential = new google.maps.visualization.HeatmapLayer({
    data: heatmapData,
    radius: 35,
    maxIntensity: 90620657,
    gradient:color2
  });

  heatmapLibrary = new google.maps.visualization.HeatmapLayer({
    data: heatmapData,
    radius: 35,
    maxIntensity: 90620657,
    gradient:color3
  });

  heatmapEating = new google.maps.visualization.HeatmapLayer({
    data: heatmapData,
    radius: 35,
    maxIntensity: 90620657,
    gradient:uploadGradient
  });

  angelaInitialize();
  heatmapAll.setMap(map);
}

//***********************angela's data part 2***********************************
var average_fall_final = function(data_avg_fall_final){
  console.log(data_avg_fall_final.things[0].weight);
  newAvgFallFinalData = [];

  for(var i = 0; i < data_avg_fall_final.things.length; i++) {
    var obj = data_avg_fall_final.things[i];

    if (obj.direction == "rx") {
      newAvgFallFinalData.push({location:new google.maps.LatLng(data_avg_fall_final.things[i].latitude, 
      data_avg_fall_final.things[i].longitude), weight:parseInt(obj.weight)});
    }
  }
  heatmapAvgFallFinalRX.setData(newAvgFallFinalData);
}
var average_fall_break = function(data_avg_fall_break){
  console.log(data_avg_fall_break.things[0].weight);
  newAvgFallBreakData = [];

  for(var i = 0; i < data_avg_fall_break.things.length; i++) {
    var obj = data_avg_fall_break.things[i];

    if (obj.direction == "rx") {
      newAvgFallBreakData.push({location:new google.maps.LatLng(data_avg_fall_break.things[i].latitude, 
      data_avg_fall_break.things[i].longitude), weight:parseInt(obj.weight)});
    }
  }
  heatmapAvgFallBreakRX.setData(newAvgFallBreakData);
}

var average_fall_mid = function(data_avg_fall_mid){
  console.log(data_avg_fall_mid.things[0].weight);
  newAvgFallMidData = [];

  for(var i = 0; i < data_avg_fall_mid.things.length; i++) {
    var obj = data_avg_fall_mid.things[i];

    if (obj.direction == "rx") {
      newAvgFallMidData.push({location:new google.maps.LatLng(data_avg_fall_mid.things[i].latitude, 
      data_avg_fall_mid.things[i].longitude), weight:parseInt(obj.weight)});
    }
  }
  heatmapAvgFallMidRX.setData(newAvgFallMidData);
}

//******************** Spring semester *****************************

var average_spring_break = function(data_avg_spring_break){
  console.log(data_avg_spring_break.things[0].weight);
  newAvgSpringBreakData = [];

  for(var i = 0; i < data_avg_spring_break.things.length; i++) {
    var obj = data_avg_spring_break.things[i];

    if (obj.direction == "rx") {
      newAvgSpringBreakData.push({location:new google.maps.LatLng(data_avg_spring_break.things[i].latitude, 
      data_avg_spring_break.things[i].longitude), weight:parseInt(obj.weight)});
    }
  }
  heatmapAvgSpringBreakRX.setData(newAvgSpringBreakData);
}
var average_spring_mid = function(data_avg_spring_mid){
  console.log(data_avg_spring_mid.things[0].weight);
  newAvgSpringMidData = [];

  for(var i = 0; i < data_avg_spring_mid.things.length; i++) {
    var obj = data_avg_spring_mid.things[i];

    if (obj.direction == "rx") {
      newAvgSpringMidData.push({location:new google.maps.LatLng(data_avg_spring_mid.things[i].latitude, 
      data_avg_spring_mid.things[i].longitude), weight:parseInt(obj.weight)});
    }
  }
  heatmapAvgSpringMidRX.setData(newAvgSpringMidData);
}
var average_spring_final = function(data_avg_spring_final){
  console.log(data_avg_spring_final.things[0].weight);
  newAvgSpringFinalData = [];

  for(var i = 0; i < data_avg_spring_final.things.length; i++) {
    var obj = data_avg_spring_final.things[i];

    if (obj.direction == "rx") {
      newAvgSpringFinalData.push({location:new google.maps.LatLng(data_avg_spring_final.things[i].latitude, 
      data_avg_spring_final.things[i].longitude), weight:parseInt(obj.weight)});
    }
  }
  heatmapAvgSpringFinalRX.setData(newAvgSpringFinalData);
}

//********************** Other breaks ***************************
var intercession = function(data_intecession){
  console.log(data_intecession.things[0].weight);
  newIntercessionData = [];

  for(var i = 0; i < data_intecession.things.length; i++) {
    var obj = data_intecession.things[i];

    if (obj.direction == "rx") {
      newIntercessionData.push({location:new google.maps.LatLng(data_intecession.things[i].latitude, 
      data_intecession.things[i].longitude), weight:parseInt(obj.weight)});
    }
  }
  heatmapIntercessionRX.setData(newIntercessionData);
}
var winter_break = function(data_winter_break){
  console.log(data_winter_break.things[0].weight);
  newWinterBreakData = [];

  for(var i = 0; i < data_winter_break.things.length; i++) {
    var obj = data_winter_break.things[i];

    if (obj.direction == "rx") {
      newWinterBreakData.push({location:new google.maps.LatLng(data_winter_break.things[i].latitude, 
      data_winter_break.things[i].longitude), weight:parseInt(obj.weight)});
    }
  }
  heatmapWinterBreakRX.setData(newWinterBreakData);
}
var summer_break = function(data_summer_break){
  console.log(data_summer_break.things[0].weight);
  newSummerBreakData = [];

  for(var i = 0; i < data_summer_break.things.length; i++) {
    var obj = data_summer_break.things[i];

    if (obj.direction == "rx") {
      newSummerBreakData.push({location:new google.maps.LatLng(data_summer_break.things[i].latitude, 
      data_summer_break.things[i].longitude), weight:parseInt(obj.weight)});
    }
  }
  heatmapSummerBreakRX.setData(newSummerBreakData);
}
//******************** Misc *************************************
var average_wed4dec2013 = function(data_avg_wed4dec2013){
  console.log(data_avg_wed4dec2013.things[0].weight);
  newAvgWeedayData = [];

  for(var i = 0; i < data_avg_wed4dec2013.things.length; i++) {
    var obj = data_avg_wed4dec2013.things[i];

    if (obj.direction == "rx") {
      newAvgWeedayData.push({location:new google.maps.LatLng(data_avg_wed4dec2013.things[i].latitude, 
      data_avg_wed4dec2013.things[i].longitude), weight:parseInt(obj.weight)});
    }
  }
  heatmapAvgWed4Dec2013RX.setData(newAvgWeedayData);
}
var average_sat7dec2013 = function(data_avg_sat7dec2013){
  console.log(data_avg_sat7dec2013.things[0].weight);
  newAvgWeekendData = [];

  for(var i = 0; i < data_avg_sat7dec2013.things.length; i++) {
    var obj = data_avg_sat7dec2013.things[i];

    if (obj.direction == "rx") {
      newAvgWeekendData.push({location:new google.maps.LatLng(data_avg_sat7dec2013.things[i].latitude, 
      data_avg_sat7dec2013.things[i].longitude), weight:parseInt(obj.weight)});
    }
  }
  heatmapAvgSat7Dec2013RX.setData(newAvgWeekendData);
}
var average_year = function(data_avg_year){
  console.log(data_avg_year.things[0].weight);
  newAvgYearData = [];

  for(var i = 0; i < data_avg_year.things.length; i++) {
    var obj = data_avg_year.things[i];

    if (obj.direction == "rx") {
      newAvgYearData.push({location:new google.maps.LatLng(data_avg_year.things[i].latitude, 
      data_avg_year.things[i].longitude), weight:parseInt(obj.weight)});
    }
  }
  heatmapAvgYearRX.setData(newAvgYearData);
}
//******************* Initialize ********************************

function angelaInitialize() {
  
  heatmapAvgFallFinalRX = new google.maps.visualization.HeatmapLayer({
    data: heatmapData,
    radius: 35,
    maxIntensity: 90620657
  });
  heatmapAvgFallBreakRX= new google.maps.visualization.HeatmapLayer({
    data: heatmapData,
    radius: 35,
    gradient: color0,
    maxIntensity: 90620657
  });
  heatmapAvgFallMidRX= new google.maps.visualization.HeatmapLayer({
    data: heatmapData,
    radius: 35,
    gradient: color1,
    maxIntensity: 90620657
  });
  heatmapAvgSpringBreakRX= new google.maps.visualization.HeatmapLayer({
    data: heatmapData,
    radius: 35,
    gradient: color4,
    maxIntensity: 90620657
  });
  heatmapAvgSpringMidRX= new google.maps.visualization.HeatmapLayer({
    data: heatmapData,
    radius: 35,
    gradient: color3,
    maxIntensity: 90620657
  });
  heatmapAvgSpringFinalRX= new google.maps.visualization.HeatmapLayer({
    data: heatmapData,
    radius: 35,
    maxIntensity: 90620657
  });
  heatmapIntercessionRX= new google.maps.visualization.HeatmapLayer({
    data: heatmapData,
    radius: 35,
    gradient: color4,
    maxIntensity: 90620657
  });
  heatmapWinterBreakRX= new google.maps.visualization.HeatmapLayer({
    data: heatmapData,
    radius: 35,
    gradient: color0,
    maxIntensity: 90620657
  });
  heatmapSummerBreakRX= new google.maps.visualization.HeatmapLayer({
    data: heatmapData,
    radius: 35,
    gradient: color1,
    maxIntensity: 90620657
  });
  heatmapAvgWed4Dec2013RX= new google.maps.visualization.HeatmapLayer({
    data: heatmapData,
    radius: 35,
    gradient: color3,
    maxIntensity: 90620657
  });
  heatmapAvgSat7Dec2013RX= new google.maps.visualization.HeatmapLayer({
    data: heatmapData,
    radius: 35,
    gradient: color2,
    maxIntensity: 90620657
  });
  heatmapAvgYearRX= new google.maps.visualization.HeatmapLayer({
    data: heatmapData,
    radius: 35,
    maxIntensity: 90620657
  });
  $.ajax({
      url: "/angela1",
      success: average_fall_final,
      contentType: "application/json"
  })
  $.ajax({
      url: "/angela2",
      success: average_spring_break,
      contentType: "application/json"
  })
  $.ajax({
      url: "/angela3",
      success: average_fall_break,
      contentType: "application/json"
  })
  $.ajax({
      url: "/angela4",
      success: average_fall_mid,
      contentType: "application/json"
  })
  $.ajax({
      url: "/angela5",
      success: average_spring_mid,
      contentType: "application/json"
  })
  $.ajax({
      url: "/angela6",
      success: average_spring_final,
      contentType: "application/json"
  })
  $.ajax({
      url: "/angela7",
      success: intercession,
      contentType: "application/json"
  })
  $.ajax({
      url: "/angela8",
      success: winter_break,
      contentType: "application/json"
  })
  $.ajax({
      url: "/angela9",
      success: summer_break,
      contentType: "application/json"
  })
  $.ajax({
      url: "/angela10",
      success: average_wed4dec2013,
      contentType: "application/json"
  })
  $.ajax({
      url: "/angela12",
      success: average_sat7dec2013,
      contentType: "application/json"
  })
  $.ajax({
      url: "/angela13",
      success: average_year,
      contentType: "application/json"
  })
}

function toggleheatmapAvgFallFinalRX() {
  heatmapAvgFallFinalRX.setMap(heatmapAvgFallFinalRX.getMap() ? null : map);
}
function toggleheatmapAvgFallBreakRX() {
  heatmapAvgFallBreakRX.setMap(heatmapAvgFallBreakRX.getMap() ? null : map);
}
function toggleheatmapAvgFallMidRX() {
  heatmapAvgFallMidRX.setMap(heatmapAvgFallMidRX.getMap() ? null : map);
}
function toggleheatmapAvgSpringBreakRX() {
  heatmapAvgSpringBreakRX.setMap(heatmapAvgSpringBreakRX.getMap() ? null : map);
}
function toggleheatmapAvgSpringMidRX() {
  heatmapAvgSpringMidRX.setMap(heatmapAvgSpringMidRX.getMap() ? null : map);
}
function toggleheatmapAvgSpringFinalRX() {
  heatmapAvgSpringFinalRX.setMap(heatmapAvgSpringFinalRX.getMap() ? null : map);
}
function toggleheatmapIntercessionRX() {
  heatmapIntercessionRX.setMap(heatmapIntercessionRX.getMap() ? null : map);
}
function toggleheatmapWinterBreakRX() {
  heatmapWinterBreakRX.setMap(heatmapWinterBreakRX.getMap() ? null : map);
}
function toggleheatmapSummerBreakRX() {
  heatmapSummerBreakRX.setMap(heatmapSummerBreakRX.getMap() ? null : map);
}
function toggleheatmapAvgWed4Dec2013RX() {
  heatmapAvgWed4Dec2013RX.setMap(heatmapAvgWed4Dec2013RX.getMap() ? null : map);
}
function toggleheatmapAvgSat7Dec2013RX() {
  heatmapAvgSat7Dec2013RX.setMap(heatmapAvgSat7Dec2013RX.getMap() ? null : map);
}
function toggleheatmapAvgYearRX() {
  heatmapAvgYearRX.setMap(heatmapAvgYearRX.getMap() ? null : map);
}
$(function() {

  $( "#slider" ).slider({
    max:1000,
    min:100
  });

  $( "#slider" ).on( "slidechange", function( event, ui ) {
    newSpeed = 1100 - $( "#slider" ).slider( "value" );
    redraw(currentTime, newSpeed);
  } );

  $( "#datepicker" ).datepicker({
    defaultDate:"12/01/2013",
    yearRange: "2013:2014",
    onSelect: function(date) {
      var selected = moment(date, "MM/DD/YYYY");
      var counter = selected.diff(day, 'hours');
      console.log(counter);
      currentTime = counter;
      redrawOnce(counter);
    }
  });

  $( "#accordion" ).accordion({
    collapsible: true
  });

   $("#accordion").accordion({ beforeActivate: function(event, ui) {
      heatmapAll.setMap(null);
      heatmapUpload.setMap(null);
      heatmapDownload.setMap(null);

      heatmapAcademic.setMap(null);
      heatmapResidential.setMap(null);
      heatmapLibrary.setMap(null);
      heatmapEating.setMap(null);      

      if (ui.newHeader.text() == "Animation") {
        heatmapAll.setMap(map);
      }
     }
  });


  //$("input#great").switchButton();

  $('input').iCheck({
    checkboxClass: 'icheckbox_flat-grey',
    radioClass: 'iradio_flat-grey'
  });

  $('#radio_all').on('ifChecked', function(event){

    $('#upload').iCheck('disable');
    $('#download').iCheck('disable');

    heatmapUpload.setMap(null);
    heatmapDownload.setMap(null);

    heatmapAcademic.setMap(null);
    heatmapResidential.setMap(null);
    heatmapLibrary.setMap(null);
    heatmapEating.setMap(null);

    $('#academic').iCheck('disable');
    $('#residential').iCheck('disable');
    $('#library').iCheck('disable');
    $('#eating').iCheck('disable');

    heatmapAll.setMap(map);

  });

  $('#radio_transfer').on('ifChecked', function(event){
    heatmapAll.setMap(null);

    $('#upload').iCheck('enable');
    $('#download').iCheck('enable');

    $('#upload').iCheck('check');
    $('#download').iCheck('check');

    heatmapAcademic.setMap(null);
    heatmapResidential.setMap(null);
    heatmapLibrary.setMap(null);
    heatmapEating.setMap(null);

    $('#academic').iCheck('disable');
    $('#residential').iCheck('disable');
    $('#library').iCheck('disable');
    $('#eating').iCheck('disable');

    heatmapUpload.set("gradient", uploadGradient);
    heatmapDownload.setMap(map);
    heatmapUpload.setMap(map);
  });

  $('#radio_building').on('ifChecked', function(event){
    heatmapAll.setMap(null);
    heatmapUpload.setMap(null);
    heatmapDownload.setMap(null);

    $('#upload').iCheck('disable');
    $('#download').iCheck('disable');

    $('#academic').iCheck('enable');
    $('#residential').iCheck('enable');
    $('#library').iCheck('enable');
    $('#eating').iCheck('enable');

    $('#academic').iCheck('check');
    $('#residential').iCheck('check');
    $('#library').iCheck('check');
    $('#eating').iCheck('check');

    heatmapAcademic.setMap(map);
    heatmapResidential.setMap(map);
    heatmapLibrary.setMap(map);
    heatmapEating.setMap(map);
  });

  $('#upload').on('ifChecked', function(event){
    heatmapUpload.setMap(map);
  });
  $('#upload').on('ifUnchecked', function(event){
    heatmapUpload.setMap(null);
  });

  $('#download').on('ifChecked', function(event){
    heatmapDownload.setMap(map);
  });
  $('#download').on('ifUnchecked', function(event){
    heatmapDownload.setMap(null);
  });

  $('#academic').on('ifChecked', function(event){
    heatmapAcademic.setMap(map);
  });
  $('#academic').on('ifUnchecked', function(event){
    heatmapAcademic.setMap(null);
  });

  $('#residential').on('ifChecked', function(event){
    heatmapResidential.setMap(map);
  });
  $('#residential').on('ifUnchecked', function(event){
    heatmapResidential.setMap(null);
  });

  $('#library').on('ifChecked', function(event){
    heatmapLibrary.setMap(map);
  });
  $('#library').on('ifUnchecked', function(event){
    heatmapLibrary.setMap(null);
  });

  $('#eating').on('ifChecked', function(event){
    heatmapEating.setMap(map);
  });
  $('#eating').on('ifUnchecked', function(event){
    heatmapEating.setMap(null);
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
        redraw(currentTime, newSpeed);

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



// Important: The array of JSON you want is data.things
var test = function(data){
  //console.log(data.things[0].weight);
  newAllData = [];

  newUploadData = [];
  newDownloadData = [];

  newAcaData = [];
  newResData = [];
  newLibData = [];
  newEatData = [];

  for(var i = 0; i < data.things.length; i++) {
    var obj = data.things[i];
    newAllData.push({location:new google.maps.LatLng(data.things[i].latitude, 
      data.things[i].longitude), weight:parseInt(obj.weight)});

    if (obj.direction == "rx") {
      newUploadData.push({location:new google.maps.LatLng(data.things[i].latitude, 
      data.things[i].longitude), weight:parseInt(obj.weight)});
    } else if (obj.direction == "tx") {
      newDownloadData.push({location:new google.maps.LatLng(data.things[i].latitude, 
      data.things[i].longitude), weight:parseInt(obj.weight)});
    }

    if (obj.buildingType == "Academic") {
      newAcaData.push({location:new google.maps.LatLng(data.things[i].latitude, 
      data.things[i].longitude), weight:parseInt(obj.weight)});
    } else if (obj.buildingType == "Residential") {
      newResData.push({location:new google.maps.LatLng(data.things[i].latitude, 
      data.things[i].longitude), weight:parseInt(obj.weight)});
    } else if (obj.buildingType == "Library") {
      newLibData.push({location:new google.maps.LatLng(data.things[i].latitude, 
      data.things[i].longitude), weight:parseInt(obj.weight)});
    } else if (obj.buildingType == "Eating") {
      newEatData.push({location:new google.maps.LatLng(data.things[i].latitude, 
      data.things[i].longitude), weight:parseInt(obj.weight)});
    }
  }



  heatmapAll.setData(newAllData);

  heatmapUpload.setData(newUploadData);
  heatmapDownload.setData(newDownloadData);

  heatmapAcademic.setData(newAcaData);
  heatmapResidential.setData(newResData);
  heatmapLibrary.setData(newLibData);
  heatmapEating.setData(newEatData);
} 

var prevInterval;

function redraw(counter, speed) {
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
    timeDiv.textContent = moment(new Date(2013, 11, 1)).add(counter, 'hours').format("dddd, MMM Do YYYY, h:mm a");;

  }, speed);
}

function redrawOnce(counter) {
  currentTime = counter;

   $.ajax({
      url: "/getlocations/" + counter,
      success: test,
      contentType: "application/json"
    });

   var timeDiv = document.getElementById("timeText");
   timeDiv.textContent = moment(new Date(2013, 11, 1)).add(counter, 'hours').format("dddd, MMM Do YYYY, h:mm a");;
}

function toggleHeatmapDownload() {
  heatmapDownload.setMap(heatmapDownload.getMap() ? null : map);
}

function toggleHeatmapUpload() {
  heatmapUpload.setMap(heatmapUpload.getMap() ? null : map);
}
function changeOpacity() {
  heatmapDownload.set('opacity', heatmapDownload.get('opacity') ? null : 0.5);
  heatmapUpload.set('opacity', heatmapUpload.get('opacity') ? null : 0.5);
}

function clearAll() {
  heatmapAvgFallMidRX.setMap(null);
  heatmapAvgFallBreakRX.setMap(null);
  heatmapAvgFallFinalRX.setMap(null);

  heatmapWinterBreakRX.setMap(null);
  heatmapIntercessionRX.setMap(null);
  heatmapSummerBreakRX.setMap(null);

  heatmapAvgSpringMidRX.setMap(null);
  heatmapAvgSpringBreakRX.setMap(null);
  heatmapAvgSpringFinalRX.setMap(null);

  heatmapAvgYearRX.setMap(null);

  heatmapAvgSat7Dec2013RX.setMap(null);
  heatmapAvgWed4Dec2013RX.setMap(null);

  heatmapDownload.setMap(null);
  heatmapUpload.setMap(null);

  heatmapAcademic.setMap(null);
  heatmapResidential.setMap(null);
  heatmapLibrary.setMap(null);
  heatmapEating.setMap(null);

  heatmapAll.setMap(null);

  $('#academic').iCheck('disable');
  $('#residential').iCheck('disable');
  $('#library').iCheck('disable');
  $('#eating').iCheck('disable');
}


google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(window, 'load', 
  $(function() {
  var timeDiv = document.getElementById("timeText");
  timeDiv.textContent = moment(new Date(2013, 11, 1)).format("dddd, MMM Do YYYY, h:mm a");

  $.ajax({
      url: "/getlocations/" + 0,
      success: test,
      contentType: "application/json"
    })
  }));
  

  //    $.getJSON("/getlocations/1", test));

    
