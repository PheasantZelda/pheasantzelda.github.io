$(document).ready(function () {
  $('.extraction').change(function () {
    var extraction_val = $(this).val();

    if (extraction_val === '全て') {
      $('.item').show();
      $('.text_box').show();
    } else {
      $('.item').hide();
      $('.' + extraction_val).show();
    }
  });

  // 初期状態
  $('.item').hide();
  $('.text_box').hide();
  $('.item.' + $('.extraction').val()).show();
});
