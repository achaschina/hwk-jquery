
setInterval(function() {
    $(document).ready(function() {
      $('#carousel ul').animate({marginLeft: '-1000px'}, 2000, function() {
        $(this).find('li:last').after($(this).find('li:first'));
        $(this).css({marginLeft: 0});
      });
    });
}, 4000);
