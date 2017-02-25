$(window).scroll(function() {
  ($(this).scrollTop() > 160)
    ? $('nav').addClass("sticky")
    : $('nav').removeClass("sticky");
});