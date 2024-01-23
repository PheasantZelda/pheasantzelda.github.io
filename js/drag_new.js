// 修正箇所以外はそのまま引用させていただいています
// 最小限だと、以下をメインの.jsファイルに書き足すだけでOKです
// 初めにスマホの判定をしているので、書き足すなら冒頭とかが良いかも

// 以下、「Drag & Drop API を使うときにやっておいたほうがいいこと」の一部改変版

// iOS/Androidのときだけ、usePolyfill=trueになる
const usePolyfill = MobileDragDrop.polyfill({
  dragImageTranslateOverride:
    MobileDragDrop.scrollBehaviourDragImageTranslateOverride,
});

if (usePolyfill) {
  // https://github.com/timruffles/mobile-drag-drop#polyfill-requires-dragenter-listener
  // このpolyfill使用の場合 dragenter イベント時に Event.preventDefault() を呼ぶ必要がある
  document.addEventListener('dragenter', function (event) {
    event.preventDefault();
  });
  // https://github.com/timruffles/mobile-drag-drop/issues/77
  window.addEventListener('touchmove', function () {}, { passive: false });
}
