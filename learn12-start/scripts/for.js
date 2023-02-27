// for loop - https://www.w3schools.com/js/js_loop_for.asp
// Write 99 bottles of beer on the wall using a for loop
// hints - decrement at the end, create a variable, save the song lyrics from
// the loop to the variable. use <br> instead of \n with the inner html. 

for (let i = 99; i > 0; i--){
    var current = document.getElementById("beer").innerHTML;
    
    if (i == 1){
        document.getElementById("beer").innerHTML = current + i + " bottle of beer on the wall! " + i + " bottle of beer! Take one down, pass it around, no bottles of beer on the wall!" + "<br>";
    }
    if (i == 2){
        document.getElementById("beer").innerHTML = current + i + " bottles of beer on the wall! " + i + " bottles of beer! Take one down, pass it around, " + (i - 1) + " bottle of beer on the wall!" + "<br>";
    }
    if (i >= 3){
        document.getElementById("beer").innerHTML = current + i + " bottles of beer on the wall! " + i + " bottles of beer! Take one down, pass it around, " + (i - 1) + " bottles of beer on the wall!" + "<br>";
    }
    
}


//for in: https://www.w3schools.com/js/js_loop_forin.asp
// create an array of months and use the for in
// command to print them to the for-in paragraph

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let text = "";
for (let i in months){
    text += months[i] + " ";
}
document.getElementById("for-in").innerHTML = text;



// For of: https://www.w3schools.com/js/js_loop_forof.asp
// demonstrate the use of For Of to print letters from a string. 
// Create your own string variable of at least 5 letters
// print the results in the for-of paragraph
const string = "This is my string!"
let text2 = "";
for (let i of string){
    text2 += i;
}
document.getElementById("for-of").innerHTML = text2;


// While loop: https://www.w3schools.com/js/js_loop_while.asp
// Create a while loop to print the numbers 1 to 50
// print the results in the while paragraph
let text3 = "";
let num = 1;
while (num <= 50){
    text3 += num + " ";
    num++;
}
document.getElementById("while").innerHTML = text3;