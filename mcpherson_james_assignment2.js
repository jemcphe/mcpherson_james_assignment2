alert("JavaScript works!");

//var courseName = ["Arrowhead", "Thundercreek", "Country Club"];
var playerCount = 0;
var isRaining = false;

var whereToPlay = function(courseName){
	if(courseName === "Arrowhead") {
		console.log("We are going to play at the ", courseName, " golf course today.");
	} else {
		console.log("I hate the " + courseName + " golf course!");
	}
}

whereToPlay("Thundercreek");
