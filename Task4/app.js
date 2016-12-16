/*This plagin can truncate text*/
$.fn.trunc = function(number) {
  var str = $(this).text();
  var newStr = str.substr(0, number);

  $(this).hide();
  $(this).after('<p class="trunc"></p>');
  $('.trunc').text(newStr);
  $('.trunc').append('<span class="show">...</span>');

  //hide truncated element and show old (full) element
  $('.show').click(function () {
    $(this).parent().hide();
    $('.trunc').prev().show()
  });
}

$('p:eq(1)').trunc(100);