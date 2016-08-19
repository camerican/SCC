// var transition = 1;
var currentSlide = 1;
var intervalId;

function goToSlideNumber(number) {
  var selector = "#splash" + updateSlide(number); 
  var fadeDuration = 4000;
  $(".splash").stop().not(selector).fadeOut(fadeDuration);
  $(selector).fadeIn(fadeDuration);
}
function slideForward() {
  clearInterval(intervalId);
  intervalId = null;
  goToSlideNumber(currentSlide+1);
  startCarousel();
}
function slideBackward() {
  clearInterval(intervalId);
  intervalId = null;
  goToSlideNumber(currentSlide-1);
  startCarousel();
}
// update our global variable current_slide
// making sure that it doesn't go past the total number
function updateSlide(number) {
  var slideCount = document.getElementsByClassName("splash").length;
  if( number > slideCount ) {
    number = 1;
  } else if( number < 1 ) {
    number = slideCount;
  }
  currentSlide = number;
  return number;
}

// Start our slideshow using setInterval
// if intervalId is set, clear the interval
// and reset it using setInterval again...
function startCarousel() {
  if( intervalId ) {
    clearInterval(intervalId);
  }
  intervalId = setInterval(function(){
    goToSlideNumber(currentSlide+1);
  },5000);
  // intervalId = setInterval(goToSlideNumber,5000,currentSlide+1);
}

$(document).on("ready",function(){

  startCarousel();
  // intervalId = setInterval(function(){
  //   goToSlideNumber(currentSlide+1);
  // },5000);

  // jQuery carousel...  get the .splash
  // images to show in a cycle...
  // setInterval(function(){
  //   var fadeDuration = 4000;
  //   if( transition == 1 ) {
  //     // transition from 1 to 2
  //     $("#splash1").fadeOut(fadeDuration);
  //     $("#splash2").fadeIn(fadeDuration);
  //   } else if( transition == 2 ) {
  //     // transition from 2 to 3
  //     $("#splash2").fadeOut(fadeDuration);
  //     $("#splash3").fadeIn(fadeDuration);
  //   } else if( transition == 3 ) {
  //     // transition from 3 to 1
  //     $("#splash3").fadeOut(fadeDuration);
  //     $("#splash1").fadeIn(fadeDuration);
  //   }
  //   transition = transition + 1;
  //   if( transition > 3 ) {
  //     transition = 1;
  //   }
  // },5000);





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
    if( window.scrollY < 603 ) {
      $("header").css("background-color","rgba(50,25,25,0.75)");
    } else {
      $("header").css("background-color","rgba(0,0,0,1)");
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