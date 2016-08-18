$(document).on("ready",function(){
  $(window).on("scroll",function(){
    // Let's check to see whether we are
    // < 320px scrollY or greater...
    // we want to freeze if greater
    if( window.scrollY < 320 ) {
      // $("#social_media").css("position","absolute");
      // $("#social_media").css("top","400px");
      $("#social_media").removeClass("sticky");
    } else { //window.scrollY >= 320
      // $("#social_media").css("position", "fixed");
      // $("#social_media").css("top","80px");
      $("#social_media").addClass("sticky");
    }
  });
});