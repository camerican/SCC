// alert("Hello World");

document.getElementsByTagName("h1")[0].innerHTML = "Hello World";


var multiArray = [
  [1,2,3],
  ["Red","Green","Blue"]
];


/* Part 1: assign 2 variables numeric values, output the sum to console */
var variable1 = 2;
var variable2 = 4;
console.log(variable1 + variable2);

/* Part 2: call an alert() on two strings concatenated together (+) */
//alert("Hello " + "World");

/* To Do: assign an object to a variable with the attributes firstName (string), lastName (string), favoriteNumber (number), and interests (Array of strings).  Then output each one to the console */
var aboutMe = {
  firstName: "Cam",
  lastName: "Crews",
  favoriteNumber: 4,
  interests: ["Soccer","Volleyball","Tennis","Watching HBO"]
};
console.log("You are: " + aboutMe.firstName + " " + aboutMe["lastName"]);
console.log("Your favorite Number is: " + aboutMe.favoriteNumber);

console.log("Your interests are:");
// for( var interest in aboutMe.interests ) {
//   console.log(interest);
// }
for( var i=0; i < aboutMe.interests.length; i++ ) {
  console.log(aboutMe.interests[i]);
}

// console.log(aboutMe.interests[0]);
// console.log(aboutMe.interests[1]);
// console.log(aboutMe.interests[2]);

/// Loops & Logic portion

//hard code a value:
// var myValue = 3;
//or dynamic prompt:
var myValue = parseInt(prompt("Please enter a value"));

/* To Do: write a conditional (if) to alert
the user if the value is less than 10, else 
let the user know their variable value, and say
it was greater than 10 */

if( myValue < 10 ) {
  alert("Value is less than 10");
} else { // myValue is >= 10
  alert("Your value " + myValue + " is greater than or equal to 10");
}

if( x < 10 ) {

} else if (x === 10) {

} else {

}

switch( x ) {
  case 10 :
    console.log("x is 10");
    break;
  default :
    console.log("x did not match any of the cases");
}


/* To Do: (if we have time) check to see whether
 a string stored in a value is equal to another 
 string */











