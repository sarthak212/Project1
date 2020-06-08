/* eslint-disable prefer-arrow-callback, no-var, no-tabs */
$(document).ready(function (){
    // Add specific code to this theme here
    $(".carousel").swipe({

        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
      
          if (direction == 'left') $(this).carousel('next');
          if (direction == 'right') $(this).carousel('prev');
      
        },
        allowPageScroll:"vertical"
      
      });
});
