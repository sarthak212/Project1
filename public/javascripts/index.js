/* eslint-disable prefer-arrow-callback, no-var, no-tabs */
$(document).ready(function () {
  // Add specific code to this theme here
  $(".carousel").swipe({

    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {

      if (direction == 'left') $(this).carousel('next');
      if (direction == 'right') $(this).carousel('prev');

    },
    allowPageScroll: "vertical"
  });

  //Product Details image slider
  $('#etalage').etalage({
    smallthumbs_position: 'left',
    thumb_image_width: 320,
    thumb_image_height: 420,
    source_image_width: 900,
    source_image_height: 1100
  });

  $('#etalage1').etalage({
    thumb_image_width: 350,
    thumb_image_height: 400,
  });


  function addBlur() {
    $('#background').addClass('blur');
    $('#content').addClass('blur');
  }

  function removeBlur() {
    $('#background').removeClass('blur');
    $('#content').removeClass('blur');
  }


  // Account Page Popups
  $('#editDetails').click(function () {
    $('#detailsForm').fadeToggle();
    addBlur();
  });
  $('#editAddress').click(function () {
    $('#addressForm').fadeToggle();
    addBlur();
  });
  $('#orderDetails').click(function () {
    $('#orderForm').fadeToggle();
    addBlur();
  });
  $('#passwordDetails').click(function () {
    $('#passwordForm').fadeToggle();
    addBlur();
  });
  $('#newsletterDetails').click(function () {
    $('#newsletterForm').fadeToggle();
    addBlur();
  });
  $(document).mouseup(function (e) {
    var container = $("#addressForm, #orderForm, #passwordForm, #newsletterForm, #detailsForm");

    if (!container.is(e.target) // if the target of the click isn't the container...
      &&
      container.has(e.target).length === 0) // ... nor a descendant of the container
    {
      container.fadeOut();
      removeBlur();
    }
    $('.close-button').click(function (e) {
      container.fadeOut();
      removeBlur();
      e.stopPropagation();
    });

  });
});