var map;
var heatmap;
var day = moment(new Date(2013, 0, 1)); //January 1st 2013

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

var AvgFallBreakRData = [
  {location: new google.maps.LatLng(40.347607,-74.6612695),  weight: 25368987.7869822},
  {location: new google.maps.LatLng(40.33316,-74.657092),  weight: 53447068.2781065},
  {location: new google.maps.LatLng(40.344822,-74.659381),  weight: 24978984.5266272},
  {location: new google.maps.LatLng(40.348132,-74.662064),  weight: 22791961.6272189},
  {location: new google.maps.LatLng(40.347374,-74.659319),  weight: 7287388.30177515},
  {location: new google.maps.LatLng(40.346376,-74.655264),  weight: 4490280.93491124},
  {location: new google.maps.LatLng(40.349499,-74.653675),  weight: 6873969.01775148},
  {location: new google.maps.LatLng(40.344554,-74.654467),  weight: 33793299.5384615},
  {location: new google.maps.LatLng(40.344198,-74.65148),  weight: 12731265.2130178},
  {location: new google.maps.LatLng(40.346034,-74.650037),  weight: 1764938.56213018},
  {location: new google.maps.LatLng(40.346158,-74.657446),  weight: 9147606.12426035},
  {location: new google.maps.LatLng(40.345234,-74.653857),  weight: 8679864.4556213},
  {location: new google.maps.LatLng(40.34349,-74.655985),  weight: 26842475.6390533},
  {location: new google.maps.LatLng(40.349757,-74.650351),  weight: 1743609.14201183},
  {location: new google.maps.LatLng(40.346817,-74.660251),  weight: 21903243},
  {location: new google.maps.LatLng(40.344675,-74.65824),  weight: 2374962.89349112},
  {location: new google.maps.LatLng(40.347142,-74.657859),  weight: 6132302.10059172},
  {location: new google.maps.LatLng(40.340999,-74.657859),  weight: 22747534.0710059},
  {location: new google.maps.LatLng(40.340801,-74.665806),  weight: 36715851.1183432},
  {location: new google.maps.LatLng(40.34215,-74.660942),  weight: 24370643.556213},
  {location: new google.maps.LatLng(40.350481,-74.649161),  weight: 7850695.89349112},
  {location: new google.maps.LatLng(40.347482,-74.660188),  weight: 13938126.7218935},
  {location: new google.maps.LatLng(40.348747,-74.658499),  weight: 4927067.23076923},
  {location: new google.maps.LatLng(40.345865,-74.660676),  weight: 16082035.4792899},
  {location: new google.maps.LatLng(40.345824,-74.65242),  weight: 27971950.147929},
  {location: new google.maps.LatLng(40.332915,-74.657145),  weight: 56193027.6094675},
  {location: new google.maps.LatLng(40.344453,-74.653287),  weight: 33331270.0118343},
  {location: new google.maps.LatLng(40.350719,-74.650544),  weight: 103651874.005917},
  {location: new google.maps.LatLng(40.343447,-74.648701),  weight: 19028549.0532544},
  {location: new google.maps.LatLng(40.345872,-74.660142),  weight: 13788161.6449704},
  {location: new google.maps.LatLng(40.34613,-74.656942),  weight: 11320160.4023669},
  {location: new google.maps.LatLng(40.348347,-74.654724),  weight: 5767929.76923077},
  {location: new google.maps.LatLng(40.344716,-74.658261),  weight: 8636172.94674556},
  {location: new google.maps.LatLng(40.344779,-74.656155),  weight: 4278825.59171598},
  {location: new google.maps.LatLng(40.348716,-74.661314),  weight: 21783641.0887574},
  {location: new google.maps.LatLng(40.341665,-74.660702),  weight: 17502351.1360947},
  {location: new google.maps.LatLng(40.350347,-74.652729),  weight: 6841495.23076923},
  {location: new google.maps.LatLng(40.347222,-74.655887),  weight: 1915582.17751479},
  {location: new google.maps.LatLng(40.346814,-74.655308),  weight: 8118103.17159763},
  {location: new google.maps.LatLng(40.346814,-74.655308),  weight: 9290471.04733728},
  {location: new google.maps.LatLng(40.344,-74.657996),  weight: 56227299.8047337},
  {location: new google.maps.LatLng(40.347979,-74.659678),  weight: 6189886.77514793},
  {location: new google.maps.LatLng(40.349529,-74.652725),  weight: 6669794.21893491},
  {location: new google.maps.LatLng(40.344015,-74.656392),  weight: 27482231.591716},
  {location: new google.maps.LatLng(40.346253,-74.652731),  weight: 57055004.0236686},
  {location: new google.maps.LatLng(40.350198,-74.656595),  weight: 1276369.23076923},
  {location: new google.maps.LatLng(40.344007,-74.650778),  weight: 34720107.3195266},
  {location: new google.maps.LatLng(40.343253,-74.652591),  weight: 48412808},
  {location: new google.maps.LatLng(40.348673,-74.652458),  weight: 3268407.82248521},
  {location: new google.maps.LatLng(40.34884,-74.652207),  weight: 1445462.72781065},
  {location: new google.maps.LatLng(40.347725,-74.654035),  weight: 830477.810650888},
  {location: new google.maps.LatLng(40.347069,-74.65402),  weight: 2394230.00591716},
  {location: new google.maps.LatLng(40.348012,-74.652734),  weight: 3287599.25443787},
  {location: new google.maps.LatLng(40.348294,-74.651769),  weight: 1202384.55029586},
  {location: new google.maps.LatLng(40.348855,-74.650101),  weight: 2838688.42011834},
  {location: new google.maps.LatLng(40.34938,-74.658949),  weight: 557809.538461538},
  {location: new google.maps.LatLng(40.348656,-74.65058),  weight: 617241.639053254},
  {location: new google.maps.LatLng(40.348169,-74.652238),  weight: 731248.668639053},
  {location: new google.maps.LatLng(40.348326,-74.651047),  weight: 784506.278106509},
  {location: new google.maps.LatLng(40.347745,-74.655352),  weight: 2965242.20710059},
  {location: new google.maps.LatLng(40.349647,-74.654714),  weight: 5626075.72189349},
  {location: new google.maps.LatLng(40.347704,-74.659195),  weight: 1078851.03550296},
  {location: new google.maps.LatLng(40.347978,-74.657977),  weight: 1061738.33727811},
  {location: new google.maps.LatLng(40.343597,-74.649973),  weight: 167122.893491124},
  {location: new google.maps.LatLng(40.346549,-74.651659),  weight: 72095934.9112426},
  {location: new google.maps.LatLng(40.346467,-74.657882),  weight: 13122229.6272189},
  {location: new google.maps.LatLng(40.345549,-74.657072),  weight: 8923721.10650888},
  {location: new google.maps.LatLng(40.346685,-74.653631),  weight: 418415.414201183},
  {location: new google.maps.LatLng(40.346718,-74.656582),  weight: 10211442.6804734},
  {location: new google.maps.LatLng(40.345817,-74.65654),  weight: 4005389.98224852},
  {location: new google.maps.LatLng(40.345208,-74.655773),  weight: 5481328.95266272},
  {location: new google.maps.LatLng(40.344775,-74.656991),  weight: 6038328.72189349},
  {location: new google.maps.LatLng(40.344702,-74.656545),  weight: 718416.349112426},
  {location: new google.maps.LatLng(40.346747,-74.658675),  weight: 15364529.7159763},
  {location: new google.maps.LatLng(40.348355,-74.660629),  weight: 345611.733727811},
  {location: new google.maps.LatLng(40.348712,-74.653484),  weight: 4200026.99408284},
  {location: new google.maps.LatLng(40.346307,-74.660997),  weight: 9524812.83431953},
  {location: new google.maps.LatLng(40.345127,-74.656718),  weight: 3193816.60946746},
  {location: new google.maps.LatLng(40.344979,-74.655407),  weight: 6715379.65088757},
  {location: new google.maps.LatLng(40.3455,-74.655806),  weight: 5960813.89940828},
  {location: new google.maps.LatLng(40.345858,-74.656244),  weight: 8000930.96449704},
  {location: new google.maps.LatLng(40.346433,-74.655946),  weight: 1303009.09467456},
  {location: new google.maps.LatLng(40.347662,-74.654524),  weight: 516013.881656805}
];
var AvgFallFinalRData  = [
  {location: new google.maps.LatLng(40.347607,-74.6612695),  weight: 42748209.2188679},
  {location: new google.maps.LatLng(40.33316,-74.657092),  weight: 60508212.0415094},
  {location: new google.maps.LatLng(40.344822,-74.659381),  weight: 46547533.0528302},
  {location: new google.maps.LatLng(40.348132,-74.662064),  weight: 40606452.5433962},
  {location: new google.maps.LatLng(40.347374,-74.659319),  weight: 15081267.0301887},
  {location: new google.maps.LatLng(40.346376,-74.655264),  weight: 3351418.40754717},
  {location: new google.maps.LatLng(40.349499,-74.653675),  weight: 11733614.3660377},
  {location: new google.maps.LatLng(40.344554,-74.654467),  weight: 53485540.3584906},
  {location: new google.maps.LatLng(40.344198,-74.65148),  weight: 25780297.3660377},
  {location: new google.maps.LatLng(40.346034,-74.650037),  weight: 518880.988679245},
  {location: new google.maps.LatLng(40.346158,-74.657446),  weight: 16561550.0037736},
  {location: new google.maps.LatLng(40.345234,-74.653857),  weight: 14348819.8641509},
  {location: new google.maps.LatLng(40.34349,-74.655985),  weight: 46949071.7471698},
  {location: new google.maps.LatLng(40.349757,-74.650351),  weight: 2418592.81886792},
  {location: new google.maps.LatLng(40.346817,-74.660251),  weight: 39182655.8981132},
  {location: new google.maps.LatLng(40.344675,-74.65824),  weight: 5531484.21132076},
  {location: new google.maps.LatLng(40.347142,-74.657859),  weight: 8873923.14339623},
  {location: new google.maps.LatLng(40.340999,-74.657859),  weight: 39969198.5358491},
  {location: new google.maps.LatLng(40.340801,-74.665806),  weight: 50605984.2037736},
  {location: new google.maps.LatLng(40.34215,-74.660942),  weight: 61946115.0339623},
  {location: new google.maps.LatLng(40.350481,-74.649161),  weight: 16152099.2301887},
  {location: new google.maps.LatLng(40.347482,-74.660188),  weight: 31915446.1245283},
  {location: new google.maps.LatLng(40.348747,-74.658499),  weight: 12902384.0377358},
  {location: new google.maps.LatLng(40.345865,-74.660676),  weight: 23180700.6830189},
  {location: new google.maps.LatLng(40.345824,-74.65242),  weight: 24069102.0528302},
  {location: new google.maps.LatLng(40.332915,-74.657145),  weight: 83105556.3056604},
  {location: new google.maps.LatLng(40.344453,-74.653287),  weight: 39642758.3471698},
  {location: new google.maps.LatLng(40.350719,-74.650544),  weight: 75586049.2830189},
  {location: new google.maps.LatLng(40.343447,-74.648701),  weight: 30089136.5245283},
  {location: new google.maps.LatLng(40.345872,-74.660142),  weight: 31920230.3018868},
  {location: new google.maps.LatLng(40.34613,-74.656942),  weight: 23227190.6150943},
  {location: new google.maps.LatLng(40.348347,-74.654724),  weight: 11919288.5245283},
  {location: new google.maps.LatLng(40.344716,-74.658261),  weight: 10620831.9245283},
  {location: new google.maps.LatLng(40.344779,-74.656155),  weight: 12619164.0264151},
  {location: new google.maps.LatLng(40.348716,-74.661314),  weight: 40523475.8754717},
  {location: new google.maps.LatLng(40.341665,-74.660702),  weight: 37561242.5169811},
  {location: new google.maps.LatLng(40.350347,-74.652729),  weight: 11716963.6716981},
  {location: new google.maps.LatLng(40.347222,-74.655887),  weight: 2148383.09811321},
  {location: new google.maps.LatLng(40.346814,-74.655308),  weight: 19277895.3056604},
  {location: new google.maps.LatLng(40.346814,-74.655308),  weight: 30229449.7018868},
  {location: new google.maps.LatLng(40.344,-74.657996),  weight: 112588008.490566},
  {location: new google.maps.LatLng(40.347979,-74.659678),  weight: 6848509.01886792},
  {location: new google.maps.LatLng(40.349529,-74.652725),  weight: 10467894.7849057},
  {location: new google.maps.LatLng(40.344015,-74.656392),  weight: 56486624.8188679},
  {location: new google.maps.LatLng(40.346253,-74.652731),  weight: 59145486.0641509},
  {location: new google.maps.LatLng(40.350198,-74.656595),  weight: 1409319.66792453},
  {location: new google.maps.LatLng(40.344007,-74.650778),  weight: 33350538.2377358},
  {location: new google.maps.LatLng(40.343253,-74.652591),  weight: 40727723.8150943},
  {location: new google.maps.LatLng(40.348673,-74.652458),  weight: 6246738.78867924},
  {location: new google.maps.LatLng(40.34884,-74.652207),  weight: 1736187.53962264},
  {location: new google.maps.LatLng(40.347725,-74.654035),  weight: 3182568.76603774},
  {location: new google.maps.LatLng(40.347069,-74.65402),  weight: 2059722.06792453},
  {location: new google.maps.LatLng(40.348012,-74.652734),  weight: 3171547.16226415},
  {location: new google.maps.LatLng(40.348294,-74.651769),  weight: 1550447.97735849},
  {location: new google.maps.LatLng(40.348855,-74.650101),  weight: 10018089.2264151},
  {location: new google.maps.LatLng(40.34938,-74.658949),  weight: 1176055.56981132},
  {location: new google.maps.LatLng(40.348656,-74.65058),  weight: 2046981.49811321},
  {location: new google.maps.LatLng(40.348169,-74.652238),  weight: 2201144.29657795},
  {location: new google.maps.LatLng(40.348326,-74.651047),  weight: 2256452.33962264},
  {location: new google.maps.LatLng(40.347745,-74.655352),  weight: 6805690.06792453},
  {location: new google.maps.LatLng(40.349647,-74.654714),  weight: 7077324.40377359},
  {location: new google.maps.LatLng(40.347704,-74.659195),  weight: 1229356.93962264},
  {location: new google.maps.LatLng(40.347978,-74.657977),  weight: 1063702.18113208},
  {location: new google.maps.LatLng(40.343597,-74.649973),  weight: 259098.8},
  {location: new google.maps.LatLng(40.346549,-74.651659),  weight: 42219269.9735849},
  {location: new google.maps.LatLng(40.346467,-74.657882),  weight: 20735426.6603774},
  {location: new google.maps.LatLng(40.345549,-74.657072),  weight: 17148068.3773585},
  {location: new google.maps.LatLng(40.346685,-74.653631),  weight: 588006.422641509},
  {location: new google.maps.LatLng(40.346718,-74.656582),  weight: 15914470.4188679},
  {location: new google.maps.LatLng(40.345817,-74.65654),  weight: 6796181.33962264},
  {location: new google.maps.LatLng(40.345208,-74.655773),  weight: 10514441.2},
  {location: new google.maps.LatLng(40.344775,-74.656991),  weight: 9788631.10943396},
  {location: new google.maps.LatLng(40.344702,-74.656545),  weight: 2772514.08301887},
  {location: new google.maps.LatLng(40.346747,-74.658675),  weight: 22147470.5169811},
  {location: new google.maps.LatLng(40.348355,-74.660629),  weight: 1047878.4490566},
  {location: new google.maps.LatLng(40.348712,-74.653484),  weight: 2196883.1509434},
  {location: new google.maps.LatLng(40.346307,-74.660997),  weight: 14961382.6830189},
  {location: new google.maps.LatLng(40.345127,-74.656718),  weight: 8097554.40377359},
  {location: new google.maps.LatLng(40.344979,-74.655407),  weight: 12682040.4792453},
  {location: new google.maps.LatLng(40.3455,-74.655806),  weight: 12296436.7773585},
  {location: new google.maps.LatLng(40.345858,-74.656244),  weight: 15180000.8075472},
  {location: new google.maps.LatLng(40.346433,-74.655946),  weight: 5382557.57358491},
  {location: new google.maps.LatLng(40.347662,-74.654524),  weight: 2200363.46037736}
];
var AvgFallMidRData = [
  {location: new google.maps.LatLng(40.347607,-74.6612695),  weight: 32514981.2066116},
  {location: new google.maps.LatLng(40.33316,-74.657092),  weight: 53678921.8677686},
  {location: new google.maps.LatLng(40.344822,-74.659381),  weight: 37712518.677686},
  {location: new google.maps.LatLng(40.348132,-74.662064),  weight: 29887688.0082645},
  {location: new google.maps.LatLng(40.347374,-74.659319),  weight: 12131609.2396694},
  {location: new google.maps.LatLng(40.346376,-74.655264),  weight: 6445894.39669422},
  {location: new google.maps.LatLng(40.349499,-74.653675),  weight: 11799696.7603306},
  {location: new google.maps.LatLng(40.344554,-74.654467),  weight: 51885381.0330579},
  {location: new google.maps.LatLng(40.344198,-74.65148),  weight: 20865573.8512397},
  {location: new google.maps.LatLng(40.346034,-74.650037),  weight: 1601284},
  {location: new google.maps.LatLng(40.346158,-74.657446),  weight: 12744815.2066116},
  {location: new google.maps.LatLng(40.345234,-74.653857),  weight: 13390974.7355372},
  {location: new google.maps.LatLng(40.34349,-74.655985),  weight: 36909746.1487603},
  {location: new google.maps.LatLng(40.349757,-74.650351),  weight: 2970858},
  {location: new google.maps.LatLng(40.346817,-74.660251),  weight: 31607599.768595},
  {location: new google.maps.LatLng(40.344675,-74.65824),  weight: 8385758.05785124},
  {location: new google.maps.LatLng(40.347142,-74.657859),  weight: 11378575.4545455},
  {location: new google.maps.LatLng(40.340999,-74.657859),  weight: 28828402.1735537},
  {location: new google.maps.LatLng(40.340801,-74.665806),  weight: 37768037.7520661},
  {location: new google.maps.LatLng(40.34215,-74.660942),  weight: 42979075.8264463},
  {location: new google.maps.LatLng(40.350481,-74.649161),  weight: 10970039.1404959},
  {location: new google.maps.LatLng(40.347482,-74.660188),  weight: 19912699.0661157},
  {location: new google.maps.LatLng(40.348747,-74.658499),  weight: 15776511.6446281},
  {location: new google.maps.LatLng(40.345865,-74.660676),  weight: 19998004.0495868},
  {location: new google.maps.LatLng(40.345824,-74.65242),  weight: 36190870.338843},
  {location: new google.maps.LatLng(40.332915,-74.657145),  weight: 56554839.4876033},
  {location: new google.maps.LatLng(40.344453,-74.653287),  weight: 39078929.9173554},
  {location: new google.maps.LatLng(40.350719,-74.650544),  weight: 147133884.809917},
  {location: new google.maps.LatLng(40.343447,-74.648701),  weight: 28080332.4214876},
  {location: new google.maps.LatLng(40.345872,-74.660142),  weight: 29830261.9338843},
  {location: new google.maps.LatLng(40.34613,-74.656942),  weight: 20928379.2975207},
  {location: new google.maps.LatLng(40.348347,-74.654724),  weight: 16604252.8760331},
  {location: new google.maps.LatLng(40.344716,-74.658261),  weight: 28263908.6033058},
  {location: new google.maps.LatLng(40.344779,-74.656155),  weight: 16822783.1818182},
  {location: new google.maps.LatLng(40.348716,-74.661314),  weight: 35101181.0082645},
  {location: new google.maps.LatLng(40.341665,-74.660702),  weight: 25735375.0909091},
  {location: new google.maps.LatLng(40.350347,-74.652729),  weight: 18192205.3305785},
  {location: new google.maps.LatLng(40.347222,-74.655887),  weight: 5142086.55371901},
  {location: new google.maps.LatLng(40.346814,-74.655308),  weight: 27540729.0578512},
  {location: new google.maps.LatLng(40.346814,-74.655308),  weight: 30336213.4545455},
  {location: new google.maps.LatLng(40.344,-74.657996),  weight: 87957728.6363636},
  {location: new google.maps.LatLng(40.347979,-74.659678),  weight: 8512173.38842975},
  {location: new google.maps.LatLng(40.349529,-74.652725),  weight: 15854190.6198347},
  {location: new google.maps.LatLng(40.344015,-74.656392),  weight: 48552602.9421488},
  {location: new google.maps.LatLng(40.346253,-74.652731),  weight: 86230293.446281},
  {location: new google.maps.LatLng(40.350198,-74.656595),  weight: 2681635.28099174},
  {location: new google.maps.LatLng(40.344007,-74.650778),  weight: 69488916.107438},
  {location: new google.maps.LatLng(40.343253,-74.652591),  weight: 55723014.4214876},
  {location: new google.maps.LatLng(40.348673,-74.652458),  weight: 4622690.87603306},
  {location: new google.maps.LatLng(40.34884,-74.652207),  weight: 2880183.27272727},
  {location: new google.maps.LatLng(40.347725,-74.654035),  weight: 4050973.38016529},
  {location: new google.maps.LatLng(40.347069,-74.65402),  weight: 3110408.66942149},
  {location: new google.maps.LatLng(40.348012,-74.652734),  weight: 3037076.82644628},
  {location: new google.maps.LatLng(40.348294,-74.651769),  weight: 3517150.01652893},
  {location: new google.maps.LatLng(40.348855,-74.650101),  weight: 6036327.3553719},
  {location: new google.maps.LatLng(40.34938,-74.658949),  weight: 1224042.04958678},
  {location: new google.maps.LatLng(40.348656,-74.65058),  weight: 2696461.3553719},
  {location: new google.maps.LatLng(40.348169,-74.652238),  weight: 2839065.21487603},
  {location: new google.maps.LatLng(40.348326,-74.651047),  weight: 2851028.78512397},
  {location: new google.maps.LatLng(40.347745,-74.655352),  weight: 5860251.21487603},
  {location: new google.maps.LatLng(40.349647,-74.654714),  weight: 5118151.92561984},
  {location: new google.maps.LatLng(40.347704,-74.659195),  weight: 1507734.91735537},
  {location: new google.maps.LatLng(40.347978,-74.657977),  weight: 1765341.74380165},
  {location: new google.maps.LatLng(40.343597,-74.649973),  weight: 311746.818181818},
  {location: new google.maps.LatLng(40.346549,-74.651659),  weight: 67757630.9504132},
  {location: new google.maps.LatLng(40.346467,-74.657882),  weight: 15450851.4545455},
  {location: new google.maps.LatLng(40.345549,-74.657072),  weight: 11500153.6363636},
  {location: new google.maps.LatLng(40.346685,-74.653631),  weight: 680274.380165289},
  {location: new google.maps.LatLng(40.346718,-74.656582),  weight: 10150997.4214876},
  {location: new google.maps.LatLng(40.345817,-74.65654),  weight: 4058869.67768595},
  {location: new google.maps.LatLng(40.345208,-74.655773),  weight: 8930320.91735537},
  {location: new google.maps.LatLng(40.344775,-74.656991),  weight: 11096509.0826446},
  {location: new google.maps.LatLng(40.344702,-74.656545),  weight: 2726363.23966942},
  {location: new google.maps.LatLng(40.346747,-74.658675),  weight: 18678959.7520661},
  {location: new google.maps.LatLng(40.348355,-74.660629),  weight: 862253.743801653},
  {location: new google.maps.LatLng(40.348712,-74.653484),  weight: 4093202.02479339},
  {location: new google.maps.LatLng(40.346307,-74.660997),  weight: 12891944.1157025},
  {location: new google.maps.LatLng(40.345127,-74.656718),  weight: 5428546.94214876},
  {location: new google.maps.LatLng(40.344979,-74.655407),  weight: 10679538.0495868},
  {location: new google.maps.LatLng(40.3455,-74.655806),  weight: 10483221.9586777},
  {location: new google.maps.LatLng(40.345858,-74.656244),  weight: 12714456.5950413},
  {location: new google.maps.LatLng(40.346433,-74.655946),  weight: 4692210.38842975},
  {location: new google.maps.LatLng(40.347662,-74.654524),  weight: 1889741.82644628},
];
var AvgSun7Dec2013RData = [
  {location: new google.maps.LatLng(40.347607,-74.6612695),  weight: 37263985},
  {location: new google.maps.LatLng(40.33316,-74.657092),  weight: 76173653.32},
  {location: new google.maps.LatLng(40.344822,-74.659381),  weight: 46960407.52},
  {location: new google.maps.LatLng(40.348132,-74.662064),  weight: 38319023.44},
  {location: new google.maps.LatLng(40.347374,-74.659319),  weight: 16222316.04},
  {location: new google.maps.LatLng(40.346376,-74.655264),  weight: 2292248.88},
  {location: new google.maps.LatLng(40.349499,-74.653675),  weight: 6517116.16},
  {location: new google.maps.LatLng(40.344554,-74.654467),  weight: 58098763.48},
  {location: new google.maps.LatLng(40.344198,-74.65148),  weight: 22902098.2},
  {location: new google.maps.LatLng(40.346034,-74.650037),  weight: 461581.08},
  {location: new google.maps.LatLng(40.346158,-74.657446),  weight: 13863605.32},
  {location: new google.maps.LatLng(40.345234,-74.653857),  weight: 14141300.08},
  {location: new google.maps.LatLng(40.34349,-74.655985),  weight: 45873348.68},
  {location: new google.maps.LatLng(40.349757,-74.650351),  weight: 766344.84},
  {location: new google.maps.LatLng(40.346817,-74.660251),  weight: 37921319.12},
  {location: new google.maps.LatLng(40.344675,-74.65824),  weight: 3614959.24},
  {location: new google.maps.LatLng(40.347142,-74.657859),  weight: 4653828.4},
  {location: new google.maps.LatLng(40.340999,-74.657859),  weight: 43550123.48},
  {location: new google.maps.LatLng(40.340801,-74.665806),  weight: 54270545.6},
  {location: new google.maps.LatLng(40.34215,-74.660942),  weight: 54106744.72},
  {location: new google.maps.LatLng(40.350481,-74.649161),  weight: 3457376.16},
  {location: new google.maps.LatLng(40.347482,-74.660188),  weight: 26571443.36},
  {location: new google.maps.LatLng(40.348747,-74.658499),  weight: 7081011.88},
  {location: new google.maps.LatLng(40.345865,-74.660676),  weight: 16952626.96},
  {location: new google.maps.LatLng(40.345824,-74.65242),  weight: 20543841.96},
  {location: new google.maps.LatLng(40.332915,-74.657145),  weight: 86209886.08},
  {location: new google.maps.LatLng(40.344453,-74.653287),  weight: 21803183.8},
  {location: new google.maps.LatLng(40.350719,-74.650544),  weight: 44477282.12},
  {location: new google.maps.LatLng(40.343447,-74.648701),  weight: 28070094.4},
  {location: new google.maps.LatLng(40.345872,-74.660142),  weight: 21673397.88},
  {location: new google.maps.LatLng(40.34613,-74.656942),  weight: 24828936.12},
  {location: new google.maps.LatLng(40.348347,-74.654724),  weight: 5954855.16},
  {location: new google.maps.LatLng(40.344716,-74.658261),  weight: 4068539.96},
  {location: new google.maps.LatLng(40.344779,-74.656155),  weight: 13913869.48},
  {location: new google.maps.LatLng(40.348716,-74.661314),  weight: 34409325.64},
  {location: new google.maps.LatLng(40.341665,-74.660702),  weight: 34616126.28},
  {location: new google.maps.LatLng(40.350347,-74.652729),  weight: 13355003.72},
  {location: new google.maps.LatLng(40.347222,-74.655887),  weight: 1391386.32},
  {location: new google.maps.LatLng(40.346814,-74.655308),  weight: 18630763.2},
  {location: new google.maps.LatLng(40.346814,-74.655308),  weight: 22484801.96},
  {location: new google.maps.LatLng(40.344,-74.657996),  weight: 98616562.48},
  {location: new google.maps.LatLng(40.347979,-74.659678),  weight: 4056427.24},
  {location: new google.maps.LatLng(40.349529,-74.652725),  weight: 11367499.88},
  {location: new google.maps.LatLng(40.344015,-74.656392),  weight: 57305890.4},
  {location: new google.maps.LatLng(40.346253,-74.652731),  weight: 63515634.64},
  {location: new google.maps.LatLng(40.350198,-74.656595),  weight: 1021714.92},
  {location: new google.maps.LatLng(40.344007,-74.650778),  weight: 23881115.48},
  {location: new google.maps.LatLng(40.343253,-74.652591),  weight: 2767662.04},
  {location: new google.maps.LatLng(40.348673,-74.652458),  weight: 2120252.36},
  {location: new google.maps.LatLng(40.34884,-74.652207),  weight: 1359592},
  {location: new google.maps.LatLng(40.347725,-74.654035),  weight: 1621592.88},
  {location: new google.maps.LatLng(40.347069,-74.65402),  weight: 1301903.16},
  {location: new google.maps.LatLng(40.348012,-74.652734),  weight: 973767.04},
  {location: new google.maps.LatLng(40.348294,-74.651769),  weight: 873435.08},
  {location: new google.maps.LatLng(40.348855,-74.650101),  weight: 4061638.68},
  {location: new google.maps.LatLng(40.34938,-74.658949),  weight: 846794.08},
  {location: new google.maps.LatLng(40.348656,-74.65058),  weight: 1164550.88},
  {location: new google.maps.LatLng(40.348169,-74.652238),  weight: 1796133.36},
  {location: new google.maps.LatLng(40.348326,-74.651047),  weight: 1084167.92},
  {location: new google.maps.LatLng(40.347745,-74.655352),  weight: 5367440.32},
  {location: new google.maps.LatLng(40.349647,-74.654714),  weight: 6590172.64},
  {location: new google.maps.LatLng(40.347704,-74.659195),  weight: 548577.24},
  {location: new google.maps.LatLng(40.347978,-74.657977),  weight: 186930.84},
  {location: new google.maps.LatLng(40.343597,-74.649973),  weight: 18799031.8},
  {location: new google.maps.LatLng(40.346549,-74.651659),  weight: 19356442.92},
  {location: new google.maps.LatLng(40.346467,-74.657882),  weight: 14311006.4},
  {location: new google.maps.LatLng(40.345549,-74.657072),  weight: 711563.48},
  {location: new google.maps.LatLng(40.346685,-74.653631),  weight: 13442332.96},
  {location: new google.maps.LatLng(40.346718,-74.656582),  weight: 6140017.8},
  {location: new google.maps.LatLng(40.345817,-74.65654),  weight: 9080184.24},
  {location: new google.maps.LatLng(40.345208,-74.655773),  weight: 8604052.08},
  {location: new google.maps.LatLng(40.344775,-74.656991),  weight: 1853292.88},
  {location: new google.maps.LatLng(40.344702,-74.656545),  weight: 17808997.52},
  {location: new google.maps.LatLng(40.346747,-74.658675),  weight: 1155345.92},
  {location: new google.maps.LatLng(40.348355,-74.660629),  weight: 1655688.4},
  {location: new google.maps.LatLng(40.348712,-74.653484),  weight: 13718936.32},
  {location: new google.maps.LatLng(40.346307,-74.660997),  weight: 7385507},
  {location: new google.maps.LatLng(40.345127,-74.656718),  weight: 10233209.96},
  {location: new google.maps.LatLng(40.344979,-74.655407),  weight: 12233891.48},
  {location: new google.maps.LatLng(40.3455,-74.655806),  weight: 16246528.56},
  {location: new google.maps.LatLng(40.345858,-74.656244),  weight: 5543202.44},
  {location: new google.maps.LatLng(40.346433,-74.655946),  weight: 742294.76},
];
var AvgWed4Dec2013RData = [
  {location: new google.maps.LatLng(40.347607,-74.6612695),  weight: 40569807.44},
  {location: new google.maps.LatLng(40.33316,-74.657092),  weight: 57271271.32},
  {location: new google.maps.LatLng(40.344822,-74.659381),  weight: 45310381.6},
  {location: new google.maps.LatLng(40.348132,-74.662064),  weight: 47523566.16},
  {location: new google.maps.LatLng(40.347374,-74.659319),  weight: 16310218.6},
  {location: new google.maps.LatLng(40.346376,-74.655264),  weight: 4559273.4},
  {location: new google.maps.LatLng(40.349499,-74.653675),  weight: 20272467.2},
  {location: new google.maps.LatLng(40.344554,-74.654467),  weight: 47205799.12},
  {location: new google.maps.LatLng(40.344198,-74.65148),  weight: 26650564.44},
  {location: new google.maps.LatLng(40.346034,-74.650037),  weight: 1142857.44},
  {location: new google.maps.LatLng(40.346158,-74.657446),  weight: 20386580.24},
  {location: new google.maps.LatLng(40.345234,-74.653857),  weight: 39357104.24},
  {location: new google.maps.LatLng(40.34349,-74.655985),  weight: 42673214.88},
  {location: new google.maps.LatLng(40.349757,-74.650351),  weight: 9225432.72},
  {location: new google.maps.LatLng(40.346817,-74.660251),  weight: 39175137.4},
  {location: new google.maps.LatLng(40.344675,-74.65824),  weight: 9407823.68},
  {location: new google.maps.LatLng(40.347142,-74.657859),  weight: 10112606.52},
  {location: new google.maps.LatLng(40.340999,-74.657859),  weight: 38709969.4},
  {location: new google.maps.LatLng(40.340801,-74.665806),  weight: 53963012.16},
  {location: new google.maps.LatLng(40.34215,-74.660942),  weight: 56914809.12},
  {location: new google.maps.LatLng(40.350481,-74.649161),  weight: 36590299.2},
  {location: new google.maps.LatLng(40.347482,-74.660188),  weight: 26533559.16},
  {location: new google.maps.LatLng(40.348747,-74.658499),  weight: 23120691.16},
  {location: new google.maps.LatLng(40.345865,-74.660676),  weight: 22967433.84},
  {location: new google.maps.LatLng(40.345824,-74.65242),  weight: 32612948.88},
  {location: new google.maps.LatLng(40.332915,-74.657145),  weight: 73930671.16},
  {location: new google.maps.LatLng(40.344453,-74.653287),  weight: 43681784.52},
  {location: new google.maps.LatLng(40.350719,-74.650544),  weight: 101087997.8},
  {location: new google.maps.LatLng(40.343447,-74.648701),  weight: 30814750},
  {location: new google.maps.LatLng(40.345872,-74.660142),  weight: 40686507},
  {location: new google.maps.LatLng(40.34613,-74.656942),  weight: 22751430.4},
  {location: new google.maps.LatLng(40.348347,-74.654724),  weight: 27777446.32},
  {location: new google.maps.LatLng(40.344716,-74.658261),  weight: 15425948.16},
  {location: new google.maps.LatLng(40.344779,-74.656155),  weight: 15029171.6},
  {location: new google.maps.LatLng(40.348716,-74.661314),  weight: 37091226.32},
  {location: new google.maps.LatLng(40.341665,-74.660702),  weight: 29783620.36},
  {location: new google.maps.LatLng(40.350347,-74.652729),  weight: 32691000.52},
  {location: new google.maps.LatLng(40.347222,-74.655887),  weight: 3345832.88},
  {location: new google.maps.LatLng(40.346814,-74.655308),  weight: 31219877.36},
  {location: new google.maps.LatLng(40.346814,-74.655308),  weight: 44904103.04},
  {location: new google.maps.LatLng(40.344,-74.657996),  weight: 137226965.88},
  {location: new google.maps.LatLng(40.347979,-74.659678),  weight: 9708657.36},
  {location: new google.maps.LatLng(40.349529,-74.652725),  weight: 42298384.52},
  {location: new google.maps.LatLng(40.344015,-74.656392),  weight: 57143310.4},
  {location: new google.maps.LatLng(40.346253,-74.652731),  weight: 82589961.96},
  {location: new google.maps.LatLng(40.350198,-74.656595),  weight: 3456458},
  {location: new google.maps.LatLng(40.344007,-74.650778),  weight: 39003939.04},
  {location: new google.maps.LatLng(40.343253,-74.652591),  weight: 6646121},
  {location: new google.maps.LatLng(40.348673,-74.652458),  weight: 4214857.8},
  {location: new google.maps.LatLng(40.34884,-74.652207),  weight: 2535013.12},
  {location: new google.maps.LatLng(40.347725,-74.654035),  weight: 4424047.52},
  {location: new google.maps.LatLng(40.347069,-74.65402),  weight: 3160780.6},
  {location: new google.maps.LatLng(40.348012,-74.652734),  weight: 2864257.92},
  {location: new google.maps.LatLng(40.348294,-74.651769),  weight: 2235621.36},
  {location: new google.maps.LatLng(40.348855,-74.650101),  weight: 5123461.36},
  {location: new google.maps.LatLng(40.34938,-74.658949),  weight: 35560325.64},
  {location: new google.maps.LatLng(40.348656,-74.65058),  weight: 2273972.16},
  {location: new google.maps.LatLng(40.348169,-74.652238),  weight: 2599204.88},
  {location: new google.maps.LatLng(40.348326,-74.651047),  weight: 3025066.28},
  {location: new google.maps.LatLng(40.347745,-74.655352),  weight: 11900883.96},
  {location: new google.maps.LatLng(40.349647,-74.654714),  weight: 11397844.48},
  {location: new google.maps.LatLng(40.347704,-74.659195),  weight: 1972766.12},
  {location: new google.maps.LatLng(40.347978,-74.657977),  weight: 1690786.72},
  {location: new google.maps.LatLng(40.343597,-74.649973),  weight: 604030.56},
  {location: new google.maps.LatLng(40.346549,-74.651659),  weight: 40105791.96},
  {location: new google.maps.LatLng(40.346467,-74.657882),  weight: 23328259},
  {location: new google.maps.LatLng(40.345549,-74.657072),  weight: 13634807.2},
  {location: new google.maps.LatLng(40.346685,-74.653631),  weight: 1202670.96},
  {location: new google.maps.LatLng(40.346718,-74.656582),  weight: 16662935.12},
  {location: new google.maps.LatLng(40.345817,-74.65654),  weight: 6807543.84},
  {location: new google.maps.LatLng(40.345208,-74.655773),  weight: 11251566.8},
  {location: new google.maps.LatLng(40.344775,-74.656991),  weight: 8451714},
  {location: new google.maps.LatLng(40.344702,-74.656545),  weight: 2095415.04},
  {location: new google.maps.LatLng(40.346747,-74.658675),  weight: 24339286.8},
  {location: new google.maps.LatLng(40.348355,-74.660629),  weight: 2026726.56},
  {location: new google.maps.LatLng(40.348712,-74.653484),  weight: 6462352.56},
  {location: new google.maps.LatLng(40.346307,-74.660997),  weight: 17433741.76},
  {location: new google.maps.LatLng(40.345127,-74.656718),  weight: 8400890.68},
  {location: new google.maps.LatLng(40.344979,-74.655407),  weight: 13492575.92},
  {location: new google.maps.LatLng(40.3455,-74.655806),  weight: 12571216.08},
  {location: new google.maps.LatLng(40.345858,-74.656244),  weight: 14648799.96},
  {location: new google.maps.LatLng(40.346433,-74.655946),  weight: 8636140.44},
  {location: new google.maps.LatLng(40.347662,-74.654524),  weight: 1724117.76},
];
var AvgYearRData = [
  {location: new google.maps.LatLng(40.347607,-74.6612695),  weight: 24751222},
  {location: new google.maps.LatLng(40.33316,-74.657092),  weight: 49195647},
  {location: new google.maps.LatLng(40.344822,-74.659381),  weight: 33066590},
  {location: new google.maps.LatLng(40.348132,-74.662064),  weight: 23154555},
  {location: new google.maps.LatLng(40.347374,-74.659319),  weight: 10441389},
  {location: new google.maps.LatLng(40.346376,-74.655264),  weight: 3600752},
  {location: new google.maps.LatLng(40.349499,-74.653675),  weight: 10755584},
  {location: new google.maps.LatLng(40.344554,-74.654467),  weight: 36112217},
  {location: new google.maps.LatLng(40.344198,-74.65148),  weight: 19717579},
  {location: new google.maps.LatLng(40.346034,-74.650037),  weight: 1113493},
  {location: new google.maps.LatLng(40.346158,-74.657446),  weight: 11788233},
  {location: new google.maps.LatLng(40.345234,-74.653857),  weight: 13532561},
  {location: new google.maps.LatLng(40.34349,-74.655985),  weight: 31576835},
  {location: new google.maps.LatLng(40.349757,-74.650351),  weight: 3396784},
  {location: new google.maps.LatLng(40.346817,-74.660251),  weight: 24853143},
  {location: new google.maps.LatLng(40.344675,-74.65824),  weight: 5692443},
  {location: new google.maps.LatLng(40.347142,-74.657859),  weight: 8238445},
  {location: new google.maps.LatLng(40.340999,-74.657859),  weight: 29972365},
  {location: new google.maps.LatLng(40.340801,-74.665806),  weight: 36689120},
  {location: new google.maps.LatLng(40.34215,-74.660942),  weight: 37352818},
  {location: new google.maps.LatLng(40.350481,-74.649161),  weight: 15287523},
  {location: new google.maps.LatLng(40.347482,-74.660188),  weight: 16811887},
  {location: new google.maps.LatLng(40.348747,-74.658499),  weight: 11598047},
  {location: new google.maps.LatLng(40.345865,-74.660676),  weight: 14755694},
  {location: new google.maps.LatLng(40.345824,-74.65242),  weight: 33422104},
  {location: new google.maps.LatLng(40.332915,-74.657145),  weight: 69185182},
  {location: new google.maps.LatLng(40.344453,-74.653287),  weight: 41815864},
  {location: new google.maps.LatLng(40.350719,-74.650544),  weight: 90620657},
  {location: new google.maps.LatLng(40.343447,-74.648701),  weight: 21162080},
  {location: new google.maps.LatLng(40.345872,-74.660142),  weight: 20920478},
  {location: new google.maps.LatLng(40.34613,-74.656942),  weight: 17758532},
  {location: new google.maps.LatLng(40.348347,-74.654724),  weight: 13593415},
  {location: new google.maps.LatLng(40.344716,-74.658261),  weight: 9753470},
  {location: new google.maps.LatLng(40.344779,-74.656155),  weight: 14024286},
  {location: new google.maps.LatLng(40.348716,-74.661314),  weight: 24968158},
  {location: new google.maps.LatLng(40.341665,-74.660702),  weight: 22696893},
  {location: new google.maps.LatLng(40.350347,-74.652729),  weight: 14965309},
  {location: new google.maps.LatLng(40.347222,-74.655887),  weight: 4962489},
  {location: new google.maps.LatLng(40.346814,-74.655308),  weight: 16064469},
  {location: new google.maps.LatLng(40.344,-74.657996),  weight: 74396720},
  {location: new google.maps.LatLng(40.347979,-74.659678),  weight: 6837911},
  {location: new google.maps.LatLng(40.349529,-74.652725),  weight: 11995306},
  {location: new google.maps.LatLng(40.344015,-74.656392),  weight: 35209686},
  {location: new google.maps.LatLng(40.346253,-74.652731),  weight: 88059281},
  {location: new google.maps.LatLng(40.350198,-74.656595),  weight: 1778912},
  {location: new google.maps.LatLng(40.344007,-74.650778),  weight: 40880568},
  {location: new google.maps.LatLng(40.344924,-74.651786),  weight: 24151207},
  {location: new google.maps.LatLng(40.349402,-74.65754),  weight: 25116617},
  {location: new google.maps.LatLng(40.343253,-74.652591),  weight: 49510671},
  {location: new google.maps.LatLng(40.348673,-74.652458),  weight: 4720339},
  {location: new google.maps.LatLng(40.34884,-74.652207),  weight: 1726480},
  {location: new google.maps.LatLng(40.347725,-74.654035),  weight: 2700417},
  {location: new google.maps.LatLng(40.347069,-74.65402),  weight: 2455141},
  {location: new google.maps.LatLng(40.348012,-74.652734),  weight: 2642585},
  {location: new google.maps.LatLng(40.348294,-74.651769),  weight: 1729686},
  {location: new google.maps.LatLng(40.347103,-74.656707),  weight: 1265518},
  {location: new google.maps.LatLng(40.343898,-74.647436),  weight: 9172939},
  {location: new google.maps.LatLng(40.349122,-74.660252),  weight: 1812540},
  {location: new google.maps.LatLng(40.348855,-74.650101),  weight: 5379356},
  {location: new google.maps.LatLng(40.348961,-74.649517),  weight: 1888462},
  {location: new google.maps.LatLng(40.34938,-74.658949),  weight: 1921528},
  {location: new google.maps.LatLng(40.348656,-74.65058),  weight: 1756960},
  {location: new google.maps.LatLng(40.348169,-74.652238),  weight: 1830940},
  {location: new google.maps.LatLng(40.348326,-74.651047),  weight: 2061249},
  {location: new google.maps.LatLng(40.34544,-74.65529),  weight: 3744481},
  {location: new google.maps.LatLng(40.347745,-74.655352),  weight: 5985743},
  {location: new google.maps.LatLng(40.348197,-74.663232),  weight: 779361},
  {location: new google.maps.LatLng(40.349647,-74.654714),  weight: 5267281},
  {location: new google.maps.LatLng(40.348708,-74.659391),  weight: 3469175},
  {location: new google.maps.LatLng(40.348735,-74.660012),  weight: 978512},
  {location: new google.maps.LatLng(40.347704,-74.659195),  weight: 1204887},
  {location: new google.maps.LatLng(40.347978,-74.657977),  weight: 1100575},
  {location: new google.maps.LatLng(40.343597,-74.649973),  weight: 464757},
  {location: new google.maps.LatLng(40.346549,-74.651659),  weight: 48748752},
  {location: new google.maps.LatLng(40.346467,-74.657882),  weight: 14897738},
  {location: new google.maps.LatLng(40.345549,-74.657072),  weight: 10020608},
  {location: new google.maps.LatLng(40.346685,-74.653631),  weight: 847726},
  {location: new google.maps.LatLng(40.346718,-74.656582),  weight: 9610545},
  {location: new google.maps.LatLng(40.345817,-74.65654),  weight: 5059859},
  {location: new google.maps.LatLng(40.345208,-74.655773),  weight: 7209302},
  {location: new google.maps.LatLng(40.344775,-74.656991),  weight: 6450575},
  {location: new google.maps.LatLng(40.344702,-74.656545),  weight: 2104537},
  {location: new google.maps.LatLng(40.346747,-74.658675),  weight: 15025357},
  {location: new google.maps.LatLng(40.348355,-74.660629),  weight: 1095279},
  {location: new google.maps.LatLng(40.348712,-74.653484),  weight: 3423387},
  {location: new google.maps.LatLng(40.346307,-74.660997),  weight: 10398464},
  {location: new google.maps.LatLng(40.345127,-74.656718),  weight: 4673555},
  {location: new google.maps.LatLng(40.344979,-74.655407),  weight: 7401116},
  {location: new google.maps.LatLng(40.3455,-74.655806),  weight: 7463953},
  {location: new google.maps.LatLng(40.345858,-74.656244),  weight: 9549513},
  {location: new google.maps.LatLng(40.346433,-74.655946),  weight: 3704360},
  {location: new google.maps.LatLng(40.347662,-74.654524),  weight: 1393288},
];
var AvgYearTData = [
  {location: new google.maps.LatLng(40.347607,-74.6612695),  weight: 2679437},
  {location: new google.maps.LatLng(40.33316,-74.657092),  weight: 8775160},
  {location: new google.maps.LatLng(40.344822,-74.659381),  weight: 4685887},
  {location: new google.maps.LatLng(40.348132,-74.662064),  weight: 3851898},
  {location: new google.maps.LatLng(40.347374,-74.659319),  weight: 1402320},
  {location: new google.maps.LatLng(40.346376,-74.655264),  weight: 6800797},
  {location: new google.maps.LatLng(40.349499,-74.653675),  weight: 24228410},
  {location: new google.maps.LatLng(40.344554,-74.654467),  weight: 4073920},
  {location: new google.maps.LatLng(40.344198,-74.65148),  weight: 1863288},
  {location: new google.maps.LatLng(40.346034,-74.650037),  weight: 1098602},
  {location: new google.maps.LatLng(40.346158,-74.657446),  weight: 1195820},
  {location: new google.maps.LatLng(40.345234,-74.653857),  weight: 21175879},
  {location: new google.maps.LatLng(40.34349,-74.655985),  weight: 4425895},
  {location: new google.maps.LatLng(40.349757,-74.650351),  weight: 5417454},
  {location: new google.maps.LatLng(40.346817,-74.660251),  weight: 2620634},
  {location: new google.maps.LatLng(40.344675,-74.65824),  weight: 7444493},
  {location: new google.maps.LatLng(40.347142,-74.657859),  weight: 33656242},
  {location: new google.maps.LatLng(40.340999,-74.657859),  weight: 4929566},
  {location: new google.maps.LatLng(40.340801,-74.665806),  weight: 7247588},
  {location: new google.maps.LatLng(40.34215,-74.660942),  weight: 6404046},
  {location: new google.maps.LatLng(40.350481,-74.649161),  weight: 13808046},
  {location: new google.maps.LatLng(40.347482,-74.660188),  weight: 1633417},
  {location: new google.maps.LatLng(40.348747,-74.658499),  weight: 7501183},
  {location: new google.maps.LatLng(40.345865,-74.660676),  weight: 1131191},
  {location: new google.maps.LatLng(40.345824,-74.65242),  weight: 39318292},
  {location: new google.maps.LatLng(40.332915,-74.657145),  weight: 15078594},
  {location: new google.maps.LatLng(40.344453,-74.653287),  weight: 61460545},
  {location: new google.maps.LatLng(40.350719,-74.650544),  weight: 88492401},
  {location: new google.maps.LatLng(40.343447,-74.648701),  weight: 2286476},
  {location: new google.maps.LatLng(40.345872,-74.660142),  weight: 2068257},
  {location: new google.maps.LatLng(40.34613,-74.656942),  weight: 2058660},
  {location: new google.maps.LatLng(40.348347,-74.654724),  weight: 24957516},
  {location: new google.maps.LatLng(40.344716,-74.658261),  weight: 12866005},
  {location: new google.maps.LatLng(40.344779,-74.656155),  weight: 4207932},
  {location: new google.maps.LatLng(40.348716,-74.661314),  weight: 3181892},
  {location: new google.maps.LatLng(40.341665,-74.660702),  weight: 2688453},
  {location: new google.maps.LatLng(40.350347,-74.652729),  weight: 4908061},
  {location: new google.maps.LatLng(40.347222,-74.655887),  weight: 2806730},
  {location: new google.maps.LatLng(40.346814,-74.655308),  weight: 9855375},
  {location: new google.maps.LatLng(40.344,-74.657996),  weight: 13167422},
  {location: new google.maps.LatLng(40.347979,-74.659678),  weight: 11581966},
  {location: new google.maps.LatLng(40.349529,-74.652725),  weight: 23109083},
  {location: new google.maps.LatLng(40.344015,-74.656392),  weight: 5887103},
  {location: new google.maps.LatLng(40.346253,-74.652731),  weight: 69168859},
  {location: new google.maps.LatLng(40.350198,-74.656595),  weight: 2479507},
  {location: new google.maps.LatLng(40.344007,-74.650778),  weight: 27257204},
  {location: new google.maps.LatLng(40.344924,-74.651786),  weight: 22465904},
  {location: new google.maps.LatLng(40.349402,-74.65754),  weight: 12859341},
  {location: new google.maps.LatLng(40.343253,-74.652591),  weight: 137769025},
  {location: new google.maps.LatLng(40.348673,-74.652458),  weight: 444505},
  {location: new google.maps.LatLng(40.34884,-74.652207),  weight: 121099},
  {location: new google.maps.LatLng(40.347725,-74.654035),  weight: 289771},
  {location: new google.maps.LatLng(40.347069,-74.65402),  weight: 685352},
  {location: new google.maps.LatLng(40.348012,-74.652734),  weight: 291572},
  {location: new google.maps.LatLng(40.348294,-74.651769),  weight: 133351},
  {location: new google.maps.LatLng(40.347103,-74.656707),  weight: 909341},
  {location: new google.maps.LatLng(40.343898,-74.647436),  weight: 1715591},
  {location: new google.maps.LatLng(40.349122,-74.660252),  weight: 2749472},
  {location: new google.maps.LatLng(40.348855,-74.650101),  weight: 991898},
  {location: new google.maps.LatLng(40.348961,-74.649517),  weight: 1582353},
  {location: new google.maps.LatLng(40.34938,-74.658949),  weight: 1320814},
  {location: new google.maps.LatLng(40.348656,-74.65058),  weight: 151098},
  {location: new google.maps.LatLng(40.348169,-74.652238),  weight: 164334},
  {location: new google.maps.LatLng(40.348326,-74.651047),  weight: 209491},
  {location: new google.maps.LatLng(40.34544,-74.65529),  weight: 2907062},
  {location: new google.maps.LatLng(40.347745,-74.655352),  weight: 3538882},
  {location: new google.maps.LatLng(40.348197,-74.663232),  weight: 926448},
  {location: new google.maps.LatLng(40.349647,-74.654714),  weight: 7623623},
  {location: new google.maps.LatLng(40.348708,-74.659391),  weight: 11054907},
  {location: new google.maps.LatLng(40.348735,-74.660012),  weight: 310195},
  {location: new google.maps.LatLng(40.347704,-74.659195),  weight: 3341426},
  {location: new google.maps.LatLng(40.347978,-74.657977),  weight: 374484},
  {location: new google.maps.LatLng(40.343597,-74.649973),  weight: 90559},
  {location: new google.maps.LatLng(40.346549,-74.651659),  weight: 40772348},
  {location: new google.maps.LatLng(40.346467,-74.657882),  weight: 1454908},
  {location: new google.maps.LatLng(40.345549,-74.657072),  weight: 1224600},
  {location: new google.maps.LatLng(40.346685,-74.653631),  weight: 2127792},
  {location: new google.maps.LatLng(40.346718,-74.656582),  weight: 963783},
  {location: new google.maps.LatLng(40.345817,-74.65654),  weight: 343703},
  {location: new google.maps.LatLng(40.345208,-74.655773),  weight: 635335},
  {location: new google.maps.LatLng(40.344775,-74.656991),  weight: 581375},
  {location: new google.maps.LatLng(40.344702,-74.656545),  weight: 894093},
  {location: new google.maps.LatLng(40.346747,-74.658675),  weight: 1597767},
  {location: new google.maps.LatLng(40.348355,-74.660629),  weight: 913790},
  {location: new google.maps.LatLng(40.348712,-74.653484),  weight: 3094735},
  {location: new google.maps.LatLng(40.346307,-74.660997),  weight: 746661},
  {location: new google.maps.LatLng(40.345127,-74.656718),  weight: 504287},
  {location: new google.maps.LatLng(40.344979,-74.655407),  weight: 1091661},
  {location: new google.maps.LatLng(40.3455,-74.655806),  weight: 925956},
  {location: new google.maps.LatLng(40.345858,-74.656244),  weight: 1220401},
  {location: new google.maps.LatLng(40.346433,-74.655946),  weight: 2273717},
  {location: new google.maps.LatLng(40.347662,-74.654524),  weight: 540620},
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

//angela's data part 2
var test2 = function(data_avg_fall_read){
  console.log(data_avg_fall_read.things[0].weight);
  newAvgFallReadData = [];

  for(var i = 0; i < data_avg_fall_read.things.length; i++) {
    var obj = data_avg_fall_read.things[i];

    if (obj.direction == "rx") {
      newAvgFallReadData.push({location:new google.maps.LatLng(data_avg_fall_read.things[i].latitude, 
      data_avg_fall_read.things[i].longitude), weight:parseInt(obj.weight)});
    }
  }

  heatmapAvgFallReadRX.setData(newAvgFallReadData);
} 

function angelaInitialize() {
  
  // var hpAvgFallBreakRData = new google.maps.MVCArray(AvgFallBreakRData);
  // var hpAvgFallFinalRData = new google.maps.MVCArray(AvgFallFinalRData);
  // var hpAvgFallMidRData = new google.maps.MVCArray(AvgFallMidRData);
  // var hpAvgSun7Dec2013RData = new google.maps.MVCArray(AvgSun7Dec2013RData);
  // var hpAvgWed4Dec2013RData = new google.maps.MVCArray(AvgWed4Dec2013RData);
  // var hpAvgYearRData = new google.maps.MVCArray(AvgYearRData);
  // var hpAvgYearTData = new google.maps.MVCArray(AvgYearTData);

  heatmapAvgFallReadRX = new google.maps.visualization.HeatmapLayer({
    data: heatmapData,
    radius: 35,
    maxIntensity: 90620657
  });

  $.ajax({
      url: "/angela1",
      success: test2,
      contentType: "application/json"
    })

  // heatmapAvgFallBreakR = new google.maps.visualization.HeatmapLayer({
  //   data: hpAvgFallBreakRData,
  //   radius: 35,
  //   gradient: color0,
  //   maxIntensity: 90620657
  // });
  // heatmapAvgFallFinalR = new google.maps.visualization.HeatmapLayer({
  //   data: hpAvgFallFinalRData,
  //   radius: 35,
  //   gradient: color1,
  //   maxIntensity: 90620657
  // });
  // heatmapAvgFallMidR = new google.maps.visualization.HeatmapLayer({
  //   data: hpAvgFallMidRData,
  //   radius: 35,
  //   gradient: color2,
  //   maxIntensity: 90620657
  // });
  // heatmapAvgSun7Dec2013R = new google.maps.visualization.HeatmapLayer({
  // data: hpAvgSun7Dec2013RData,
  // radius: 35,
  // gradient: color3,
  // maxIntensity: 90620657
  // });
  // heatmapAvgWed4Dec2013R = new google.maps.visualization.HeatmapLayer({
  // data: hpAvgWed4Dec2013RData,
  // radius: 35,
  // gradient: color4,
  // maxIntensity: 90620657
  // });
  // //this one uses default colors
  // heatmapAvgYearR = new google.maps.visualization.HeatmapLayer({
  // data: hpAvgYearRData,
  // radius: 35,
  // maxIntensity: 90620657
  // });
  // heatmapAvgYearT = new google.maps.visualization.HeatmapLayer({
  // data: hpAvgYearTData,
  // radius: 35,
  // gradient: uploadGradient,
  // maxIntensity: 90620657
  // });
}

function toggleheatmapAvgFallReadRX() {
  heatmapAvgFallReadRX.setMap(heatmapAvgFallReadRX.getMap() ? null : map);
}
function toggleHeatmapAvgFallBreakR() {
  heatmapAvgFallBreakR.setMap(heatmapAvgFallBreakR.getMap() ? null : map);
}
function toggleHeatmapAvgFallFinalR() {
  heatmapAvgFallFinalR.setMap(heatmapAvgFallFinalR.getMap() ? null : map);
}
function toggleHeatmapAvgFallMidR() {
  heatmapAvgFallMidR.setMap(heatmapAvgFallMidR.getMap() ? null : map);
}
function toggleHeatmapAvgSun7Dec2013R() {
  heatmapAvgSun7Dec2013R.setMap(heatmapAvgSun7Dec2013R.getMap() ? null : map);
}
function toggleheatmapAvgWed4Dec2013R() {
  heatmapAvgWed4Dec2013R.setMap(heatmapAvgWed4Dec2013R.getMap() ? null : map);
}
function toggleheatmapAvgYearR() {
  heatmapAvgYearR.setMap(heatmapAvgYearR.getMap() ? null : map);
}
function toggleheatmapAvgYearT() {
  heatmapAvgYearT.setMap(heatmapAvgYearT.getMap() ? null : map);
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

    $('#academic').iCheck('enable');
    $('#residential').iCheck('enable');
    $('#library').iCheck('enable');
    $('#eating').iCheck('enable');

    heatmapAcademic.setMap(map);
    heatmapResidential.setMap(map);
    heatmapLibrary.setMap(map);
    heatmapEating.setMap(map);
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
    timeDiv.textContent = moment(new Date(2013, 0, 1)).add(counter, 'hours').format("dddd, MMM Do YYYY, h:mm a");;

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
   timeDiv.textContent = moment(new Date(2013, 0, 1)).add(counter, 'hours').format("dddd, MMM Do YYYY, h:mm a");;
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
  heatmapAvgFallBreakR.setMap(null);
  heatmapAvgFallFinalR.setMap(null);
  heatmapAvgFallMidR.setMap(null);
  heatmapAvgSun7Dec2013R.setMap(null);
  heatmapAvgWed4Dec2013R.setMap(null);
  heatmapAvgYearR.setMap(null);
  heatmapAvgYearT.setMap(null);

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
  timeDiv.textContent = moment(new Date(2013, 0, 1)).format("dddd, MMM Do YYYY, h:mm a");

  $.ajax({
      url: "/getlocations/" + 0,
      success: test,
      contentType: "application/json"
    })
  }));
  

  //    $.getJSON("/getlocations/1", test));

    
