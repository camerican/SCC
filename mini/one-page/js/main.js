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

  $(".link").on("click",function(e){
    e.preventDefault();
      var scrollTime = 500;
      // link_home -> #section1
      // link_about -> #section2
      // link_contact -> #section3
      if( $(this).hasClass("link_home") ) {
        $.scrollTo("#section1",scrollTime,{
          // offset: { top: -100 }
          offset: -100
        });
      } else if( $(this).hasClass("link_about") ) {
        $.scrollTo("#section2",scrollTime);
      } else if( $(this).hasClass("link_contact") ) {
        $.scrollTo("#section3",scrollTime);
      }
  });


}); // end 