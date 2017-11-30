// declare global variables used + word choices available to computer
var characterChoices = ["Tarzan", "Jane", "Tantor", "Terk", "Kala", "rainforest", "adventure", "gorilla", "leopard" ];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesList = [];



var html = 
		"<p> Wins: " + wins + "</p>" +
		"<p> Losses: " + losses + "</p>" +
		"<p> Guesses Left: " + guessesLeft + "</p>" +
		"<p> Guesses so Far: " + guessesList + "</p>";


		document.querySelector("#game").innerHTML = html;

// when key is pressed, trigger game to start reacting
	document.onkeyup = function(event) {
		// user choice is whatever key was pressed
		var userChoice = event.key;
		// Generate random computer choice and store it in variable computerChoice
		var computerChoice = characterChoices[Math.floor(Math.random() * characterChoices.length)];

		// tell dashes array to fill with number of dashes in computerChoice word
		for (var i = 0, i<computerChoice.length, i++;){
			guessesList[i] = "_";
		}

		var remainingLetters = computerChoice.length;

		while (remainingLetters > 0){
			userChoice = event.key;
			guessesList.push(userChoice);
		}

		for (var j = 0, j < computerChoice.length, j++;){
			if (computerChoice === userChoice){
				guessesList[j]===userChoice;
				remainingLetters--;
			}
		}

	];
