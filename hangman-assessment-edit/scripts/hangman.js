// declare and initialize array
let game = ["APRICITY", "PETRICHOR", "EFFERVESCENT", "TITULAR", "SOLILOQUY", "IDYLLIC", "CLINOMANIA", "VELLICHOR", "PANACEA", "TARADIDDLE"]; //change to 10 different words
let choice = Math.floor(Math.random() * 10); //change to 10, not 4
let answer = game[choice];
let myLength = answer.length;
let display = [myLength];
let win = myLength;
let letters = answer.split('');
let attemptsLeft = 6;
let output = '';
let userLetter = '';
let found = false;
let guessed = []
let newLetter = false;
// game setup works fine
function setup() {
    alert(answer);
    for (let i = 0; i < answer.length; i++) {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("word").innerHTML = output;
}

//Note to do a used letter ARRAY
//console.log(guessed.length);

// Issue below here
// noticed if we uncomment below it reveals all letter for the hangman


document.getElementById("submit").addEventListener("click", function(event){

    event.preventDefault();
    output = '';
    userLetter = document.getElementById("guess").value;
    document.getElementById("guess").value = ''; //would this reset value to null
    
    if (attemptsLeft <= 0){
        return
    }
    newLetter = false;
    newLetter = checkIfNewLetter()

    if (newLetter == true){
        found = false;
        goodLetter();
        if (found == false){

            // "images/0" + "" + ".png"
            // 7 - attemptsLeft
            attemptsLeft--;
            var left = 7 - attemptsLeft
            
            if (left < 8){
                document.getElementById("hangman").src = "images/0" + (left) + ".png";
            }
        }
    }

    for (let l = 0; l < answer.length; l++){
        output = output + display[l] + ' ';
    }
    
        
    if (win < 1) { 
        document.getElementById("guesses").innerHTML = 'YOU WIN!!!';
    } else if (attemptsLeft < 1) {
        document.getElementById("guesses").innerHTML = 'YOU LOSE!!!';
    } else {
        document.getElementById("guesses").innerHTML = 'You have ' + attemptsLeft + ' guesses left';
    }
    
    //Create place in HTML to display letters used - has an ID
    document.getElementById("word").innerHTML = output;
});

function checkIfNewLetter(){
    if (!guessed.includes(userLetter.toUpperCase())){
        guessed.push(userLetter.toUpperCase());
        document.getElementById("guessed").innerHTML = guessed;
        //console.log(guessed);
        return true
    }
    return false
}

function goodLetter(){
    for (let c = 0; c < answer.length; c++) {
            //alert(letters[c]);
        
            if (userLetter.toUpperCase() == letters[c]) {
                display[c] = userLetter.toUpperCase();
                win--;
                found = true;
                
            }
    }
}
//output = output + display[c] + ' ';
//script connected fine some reason the button and the script are not registering.