$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll >= 150) {
    $(".header").addClass("transparent-header");
  } else {
    $(".header").removeClass("transparent-header");
  }
});
if(window.outerWidth < 641 ) {
	$(document).ready(function(){
	$('#mobile-home-image').fadeIn(1000);
	$('#slogan-text').fadeIn(1000);
	$('#slogan-logo').fadeIn(1000);
	});
  
}


function toggleNav() {
  var box = $("#myLinks");
  box.toggleClass('gone');

}
