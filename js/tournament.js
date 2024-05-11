var moreNum = 100;
$('.sorttbl tr:nth-child(n + ' + (moreNum + 1) + ')').addClass('hidden');
$('.button').on('click', function () {
  $('.sorttbl tr.hidden').slice(0, moreNum).removeClass('hidden');
  if ($('.sorttbl tr.hidden').length == 0) {
    $('.button').fadeOut();
  }
});

$('.sorttbl tr.is-hidden').slice(0, moreNum).removeClass('hidden');

if ($('.sorttbl tr.hidden').length == 0) {
  $('.button').fadeOut();
}
