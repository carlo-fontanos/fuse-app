var Observable = require("FuseJS/Observable");

var hike = this.Parameter; /* Receive hike data from goToHike() in HomePage */

/**
 * The mapping function will be called whenever there is a new value in "hike". This new value is 
 * what gets passed to the function as its argument. The function will then return a new value based 
 * on this argument, which represents the value in the Observable we're creating. 
 */
var name = hike.map(function(x) { return x.name; });
var location = hike.map(function(x) { return x.location; });
var distance = hike.map(function(x) { return x.distance; });
var rating = hike.map(function(x) { return x.rating; });
var comments = hike.map(function(x) { return x.comments; });

function goBack() {
    router.goBack();
}

/* Make our code acciessuble in XML */
module.exports = {
	name: name,
	location: location,
	distance: distance,
	rating: rating,
	comments: comments,
	goBack: goBack
};