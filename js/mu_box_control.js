document.addEventListener('input', function (e) {
  // 色変更
  if (e.target.classList.contains('font_color')) {
    const box = e.target.closest('.MU_box');
    box.querySelector('.MU_title').style.color = e.target.value;
  }
  if (
    e.target.classList.contains('bg_color1') ||
    e.target.classList.contains('bg_color2')
  ) {
    const box = e.target.closest('.MU_box');
    const color1 = box.querySelector('.bg_color1').value;
    const color2 = box.querySelector('.bg_color2').value;
    box.querySelector('.MU_title').style.background =
      `linear-gradient(90deg, ${color1}, ${color2})`;
  }
});

// 行追加・削除・設定
document.addEventListener('click', function (e) {
  // MU_box内のボタンのみを対象にする
  if (
    e.target.closest('.MU_box_controls') &&
    (e.target.classList.contains('add-mu-box') ||
      e.target.classList.contains('remove-mu-box') ||
      e.target.classList.contains('mu-box-settings') ||
      e.target.closest('.mu-box-settings') !== null) // ← imgクリックにも対応
  ) {
    const box = e.target.closest('.MU_box');
    if (!box) return;

    // 設定
    if (
      e.target.classList.contains('mu-box-settings') ||
      e.target.closest('.mu-box-settings') !== null // ← imgクリックにも対応
    ) {
      // 既存のポップアップがあれば消す
      document
        .querySelectorAll('.mu-settings-popup')
        .forEach((p) => p.remove());

      const title = box.querySelector('.MU_title');
      const fontColor = rgb2hex(title.style.color) || '#ffffff';
      let bg1 = '#3d3c3c',
        bg2 = '#6b696e';
      const bgMatch = title.style.background.match(
        /linear-gradient\(90deg, (#[0-9a-fA-F]{6}|rgb\([^)]+\)), (#[0-9a-fA-F]{6}|rgb\([^)]+\))/
      );
      if (bgMatch) {
        bg1 = rgb2hex(bgMatch[1]);
        bg2 = rgb2hex(bgMatch[2]);
      }

      // ポップアップ生成
      const popup = document.createElement('div');
      popup.className = 'mu-settings-popup';
      popup.style.position = 'fixed';
      popup.style.top = '50%';
      popup.style.left = '50%';
      popup.style.transform = 'translate(-50%, -50%)';
      popup.style.zIndex = 1000;
      popup.style.background = '#222';
      popup.style.padding = '12px 16px';
      popup.style.borderRadius = '8px';
      popup.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
      popup.style.display = 'flex';
      popup.style.flexDirection = 'column';
      popup.style.gap = '8px';

      popup.innerHTML = `
        <label style="color:#fff;">文字色 <input type="color" class="color_input font_color" value="${fontColor}"></label>
        <label style="color:#fff;">背景１<input type="color" class="color_input bg_color1" value="${bg1}"></label>
        <label style="color:#fff;">背景２ <input type="color" class="color_input bg_color2" value="${bg2}"></label>
        <div style="display:flex; gap:4px; margin-top:8px;">
          <button class="row-up" title="上に移動">∧</button>
          <button class="row-down" title="下に移動">∨</button>
          <button class="add-mu-box" title="行を追加">＋</button>
          <button class="remove-mu-box" title="行を削除">－</button>
        </div>
        <button class="popup-close" style="margin-top:8px;">閉じる</button>
      `;

      // ボタンの位置にポップアップを表示
      // const rect = e.target.getBoundingClientRect();
      // popup.style.position = 'absolute';
      // popup.style.top = `${window.scrollY + rect.bottom + 4}px`; // ボタンの下
      // popup.style.left = `${window.scrollX + rect.left}px`; // ボタンの左端

      document.body.appendChild(popup);

      // 閉じるボタン
      popup.querySelector('.popup-close').onclick = () => popup.remove();

      // 色変更イベント
      popup.querySelector('.font_color').oninput = function () {
        title.style.color = this.value;
      };
      popup.querySelector('.bg_color1').oninput = function () {
        title.style.background = `linear-gradient(90deg, ${this.value}, ${popup.querySelector('.bg_color2').value})`;
      };
      popup.querySelector('.bg_color2').oninput = function () {
        title.style.background = `linear-gradient(90deg, ${popup.querySelector('.bg_color1').value}, ${this.value})`;
      };

      // 上下移動・追加・削除
      popup.querySelector('.row-up').onclick = function () {
        const prev = box.previousElementSibling;
        if (prev && prev.classList.contains('MU_box')) {
          box.parentNode.insertBefore(box, prev);
        }
        popup.remove();
      };
      popup.querySelector('.row-down').onclick = function () {
        const next = box.nextElementSibling;
        if (next && next.classList.contains('MU_box')) {
          box.parentNode.insertBefore(next, box);
        }
        popup.remove();
      };
      popup.querySelector('.add-mu-box').onclick = function () {
        const clone = box.cloneNode(true);
        // 画像を削除
        clone
          .querySelectorAll('.MU_result .item')
          .forEach((img) => img.remove());
        // text_boxを削除
        clone
          .querySelectorAll('.MU_result .text_box')
          .forEach((div) => div.remove());
        // デフォルトの背景・フォント色を設定
        const title = clone.querySelector('.MU_title');
        title.style.background = 'linear-gradient(90deg, #3d3c3c, #6b696e)';
        title.style.color = '#ffffff';
        clone.querySelector('.MU_title p').textContent = 'New Tier';
        box.after(clone);
        setMUBoxDraggable([clone]);
        // スマホ用タッチイベントも付与
        clone.querySelectorAll('.MU_result .item').forEach((img) => {
          if (typeof setItemDraggablePhone === 'function') {
            setItemDraggablePhone(img);
          }
        });
        // 新しいMU_resultにもドロップイベントを付与
        const newMUResult = clone.querySelector('.MU_result');
        if (newMUResult && typeof handleDrop === 'function') {
          handleDrop(newMUResult);
        }
        popup.remove();
      };
      popup.querySelector('.remove-mu-box').onclick = function () {
        const boxes = Array.from(
          document.querySelectorAll('.MU_table .MU_box')
        );
        if (boxes.length > 1) {
          if (window.confirm('この行を削除しますか？')) {
            box.remove();
            popup.remove();
          }
        }
      };
    }
  } else {
    // ポップアップ外クリックで閉じる
    if (
      !e.target.closest('.mu-settings-popup') &&
      !e.target.classList.contains('mu-box-settings')
    ) {
      document
        .querySelectorAll('.mu-settings-popup')
        .forEach((p) => p.remove());
    }
  }
});

// rgb→hex変換
function rgb2hex(rgb) {
  if (!rgb) return '';
  if (rgb.startsWith('#')) return rgb;
  const result = rgb.match(/\d+/g);
  if (!result) return '';
  return (
    '#' +
    result
      .slice(0, 3)
      .map((x) => ('0' + parseInt(x).toString(16)).slice(-2))
      .join('')
  );
}
