$(window).scroll(function() {
  if ($(this).scrollTop() > 160){  
    $('nav').addClass("sticky");
  }
  else{
    $('nav').removeClass("sticky");
  }
});