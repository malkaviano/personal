(function($){
  $(function(){

    $('.button-collapse').sideNav();

    $('.parallax').parallax();
    
    $('select').material_select();

    $('.body-container').on('click', '.close', function() {
      $(this).parent().fadeOut(300, function() {
          $(this).remove();
      });
  });
  }); // end of document ready

})(jQuery); // end of jQuery name space