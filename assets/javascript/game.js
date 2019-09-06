// Establishing some variables.
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var guessesLeft = 15;
var guessedLetters = [];

// We're linking parts of the html to variables here so we can diplay outcomes from the javascript on the page.
var winsText = document.getElementById("wins-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var lettersGuessedText = document.getElementById("guessed-letters-text");
var currentWordText = document.getElementById("current-word");

// This is what initiates the events of the game.
document.onkeyup = function(event) {

    // We record the users choice as a variable.
    var userGuessInput = event.key;
    var userGuess = userGuessInput.toLowerCase();
    console.log(userGuess);

    // Check if the key hit was a letter.
    if (letters.includes(userGuess)) {
        console.log("Yep, that's a letter.")
    }
}