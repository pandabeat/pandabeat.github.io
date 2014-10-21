$(document).ready(function() {

  $('#panda').on('click', function() {
  	$(this).toggleClass('clicked');
  });

  $('#profile-photography').hover(
    function() {
      $(this).find('img').addClass('pop');
    }, function() {
      $(this).find('img').removeClass('pop');
    }
  );

  $('#profile-dj').hover(
    function() {
      $(this).find('img').addClass('pop');
    }, function() {
      $(this).find('img').removeClass('pop');
    }
  );

  $('#profile-mechanic').hover(
    function() {
      $(this).find('img').addClass('pop');
    }, function() {
      $(this).find('img').removeClass('pop');
    }
  );

});