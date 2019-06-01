$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll >= 500) {
    $(".header").addClass("transparent");
    $(".nav-tabs").addClass("transparent");
    $(".nav-tab").addClass("transparent");
    $(".nav-tab-link").addClass("transparent");
    $("#header-logo-link").addClass("gone");
  } else {
    $(".header").removeClass("transparent");
    $(".nav-tabs").removeClass("transparent");
    $(".nav-tab").removeClass("transparent");
    $(".nav-tab-link").removeClass("transparent");
    $("#header-logo-link").removeClass("gone");
  }
});
