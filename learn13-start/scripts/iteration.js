/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list 
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/
const items = ["Minecraft", "World of Warcraft", "Skyrim", "Kingdoms and Castles", "Jackbox Party 6", "Sea of Thieves"];

for (const i of items){
    var current = document.getElementById("list").innerHTML;

    document.getElementById("list").innerHTML = current + i + "<br>";
}


/*
JS Sets

https://www.w3schools.com/js/js_sets.asp

Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)

*/
const songs = new Set(["Spillways", "Photograph", "Live Fast, Die Beautiful", "Kiss From A Rose", "Dance With The Devil"]);
//I saw you could use the same thing for the list to iterate (according to W3Schools) so I did the forEach assuming it was what you wanted
songs.forEach(function(s){
    var current = document.getElementById("set1").innerHTML;

    document.getElementById("set1").innerHTML = current + s + "<br>";
})

// add two more songs to the set then display in the set2 paragraph

songs.add("Eater of Worlds");
songs.add("Fragile Minds");

songs.forEach(function(s){
    var current = document.getElementById("set2").innerHTML;

    document.getElementById("set2").innerHTML = current + s + "<br>";
})


/* 
Maps
https://www.w3schools.com/js/js_maps.asp

Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page)
*/
const contactInfo = new Map([
    ["Sophie DeCamp", "sdecamp@email.com"],
    ["Pally Drome", "pdrome@email.com"],
    ["Blythe Ackleberry", "backleberry@email.com"],
    ["Sethers Tenn", "stenn@email.com"],
    ["Placi Boe", "pboe@email.com"]
]);

contactInfo.forEach(function(email, name){
    var current = document.getElementById("map1").innerHTML;

    document.getElementById("map1").innerHTML = current + name + ", " + email + "<br>"
})

// add two new names and emails and display in map2 use the forEach() method
contactInfo.set("Billy Ored", "bored@email.com")
contactInfo.set("Maggie Ificant", "mificant@email.com")

contactInfo.forEach(function(email, name){
    var current = document.getElementById("map2").innerHTML;

    document.getElementById("map2").innerHTML = current + name + ", " + email + "<br>"
})

// get and display the email of one person, display in map3

document.getElementById("map3").innerHTML = contactInfo.get("Placi Boe");