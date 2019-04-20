var passwordToGuess = "Actions speak louder than words.";
passwordToGuess = passwordToGuess.toUpperCase();

var passwordLength = passwordToGuess.length;
var password1 = "";
for (i = 0; i < passwordLength; i++) {
    if (passwordToGuess[i] == " ") {
        password1 = password1 + " "
    } else {
                password1 = password1 + "-"
            }
    
}
function writePasswordToGuess(){
    document.getElementById("game-board").innerHTML = password1;
}

window.onload = writePasswordToGuess; 