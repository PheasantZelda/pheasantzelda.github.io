function saveTierList() {
  const tierData = [];
  document.querySelectorAll('.MU_box').forEach((box) => {
    const titleElem = box.querySelector('.MU_title');
    const tier = {
      title: titleElem.querySelector('p').innerText,
      bg: titleElem.style.background,
      color: titleElem.style.color,
      id: box.id,
      className: box.className,
      items: []
    };
    box
      .querySelectorAll('.MU_result .item, .MU_result .text_box')
      .forEach((item) => {
        if (item.classList.contains('item')) {
          tier.items.push({
            type: 'img',
            src: item.src,
            alt: item.alt || '',
            class: item.className || ''
          });
        } else if (item.classList.contains('text_box')) {
          tier.items.push({ type: 'text', text: item.innerText });
        }
      });
    tierData.push(tier);
  });

  // Fighter_table内の保存
  const nonImageArea = document.getElementById('nonImageArea');
  const fighterItems = [];
  if (nonImageArea) {
    nonImageArea.querySelectorAll('.item, .text_box').forEach((item) => {
      if (item.classList.contains('item')) {
        fighterItems.push({
          type: 'img',
          src: item.src,
          alt: item.alt || '',
          class: item.className || ''
        });
      } else if (item.classList.contains('text_box')) {
        fighterItems.push({ type: 'text', text: item.innerText });
      }
    });
  }

  const saveObj = {
    tierData: tierData,
    fighterItems: fighterItems
  };

  try {
    localStorage.setItem('tierListData', JSON.stringify(saveObj));
    alert('保存しました');
  } catch (e) {
    alert('保存に失敗しました（画像が多すぎる可能性があります）');
  }
}

function loadTierList() {
  const data = localStorage.getItem('tierListData');
  if (!data) return alert('保存データがありません');
  const saveObj = JSON.parse(data);
  const tierData = saveObj.tierData || [];
  const fighterItems = saveObj.fighterItems || [];

  // 既存のMU_boxを全て削除
  document.querySelectorAll('.MU_box').forEach((box) => box.remove());

  // tierDataからMU_boxを再生成
  const table = document.querySelector('.MU_table');
  tierData.forEach((tier) => {
    // MU_box生成
    const ul = document.createElement('ul');
    ul.className = tier.className;
    ul.id = tier.id || '';
    ul.setAttribute('draggable', 'true');

    // タイトル
    const liTitle = document.createElement('li');
    liTitle.className = 'MU_title';
    liTitle.style.background = tier.bg || '';
    liTitle.style.color = tier.color || '';
    const p = document.createElement('p');
    p.contentEditable = 'plaintext-only';
    p.innerText = tier.title;
    liTitle.appendChild(p);

    // MU_result
    const liResult = document.createElement('li');
    liResult.className = 'MU_result box';
    // アイテム復元
    if (tier.items && Array.isArray(tier.items)) {
      tier.items.forEach((item) => {
        if (item.type === 'img') {
          const img = document.createElement('img');
          img.src = item.src;
          img.alt = item.alt || '';
          img.className = item.class || 'item';
          img.draggable = true;
          liResult.appendChild(img);
          // スマホ用タッチイベントも付与
          if (typeof setItemDraggablePhone === 'function') {
            setItemDraggablePhone(img);
          }
        } else if (item.type === 'text') {
          const div = document.createElement('div');
          div.className = 'text_box';
          div.draggable = true;
          const p = document.createElement('p');
          p.className = 'text_content';
          p.contentEditable = true;
          p.innerText = item.text;
          div.appendChild(p);
          liResult.appendChild(div);
        }
      });
    }

    ul.appendChild(liTitle);
    ul.appendChild(liResult);

    // ボタン群をMU_box内に追加
    const liCtrl = document.createElement('li');
    liCtrl.className = 'MU_box_controls';
    liCtrl.innerHTML = `
      <button class="mu-box-settings" title="設定">
        <img src="img/common/gear.png" alt="設定">
      </button>
    `;
    ul.appendChild(liCtrl);

    table.appendChild(ul);
    if (typeof setMUBoxDraggable === 'function') setMUBoxDraggable([ul]);
  });

  // Fighter_table内の復元
  const nonImageArea = document.getElementById('nonImageArea');
  if (nonImageArea) {
    // 既存のitem/text_boxを削除
    nonImageArea
      .querySelectorAll('.item, .text_box')
      .forEach((el) => el.remove());
    // 復元
    fighterItems.forEach((item) => {
      if (item.type === 'img') {
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt || '';
        img.className = item.class || 'item';
        img.draggable = true;
        nonImageArea.appendChild(img);
        if (typeof setItemDraggablePhone === 'function') {
          setItemDraggablePhone(img);
        }
      } else if (item.type === 'text') {
        const div = document.createElement('div');
        div.className = 'text_box';
        div.draggable = true;
        const p = document.createElement('p');
        p.className = 'text_content';
        p.contentEditable = true;
        p.innerText = item.text;
        div.appendChild(p);
        nonImageArea.appendChild(div);
      }
    });
  }

  // ★ セレクトボックスを「基本」に戻す
  const extractionSelect = document.querySelector('.extraction');
  if (extractionSelect) {
    extractionSelect.value = 'initial';
    // changeイベントを発火して表示を更新
    if (typeof $ === 'function') {
      $(extractionSelect).trigger('change');
    } else if ('createEvent' in document) {
      var evt = document.createEvent('HTMLEvents');
      evt.initEvent('change', false, true);
      extractionSelect.dispatchEvent(evt);
    } else {
      extractionSelect.dispatchEvent(new Event('change'));
    }
  }

  alert('復元しました');
}
