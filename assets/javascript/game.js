// Establishing some variables.
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var guessesLeft = 15;
var guessedLetters = [];
var pokedex = [
            {name: ["p"], blanks: ["_"]}//,
            // {name: ["p","i","k","a","c","h","u"], blanks: ["_","_","_","_","_","_","_"]}
        ]
var questionIndex = 0;

function showQuestion() {
    if (questionIndex <= (pokedex.length - 1)) {
        document.querySelector("#currentWord").innerHTML = pokedex[questionIndex].blanks;
    }
}

function replaceLetter () {
        document.querySelector("#currentWord").innerHTML = pokedex[questionIndex].name;
}
// This is what initiates the events of the game.
document.onkeyup = function(event) {
    // We record the users choice as a variable.
    var userGuessInput = event.key;
    var userGuess = userGuessInput.toLowerCase();
    console.log(userGuess);
    console.log(pokedex[questionIndex].blanks);
    console.log(pokedex[questionIndex].name);
    // Time to display the question
    console.log(letters.includes(userGuess));
    console.log(userGuess === pokedex[questionIndex].name);
    if (letters.includes(userGuess)) {
        if (userGuess === pokedex[questionIndex].name) {
            replaceLetter();

        }
    }
}