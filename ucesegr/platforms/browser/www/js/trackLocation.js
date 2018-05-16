// The script is based on the code provided in the tutorials of Web and Mobile GIS CEGEG077

// Create a global variable for the marker, so when the app udates the position it deletes the previous marker
var oldMarker;

// Activate the tracking by using the following function
function trackLocation(){
	// If the browser supports the geolocation the user will receive the alert "Now Tracking"
	if(navigator.geolocation){
		alert("Now Tracking");
		navigator.geolocation.watchPosition(showPosition);
		navigator.geolocation.getCurrentPosition(getDistance); // once tracking is toggled on, it automatically gets the updated distance from the points of interest
	} else {
		document.getElementById('showLocation').innerHTML = "Location tracking is not supported by this browser.";
	}
}

// This function displays the users position on the map
function showPosition(position){
	if (oldMarker){
		mymap.removeLayer(oldMarker); // the method remove the previous markers
	}
	document.getElementById('showLocation').innerHTML = " Your coordinates - Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude;
	oldMarker = L.circleMarker([position.coords.latitude,position.coords.longitude], {radius: 5}).addTo(mymap);
	mymap.setView([position.coords.latitude, position.coords.longitude], 25); // a new marker is placed on the map, on the current location
}