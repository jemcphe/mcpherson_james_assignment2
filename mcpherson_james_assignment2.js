alert("JavaScript works!");

//var courseName = ["Arrowhead", "Thundercreek", "Country Club"];
var playerCount = 0;
//var isRaining = false;

var whereToPlay = function(courseName){
	if(courseName === "Arrowhead") {
		console.log("We are going to play at the ", courseName, " golf course today.");
	} else {
		console.log("I hate the " + courseName + " golf course!");
	}
};

var readyToGolf = function (isRaining, playerCount) {
	if((isRaining === true) || (playerCount < 4)) {
		var message = console.log("Luck is not on our side. No golf today.");
		return message;
	} else {
		if ((isRaining === false) && (playerCount >= 4)) {
			var message = console.log("We have "+ playerCount + " players, and the weather is perfect");
			return message;
		}
	}
};
whereToPlay("Thundercreek");
readyToGolf(false , 4);
