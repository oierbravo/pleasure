(function($) {
  $( function() {
      // The DOM is ready!
      // The rest of the code goes here
      /*Do smth that doesn't require DOM to be ready*/
    });
  }(jQuery));
(function($) {
//MENU MOBILE
  $(document).ready(function () {
    $('.navbar-toggler.collapsed').click(function () {
      $('body').toggleClass('overflow-hidden');
    });
    $('.navbar-toggler-icon').click(function () {
      $('.navbar-toggler-icon').toggleClass('navbar-toggler-icon--cerrar');
    });
    $('.nav-link').click(function () {
      $('.navbar-toggler-icon').toggleClass('navbar-toggler-icon--cerrar');
    });

    $('.js-menu-collapse').click(function(){
      $('.navbar-collapse').collapse('hide');
      $('body').toggleClass('overflow-hidden');
    });
  });
}(jQuery));

// NAVBAR SCROLL
// $(window).scroll(function(e) {
//  var scroll = $(window).scrollTop();
//  if (scroll >= 150) {
//      $('.c-header').addClass("c-header--scroll");
//  } else {
//      $('.c-header').removeClass("c-header--scroll");
//  }
// });
