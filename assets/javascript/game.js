// declare global variables used + word choices available to computer
var characterChoices = ["Tarzan", "Jane", "Tantor", "Terk", "Kala", "rainforest", "adventure", "gorilla", "leopard" ];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesList = [];
var dashes = [];


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
		for (var i = 0, i<characterChoices.length, i++;){
			dashes[i] = "_";
		}



	// if user choice = match to letter in computer word, display that letter and no other letters


	//if user does not choose matching letter, take away one guess and add to guesseslist

	// if user choice completes word, add one to wins and show image that matches word

	//if guesses reach 0, add 1 loss and restart game (show answer?)



	];
