/* JavaScript Dates: https://www.w3schools.com/js/js_dates.asp */

// Create a variable, assign it to a new date object
// display the variable in the basic paragraph
const date = new Date();
document.getElementById("basic").innerHTML = date;

// create a new date variable and load the information for today into it
// display the results in the today paragraph (Year, Month, Day)
const today = new Date(2023, 1, 18);
document.getElementById("today").innerHTML = today;

// Create a new date variable based on the dateString and store your birthday in it
// display the variable in the birthday paragraph
const bday = new Date("December 8, 1998");
document.getElementById("birthday").innerHTML = bday;


// Convert your basic date to the ISO string format and display the result
// in the iso paragraph

document.getElementById("iso").innerHTML = date.toISOString();

//  Date Formats: https://www.w3schools.com/js/js_date_formats.asp
// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs
const date1 = new Date(1969, 7, 18);
document.getElementById("date1").innerHTML = date1.toDateString();

const date2 = new Date("08/19/2000");
document.getElementById("date2").innerHTML = "This is a short date: " + date2;
/* FROM SOPHIE - Hopefully I got these right, the page only really offered 3 different ways to enter them
into the new Date(HERE) and not for output - and one of them was ISO from the exercise above, so I used something else. */

const date3 = new Date("May 19 2002");
document.getElementById("date3").innerHTML = "This is a long date: " + date3;

//  getDate() Methods: https://www.w3schools.com/js/js_date_methods.asp
// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs
document.getElementById("get1").innerHTML = date.getFullYear();
document.getElementById("get2").innerHTML = date.getSeconds();
document.getElementById("get3").innerHTML = date.getDate();
document.getElementById("get4").innerHTML = date.getTime();


// set date methods: https://www.w3schools.com/js/js_date_methods_set.asp
// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs
const set = new Date();
set.setFullYear(1999);
document.getElementById("set1").innerHTML = set;

set.setHours(23);
document.getElementById("set2").innerHTML = set;

set.setMonth(11);
document.getElementById("set3").innerHTML = set;

set.setDate(31);
document.getElementById("set4").innerHTML = set;