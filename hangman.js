var passwordToGuess = "Actions speak louder than words";
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

var letters = new Array(26);
letters[0] = "A";
letters[1] ="B";
letters[2] ="C";
letters[3] ="D";
letters[4] ="E";
letters[5] ="F";
letters[6] ="G";
letters[7] ="H";
letters[8] ="I";
letters[9] ="J";
letters[10] ="K";
letters[11] ="L";
letters[12] ="M";
letters[13] ="N";
letters[14] ="O";
letters[15] ="P";
letters[16] ="Q";
letters[17] ="R";
letters[18] ="S";
letters[19] ="T";
letters[20] ="U";
letters[21] ="V";
letters[22] ="W";
letters[23] ="X";
letters[24] ="Y";
letters[25] ="Z";


function start(){

    var div_content = " ";

    for (i = 0; i < 26; i++){
        var element = "letterToCheck" + i;
        div_content = div_content + '<div class="letter" onclick="check('+i+')" id = "'+element+'">'+letters[i]+'</div>';
        if((i+ 1) % 7 == 0) div_content = div_content + '<div style="clear:both;"></div>';
    }
    document.getElementById("alphabet").innerHTML = div_content;

    writePasswordToGuess();
}

String.prototype.setCharacter = function (place, character) {
    if (place > this.length - 1) {
        return this.toString();
    }
    else {
        return this.substr(0, place) + character +this.substr(place + 1);
    }
}

function check(num) {

    var goodGuess = false;

    for(i=0; i<passwordLength; i++) {
        if (passwordToGuess.charAt(i) == letters[num]) {
            password1 = password1.setCharacter(i, letters[num]);
            goodGuess = true;
        }
    }

    if(goodGuess == true) {

        var element = "letterToCheck" + num;
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#000C00";
        document.getElementById(element).style.border = "3px solid #000C00";
        document.getElementById(element).style.cursor = "default";

        writePasswordToGuess();
    }
        else {
            var element = "letterToCheck" + num;
            document.getElementById(element).style.background = "#330000";
            document.getElementById(element).style.color = "#C00000";
            document.getElementById(element).style.border = "3px solid #C00000";
            document.getElementById(element).style.cursor = "default";

        }
    
}