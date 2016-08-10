//Objective 1
// Let's include jQuery and this file
// from tictactoe/index.html
//okay, we did it

// Objective 2
// Next, let's make it so that 
// when we click on a .square,
// we change the player whose turn it
// is in #turn .player
$(document).on("ready",function(){
  $(".square").on("click", function(){
    /* update the board with the latest move*/
    console.log("Current square has value: " + this.innerHTML );

    //if this .square is blank, allow the move
    if( this.innerHTML.length == 0 ) {
      var current_player = $(".current_turn").html();
      /* mark the square with current_player */
      this.innerHTML = current_player;
      
      /* let's switch players */
      if( current_player == 'X' ) {
        $(".current_turn").html('O');
      } else {
        $(".current_turn").html('X');
      } 
      // reset the message
      $("#message").html("");
    } else { //else, notify the user
      $("#message").html('Sorry, square is full!');
    }

    //to do: check if a player has won

    //else, check if game is over by a draw
    if( checkFull() ) {
      $("#message").html("Sorry, the game has ended.");
      $("#board").fadeOut();
    }  


  });
});

function checkFull(){
  return $(".square").filter(function(x,y){
    return y.innerHTML.length > 0;
  }).length >= 9;
}
//$(document).ready()
  
//$(".square").click() // this is short hand
// Objective 3
// Next, let's mark the square with
// the move so that we can see who
// went there.

// Objective 4
// Let's figure out a way to prevent
// a user from going 