// The script is based on the code provided in the tutorials 

// this function is used to load the points on the map from the app interface
function loadPointData() {
	// the alert notify that the points will be loaded from the server
	alert("Loading Points");
	getPoint();
}
// create a variable that will hold the XMLHttpRequest() - t is global, so can be accessed whenever we need
var client;


// create the code to get the GeoJSON data using an XMLHttpRequest
function getPoint() {
	client = new XMLHttpRequest();
	client.open('GET','http://developer.cege.ucl.ac.uk:30295/getGeoJSON/appdata/geom');
	client.onreadystatechange = pointResponse; 
	client.send();
}
// Code that awaits the response from the server and process it once it is received
function pointResponse() {
// this function awaits for the server to say that data is ready (i.e. state 4)
	if (client.readyState == 4) {
		// once the data is ready, process the data
		var pointdata = client.responseText;
		loadPointlayer(pointdata);
	}
}

// convert the received data - which is text - to JSON format and add it to the map
function loadPointlayer(pointdata) {
	// convert the text to JSON
	var pointjson = JSON.parse(pointdata);
	// add the JSON layer onto the map - it will appear using the default icons
	pointlayer = L.geoJson(pointjson).addTo(mymap);
	// adapt the map zoom so that all the data is shown
	mymap.fitBounds(pointlayer.getBounds());
}















