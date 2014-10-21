$(document).ready(function() {

  $('.profile-icon').hover(
    function() {
      $(this).closest("div").addClass('popup');
    }, function() {
      $(this).closest("div").removeClass('popup');
    }
  );

});