alert("JavaScript works!");
var hostName = "Mac"
var courseNames = ["Arrowhead", "Thundercreek", "Country Club"];
var playerCount = 0;

var intro = function(host, players) {
	var welcomeMessage = console.log("Welcome " + hostName + "! You are hosting a golf outing today. We need " + players + 
		" golfers to play.");
		return welcomeMessage;
};

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
	var playerName = playerNames[name];
	var playerAge = playerAges[age]
	
	for(var name  = 0; name < playerNames.length; name++) {
		var message = console.log("Player: "+ playerName + " Age: " + playerAge);
		return message;
	}	
};

intro("Mac", 4);
whereToPlay("Arrowhead");
readyToGolf(false , 4);
playerInfo(0, 0);
playerInfo(1, 1);
playerInfo(2, 2);
playerInfo(3, 3);
quenchThirst("water", "love");
getGolfBallCount(10);


