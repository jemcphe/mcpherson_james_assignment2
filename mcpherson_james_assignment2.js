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
		var noLuck = console.log("Luck is not on our side. No golf today.");
		return noLuck;
	} else {
		if ((isRaining === false) && (playerCount >= 4)) {
			var luckyDay = console.log("We have "+ playerCount + " players, and the weather is perfect");
			return luckyDay;
		}
	}
};

var getGolfBallCount = function(ballCount) {
	var ballCount = 10;
	var currentBallCount = ballCount;
	while (currentBallCount > 1) {
		currentBallCount-= 1;
		var lostBall = currentBallCount - 1;
		console.log("I had " + ballCount + " golf balls.  Poor play has left me with " + lostBall + " golf balls.");
	}
	return ballCount;
}
whereToPlay("Thundercreek");
readyToGolf(false , 4);
getGolfBallCount();
