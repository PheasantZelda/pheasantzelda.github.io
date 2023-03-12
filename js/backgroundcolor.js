// 必要な要素の取得
const colorInputs = document.querySelectorAll('input[type="color"]');

// input全てにイベントリスナーを設定
colorInputs.forEach(input => input.addEventListener('change', setBGcolor));

// 背景色を変更する関数
function setBGcolor(event) {
  // カスタムデータ属性data-bgの値（数字）を取得
  const number = event.currentTarget.dataset.bg;

  // そのデータ属性をもつinputを取得
  const inputs = document.querySelectorAll(`[data-bg="${number}"]`);
  const input = document.querySelectorAll(`[data-bg="A${number}"]`);
  // input2つとものvalueを取得し、それぞれ変数に代入
  const [color1, color2] = [...inputs].map(input => input.value);
//  const color = [...input].map(input => input.value);
  // 同じ番号のdata-bg-areaをもつ要素を取得
  const Area = document.querySelector(`[data-bg-area="${number}"]`);
  const Area1 = document.querySelector(`[data-bg-area="A${number}"]`);

  // 取得されるvalueにはすでに#がついているので、↓の中で#を書いてはいけない
  Area.style.background = `linear-gradient(90deg, ${color1}, ${color2})`;
  Area1.style.background = `linear-gradient(90deg, ${color1}, ${color2})`;
//  Area.style.color = color;
}

function setFontColor1(e) {
  document.getElementById('STier').style.color = e;
  document.getElementById('STier1').style.color = e;
}

function setBGcolor1(e) {
  document.getElementById('STier').style.backgroundColor = e;
  document.getElementById('STier1').style.backgroundColor = e;
}

function setFontColor2(e) {
  document.getElementById('ATier').style.color = e;
  document.getElementById('ATier1').style.color = e;
}

function setBGcolor2(e) {
  document.getElementById('ATier').style.backgroundColor = e;
  document.getElementById('ATier1').style.backgroundColor = e;
}

function setFontColor3(e) {
  document.getElementById('BTier').style.color = e;
  document.getElementById('BTier1').style.color = e;
}

function setBGcolor3(e) {
  document.getElementById('BTier').style.backgroundColor = e;
  document.getElementById('BTier1').style.backgroundColor = e;
}

function setFontColor4(e) {
  document.getElementById('CTier').style.color = e;
  document.getElementById('CTier1').style.color = e;
}

function setBGcolor4(e) {
  document.getElementById('CTier').style.backgroundColor = e;
  document.getElementById('CTier1').style.backgroundColor = e;
}

function setFontColor5(e) {
  document.getElementById('DTier').style.color = e;
  document.getElementById('DTier1').style.color = e;
}

function setBGcolor5(e) {
  document.getElementById('DTier').style.backgroundColor = e;
  document.getElementById('DTier1').style.backgroundColor = e;
}

function setFontColor6(e) {
  document.getElementById('ETier').style.color = e;
  document.getElementById('ETier1').style.color = e;
}
function setBGcolor6(e) {
  document.getElementById('ETier').style.backgroundColor = e;
  document.getElementById('ETier1').style.backgroundColor = e;
}

function setFontColor7(e) {
  document.getElementById('FTier').style.color = e;
  document.getElementById('FTier1').style.color = e;
}
function setBGcolor7(e) {
  document.getElementById('FTier').style.backgroundColor = e;
  document.getElementById('FTier1').style.backgroundColor = e;
}

function setFontColor8(e) {
  document.getElementById('GTier').style.color = e;
  document.getElementById('GTier1').style.color = e;
}
function setBGcolor8(e) {
  document.getElementById('GTier').style.backgroundColor = e;
  document.getElementById('GTier1').style.backgroundColor = e;
}

function setFontColor9(e) {
  document.getElementById('HTier').style.color = e;
  document.getElementById('HTier1').style.color = e;
}
function setBGcolor9(e) {
  document.getElementById('HTier').style.backgroundColor = e;
  document.getElementById('HTier1').style.backgroundColor = e;
}

function setFontColor10(e) {
  document.getElementById('ITier').style.color = e;
  document.getElementById('ITier1').style.color = e;
}
function setBGcolor10(e) {
  document.getElementById('ITier').style.backgroundColor = e;
  document.getElementById('ITier1').style.backgroundColor = e;
}

//phone ver
function setFontColor11(e) {
  document.getElementById('STier_phone').style.color = e;
  document.getElementById('STier1_phone').style.color = e;
}

function setBGcolor11(e) {
  document.getElementById('STier_phone').style.backgroundColor = e;
  document.getElementById('STier1_phone').style.backgroundColor = e;
}

function setFontColor12(e) {
  document.getElementById('ATier_phone').style.color = e;
  document.getElementById('ATier1_phone').style.color = e;
}

function setBGcolor12(e) {
  document.getElementById('ATier_phone').style.backgroundColor = e;
  document.getElementById('ATier1_phone').style.backgroundColor = e;
}

function setFontColor13(e) {
  document.getElementById('BTier_phone').style.color = e;
  document.getElementById('BTier1_phone').style.color = e;
}

function setBGcolor13(e) {
  document.getElementById('BTier_phone').style.backgroundColor = e;
  document.getElementById('BTier1_phone').style.backgroundColor = e;
}

function setFontColor14(e) {
  document.getElementById('CTier_phone').style.color = e;
  document.getElementById('CTier1_phone').style.color = e;
}

function setBGcolor14(e) {
  document.getElementById('CTier_phone').style.backgroundColor = e;
  document.getElementById('CTier1_phone').style.backgroundColor = e;
}

function setFontColor15(e) {
  document.getElementById('DTier_phone').style.color = e;
  document.getElementById('DTier1_phone').style.color = e;
}

function setBGcolor15(e) {
  document.getElementById('DTier_phone').style.backgroundColor = e;
  document.getElementById('DTier1_phone').style.backgroundColor = e;
}

function setFontColor16(e) {
  document.getElementById('ETier_phone').style.color = e;
  document.getElementById('ETier1_phone').style.color = e;
}
function setBGcolor16(e) {
  document.getElementById('ETier_phone').style.backgroundColor = e;
  document.getElementById('ETier1_phone').style.backgroundColor = e;
}

function setFontColor17(e) {
  document.getElementById('FTier_phone').style.color = e;
  document.getElementById('FTier1_phone').style.color = e;
}
function setBGcolor17(e) {
  document.getElementById('FTier_phone').style.backgroundColor = e;
  document.getElementById('FTier1_phone').style.backgroundColor = e;
}

function setFontColor18(e) {
  document.getElementById('GTier_phone').style.color = e;
  document.getElementById('GTier1_phone').style.color = e;
}
function setBGcolor18(e) {
  document.getElementById('GTier_phone').style.backgroundColor = e;
  document.getElementById('GTier1_phone').style.backgroundColor = e;
}

function setFontColor19(e) {
  document.getElementById('HTier_phone').style.color = e;
  document.getElementById('HTier1_phone').style.color = e;
}
function setBGcolor19(e) {
  document.getElementById('HTier_phone').style.backgroundColor = e;
  document.getElementById('HTier1_phone').style.backgroundColor = e;
}

function setFontColor20(e) {
  document.getElementById('ITier_phone').style.color = e;
  document.getElementById('ITier1_phone').style.color = e;
}
function setBGcolor20(e) {
  document.getElementById('ITier_phone').style.backgroundColor = e;
  document.getElementById('ITier1_phone').style.backgroundColor = e;
}