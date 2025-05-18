//----------------------------------------
// JS の使用範囲
//
// ページがリロードされる度に
// 15枚のパネルの配置をランダムで並び替えるためのプログラムです。
//
// HTML内にある
// <label id="panelGraphic" for="panelMove-●●"></label>
// （全15個）に対し、class名「panelPosition--◯◯」が追加されます。
// ※「◯◯」には1〜15の数値が入ります。
//----------------------------------------

// パネル要素をすべて取得
const panel = document.getElementsByClassName('panelGraphic');
// ------------------------
// ユーティリティ関数
// ------------------------

// シャッフル用の配列をランダムに並び替える関数（Fisher–Yatesアルゴリズム）
function shuffle(arr) {
  const array = arr.slice();
  for (let i = array.length - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}

// ------------------------
// パズルの解ける判定
// ------------------------

// 解けるかどうか判定する関数（空白は16で表現）
// 4×4パズルの場合、空白のある行（下から数える）と転倒数の合計が奇数なら解ける
function isSolvable(puzzle) {
  let inversions = 0;
  for (let i = 0; i < puzzle.length; i++) {
    for (let j = i + 1; j < puzzle.length; j++) {
      if (puzzle[i] !== 16 && puzzle[j] !== 16 && puzzle[i] > puzzle[j]) {
        inversions++;
      }
    }
  }
  const blankRowFromBottom = 4 - Math.floor(puzzle.indexOf(16) / 4);
  return (inversions + blankRowFromBottom) % 2 === 1;
}

// ------------------------
// 解けるパズルの生成
// ------------------------

// 解けるならびになるようにするため、乱数で1度シャッフルした後、
// unsolvable なら空白(16)以外の最初の2タイルをスワップして転倒数の偶奇を変更します。
function generateSolvableShuffle() {
  let shuffled, filtered;
  do {
    // 1～16 の配列をシャッフル（16は空白扱い）
    shuffled = shuffle([...Array(16).keys()].map((x) => x + 1));

    // unsolvable なら、空白(16)を交換対象にしない2つの数値をスワップして偶奇を反転
    if (!isSolvable(shuffled)) {
      let firstNonBlank = -1,
        secondNonBlank = -1;
      for (let i = 0; i < shuffled.length; i++) {
        if (shuffled[i] !== 16) {
          if (firstNonBlank === -1) {
            firstNonBlank = i;
          } else {
            secondNonBlank = i;
            break;
          }
        }
      }
      if (firstNonBlank !== -1 && secondNonBlank !== -1) {
        [shuffled[firstNonBlank], shuffled[secondNonBlank]] = [
          shuffled[secondNonBlank],
          shuffled[firstNonBlank]
        ];
      }
    }

    // 15枚のパネル用に空白(16)は除外
    filtered = shuffled.filter((n) => n !== 16);
    // filteredに16を加えてisSolvableで再チェック
  } while (!isSolvable([...filtered, 16]));

  return filtered;
}

// ------------------------
// パネルへの適用処理
// ------------------------

const shuffle_num = generateSolvableShuffle();

// 下記の for ループは重複していたため、1回だけ実行します。
for (let i = 0; i < panel.length; i++) {
  panel[i].classList.add('panelPosition--' + shuffle_num[i]);
}

// ------------------------
// 以下、背景画像設定など（必要に応じて）
// ------------------------

// 背景画像のパス配列
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
  '86.ソラ.png'
  // 追加の画像パスがあればここに記述
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

// 以下はデバッグ用の関数です。必要でなければコメントアウトしてください。

// 現在のパズル状態を取得する関数
function getCurrentPuzzle() {
  const elements = document.getElementsByClassName('panelGraphic');
  const puzzle = [];
  for (let i = 0; i < elements.length; i++) {
    const classList = Array.from(elements[i].classList);
    const positionClass = classList.find((cls) =>
      cls.startsWith('panelPosition--')
    );
    if (positionClass) {
      const value = parseInt(positionClass.replace('panelPosition--', ''), 10);
      puzzle.push(value);
    }
  }
  if (puzzle.length === 15) {
    puzzle.push(16); // 最後に空白があると仮定
  }
  return puzzle;
}

// パズルが解けるかどうかをチェックする関数
function checkSolvable() {
  const current = getCurrentPuzzle();
  console.log('Current puzzle:', current); // デバッグ出力
  const result = isSolvable(current);
  const messageElement = document.getElementById('solvable-message');
  if (result) {
    messageElement.textContent = '✅ このパズルは解けます！';
    messageElement.style.color = 'green';
  } else {
    messageElement.textContent =
      '❌ このパズルは解けません…再生成してください。';
    messageElement.style.color = 'red';
  }
}

// ページロード時の処理
window.onload = function () {
  setRandomBackground();
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
};
