// declare global variables used + word choices available to computer
var characterChoices = ["Tarzan", "Jane", "Tantor", "Terk", "Kala", "rainforest", "adventure", "gorilla", "leopard", "vines" ];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var correctGuesses = [];
var guessesList = [];
//text shown on user side
var gameText = 
		"<p> Word to Guess: " + correctGuesses + "</p>"+
		"<p> Wins: " + wins + "</p>" +
		"<p> Losses: " + losses + "</p>" +
		"<p> Guesses Left: " + guessesLeft + "</p>" +
		"<p> Guesses so Far: " + guessesList + "</p>";

		document.getElementById("game").innerHTML = gameText;

		// when key is pressed, trigger game to start reacting
		document.onkeyup = function(event) {

		// check if user input is alphabetical and if so run the game, if not do not add input to guesses list
		if (event.keyCode >= 65 && event.keyCode <= 90) {

		// user choice is whatever key was pressed
		var userChoice = event.key;

		// Generate random computer choice and store it in variable computerChoice
		var computerChoice = characterChoices[Math.floor(Math.random() * characterChoices.length)];
		//variable puzzle holds computer's choice as individual letters
		var puzzle = computerChoice.split("");
		//puzzle is represented on screen as underscores
		var puzzle = "_";
		
		// tell correctGuesses array to fill with number of dashes in computerChoice word
		for (var i = 0; i<computerChoice.length; i++){
			correctGuesses.push(puzzle);

		}

		if (userChoice === computerChoice.split("")){
			correctGuesses.push(userChoice);
			guessesLeft--;
			guessesList.push(userChoice);
		}
		//comparing length of computer choice, if userChoice = a letter in computerChoice, change that dash in
		// correctGuesses to the user input
		// for (var j = 0; j < computerChoice.length; j++){
			
		// 		if (computerChoice[j] === userChoice){
		// 			correctGuesses[j]===userChoice;
		// 			guessesLeft--;
		// 			guessesList.push(userChoice);
		// 		}
				//if user did not choose computerChoice letter and guessesLeft is not yet zero
				//decreases guessesLeft and add userChoice to guessesList
				// else if (computerChoice[j] !== userChoice && guessesLeft!==0) {
				// 		guessesLeft--;
				// 		guessesList.push(userChoice);

				// }
				//if user still didn't guess letter in computer choice and has no guesses left
				//increase losses by 1
		// 		if (computerChoice !==userChoice && guessesLeft === 0){
		// 			losses++;
		// 		}
		// };
		
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
