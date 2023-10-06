const timeCount = document.querySelector('.timeCount');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

//クリックされた時の時間（マイクロ秒）
var startTime;

//経過時刻（マイクロ秒）この値が秒、分として表示される
var elapsedTime = 0;

// setinterval を止めるための変数。clearTimeoutの引数へ
var timerId;

//過去の経過時間を記録するための変数。
var timeToadd = 0;

function updateTimeText() {
  //1分は60000マイクロ秒。60000で割ることにより、分が計算される。
  var m = Math.floor(elapsedTime / 60000);

  //1分は60000マイクロ秒。60000ミリ秒で割り、その余りを1000で割れば秒が計算される。
  var s = Math.floor((elapsedTime % 60000) / 1000);

  //1秒は1000マイクロ秒。 1000ミリ秒で割った数の余りがマイクロ秒
  var ms = elapsedTime % 1000;

  m = ('0' + m).slice(-2); //文字列の末尾2桁を表示
  s = ('0' + s).slice(-2); //文字列の末尾2桁を表示
  ms = ('00' + ms).slice(-3); //文字列の末尾3桁を表示

  //HTMLのid="timer"部分に表示させる
  timeCount.textContent = m + ':' + s + ':' + ms;
}

//何度も使うための関数
function countUp() {
  // clearIntervalでストップさせるための変数
  timerId = setTimeout(function () {
    //経過時刻はストップした時刻からスタートした時刻を引く
    //2回目以降はtimeToaddが追加される
    elapsedTime = Date.now() - startTime + timeToadd;
    updateTimeText();
    //countUp関数自身を呼びだし10ミリ秒毎に計算をする
    countUp();
    //10ミリ秒ごとに計算が繰り返される
  }, 10);
}

function startTimer() {
  startTime = Date.now();
  countUp();
  //スタートボタンを押せなくする
  startBtn.setAttribute('disabled', true);
  //ストップボタンとリセットボタンを押せるようにする
  stopBtn.removeAttribute('disabled');
  resetBtn.removeAttribute('disabled');
}

function stopTimer() {
  //タイマーをストップさせる
  clearInterval(timerId);
  //過去の経過時間。2回目以降この値が加算される。
  timeToadd += Date.now() - startTime;
  //ストップボタンを押せないようにする
  stopBtn.setAttribute('disabled', true);
  //スタートボタンを押せるようにする
  startBtn.removeAttribute('disabled');
}

function resetTimer() {
  //タイマーをストップさせる
  clearInterval(timerId);
  //経過時刻を0に
  elapsedTime = 0;
  //過去の経過時刻を0に
  timeToadd = 0;
  //表示を0にする
  updateTimeText();
  //スタートボタンを押せるようにする
  startBtn.removeAttribute('disabled');
  //ストップボタンとリセットボタンを押せないようにする
  stopBtn.setAttribute('disabled', true);
  resetBtn.setAttribute('disabled', true);
}
