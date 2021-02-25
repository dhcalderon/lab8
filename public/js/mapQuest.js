function initMap() {
	L.mapquest.key = "IUfVZsAe4QScwjwf9KO7Mv8GSqBUlW6A";

	// 'map' refers to a <div> element with the ID map
	L.mapquest.map('map', {
	  center: [32.8785248,-117.23808],
	  layers: L.mapquest.tileLayer('map'),
	  zoom: 15
	});
}