$(document).ready(function() {
  $("#closeMenu").click(function() {
      $('#mobile-menu').removeClass("d-flex");
      $('#mobile-menu').addClass("d-none");
  });
  $("#openMenu").click(function() {
    $('#mobile-menu').addClass("d-flex");
    $('#mobile-menu').removeClass("d-none");
});
});
