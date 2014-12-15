Goal:
Our goal for our visualization is to display the upload and download rates per hour at different locations on campus as two heatmaps - one for download rate, and one for upload rate. The intensity of the heatmap will scale according to how much data is transferred. The two heatmaps will be able to change throughout time both automatically and manually to show how network usage changes over time. 

Implementation:
We decided to use the Google Maps Javascript API v3, since it includes a heatmap layer already built in to the API. A basic implementation for one hour of upload and download data is attached (map2.html).

Notes:
-For times where there isn't information available for amount of data transferred, we set it equal to zero. 
-We use the WeightedLocation object to show intensity (how much data is transferred). The "weight" field is directly the amount of data transferred, since Google Maps will scale it automatically. As we look at how transfer rates change through time, we may need to set the "maxIntensity" field to only show the most intense colors when we hit the absolute maximum value. 

Next Steps:
-We will load the data in using the GeoJSON format so that we don't have to manually copy/paste data into our application. 
-We will implement a slider that will allow the user to show network usage at different times. We may add special times that the slider will snap to, such as midterms, finals, etc.
-We may also add a search function to jump to a date/time to view the data usage at that time, as well a jumping to a specific location. 
-We will label the buildings/locations more obviously so that they do not become obscured by the heatmaps.