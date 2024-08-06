window.addEventListener('DOMContentLoaded', () => {
  const drag = { target: null, mouseon: 0 };
  const box2 = document.querySelectorAll('.box');
  document.addEventListener('mousedown', (e) => {
    const t = e.target;
    if (t.matches('.item')) {
      drag.target = t;
      drag.mouseon = 1;
      drag.target.classList.add('dragging');
    }
  });
  document.addEventListener('dragover', (e) => {
    e.preventDefault();
    const t = e.target;
    box2.classList.toggle('over', t.closest('.box') && drag.mouseon);
  });
  document.addEventListener('mouseup', (e) => {
    drag.mouseon = 0;
    drag.target.classList.remove('dragging');
  });
  document.addEventListener('drop', (e) => {
    const t = e.target;
    if (t.matches('.box')) {
      t.appendChild(drag.target);
    }
    if (t.matches('.box .item')) {
      t.after(drag.target);
    }
    drag.target.classList.remove('dragging');
    drag.target = null;
    drag.mouseon = 0;
    box2.classList.remove('over');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // 監視対象の要素を取得
  const tierListElements = document.querySelectorAll('.tierlist');

  // 高さを監視するためのResizeObserverを作成
  const resizeObserver = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      // 高さが900pxを超えた場合、tierlist_highクラスを追加
      if (entry.contentRect.height > 730) {
        entry.target.classList.add('tierlist_high');
      } else {
        entry.target.classList.remove('tierlist_high');
      }
    });
  });

  // すべてのtierlist要素に対してResizeObserverを適用
  tierListElements.forEach((element) => {
    resizeObserver.observe(element);
  });
});
