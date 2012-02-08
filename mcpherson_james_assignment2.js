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
	while (ballCount >= 1) {
		//currentBallCount-= 1;
		ballCount--;
		//var lostBall = ballCount;
		console.log("I started with " + currentBallCount + " golf balls.  Poor play has left me with " + ballCount + " golf balls.");
	}
	return ballCount;
};

var quenchThirst = function(drink, opinion) {
	var message = console.log("Looks like we have plenty of " + drink + ", which I " + opinion + ".");
	return message;
};

var playerInfo = function (name	, age) {
	var playerNames = ["James", "Mac", "Nick", "Jeremy"];
	var playerAges = [46, 25, 19, 40];
	
	for(var name = [0]; name < playerNames.length; name++) {
		var playerName = playerNames[name];
			for(var age = [0]; age < playerAges.length; age++) {
				var playerAge = playerAges[age];
				var message = console.log("Player: "+ playerName + " Age: " + playerAge);
				return message;
			}
	}	
};


whereToPlay("Thundercreek");
readyToGolf(false , 4);
getGolfBallCount();
quenchThirst("Bud Light", "love");
playerInfo();
