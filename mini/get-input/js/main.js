// Wait for document to load
$(document).ready(function(){
  // Listen for a click on any
  // input of type "submit"
  $("#business").submit(function(e){
    e.preventDefault();
    var rating = parseInt($("input[name='rating']").val());
    var num_projects = parseInt( $("input[name='num-projects']").val());
    console.log("rating:", rating, typeof rating);
    console.log("num-projects:", num_projects, typeof num_projects );
    console.log( "number? ", isNaN(num_projects) );
  });
});