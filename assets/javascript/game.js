// declare global variables used + word choices available to computer
var characterChoices = ["tarzan", "jane", "tantor", "terk", "kala", "rainforest", "adventure", "gorilla", "leopard", "vines" ];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var correctGuesses = [];
var guessesList = [];
// count down how many letters left to guess
var remainingLetters = correctGuesses.length;

// Generate random computer choice and store it in variable computerChoice
var computerChoice = characterChoices[Math.floor(Math.random() * characterChoices.length)];
//variable puzzle holds computer's choice as individual letters
var puzzle = computerChoice.split("");

//text shown on user side
var gameText = 
		"<p> Word to Guess: " + correctGuesses + "</p>"+
		"<p> Wins: " + wins + "</p>" +
		"<p> Losses: " + losses + "</p>" +
		"<p> Guesses Left: " + guessesLeft + "</p>" +
		"<p> Guesses so Far: " + guessesList + "</p>";

		document.getElementById("game").innerHTML = gameText;

	
		//reset function called to reset guesses after a win or loss
		function reset () {
			
			// Generate random computer choice and store it in variable computerChoice
			var computerChoice = characterChoices[Math.floor(Math.random() * characterChoices.length)];
			guessesLeft = 10;
			guessesList = [];
	
		};

	
		// use loop to push an underscore for each letter of computerChoice
		for (j = 0; j<computerChoice.length; j++) {
			puzzle[j]="_";
			correctGuesses.push(puzzle[j]);		
		}
	

		// when key is pressed, trigger game to start reacting
		document.onkeyup = function(event) {


		// user choice is whatever key was pressed
		var userChoice = event.key;

		// check if user input is alphabetical and if so run the game, if not do not add input to guesses list
		if (event.keyCode >= 65 && event.keyCode <= 90) {
				
		// tell correctGuesses array to fill with number of dashes in computerChoice word
		for (var i = 0; i<computerChoice.length; i++){
				                             
		if (computerChoice[i] === userChoice) {
			correctGuesses[i] = userChoice;
			remainingLetters--;

		} 
	
	}	
		if (guessesLeft !==0) {
			guessesList.push(userChoice);
			guessesLeft--;

		} else { 
			losses++;
			reset();
			
		}


		if (remainingLetters===0){
			wins++;
			reset();
			
		}

		// if remainingLetters===0, display image associated with that computerChoice and start audio of Tarzan song else don't show anything
		// probably something with getElementById.("game").innerHTML = (link to image)
	


			
		var gameText = 
		"<p> Word to Guess: " + correctGuesses + "</p>"+
		"<p> Wins: " + wins + "</p>" +
		"<p> Losses: " + losses + "</p>" +
		"<p> Guesses Left: " + guessesLeft + "</p>" +
		"<p> Guesses so Far: " + guessesList + "</p>" ;

		document.getElementById("game").innerHTML = gameText;

	//close if/else statement checking alphabetical input
	}  else {
		guessesList.pop(userChoice);
	}
};
