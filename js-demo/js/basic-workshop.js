//Check each element's properties
//for( attribute in document.getElementsByTagName("h1")[0] ) { console.log( attribute ); }

// document.getElementsByTagName("td");
// document.getElementsByTagName("td")[5];
// document.getElementsByTagName("tr")[3].getElementsByTagName("td");
// document.getElementsByTagName("tr")[3].getElementsByTagName("td")[1];

var global_name = "Cam";
var global_github_account = "camerican";

/* return the number of repos this user
   has */
function countRepositories( account ) {
  // check to see if account is defined
  if( typeof account == "undefined" ) {
    //if not, let's set it to the global default
    account = global_github_account;
  }
  // we have a local variable here called repos
  // that is storing all the repositories in
  // our system...  because it's local, noone
  // outside the function can see it
  var repos = {
    "camerican": ["SCC","example_form"],
    "someoneelse": ["SCC"]
  }
  // we want to return the number of repos that
  // a given user has...  let's make sure we can
  // find the user...
  if( typeof repos[account] != "undefined" ) {
    // if we find them in the repos Object, let's
    // return the number of repos
    return repos[account].length;
  } else {
    // else, we weren't able to find them, so they
    // by definition have 0 repos
    return 0;
  }
}

// Exercise on Scopes

//declare a variable in the global scope
var default_weight = 3;

function prioritize( weight ) {
  if( typeof weight === "undefined" ) {
    weight = default_weight;
  }
  var item_value = 4;
  return weight + item_value;
}

console.log( prioritize() );


// LightBox controls....
$(document).on("ready",function(){
  $("#lightbox button").on("click",function(){
    //we want to close the lightbox
    $("body").removeClass("overlay");
    // $("#lightbox").slideUp(4000,function(){
    //   $("body").removeClass("overlay");
    // });
  });

  $("h1").on("click",function(){
    $("body").addClass("overlay");
  });
});







