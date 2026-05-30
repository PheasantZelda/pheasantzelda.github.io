/**
 * カウンターピッカー
 * 苦手なファイターを自由に登録し、それらに有利なファイターをサジェストする
 */
document.addEventListener('DOMContentLoaded', function () {
  const fighterGrid = document.getElementById('cp-fighter-grid');
  const selectedArea = document.getElementById('cp-selected-area');
  const analyzeBtn = document.getElementById('cp-analyze-btn');
  const resetBtn = document.getElementById('cp-reset-btn');
  const resultsSection = document.getElementById('cp-results');
  const resultList = document.getElementById('cp-result-list');
  const countBadge = document.getElementById('cp-count-badge');
  const shareBtn = document.getElementById('cp-share-btn');
  const step1 = document.getElementById('cp-step-1');
  const step2 = document.getElementById('cp-step-2');
  const connector = document.getElementById('cp-connector');

  let selectedFighters = new Set();
  let matchupData = {};

  // 番号順のファイターリスト（ダッシュファイターは結合キーで1アイコン）
  const FIGHTER_ORDER = [
    'マリオ','ドンキーコング','リンク','サムス_ダークサムス',
    'ヨッシー','カービィ','フォックス','ピカチュウ','ルイージ',
    'ネス','キャプテン・ファルコン','プリン','ピーチ_デイジー',
    'クッパ','アイスクライマー','シーク','ゼルダ','ドクターマリオ',
    'ピチュー','ファルコ','マルス','ルキナ','こどもリンク',
    'ガノンドロフ','ミュウツー','ロイ','クロム','Mr.ゲーム&ウォッチ',
    'メタナイト','ピット_ブラックピット','ゼロスーツサムス',
    'ワリオ','スネーク','アイク','ポケモントレーナー','ディディーコング',
    'リュカ','ソニック','デデデ','ピクミン＆オリマー','ルカリオ',
    'ロボット','トゥーンリンク','ウルフ','むらびと','ロックマン',
    'Wii Fit トレーナー','ロゼッタ＆チコ','リトルマック','ゲッコウガ',
    '格闘Mii','剣術Mii','射撃Mii','パルテナ','パックマン',
    'ルフレ','シュルク','クッパJr.','ダックハント','リュウ','ケン',
    'クラウド','カムイ','ベヨネッタ','インクリング','リドリー',
    'シモン_リヒター','キングクルール','しずえ','ガオガエン',
    'パックンフラワー','ジョーカー','勇者','バンジョー＆カズーイ',
    'テリー','ベレトス','ミェンミェン','スティーブ','セフィロス',
    'ホムヒカ','カズヤ','ソラ'
  ];

  // fighter2フォルダの画像マッピング
  const FIGHTER2_IMAGES = {
    'マリオ': './img/fighter2/01.マリオ.jpg',
    'ドンキーコング': './img/fighter2/02.ドンキーコング.jpg',
    'リンク': './img/fighter2/03.リンク.jpg',
    'サムス_ダークサムス': './img/fighter2/04.サムス_05.ダークサムス.jpg',
    'ヨッシー': './img/fighter2/06.ヨッシー.jpg',
    'カービィ': './img/fighter2/07.カービィ.jpg',
    'フォックス': './img/fighter2/08.フォックス.jpg',
    'ピカチュウ': './img/fighter2/09.ピカチュウ.jpg',
    'ルイージ': './img/fighter2/10.ルイージ.jpg',
    'ネス': './img/fighter2/11.ネス.jpg',
    'キャプテン・ファルコン': './img/fighter2/12.キャプテン・ファルコン.jpg',
    'プリン': './img/fighter2/13.プリン.jpg',
    'ピーチ_デイジー': './img/fighter2/14.ピーチ_15.デイジー.jpg',
    'クッパ': './img/fighter2/16.クッパ.jpg',
    'アイスクライマー': './img/fighter2/17.アイスクライマー.jpg',
    'シーク': './img/fighter2/18.シーク.jpg',
    'ゼルダ': './img/fighter2/19.ゼルダ.jpg',
    'ドクターマリオ': './img/fighter2/20.ドクターマリオ.jpg',
    'ピチュー': './img/fighter2/21.ピチュー.jpg',
    'ファルコ': './img/fighter2/22.ファルコ.jpg',
    'マルス': './img/fighter2/23.マルス.jpg',
    'ルキナ': './img/fighter2/24.ルキナ.jpg',
    'こどもリンク': './img/fighter2/25.こどもリンク.jpg',
    'ガノンドロフ': './img/fighter2/26.ガノンドロフ.jpg',
    'ミュウツー': './img/fighter2/27.ミュウツー.jpg',
    'ロイ': './img/fighter2/28.ロイ.jpg',
    'クロム': './img/fighter2/29.クロム.jpg',
    'Mr.ゲーム&ウォッチ': './img/fighter2/30.Mr.ゲーム&ウォッチ.jpg',
    'メタナイト': './img/fighter2/31.メタナイト.jpg',
    'ピット_ブラックピット': './img/fighter2/32.ピット_33.ブラックピット.jpg',
    'ゼロスーツサムス': './img/fighter2/34.ゼロスーツサムス.jpg',
    'ワリオ': './img/fighter2/35.ワリオ.jpg',
    'スネーク': './img/fighter2/36.スネーク.jpg',
    'アイク': './img/fighter2/37.アイク.jpg',
    'ポケモントレーナー': './img/fighter2/38.ポケモントレーナー.jpg',
    'ディディーコング': './img/fighter2/39.ディディーコング.jpg',
    'リュカ': './img/fighter2/40.リュカ.jpg',
    'ソニック': './img/fighter2/41.ソニック.jpg',
    'デデデ': './img/fighter2/42.デデデ.jpg',
    'ピクミン＆オリマー': './img/fighter2/43.ピクミン＆オリマー.jpg',
    'ルカリオ': './img/fighter2/44.ルカリオ.jpg',
    'ロボット': './img/fighter2/45.ロボット.jpg',
    'トゥーンリンク': './img/fighter2/46.トゥーンリンク.jpg',
    'ウルフ': './img/fighter2/47.ウルフ.jpg',
    'むらびと': './img/fighter2/48.むらびと.jpg',
    'ロックマン': './img/fighter2/49.ロックマン.jpg',
    'Wii Fit トレーナー': './img/fighter2/50.Wii Fit トレーナー.jpg',
    'ロゼッタ＆チコ': './img/fighter2/51.ロゼッタ＆チコ.jpg',
    'リトルマック': './img/fighter2/52.リトルマック.jpg',
    'ゲッコウガ': './img/fighter2/53.ゲッコウガ.jpg',
    '格闘Mii': './img/fighter2/54.格闘Mii.jpg',
    '剣術Mii': './img/fighter2/55.剣術Mii.jpg',
    '射撃Mii': './img/fighter2/56.射撃Mii.jpg',
    'パルテナ': './img/fighter2/57.パルテナ.jpg',
    'パックマン': './img/fighter2/58.パックマン.jpg',
    'ルフレ': './img/fighter2/59.ルフレ.jpg',
    'シュルク': './img/fighter2/60.シュルク.jpg',
    'クッパJr.': './img/fighter2/61.クッパJr..jpg',
    'ダックハント': './img/fighter2/62.ダックハント.jpg',
    'リュウ': './img/fighter2/63.リュウ.jpg',
    'ケン': './img/fighter2/64.ケン.jpg',
    'クラウド': './img/fighter2/65.クラウド.jpg',
    'カムイ': './img/fighter2/66.カムイ.jpg',
    'ベヨネッタ': './img/fighter2/67.ベヨネッタ.jpg',
    'インクリング': './img/fighter2/68.インクリング.jpg',
    'リドリー': './img/fighter2/69.リドリー.jpg',
    'シモン_リヒター': './img/fighter2/70.シモン_71.リヒター.jpg',
    'キングクルール': './img/fighter2/72.キングクルール.jpg',
    'しずえ': './img/fighter2/73.しずえ.jpg',
    'ガオガエン': './img/fighter2/74.ガオガエン.jpg',
    'パックンフラワー': './img/fighter2/75.パックンフラワー.jpg',
    'ジョーカー': './img/fighter2/76.ジョーカー.jpg',
    '勇者': './img/fighter2/77.勇者.jpg',
    'バンジョー＆カズーイ': './img/fighter2/78.バンジョー＆カズーイ.jpg',
    'テリー': './img/fighter2/79.テリー.jpg',
    'ベレトス': './img/fighter2/80.ベレトス.jpg',
    'ミェンミェン': './img/fighter2/81.ミェンミェン.jpg',
    'スティーブ': './img/fighter2/82.スティーブ.jpg',
    'セフィロス': './img/fighter2/83.セフィロス.jpg',
    'ホムヒカ': './img/fighter2/84.ホムヒカ.jpg',
    'カズヤ': './img/fighter2/85.カズヤ.jpg',
    'ソラ': './img/fighter2/86.ソラ.jpg'
  };

  // FIGHTER_ORDERのmatchupDataキーをそのまま使用

  function getImagePath(name) {
    return FIGHTER2_IMAGES[name] || './img/common/no_image.png';
  }

  function getCharURL(name) {
    if (typeof FIGHTER_PAGES !== 'undefined' && FIGHTER_PAGES[name]) {
      return FIGHTER_PAGES[name];
    }
    return null;
  }

  // --- データ読み込み ---
  if (typeof MATCHUP_DATA !== 'undefined') {
    matchupData = MATCHUP_DATA;
    buildFighterGrid();
  } else {
    console.error('MATCHUP_DATA が読み込まれていません');
  }

  /**
   * ファイターグリッドを構築（名前ラベルなし・番号順）
   */
  function buildFighterGrid() {
    FIGHTER_ORDER.forEach(name => {
      const key = name;
      if (!matchupData[key]) return; // データなしはスキップ

      const btn = document.createElement('button');
      btn.className = 'cp-fighter-btn';
      btn.dataset.name = name;
      btn.type = 'button';
      btn.title = name; // ツールチップで名前表示

      const img = document.createElement('img');
      img.src = getImagePath(name);
      img.alt = name;
      img.loading = 'lazy';
      img.onerror = function () { this.src = './img/common/no_image.png'; };

      btn.appendChild(img);
      btn.addEventListener('click', () => toggleFighter(name));
      fighterGrid.appendChild(btn);
    });
  }

  function toggleFighter(name) {
    if (selectedFighters.has(name)) {
      selectedFighters.delete(name);
    } else {
      selectedFighters.add(name);
    }
    updateUI();
  }

  function updateUI() {
    fighterGrid.querySelectorAll('.cp-fighter-btn').forEach(btn => {
      btn.classList.toggle('selected', selectedFighters.has(btn.dataset.name));
    });
    renderSelectedTags();
    const count = selectedFighters.size;
    countBadge.textContent = count;
    countBadge.style.display = count > 0 ? 'inline-flex' : 'none';
    analyzeBtn.disabled = count === 0;

    // #3: ファイター選択時にボタンにバウンスアニメ
    if (count > 0) {
      analyzeBtn.classList.remove('cp-ready');
      void analyzeBtn.offsetWidth; // リフロー強制
      analyzeBtn.classList.add('cp-ready');
    } else {
      analyzeBtn.classList.remove('cp-ready');
    }

    resultsSection.classList.remove('visible');
    updateSteps(1);
  }

  function renderSelectedTags() {
    // #2: ヘッダー要素を更新
    let header = document.getElementById('cp-selected-header');
    if (!header) {
      header = document.createElement('div');
      header.id = 'cp-selected-header';
      header.className = 'cp-selected-header';
      selectedArea.parentNode.insertBefore(header, selectedArea);
    }

    selectedArea.innerHTML = '';
    if (selectedFighters.size === 0) {
      selectedArea.classList.remove('has-items');
      header.innerHTML = '';
      header.style.display = 'none';
      const ph = document.createElement('span');
      ph.className = 'cp-selected-placeholder';
      ph.textContent = '上のグリッドからファイターをクリックして登録';
      selectedArea.appendChild(ph);
      return;
    }

    header.style.display = 'flex';
    header.innerHTML = `⚔️ 選択中のファイター <span class="cp-sel-count">${selectedFighters.size}体</span>`;
    selectedArea.classList.add('has-items');
    selectedFighters.forEach(name => {
      const tag = document.createElement('div');
      tag.className = 'cp-tag';
      const img = document.createElement('img');
      img.src = getImagePath(name);
      img.alt = name;
      img.onerror = function () { this.src = './img/common/no_image.png'; };
      const nameSpan = document.createElement('span');
      nameSpan.className = 'cp-tag-name';
      nameSpan.textContent = name;
      const removeBtn = document.createElement('button');
      removeBtn.className = 'cp-tag-remove';
      removeBtn.type = 'button';
      removeBtn.textContent = '×';
      removeBtn.addEventListener('click', (e) => { e.stopPropagation(); toggleFighter(name); });
      tag.appendChild(img);
      tag.appendChild(nameSpan);
      tag.appendChild(removeBtn);
      selectedArea.appendChild(tag);
    });
  }

  function updateSteps(cs) {
    if (cs === 1) {
      step1.className = 'cp-step active';
      step2.className = 'cp-step';
      connector.className = 'cp-step-connector';
    } else {
      step1.className = 'cp-step completed';
      step2.className = 'cp-step active';
      connector.className = 'cp-step-connector active';
    }
  }

  analyzeBtn.addEventListener('click', function () {
    if (selectedFighters.size === 0) return;
    runAnalysis();
  });

  resetBtn.addEventListener('click', function () {
    selectedFighters.clear();
    updateUI();
  });

  /**
   * 分析ロジック: 選択された苦手ファイターに有利なファイターをスコアリング
   */
  function runAnalysis() {
    // 選択された名前を matchupData のキーに変換（重複排除）
    const weakKeys = Array.from(selectedFighters);
    const weakNames = Array.from(selectedFighters);
    const allKeys = Object.keys(matchupData);
    const candidates = [];

    allKeys.forEach(subKey => {
      let score = 0, coveredCount = 0, totalWR = 0;
      const coverageDetails = [];

      weakKeys.forEach(weakKey => {
        const vs = matchupData[subKey] && matchupData[subKey][weakKey];
        if (vs) {
          if (vs.win_rate >= 55.0) {
            score += 10 + (vs.win_rate - 50);
            coveredCount++;
            totalWR += vs.win_rate;
            coverageDetails.push({ name: weakKey, win_rate: vs.win_rate, battles: vs.battles });
          } else if (vs.win_rate >= 50.0) {
            score += (vs.win_rate - 50) * 0.5;
          }
        }
      });

      if (coveredCount > 0) {
        coverageDetails.sort((a, b) => b.win_rate - a.win_rate);
        candidates.push({
          name: subKey, score, coveredCount,
          avgWinRate: totalWR / coveredCount,
          totalWeaks: weakKeys.length,
          coverageDetails
        });
      }
    });

    candidates.sort((a, b) => {
      if (b.coveredCount !== a.coveredCount) return b.coveredCount - a.coveredCount;
      return b.score - a.score;
    });

    renderResults(candidates.slice(0, 20), weakNames, candidates.length);
    updateSteps(2);
    setTimeout(() => { resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 100);
  }

  const INITIAL_SHOW = 5; // 初期表示件数

  function renderResults(candidates, weakNames, totalFound) {
    resultList.innerHTML = '';
    resultsSection.classList.add('visible');

    if (candidates.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'cp-empty';
      empty.textContent = '条件に合うおすすめファイターが見つかりませんでした。';
      resultList.appendChild(empty);
      updateShareBtn(weakNames, []);
      return;
    }

    candidates.forEach((cand, idx) => {
      const item = document.createElement('div');
      item.className = 'cp-result-item';
      item.id = `cp-result-${idx}`;
      const pct = Math.round((cand.coveredCount / cand.totalWeaks) * 100);
      const charURL = getCharURL(cand.name);
      const linkHTML = charURL
        ? `<a href="${charURL}" class="cp-result-link" title="${cand.name} の詳細" onclick="event.stopPropagation()">▶</a>`
        : '';

      const medals = ['🥇', '🥈', '🥉'];
      const rankDisplay = idx < 3 ? medals[idx] : (idx + 1);

      item.innerHTML = `
        <div class="cp-result-rank">${rankDisplay}</div>
        <img class="cp-result-img" src="${getImagePath(cand.name)}" alt="${cand.name}" onerror="this.src='./img/common/no_image.png'">
        <div class="cp-result-info">
          <div class="cp-result-name">${cand.name}</div>
          <div class="cp-result-stats">
            <span>🛡 カバー: ${cand.coveredCount}/${cand.totalWeaks}</span>
            <span>📊 平均勝率: ${cand.avgWinRate.toFixed(1)}%</span>
          </div>
        </div>
        <div class="cp-result-coverage">
          <div class="cp-coverage-text">${pct}%</div>
          <div class="cp-coverage-bar-wrap"><div class="cp-coverage-bar" style="width:0%"></div></div>
        </div>
        ${linkHTML}
      `;

      const detail = document.createElement('div');
      detail.className = 'cp-result-detail';
      let dHTML = '<div class="cp-detail-grid">';
      cand.coverageDetails.forEach(d => {
        const dURL = getCharURL(d.name);
        const ls = dURL ? `<a href="${dURL}" style="text-decoration:none" onclick="event.stopPropagation()">` : '';
        const le = dURL ? '</a>' : '';
        dHTML += `${ls}<div class="cp-detail-chip">
          <img src="${getImagePath(d.name)}" alt="${d.name}" onerror="this.src='./img/common/no_image.png'">
          <div class="cp-detail-chip-info">
            <div class="cp-detail-chip-name">${d.name}</div>
            <div class="cp-detail-chip-wr">勝率 ${d.win_rate.toFixed(1)}%</div>
          </div></div>${le}`;
      });
      dHTML += '</div>';
      detail.innerHTML = dHTML;

      item.addEventListener('click', () => {
        detail.classList.toggle('open');
        resultList.querySelectorAll('.cp-result-detail').forEach(d => { if (d !== detail) d.classList.remove('open'); });
      });

      // 6件目以降は非表示
      if (idx >= INITIAL_SHOW) {
        item.classList.add('cp-hidden-result');
        detail.classList.add('cp-hidden-result');
      }

      resultList.appendChild(item);
      resultList.appendChild(detail);
      if (idx < INITIAL_SHOW) {
        setTimeout(() => { item.querySelector('.cp-coverage-bar').style.width = pct + '%'; }, 100 + idx * 80);
      }
    });

    // 「さらに表示」ボタン
    if (candidates.length > INITIAL_SHOW) {
      const moreBtn = document.createElement('button');
      moreBtn.className = 'cp-btn cp-btn-more';
      moreBtn.type = 'button';
      moreBtn.innerHTML = `さらに表示 <span class="cp-more-count">(残り${candidates.length - INITIAL_SHOW}件)</span>`;
      moreBtn.addEventListener('click', () => {
        resultList.querySelectorAll('.cp-hidden-result').forEach(el => {
          el.classList.remove('cp-hidden-result');
        });
        // 非表示だったバーのアニメーション
        candidates.slice(INITIAL_SHOW).forEach((cand, i) => {
          const realIdx = INITIAL_SHOW + i;
          const item = document.getElementById(`cp-result-${realIdx}`);
          if (item) {
            const pct = Math.round((cand.coveredCount / cand.totalWeaks) * 100);
            setTimeout(() => {
              const bar = item.querySelector('.cp-coverage-bar');
              if (bar) bar.style.width = pct + '%';
            }, 50 + i * 60);
          }
        });
        moreBtn.remove();
      });
      resultList.appendChild(moreBtn);
    }

    updateShareBtn(weakNames, candidates);
  }

  function updateShareBtn(weakNames, candidates) {
    if (!shareBtn) return;
    const medals = ['🥇', '🥈', '🥉'];
    let t = `【スマアナ カウンターピッカー】\n\n`;
    t += `😵 苦手ファイター\n`;
    t += weakNames.slice(0, 5).map(n => `　・${n}`).join('\n');
    if (weakNames.length > 5) t += `\n　...他${weakNames.length - 5}体`;
    t += `\n\n`;
    if (candidates.length > 0) {
      t += `💪 おすすめカウンター\n`;
      candidates.slice(0, 3).forEach((c, i) => {
        const pct = Math.round((c.coveredCount / c.totalWeaks) * 100);
        t += `　${medals[i]} ${c.name}（カバー${pct}%）\n`;
      });
    }
    t += `\n#スマアナ #スマブラSP\nhttps://pheasantzelda.github.io/counter_picker.html`;
    shareBtn.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(t)}`;
  }

  updateUI();
});
