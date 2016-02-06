$(document).ready(function(){
  $('.main-menu .dropdown').hover(function(){
    $(this).find('.dropdown-menu').toggleClass('drop');
  });
  $('.flexslider').flexslider({
    animation: 'slide',
    pauseOnHover: false,
    pauseOnAction: false,
    directionNav: false,
    controlNav: false,
  });
  repl = $(".flexslider img");
  repl.each(function(i, elem) {
    var img = $(elem);
    var div = $("<div />").css({
      background: "url(" + img.attr("src") + ") no-repeat"
    });
    img.replaceWith(div);
  });
});
