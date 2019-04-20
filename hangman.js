var passwordToGuess = "Actions speak louder than words.";
passwordToGuess = passwordToGuess.toUpperCase();

function writePasswordToGuess(){
    document.getElementById("game-board").innerHTML = passwordToGuess;
}

window.onload = writePasswordToGuess;