$(document).ready(function () {
  $('.extraction').change(function () {
    var extraction_val = $(this).val();

    if (extraction_val === '全て') {
      // MU_result内以外の.item, .text_boxのみ表示
      $('.item:not(.MU_result .item)').show();
      $('.text_box:not(.MU_result .text_box)').show();
    } else {
      // MU_result内以外の.item, .text_boxのみ非表示
      $('.item:not(.MU_result .item)').hide();
      $('.text_box:not(.MU_result .text_box)').hide();
      $('.item:not(.MU_result .item).' + extraction_val).show();
      // ★ .text_boxの表示も追加
      $('.text_box:not(.MU_result .text_box).' + extraction_val).show();
    }
  });

  // 初期状態
  $('.item:not(.MU_result .item)').hide();
  $('.text_box:not(.MU_result .text_box)').hide();
  $('.item:not(.MU_result .item).' + $('.extraction').val()).show();
  // ★ 初期状態で.text_boxも表示
  $('.text_box:not(.MU_result .text_box).' + $('.extraction').val()).show();
});
