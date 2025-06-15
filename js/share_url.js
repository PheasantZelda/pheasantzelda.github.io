function generateShareURL() {
  const tierData = [];
  document.querySelectorAll('.MU_box, .MU_boxx').forEach((box) => {
    const tier = {
      title: box.querySelector('.MU_title p').innerText,
      items: []
    };
    box
      .querySelectorAll('.MU_result .item, .MU_result .text_box')
      .forEach((item) => {
        if (item.classList.contains('item')) {
          tier.items.push({ type: 'img', src: item.src });
        } else if (item.classList.contains('text_box')) {
          tier.items.push({ type: 'text', text: item.innerText });
        }
      });
    tierData.push(tier);
  });
  const encoded = encodeURIComponent(JSON.stringify(tierData));
  const url = `${location.origin}${location.pathname}?tier=${encoded}`;
  prompt('このURLをコピーして共有できます', url);
}

// ページ読み込み時にURLから復元
window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(location.search);
  if (params.has('tier')) {
    try {
      const tierData = JSON.parse(decodeURIComponent(params.get('tier')));
      // loadTierListのtierData部分と同じ処理
      document.querySelectorAll('.MU_box, .MU_boxx').forEach((box, i) => {
        if (!tierData[i]) return;
        box.querySelector('.MU_title p').innerText = tierData[i].title;
        const resultBox = box.querySelector('.MU_result');
        resultBox.innerHTML = '';
        tierData[i].items.forEach((item) => {
          if (item.type === 'img') {
            const img = document.createElement('img');
            img.src = item.src;
            img.className = 'item';
            img.draggable = true;
            resultBox.appendChild(img);
          } else if (item.type === 'text') {
            const div = document.createElement('div');
            div.className = 'text_box';
            div.draggable = true;
            const p = document.createElement('p');
            p.className = 'text_content';
            p.contentEditable = true;
            p.innerText = item.text;
            div.appendChild(p);
            resultBox.appendChild(div);
          }
        });
      });
    } catch (e) {
      alert('共有データの読み込みに失敗しました');
    }
  }
});
