function start() {

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Sophie DeCamp"
        /*
            read/watch the associated reference and complete the directions in the comments.

        */

    /* JS Numbers: https://www.w3schools.com/js/js_numbers.asp
        We will focus on the things with numbers that are significantly
        different than python. Please read the page linked to above before 
        completing the following:
    */

    /* Write a line of code demonstrating what will happen if 
       you try to add a number and a string. Print to the add paragraph to 
       display both the equation and the results. 
    */
    let num1 = 20;
    let string1 = "I am a beautiful string";

    let stringNum = num1 + string1;
    document.getElementById("add").innerHTML = stringNum;

    /*
        JS Number Methods: https://www.w3schools.com/js/js_number_methods.asp
    */

    // Demonstrate the use of toString() and print to the to-string paragraph
    document.getElementById("to-string").innerHTML = (1 + 23).toString();

    // Demonstrate the use of toExponential() and print to the exponent paragraph
    let num2 = 3.33333;
    document.getElementById("exponent").innerHTML = num2.toExponential(1);

    // Demonstrate the use of toFixed() and print to the fixed paragraph
    document.getElementById("fixed").innerHTML = num2.toFixed(2);

    // Demonstrate the use of toPrecision() and print to the precision paragraph
    document.getElementById("precision").innerHTML = num2.toPrecision(17);

    // Demonstrate the use of parseFloat() and print to the float paragraph
    document.getElementById("float").innerHTML = parseFloat("Hah not a number, get nothing");
    document.getElementById("float").innerHTML = parseFloat("74") + parseFloat("101");

    // Demonstrate the use of parseInt() and print to the int paragraph
    document.getElementById("int").innerHTML = parseInt("7 is one of my lucky numbers.");


    // Watch Simple Comparisons: https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false&u=69317474

    /* In the equals paragraph explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)
    */

    document.getElementById("equals").innerHTML = "The == will convert the data to a similar type before comparing, meaning a string '10' and a number 10 are equal. The === will compare the values and the type of data, so a string '24' is not equal to the number 24.";

    // Watch Arithmetic Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false&u=69317474
    // Watch Logical Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // In the logic paragraph describe the order of precedence for and / or operators

    document.getElementById("logic").innerHTML = "The && (and) operator is always completed before the || (or) operator, if you wish for it to complete in a different fashion you should use parenthesis to dictate what is compared before being compared to others.";

    // Watch Conditional If: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // Watch Conditionals Switch: https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false&u=69317474


    // Write code to demonstrate the use of the switch statement and display results to switch paragraph
    var answer = window.prompt("YES, MAYBE, NO.")

    switch (answer) {
        case "YES":
            document.getElementById("switch").innerHTML = "Yes? Yes what? I didn't say anything...";
            break;
        case "MAYBE":
            document.getElementById("switch").innerHTML = "I haven't said a word to you. What do you mean 'maybe'?";
            break;
        case "NO":
            document.getElementById("switch").innerHTML = "I'm not doing anything! GOSH!";
            break;
        default:
            document.getElementById("switch").innerHTML = "I just want a nap.";
            break;
    }

    // Watch Terse ifs: https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoAdvance=true&autoSkip=true&autoplay=true&resume=false&u=69317474
    // Watch Ternary Operator:https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false&u=69317474
    // Write code to demonstrate the use of the ternary operator and print to the ternary paragraph

    let food = "pie";

    food === "cake"
        ? document.getElementById("ternary").innerHTML = "I love cake!"
        : document.getElementById("ternary").innerHTML = "That's not cake...";
    
}