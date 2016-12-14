var $start = $('[data-countdown-start]');
var timeStr = $start.attr('data-countdown-start');
var timeArray = timeStr.split(':');

var $cardDays = $('.days span');
var days = $cardDays.text(timeArray[0]);
var d = parseInt(days.text());

var $cardHours = $('.hours span');
var hours = $cardHours.text(timeArray[1]);
var h = parseInt(hours.text());

var $cardMinutes = $('.minutes span');
var minutes = $cardMinutes.text(timeArray[2]);
var m = parseInt(minutes.text());

var $cardSeconds = $('.seconds span');
var seconds = $cardSeconds.text(timeArray[3]);
var s = parseInt(seconds.text());
setInterval(startTimer, 1000);

function startTimer() {
  if (s == 0) {
    if (m == 0) {
      if (h == 0) {
        if (d == 0) {
          alert('Time is out!');
        }
        d--;
        $cardDays.text(d);
        h = 24;
      }
      h--;
      m = 60;
      if (h < 10) h = "0" + h;
      $cardHours.text(h);
    }
    m--;
    if (m < 10) m = "0" + m;
    s = 59;
    $cardMinutes.text(m);
  }
  else s--;
  if (s < 10) s = "0" + s;
  $cardSeconds.text(s);
}