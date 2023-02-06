function start() {
    // follow the directions in the comments
    // print to the index page

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Sophie DeCamp";

    // from JavaScript Strings: https://www.w3schools.com/js/js_strings.asp


    // String length: calculate the string length and print to the length paragraph
    let myString = "Be it ever so humble, there is no place like home."
    document.getElementById("length").innerHTML = myString.length;


    // Escape sequences
    // print a string to the escape paragraph that uses three different escape sequences (look at the web page)
    let escapeString = "For the moon \\never\\ beams \'without\' bringing me dreams of the beautiful \"Annabel Lee\"; And the stars \\never\\ rise \'but\' I see the bright eyes of the beautiful \"Annabel Lee\";"
    document.getElementById("escape").innerHTML = escapeString;


    // JavaScript String Methods https://www.w3schools.com/js/js_string_methods.asp
    let name = "Sophie Renae DeCamp";
    // create a variable named 'name' and store your complete name in it
    // Use the JavaScript slice function to display your first name to first paragraph
    let sliceFirst = name.slice(0, 6);
    document.getElementById("first").innerHTML = sliceFirst

    // Use the Javascript substring Method to display your middle name to the middle paragraph
    let subMiddle = name.substring(6, 12);
    document.getElementById("middle").innerHTML = subMiddle

    // Use the JavaScript subst Method to display your last name to the last paragraph
    let substrLast = name.substr(13, 19);
    document.getElementById("last").innerHTML = substrLast


    // replacing string content - in the following variable use the replace method to put your major 
    // in a new string and print to the major paragraph

    let major = "I'm majoring in Physical Therapy at McHenry County College"
    let newMajor = major.replace("Physical Therapy", "Associate of Arts");
    document.getElementById("major").innerHTML = newMajor


    // convert the following variable to upper case then print to the upper paragraph
    let myText = "It\'s a great day to be alive!";
    document.getElementById("upper").innerHTML = myText.toUpperCase();

    // Use the trim() method to remove white spaces from the following variable and print to the
    // trim paragraph
    let trimText = "                  McHenry County College                ";
    document.getElementById("trim").innerHTML = trimText.trim();

    // use the indexOf() method to get the index of 'May' and print the index number to the index paragraph

    let months = "January, February, March, April, May, June, July, August, September, October, November, December";
    document.getElementById("index").innerHTML = months.indexOf("May");


    // JavaScript Template Literals   https://www.w3schools.com/js/js_string_templates.asp

    // create a template literals for both your first and last name (name the variables first and last)
    let first = `Sophie`;
    let last = `DeCamp`;

    // Use Variable substitutions to create a greeting that incorporates your first and last name and 
    // print to the greeting paragraph
    let greetString = `Hey! I'm ${first} ${last}, it's nice to meet you!`;
    document.getElementById("greeting").innerHTML = greetString
}