// Global Variables
//  global variables are declared with var
//  local variables are declared wih let
//  
var name1 = "Meri";


// myName = "Meredith Louise Engel" - Allowed but frowned upon

function names() {

    //fix the errors
    var firstName = "Meredith",
        lastName = "Engel";
    document.getElementById("name").innerHTML = name1;
    document.getElementById("full-name").innerHTML = firstName + " " + lastName;
    var firstName = "Doctor";
    var name = "Beba";
    document.getElementById("first").innerHTML = name;
    document.getElementById("nick-name").innerHTML = firstName;

}

function scope() {
    //fix the errors
    var firstName = "Meredith",
        lastName = "Engel";
    const taxRate = .07; // This is a constant
    document.getElementById("global").innerHTML = name1;
    document.getElementById("local").innerHtml = firstName;
    document.getElementById("tax").innerHTML = taxRate;
    //taxRate = .08
    document.getElementById("new-tax").innerHTML = taxRate;
}

function letMe() {
    // Fix the errors
    let dog1 = "Ollie";
    dog2 = "Nessie";
    //dog2 = "Nessie";
    var dog3 = "Paisley";
    var dog2;
    document.getElementById("dog1").innerHTML = dog1;
    document.getElementById("dog2").innerHTML = dog2;
    document.getElementById("dog3").innerHTML = dog3;
    var dog2 = "Ory"
    document.getElementById("dog1-2").innerHTML = dog2;
}

function constants() {
    // fix the errors
    const PI = 3.14;
    const dogs = ["Ollie", "Nessie", "Ory"];
    document.getElementById("doggos").innerHTML = dogs;
    dogs[0] = "Ollie Bear";
    document.getElementById("new-doggos").innerHTML = dogs;
    const breed = ["Shepherd", "Collie", "Bouvier"];
    document.getElementById("pi").innerHTML = PI;
    document.getElementById("breeds").innerHTML = breed;
}

function myMath() {
    // create statements demonstrating the use of each operator
    let addition = 10 + 32
    document.getElementById("addition").innerHTML="10 + 32 = " + addition;
    var x = 3;
    var y = 6;
    let subtraction = y-x;
    document.getElementById("subtraction").innerHTML=y + " - " + x + " = " + subtraction;
    let multiplication = x*y;
    document.getElementById("multiplication").innerHTML=x + " * " + y + " = " + multiplication;
    let exponent = y**x;
    document.getElementById("exponent").innerHTML=y + " ** " + x + " = " + exponent;
    let division = y / x;
    document.getElementById("division").innerHTML=y + " / " + x + " = " + division;
    let modulus = y%4;
    document.getElementById("modulus").innerHTML=y + " % 4 = " + modulus;
    let w = 17;
    w++;
    let z = w;
    document.getElementById("increment").innerHTML="17 ++ = " + z;
    let a = 501;
    a--;
    let b = a;
    document.getElementById("decrement").innerHTML="501 -- = " + b;
}

function assignments() {
    // create statements demonstrating the use of each assignment type
    var x = 10;
    document.getElementById("equals").innerHTML = "x = 10   " + "x = " + x;
    var y = x += 1;
    document.getElementById("plus-equals").innerHTML = "x += 1   " + "x = " + y;
    var a = x -= 3;
    document.getElementById("minus-equals").innerHTML = "x -= 3 " + "a = " + a;
    var b = x *= a;
    document.getElementById("times-equals").innerHTML = "x *= a " + "b = " + b;
    var c = x /= 2;
    document.getElementById("divide-equals").innerHTML = "x /= 2 " + "c = " + c;
    var d = x %= 3;
    document.getElementById("modulus-equals").innerHTML = "x %= 3 " + "d = " + d; 
    //I have these set up so it builds on the last value of x
}

function dataTypes() {
    // create samples of each of the data types from the
    // index page and display them in the Data Types section
    const pies = ["Cherry", "Apple", "Coconut Creme", "Chocolate Pudding"];
    document.getElementById("array").innerHTML = pies;

    const chef = {name:"Sophie", gender:"Female", race:"Caucasian"}
    document.getElementById("object").innerHTML = "The chef is " + chef.name + ", who is a " + chef.race + " " + chef.gender + ".";

}