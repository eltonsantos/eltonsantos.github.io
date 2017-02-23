$(window).scroll(function() {
  if ($(this).scrollTop() > 100){  
    $('header').addClass("sticky");
    $('nav').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
    $('nav').removeClass("sticky");
  }
});