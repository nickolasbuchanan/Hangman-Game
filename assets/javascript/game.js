
//Variaibles need

//Need to start an array with all the word choices.
var cityWords = ["paris", "london", "rome", "miami",
"new york", "berlin", "atlanta", "washington"];
//The word chosen needs to be broken down to letters.
var pickedWord = "";

var wordToLetter = "";
//Those letters need to be turned into blanks.
var letterToBlank = [];
//Need a spot for the letters to go and unsloved blanks
var trialNError = [];
//Need a spot for guesses
var pickedLetter = "";
//Need a spot for worng guess
var wrongLetter = [];
//Need counters for the game: win, loss, guesses left
var guessNumber = 12;
var winCounter = 0;
var lossCounter = 0;
//*******************************
//Need to Start up game with hitting a key to get started


//funtion to run the game
function startGame() {
	guessNumber = 12;

	pickedWord = cityWords [Math.floor(Math.random() * cityWords.length)];

	wordToLetter = pickedWord.split("");

	letterToBlank = wordToLetter.length;

	console.log(pickedWord);

	trialNError = [];

	wrongLetter = [];

	for (var i = 0; i < letterToBlank; i++) {
		trialNError.push("_");
	}
	
	console.log(trialNError);

	document.getElementById("guess-counter").innerHTML = letterToBlank;

	document.getElementById("letter-blanks").innerHTML = trialNError.join(" ");

	document.getElementById("wrong-letters").innerHTML = wrongLetter.join(" ");

}

//Check the letters of the word
function letterChecker(letter) {

	var letterFound = false;
	
	for (var i = 0; i < letterToBlank; i++) {
		
		if (pickedWord[i] === letter) { 
			
			letterFound = true;
	 	}
	 }

	 if (letterFound) {

	 		for (var j = 0; j < letterToBlank; j++) {
	  
	  		if (pickedWord[j] === letter) {
	  	
	  			trialNError[j] = letter;
	 			}
	  }
	 
		console.log(letterToBlank);
	}	

	else {
		wrongLetter.push(letter);

		guessNumber--;
	}
}

//Need to setup what happens when a round is completed
function roundEnd(){
	//need to know the round information; wins, loss, guesses to start
	console.log("WinCounter: " + winCounter + " | LossCount: " + lossCounter + " | GuessNumber: " + guessNumber);


	document.getElementById("guess-counter").innerHTML = guessNumber;

	document.getElementById("letter-blanks").innerHTML = trialNError.join (" ");

	document.getElementById("wrong-letters").innerHTML = wrongLetter.join(" ");

	if (wordToLetter.toString() === trialNError.toString()) {

		winCounter++;

		alert("You Win!!!");

		document.getElementById("win-counter").innerHTML = winCounter;

		startGame();

	}

	else if (guessNumber === 0) {

		lossCounter++;

		alert("You lost, better get travling!!!!");

		documnet.getElementById("loss-counter").innerHTML = lossCounter;
	}
}

startGame();

	document.onkeyup = function(event) {
		// Make letters being guessed lower case, add standard
		pickedLetter = String.fromCharCode(event.keyCode).toLowerCase();
		//Need to check for a correct letter answer
		letterChecker(pickedLetter);
		//with a startgame there needs to be an end game 
		roundEnd();
	};



