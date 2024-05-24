$(document).ready(function () {
  $('.extraction').change(function () {
    var extraction_val = $(this).val();

    if (extraction_val === '全て') {
      $('.item').show();
    } else {
      $('.item').hide();
      $('.' + extraction_val).show();
    }
  });

  // 初期状態
  $('.item').hide();
  $('.item.' + $('.extraction').val()).show();
});
