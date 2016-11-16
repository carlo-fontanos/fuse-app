/* Returns a Promise that represents an array of hike objects */
function getHikes() {
	return new Promise(function(resolve, reject) {
        setTimeout(function() {
			fetch('http://carlofontanos.com/api/fuse.php', {
				method: 'POST'
			}).then(function(response) {
				return response.json();    // This returns a promise
			}).then(function(responseObject) {
				// Do something with the result
				var hikes = responseObject;
				resolve(hikes);
			}).catch(function(err) {
				console.log("An error occured --- " + err);
			});
        }, 0);
    });
}
/* Returns a Promise that will be fulfilled when the hike is updated in the backend */
function updateHike(id, name, location, distance, rating, comments) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            fetch('http://carlofontanos.com/api/fuse.php', {
				method: 'POST'
			}).then(function(response) {
				return response.json();    // This returns a promise
			}).then(function(responseObject) {
				// Do something with the result
				var hikes = responseObject;
				
				for (var i = 0; i < hikes.length; i++) {
					var hike = hikes[i];
					if (hike.id == id) {
						hike.name = name;
						hike.location = location;
						hike.distance = distance;
						hike.rating = rating;
						hike.comments = comments;
						break;
					}
				}
				resolve();
			}).catch(function(err) {
				console.log("An error occured --- " + err);
			});
        }, 0);
    });
}

module.exports = {
    getHikes: getHikes,
    updateHike: updateHike
};