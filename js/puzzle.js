//----------------------------------------
//  JSの使用範囲
//
//  ページがリロードされる度に
//  15枚のパネルの配置をランダムで並び替えるためにのみ、下記のJSプログラムを実装しています。
//
//  HTMLファイル内の
//  <label id="panelGraphic" for="panelMove-●●"></label>
//  の要素（全15個）に「panelPosition--◯◯」というclass名を付けることで
//  下記のJSがなくても動作しますが、15枚のパネルの初期配置は常に同じになります。
//
//  ※「panelPosition--◯◯」の「◯◯」には1〜15の数値を入れます。
//----------------------------------------

//  パネル要素をすべて取得
const panel = document.getElementsByClassName('panelGraphic');
//  並び替え用の数値を配列化
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
//  配列の中身をシャッフルする関数
function shuffle(arrays) {
  const array = arrays.slice();
  for (let i = array.length - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}
//  シャッフル後の数値配列を変数に格納
const shuffle_num = shuffle(numbers);
//  ループ処理で15枚のパネル要素にランダムで配置用の数値を振り分け
for (let i = 0; i < panel.length; i++) {
  panel[i].classList.add('panelPosition--' + shuffle_num[i]);
}

// 背景画像のパスの配列
var backgrounds = [
  '01.マリオ.png',
  '02.ドンキーコング.png',
  '03.リンク.png',
  '04.サムス.png',
  '05.ダークサムス.png',
  '06.ヨッシー.png',
  '07.カービィ.png',
  '08.フォックス.png',
  '09.ピカチュウ.png',
  '10.ルイージ.png',
  '11.ネス.png',
  '12.キャプテン・ファルコン.png',
  '13.プリン.png',
  '14.ピーチ.png',
  '15.デイジー.png',
  '16.クッパ.png',
  '17.アイスクライマー.png',
  '18.シーク.png',
  '19.ゼルダ.png',
  '20.ドクターマリオ.png',
  '21.ピチュー.png',
  '22.ファルコ.png',
  '23.マルス.png',
  '24.ルキナ.png',
  '25.こどもリンク.png',
  '26.ガノンドロフ.png',
  '27.ミュウツー.png',
  '28.ロイ.png',
  '29.クロム.png',
  '30.Mr.ゲーム&ウォッチ.png',
  '31.メタナイト.png',
  '32.ピット.png',
  '33.ブラックピット.png',
  '34.ゼロスーツサムス.png',
  '35.ワリオ.png',
  '36.スネーク.png',
  '37.アイク.png',
  '38.ポケモントレーナー.png',
  '39.ディディーコング.png',
  '40.リュカ.png',
  '41.ソニック.png',
  '42.デデデ.png',
  '43.ピクミン＆オリマー.png',
  '44.ルカリオ.png',
  '45.ロボット.png',
  '46.トゥーンリンク.png',
  '47.ウルフ.png',
  '48.むらびと.png',
  '49.ロックマン.png',
  '50.Wii Fit トレーナー.png',
  '51.ロゼッタ＆チコ.png',
  '52.リトルマック.png',
  '53.ゲッコウガ.png',
  '54.格闘Mii.png',
  '55.剣術Mii.png',
  '56.射撃Mii.png',
  '57.パルテナ.png',
  '58.パックマン.png',
  '59.ルフレ.png',
  '60.シュルク.png',
  '61.クッパJr..png',
  '62.ダックハント.png',
  '63.リュウ.png',
  '64.ケン.png',
  '65.クラウド.png',
  '66.カムイ.png',
  '67.ベヨネッタ.png',
  '68.インクリング.png',
  '69.リドリー.png',
  '70.シモン.png',
  '71.リヒター.png',
  '72.キングクルール.png',
  '73.しずえ.png',
  '74.ガオガエン.png',
  '75.パックンフラワー.png',
  '76.ジョーカー.png',
  '77.勇者.png',
  '78.バンジョー＆カズーイ.png',
  '79.テリー.png',
  '80.ベレトス.png',
  '81.ミェンミェン.png',
  '82.スティーブ.png',
  '83.セフィロス.png',
  '84.ホムヒカ.png',
  '85.カズヤ.png',
  '86.ソラ.png',
  // 追加の画像パスをここに記述
];
// ランダムなインデックスを生成する関数
function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

// ランダムな背景画像を設定する関数
function setRandomBackground() {
  var randomIndex = getRandomIndex(backgrounds.length);
  var randomImage = backgrounds[randomIndex];
  var elements = document.querySelectorAll('.panelGraphic');
  elements.forEach(function (element) {
    element.style.backgroundImage = "url('./img/fighter3/" + randomImage + "')";
  });
}
// ページのロードが完了したら全ての画像にランダムな背景画像を設定する
window.onload = function () {
  setRandomBackground();
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
};
