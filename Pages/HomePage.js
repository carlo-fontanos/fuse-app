var hikes = require("hikes");

/** 
 * From the button we can get its data. On click of the button it assigns its data to our hike variable which 
 * then updates all subscribers to our observable hike varialble 	
 */
function goToHike(arg) {
    var hike = arg.data;
	router.push("editHike", hike); /* Navigate to editHike template on click */
}

module.exports = {
    hikes: hikes,

    goToHike: goToHike
};