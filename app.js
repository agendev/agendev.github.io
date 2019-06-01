$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll >= 500) {
    $(".header").addClass("transparent-header");

  } else {
    $(".header").removeClass("transparent-header");

  }
});
