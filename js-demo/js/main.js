/* Add Two numbers together, update the DOM */
function addNums(){
  num1 = document.getElementById('num1').value;
  num2 = document.getElementById('num2').value;
  document.getElementById('result').innerHTML = (parseInt(num1) + parseInt(num2));
  console.log('Your number is: ' + (parseInt(num1) + parseInt(num2)) );
}


function complexCalculation(x,y) {
  x = x + 4;
  console.log("x:" + x);
  y = x * 3 + y;
  console.log("y:" + y);
  return x / y;
}

complexCalculation(13, 2);
complexCalculation(2,4);

function someName( numberOne, numberTwo ) {
  return parseInt(numberOne) + 10 + parseInt(numberTwo);
}
console.log(someName(4,2));

function alertName(personsName) {
  return alert(personsName);
}





/* ToDo: write a function that takes any string as an argument and 
console logs the text entered */
function logMyString( someString ) {
  console.log( someString );
}
// var logMyString = function( someString ){
//   console.log( someString );
// }

logMyString("Hello there");

/* To Do: write a function that takes no arguments and prints 
 to the console */

function printDate() {
  console.log( Date() );
}

printDate();

 /* To Do: write a function that takes a number door, and 
 returns a prize, depending upon the door entered */
// try using an if/else block
// then, try using an array (of prizes) with an index

// function pickADoor( doorNumber ) {
//   var prize;
//   if( doorNumber == 1 ) {
//     prize = "A new car";
//   } else if ( doorNumber == 2 ) {
//     prize = "A fishing pole";
//   } else if ( doorNumber == 3 ) {
//     prize = "An old shoe";
//   } else { // error
//     prize = "Oops, you picked an invalid number";
//   }
//   return prize;
// }

function pickADoor( doorNumber ) {
  doorNumber = parseInt(doorNumber) - 1;
  var prizes = ["A new car","A fishing pole","Addn old shoe"];
  if( prizes[doorNumber] ) {
    return prizes[doorNumber];
  } else { // error
    return "Oops, you picked an invalid number";
  }
}

var myBestFriends = ["Joe","Susan","Mike"];

for (var x = 0; x < myBestFriends.length; x++) {
  console.log(myBestFriends[x] + " is my friend");

}


var bottles = 99;
var bottle_term;
while( bottles > 0 ) {
  if( bottles > 1 ) {
    bottle_term = bottles + " bottles";
  } else {
    bottle_term = "1 bottle";
  }
  console.log(bottle_term + " of beer on the wall, " + bottle_term + " of beer, take one down and pass it around, ");
  if( bottles == 1 ) {
    console.log( "No more beer on the wall...  Oh dear, time for a nap.");
  }
  bottles--;
}















// var bottles = 99;
// var bottle_term;
// while( bottles > 0 ) {
//   if( bottles > 1 ) {
//     bottle_term = bottles + " bottles";
//   } else {
//     bottle_term = bottles + " bottle";
//   }
//   console.log (bottle_term + " of beer on the wall, " + bottle_term + " of beer.  Take one down and pass it around, ");
//   if( bottles == 1 ) {
//     console.log("No more bottles of beer on the wall...");
//   }
//   bottles--;
// }




