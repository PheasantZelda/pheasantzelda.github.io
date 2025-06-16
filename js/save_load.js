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
            alt: item.alt,
            class: item.className
          });
        } else if (item.classList.contains('text_box')) {
          tier.items.push({ type: 'text', text: item.innerText });
        }
      });
    tierData.push(tier);
  });
  localStorage.setItem('tierListData', JSON.stringify(tierData));
  alert('保存しました');
}

function loadTierList() {
  const data = localStorage.getItem('tierListData');
  if (!data) return alert('保存データがありません');
  const tierData = JSON.parse(data);

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
          img.alt = item.alt;
          img.className = item.class;
          img.draggable = true;
          liResult.appendChild(img);
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
      <button class="mu-box-settings" title="設定">⚙️</button>
    `;
    ul.appendChild(liCtrl);

    table.appendChild(ul);
    if (typeof setMUBoxDraggable === 'function') setMUBoxDraggable([ul]);
  });
  alert('復元しました');
}
