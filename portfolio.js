$('.project-square').click(function(event) {
  $(this).modal({
    fadeDuration: 250
  });
  return false;
});



function toggleNav() {
  var box = $("#myLinks");
  box.toggleClass('gone');

}
