function start() {
    // Math: https://www.w3schools.com/js/js_math.asp
    // Demonstrate the use of round, ceil, floor, trunc, sign
    // pow, min, and random and display to the appropriate paragraphs
    document.getElementById("round").innerHTML = Math.round(24.13);
    document.getElementById("ceil").innerHTML = Math.ceil(13.24);
    document.getElementById("floor").innerHTML = Math.floor(9.8);
    document.getElementById("trunc").innerHTML = Math.trunc(17.492);
    document.getElementById("sign").innerHTML = Math.sign(-18);
    document.getElementById("pow").innerHTML = Math.pow(3, 4);
    document.getElementById("min").innerHTML = Math.min(100, 12, 14, 1556, 3, 67876, 45, 7668, 345, 456, 23, 59);
    document.getElementById("random").innerHTML = Math.random();

    // Random: https://www.w3schools.com/js/js_random.asp
    // create a random integer between 1 and 100 and display in the random2 paragraph
    document.getElementById("random2").innerHTML = Math.round(Math.random() * 101)

    // Booleans: https://www.w3schools.com/js/js_booleans.asp
    // read the reference


    // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
    // demonstrate and explain the difference between == and === in the
    // comparisons paragraph
    let x = 17;
    let y = "17";
    let z = 12;

    document.getElementById("comparisons").innerHTML = "== and === are very similar but very different comparison tools. == only checks if the value of two items are equal, such as if the number 12 equals the string 17, which is " + 
    (z == y) + ". But the number 17 and the string 17 are " + (x == y) + ". === on the other hand checks not just the value, but the type as well. So in the case of ===, the number 17 and the string 17 are " + (x === y) + "."


    // Conditions: https://www.w3schools.com/js/js_if_else.asp
    // Read the conditions page
}