let number = Math.round(Math.random() * 1001);

function setUp() {
    alert(number);
    document.getElementById("guess").value = "";
}

function sendGuess(){
    userGuess = document.getElementById("guess").value;
    document.getElementById("guess").value = "";

    if (number != userGuess) {
        compare(userGuess);
    }

    if (number == userGuess){
        document.getElementById("feedback").style.color = "chartreuse";
        document.getElementById("feedback").innerHTML = "You got it! The number was " + number + "!";
    }
}

function compare(userGuess){
    //console.log(userGuess);
    var difference = Math.abs(number - userGuess);

    if (difference <= 5 && difference != 0){
        document.getElementById("feedback").style.color = "red";
        document.getElementById("feedback").innerHTML = "HOT! HOT! HOT!";
    }
    else if (difference <= 15 && difference > 5){
        document.getElementById("feedback").style.color = "orange";
        document.getElementById("feedback").innerHTML = "Warmer...";
    }
    else if (difference <= 50 && difference > 15){
        document.getElementById("feedback").style.color = "yellow";
        document.getElementById("feedback").innerHTML = "Warm...";
    }
    else if (difference <= 100 && difference > 50){
        document.getElementById("feedback").style.color = "cornflowerblue";
        document.getElementById("feedback").innerHTML = "Cold...";
    }
    else if (difference <= 150 && difference > 100){
        document.getElementById("feedback").style.color = "deepskyblue";
        document.getElementById("feedback").innerHTML = "Colder...";
    }
    else if (difference <= 250 && difference > 150){
        document.getElementById("feedback").style.color = "aqua";
        document.getElementById("feedback").innerHTML = "Coldest..."
    }
    else{
        document.getElementById("feedback").style.color = "white";
        document.getElementById("feedback").innerHTML = "You're so far that you aren't even cold anymore."
    }
}