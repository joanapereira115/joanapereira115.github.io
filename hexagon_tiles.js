$(document).ready(function() {
  $('.desc').hide();
  $('.hexagon').hover(
    function() {
      $(this).find('.desc').fadeIn('fast');
    }, 
    function() {
      $(this).find('.desc').fadeOut('fast');
    });
});