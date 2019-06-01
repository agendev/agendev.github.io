$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll >= 500) {
    $(".header").addClass("transparent-header");
    $(".nav-tabs").addClass("transparent");
    $(".nav-tab").addClass("transparent");
    $(".nav-tab-link").addClass("transparent");
    $("#header-logo-link").addClass("gone");
    $("#header-logo-link-green").removeClass("gone");
  } else {
    $(".header").removeClass("transparent-header");
    $(".nav-tabs").removeClass("transparent");
    $(".nav-tab").removeClass("transparent");
    $(".nav-tab-link").removeClass("transparent");
    $("#header-logo-link").removeClass("gone");
    $("#header-logo-link-green").addClass("gone");
  }
});
