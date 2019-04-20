var passwordToGuess = "Actions speak louder than words.";
passwordToGuess = passwordToGuess.toUpperCase();

var passwordLength = passwordToGuess.length;
var password1 = "";
for (i = 0; i < passwordLength; i++) {
    if (passwordToGuess.charAt(i) == " ") {
        password1 = password1 + " "
    } else {
                password1 = password1 + "-"
    }
    
}

function writePasswordToGuess(){
    document.getElementById("game-board").innerHTML = password1;
}

window.onload = start; 


function start(){

    var div_content = " ";

    for (i = 0; i < 26; i++){
        div_content = div_content + '<div class="letter">A</div>';
        if((i+ 1) % 7 == 0) div_content = div_content + '<div style="clear:both;"></div>';
    }
    document.getElementById("alphabet").innerHTML = div_content;

    writePasswordToGuess();
}