$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll >= 200) {
    $(".header").addClass("transparent-header");
  } else {
    $(".header").removeClass("transparent-header");
  }
});


function toggleNav() {
  var box = $("#myLinks");
  box.toggleClass('gone');
 
}
