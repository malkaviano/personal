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
  }
); // end of document ready

$('.clickable').click(function(event) {
  // Materialize.toast(message, displayLength, className, completeCallback);
  Materialize.toast($(this).data('explanation'), 5000); // 4000 is the duration of the toast
  
});

})(jQuery); // end of jQuery name space