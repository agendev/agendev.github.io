$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll >= 250) {
    $(".header").addClass("transparent-header");
  } else {
    $(".header").removeClass("transparent-header");
  }
});


function toggleNav() {
   var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
    
  } else {
    x.style.display = "block";
    
  }
  

}
