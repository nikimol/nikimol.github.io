$(document).ready(function() {
    var btn = $('#gototop');

  $(window).scroll(function() {
    if ($(window).scrollTop() > window.innerHeight) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
} );