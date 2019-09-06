// Establishing some variables.
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var guessesLeft = 15;
var guessedLetters = [];
var pokedex = [
    { name: ["p"], blank: ["_"]}
];
var wordIndex = 0;

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
    
    // Check if the key hit was a letter.
    if (letters.includes(userGuess)) {
        console.log("Yep, that's a letter.")
        console.log(pokedex[wordIndex].name[0].toString())
        if (userGuess === pokedex[wordIndex].name[0]) {
            wins++;
            guessesLeft = 15;
            guessedLetters = [];
            console.log("They match.") 
        } else {
            guessesLeft--;
            guessedLetters.push(" " + userGuess);
        };
        if (guessesLeft === 0) {
            guessesLeft = 15;
            guessedLetters = []; 
        }
    }
    winsText.textContent = wins;
    guessesLeftText.textContent = guessesLeft;
    lettersGuessedText.textContent = guessedLetters;
}