$(document).ready(function(){
  // let's test clicks on the wrapper...
  $(".modal_wrapper").click(function(e){
    // console.log(e.target.className);
    if( e.target.className == "modal_wrapper") {
      $("body").removeClass("modal-on");
    }
  });
  // $("body.modal-on").click(function(){
  //   console.log("body.modal-on...");
  // });
  $(".activate-modal").click(function(e){
    e.preventDefault(); // don't follow the link
    console.log( e );
    $("body").addClass("modal-on");
  });
  $(".close").click(function(e){
    e.preventDefault();
    $("body").removeClass("modal-on");
    if( $(this).hasClass("yes") ) {
      //show animated head
        $("img.circle").animate({
          right: "50px",
          top: "200px"
        },5000);

    } else if( $(this).hasClass("no") ) {  // clicked on "no" 
      window.location = "http://rubytuesday.com";
    }
  });
 
});