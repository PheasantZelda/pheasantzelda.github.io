document.addEventListener('DOMContentLoaded', () => {
  initDynamicCharaPage();
});

async function initDynamicCharaPage() {
  // URLから現在のキャラIDを取得 (例: "01.mario.html" -> "01")
  const pathname = window.location.pathname;
  const filename = pathname.split('/').pop();
  const match = filename.match(/^(\d+)\./);
  if (!match) return;
  const mainId = match[1];

  // レート帯の表示名を定義
  const RATE_LABELS = {
    '1500-3000': '1500 以上',
    '1000-1500': '1000-1500',
    '1500-1700': '1500-1700',
    '1700-3000': '1700 以上'
  };

  const updateRateDisplay = (tier) => {
    const label = RATE_LABELS[tier] || '';
    // スマホの場合はテキストを短くする
    const isMobile = window.innerWidth <= 840;
    const periodText = isMobile
      ? '対象: 15.5-34期 レート: '
      : '対象期間: 15.5期 (2021.8) - 34期 (2026.05) レート帯: ';

    const targetSections = ['相性表', 'サブ適正表', '戦績詳細'];
    targetSections.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;

      let nextEl = section.nextElementSibling;
      while (nextEl) {
        if (id !== '戦績詳細' && nextEl.classList.contains('tierlist')) {
          let infoEl = nextEl.querySelector('.current-rate-info');
          if (!infoEl) {
            infoEl = document.createElement('p');
            infoEl.className = 'current-rate-info';
            nextEl.appendChild(infoEl);
          }
          infoEl.textContent = periodText + label;
          break;
        } else if (id === '戦績詳細' && nextEl.classList.contains('example')) {
          let infoEl = nextEl.querySelector('.current-rate-info');
          const tableEl = nextEl.querySelector('table');
          if (!infoEl) {
            infoEl = document.createElement('p');
            infoEl.className = 'current-rate-info';
            if (tableEl) {
              nextEl.insertBefore(infoEl, tableEl);
            } else {
              nextEl.appendChild(infoEl);
            }
          }
          infoEl.textContent = periodText + label;
          break;
        }
        nextEl = nextEl.nextElementSibling;
      }
    });
  };

  const loadDataForTier = async (tier) => {
    updateRateDisplay(tier);
    try {
      // キャラID別の分割JSONを読み込む（全キャラ分ではなく自分のデータだけ）
      const response = await fetch(`../js/data/dynamic_pages_${tier}_${mainId}.json`);
      const data = await response.json();

      if (!data) {
        console.error(
          'Data not found for character ID:',
          mainId,
          'in tier:',
          tier
        );
        return;
      }

      renderMuTable(data.mu_table);
      renderSubTable(data.sub_table);
      renderFinalRates(data);
      renderMatchDetails(data.match_details);
    } catch (err) {
      console.error('Failed to load dynamic data for tier', tier, ':', err);
    }
  };

  // 初期ロード
  const select = document.getElementById('chara-rate-select');
  const initialTier = select ? select.value : '1500-3000';
  await loadDataForTier(initialTier);

  if (select) {
    select.addEventListener('change', (e) => {
      loadDataForTier(e.target.value);
    });
  }
}

// ----------------------------------------------------
// レンダリング関数群
// ----------------------------------------------------

function createImgTag(charObj) {
  if (!charObj) return '';
  // サブ適正用(文字列IDリスト)と相性表用(オブジェクト)で判定
  let slug = charObj.slug || charObj.id; // slugがない場合はidなど適当に
  let image = charObj.image || 'default.png';
  let name = charObj.name_ja || '画像';

  // idだけ渡された時のために、ページ内にslugや画像定義がないため、
  // json側でオブジェクト化しておく方が良いが、今回はJSON構築時にすでに
  // mu_tableはオブジェクト。sub_tableはIDの文字列リストだった。
  // jsonがIDのリストなら、マスターcharacter JSONも引く必要がある...
  // 待てよ、JS側で`characters_info.json`を読み込むか、
  // mu_table内等から検索するしかない。
  return `<a href="./${slug}.html"><img src="../img/fighter/${image}" alt="${name}の画像"></a>\n`;
}

// json側で sub_table が文字列ではなくオブジェクトの配列になるようにビルドし直すのがベスト。
// 今回の build_pages_data.py では stringsで入れてしまった可能性があるので処理対応。
// ---

function renderMuTable(muTable) {
  // ページ内の1つ目の MU_table を取得
  const tables = document.querySelectorAll('.MU_table');
  if (tables.length < 1) return;
  const muContainer = tables[0];

  // マッピング
  const classMap = {
    有利: '.MU_title_yuuri',
    微有利: '.MU_title_biyuuri',
    五分: '.MU_title_gobu',
    微不利: '.MU_title_bihuri',
    不利: '.MU_title_huri'
  };

  for (const [key, className] of Object.entries(classMap)) {
    const titleLi = muContainer.querySelector(className);
    if (!titleLi) continue;
    const resultLi = titleLi.nextElementSibling;
    if (resultLi && resultLi.classList.contains('MU_result')) {
      const arr = muTable[key] || [];
      let html = '';
      for (const item of arr) {
        html += createImgTag(item);
      }
      resultLi.innerHTML = html;
    }
  }
}

function renderSubTable(subTable) {
  // ページ内の2つ目の MU_table を取得
  const tables = document.querySelectorAll('.MU_table');
  if (tables.length < 2) return;
  const subContainer = tables[1];

  const classMap = {
    おすすめ: '.MU_title_yuuri',
    ややおすすめ: '.MU_title_biyuuri',
    普通: '.MU_title_gobu',
    おすすめしない: '.MU_title_bihuri'
  };

  for (const [key, className] of Object.entries(classMap)) {
    const titleLi = subContainer.querySelector(className);
    if (!titleLi) continue;
    const resultLi = titleLi.nextElementSibling;
    if (resultLi && resultLi.classList.contains('MU_result')) {
      const arr = subTable[key] || [];
      let html = '';
      for (const item of arr) {
        // item は "17" のような文字なので、他の箇所から情報を引くか修正が必要。
        // *後で Python 側を修正して Object を返すように統一する。
        html += `<a href="./${item.slug}.html"><img src="../img/fighter/${item.image}" alt="アイコン"></a>\n`;
      }
      resultLi.innerHTML = html;
    }
  }

  // 「絶対にやめたほうがいい」は特殊 (ul全体かも)
  const zettaiLi = subContainer.querySelector('.MU_title_huri');
  if (zettaiLi) {
    const resultLi = zettaiLi.nextElementSibling;
    if (resultLi && resultLi.classList.contains('MU_result')) {
      const arr = subTable['絶対にやめたほうがいい'] || [];
      let html = '';
      for (const item of arr) {
        html += `<a href="./${item.slug}.html"><img src="../img/fighter/${item.image}" alt="アイコン"></a>\n`;
      }
      resultLi.innerHTML = html;
    }
  }
}

function renderFinalRates(data) {
  const finalRates = data.final_rates;
  if (!finalRates || finalRates.length === 0) return;

  const titles = document.querySelectorAll('.section');
  let targetTable = null;
  for (const t of titles) {
    if (t.id === '歴代最終レート' || t.innerText.includes('歴代最終レート')) {
      // Find the next table.sorttbl in the DOM
      let nextEl = t.nextElementSibling;
      while (nextEl) {
        if (nextEl.querySelector('table.sorttbl')) {
          targetTable = nextEl.querySelector('table.sorttbl');
          break;
        }
        nextEl = nextEl.nextElementSibling;
      }
      break;
    }
  }

  if (!targetTable) return;

  // browser auto-inserts tbody if missing
  let tbody = targetTable.querySelector('tbody');
  if (!tbody) {
    tbody = document.createElement('tbody');
    targetTable.appendChild(tbody);
  }

  let html = '';
  // Keep header row if tbody contains it, but since we clear innerHTML,
  // we should make sure we don't delete headers if they are in tbody.
  // In this HTML, <th> rows are sometimes inside <tbody> because the template has no <thead>.
  // We should safely locate the header row.
  const headerRow = tbody.querySelector('tr:first-child');
  if (headerRow && headerRow.querySelector('th')) {
    html += headerRow.outerHTML;
  }

  for (const r of finalRates) {
    html += `
            <tr class="item">
                <td><a>${r.rank}</a></td>
                <td><p>${r.rank}</p><img src="../img/fighter/${data.main_image || '01.マリオ.png'}" alt="ファイター画像"></td>
                <td><a>${r.player}</a></td>
                <td><a>${r.rate}</a></td>
                <td><a>${r.period}</a></td>
            </tr>`;
  }
  tbody.innerHTML = html;
}

function renderMatchDetails(details) {
  const titles = document.querySelectorAll('.section');
  let targetTable = null;
  for (const t of titles) {
    if (t.id === '戦績詳細' || t.innerText.includes('戦績詳細')) {
      let nextEl = t.nextElementSibling;
      while (nextEl) {
        if (nextEl.querySelector('table.sorttbl')) {
          targetTable = nextEl.querySelector('table.sorttbl');
          break;
        }
        nextEl = nextEl.nextElementSibling;
      }
      break;
    }
  }

  if (!targetTable) return;

  let tbody = targetTable.querySelector('tbody');
  if (!tbody) {
    tbody = document.createElement('tbody');
    targetTable.appendChild(tbody);
  }

  let html = '';
  const headerRow = tbody.querySelector('tr:first-child');
  if (headerRow && headerRow.querySelector('th')) {
    html += headerRow.outerHTML;
  }

  details.forEach((d, index) => {
    const trClass = index >= 10 ? 'item details-hidden-row' : 'item';
    const style = index >= 10 ? 'style="display: none;"' : '';
    html += `
            <tr class="${trClass}" ${style}>
                <td><a href="./${d.enemy_id}.html">
                    <p>${d.enemy_id}</p><img src="../img/fighter/${d.enemy_image}" alt="ファイター画像">
                </a></td>
                <td><a href="#">${d.match_count}</a></td>
                <td><a href="#">${d.win_count}</a></td>
                <td><a href="#">${d.win_rate}</a></td>
            </tr>`;
  });
  tbody.innerHTML = html;

  if (details.length > 10) {
    let oldBtnDiv = targetTable.parentNode.querySelector(
      '.show-more-details-container'
    );
    if (oldBtnDiv) oldBtnDiv.remove();

    const btnDiv = document.createElement('div');
    btnDiv.className = 'show-more-details-container';
    btnDiv.style.textAlign = 'center';
    btnDiv.style.marginTop = '16px';
    const btn = document.createElement('button');
    btn.textContent = 'さらに表示 ▼';
    btn.style.cssText = `
            padding: 10px 40px;
            cursor: pointer;
            background: transparent;
            color: #e7412b;
            border: 1.5px solid #e7412b;
            border-radius: 0;
            font-weight: bold;
            font-size: 0.9rem;
            margin-bottom: 16px;
            letter-spacing: 0.1em;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        `;

    btn.addEventListener('click', () => {
      const hiddenRows = tbody.querySelectorAll('.details-hidden-row');
      const isHidden = hiddenRows[0].style.display === 'none';
      hiddenRows.forEach((row) => {
        row.style.display = isHidden ? '' : 'none';
      });
      btn.textContent = isHidden ? '閉じる ▲' : 'さらに表示 ▼';
    });

    btn.addEventListener('mouseover', () => {
      btn.style.background = '#e7412b';
      btn.style.color = 'white';
    });
    btn.addEventListener('mouseout', () => {
      btn.style.background = 'transparent';
      btn.style.color = '#e7412b';
    });

    btnDiv.appendChild(btn);

    // Insert right after the targetTable
    if (targetTable.nextSibling) {
      targetTable.parentNode.insertBefore(btnDiv, targetTable.nextSibling);
    } else {
      targetTable.parentNode.appendChild(btnDiv);
    }
  }
}
