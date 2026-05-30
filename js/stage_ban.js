document.addEventListener("DOMContentLoaded", () => {
  initStageBanPage();
});

/**
 * ファイターの英語ID からキャラページのURLを返す
 * chara/ ページ内ならば相対パスで、それ以外は ../chara/ パスを使用
 */
function getFighterPageUrl(enId) {
  const urlMap = {
    "mario": "01.mario.html",
    "donkey_kong": "02.donkey_kong.html",
    "link": "03.link.html",
    "samus": "04.samus_dark_samus.html",
    "dark_samus": "04.samus_dark_samus.html",
    "yoshi": "06.yoshi.html",
    "kirby": "07.kirby.html",
    "fox": "08.fox.html",
    "pikachu": "09.pikachu.html",
    "luigi": "10.luigi.html",
    "ness": "11.ness.html",
    "captain_falcon": "12.captain_falcon.html",
    "jigglypuff": "13.jigglypuff.html",
    "peach": "14.peach_daisy.html",
    "daisy": "14.peach_daisy.html",
    "bowser": "16.bowser.html",
    "ice_climber": "17.ice_climber.html",
    "sheik": "18.sheik.html",
    "zelda": "19.zelda.html",
    "dr_mario": "20.dr_mario.html",
    "pichu": "21.pichu.html",
    "falco": "22.falco.html",
    "marth": "23.marth.html",
    "lucina": "24.lucina.html",
    "young_link": "25.young_link.html",
    "ganondorf": "26.ganondorf.html",
    "mewtwo": "27.mewtwo.html",
    "roy": "28.roy.html",
    "chrom": "29.chrom.html",
    "mr_game_and_watch": "30.mr_game_and_watch.html",
    "metaknight": "31.metaknight.html",
    "pit": "32.pit_dark_pit.html",
    "dark_pit": "32.pit_dark_pit.html",
    "zero_suit_samus": "34.zero_suit_samus.html",
    "wario": "35.wario.html",
    "snake": "36.snake.html",
    "ike": "37.ike.html",
    "pokemon_trainer": "38.pokemon_trainer.html",
    "diddy_kong": "39.diddy_kong.html",
    "lucas": "40.lucas.html",
    "sonic": "41.sonic.html",
    "king_dedede": "42.king_dedede.html",
    "olimar": "43.olimar.html",
    "lucario": "44.lucario.html",
    "rob": "45.rob.html",
    "toon_link": "46.toon_link.html",
    "wolf": "47.wolf.html",
    "villager": "48.villager.html",
    "megaman": "49.megaman.html",
    "wii_fit_trainer": "50.wii_fit_trainer.html",
    "rosalina_luma": "51.rosalina_luma.html",
    "little_mac": "52.little_mac.html",
    "greninja": "53.greninja.html",
    "mii_brawler": "54.mii_brawler.html",
    "mii_swordfighter": "55.mii_swordfighter.html",
    "mii_gunner": "56.mii_gunner.html",
    "palutena": "57.palutena.html",
    "pacman": "58.pacman.html",
    "robin": "59.robin.html",
    "shulk": "60.shulk.html",
    "bowser_jr": "61.bowser_jr.html",
    "duck_hunt": "62.duck_hunt.html",
    "ryu": "63.ryu.html",
    "ken": "64.ken.html",
    "cloud": "65.cloud.html",
    "corrin": "66.corrin.html",
    "bayonetta": "67.bayonetta.html",
    "inkling": "68.inkling.html",
    "ridley": "69.ridley.html",
    "simon": "70.simon_richter.html",
    "richter": "70.simon_richter.html",
    "king_k_rool": "72.king_k_rool.html",
    "isabelle": "73.isabelle.html",
    "incineroar": "74.incineroar.html",
    "piranha_plant": "75.piranha_plant.html",
    "joker": "76.joker.html",
    "hero": "77.hero.html",
    "banjo_and_kazooie": "78.banjo_and_kazooie.html",
    "terry": "79.terry.html",
    "byleth": "80.byleth.html",
    "minmin": "81.minmin.html",
    "steve": "82.steve.html",
    "sephiroth": "83.sephiroth.html",
    "homura": "84.homura.html",
    "kazuya": "85.kazuya.html",
    "sora": "86.sora.html"
  };
  const fileName = urlMap[enId];
  if (!fileName) return null;
  // chara/ ページ内なら ./ を、それ以外なら ../chara/ を使用
  const isCharaPage = window.location.pathname.includes("/chara/") || window.location.pathname.includes("/chara_org/");
  return isCharaPage ? `./${fileName}` : `../chara/${fileName}`;
}

const STAGE_CONFIG = [
  { id: "FD", name: "終点", img: "./img/stage/ステージ_終点_(SP).jpg" },
  { id: "BF", name: "戦場", img: "./img/stage/ステージ_戦場_(SP).jpg" },
  { id: "PS2", name: "ポケスタ2", img: "./img/stage/ステージ_ポケモンスタジアム2_(SP).jpg" },
  { id: "SBF", name: "小戦場", img: "./img/stage/ステージ_小戦場_(SP).jpg" },
  { id: "HB", name: "ホロウ", img: "./img/stage/ステージ_ホロウバスティオン_(SP).jpg" },
  { id: "VT", name: "村と街", img: "./img/stage/ステージ_村と街_(SP).jpg" },
  { id: "SV", name: "すま村", img: "./img/stage/ステージ_すま村_(SP).jpg" }
];

function resolvePath(path) {
  if (window.location.pathname.includes("/chara_dynamic/") || window.location.pathname.includes("/chara/")) {
    return path.replace(/^\.\//, "../");
  }
  return path;
}

function getFighterImageByEnglishId(enId) {
  const map = {
    "mario": "マリオ",
    "donkey_kong": "ドンキーコング",
    "link": "リンク",
    "samus": "サムス_ダークサムス",
    "dark_samus": "サムス_ダークサムス",
    "yoshi": "ヨッシー",
    "kirby": "カービィ",
    "fox": "フォックス",
    "pikachu": "ピカチュウ",
    "luigi": "ルイージ",
    "ness": "ネス",
    "captain_falcon": "キャプテン・ファルコン",
    "jigglypuff": "プリン",
    "peach": "ピーチ_デイジー",
    "daisy": "ピーチ_デイジー",
    "bowser": "クッパ",
    "ice_climber": "アイスクライマー",
    "sheik": "シーク",
    "zelda": "ゼルダ",
    "dr_mario": "ドクターマリオ",
    "pichu": "ピチュー",
    "falco": "ファルコ",
    "marth": "マルス",
    "lucina": "ルキナ",
    "young_link": "こどもリンク",
    "ganondorf": "ガノンドロフ",
    "mewtwo": "ミュウツー",
    "roy": "ロイ",
    "chrom": "クロム",
    "mr_game_and_watch": "Mr.ゲーム&ウォッチ",
    "metaknight": "メタナイト",
    "pit": "ピット_ブラックピット",
    "dark_pit": "ピット_ブラックピット",
    "zero_suit_samus": "ゼロスーツサムス",
    "wario": "ワリオ",
    "snake": "スネーク",
    "ike": "アイク",
    "pokemon_trainer": "ポケモントレーナー",
    "diddy_kong": "ディディーコング",
    "lucas": "リュカ",
    "sonic": "ソニック",
    "king_dedede": "デデデ",
    "olimar": "ピクミン＆オリマー",
    "lucario": "ルカリオ",
    "rob": "ロボット",
    "toon_link": "トゥーンリンク",
    "wolf": "ウルフ",
    "villager": "むらびと",
    "megaman": "ロックマン",
    "wii_fit_trainer": "Wii Fit トレーナー",
    "rosalina_luma": "ロゼッタ＆チコ",
    "little_mac": "リトルマック",
    "greninja": "ゲッコウガ",
    "mii_brawler": "格闘Mii",
    "mii_swordfighter": "剣術Mii",
    "mii_gunner": "射撃Mii",
    "palutena": "パルテナ",
    "pacman": "パックマン",
    "robin": "ルフレ",
    "shulk": "シュルク",
    "bowser_jr": "クッパJr.",
    "duck_hunt": "ダックハント",
    "ryu": "リュウ",
    "ken": "ケン",
    "cloud": "クラウド",
    "corrin": "カムイ",
    "bayonetta": "ベヨネッタ",
    "inkling": "インクリング",
    "ridley": "リドリー",
    "simon": "シモン_リヒター",
    "richter": "シモン_リヒター",
    "king_k_rool": "キングクルール",
    "isabelle": "しずえ",
    "incineroar": "ガオガエン",
    "piranha_plant": "パックンフラワー",
    "joker": "ジョーカー",
    "hero": "勇者",
    "banjo_and_kazooie": "バンジョー＆カズーイ",
    "terry": "テリー",
    "byleth": "ベレトス",
    "minmin": "ミェンミェン",
    "steve": "スティーブ",
    "sephiroth": "セフィロス",
    "homura": "ホムヒカ",
    "kazuya": "カズヤ",
    "sora": "ソラ",
    "random": "おまかせ",
    "omakase": "おまかせ"
  };

  const jaName = map[enId];
  if (jaName && typeof FIGHTER_IMAGES !== 'undefined' && FIGHTER_IMAGES[jaName]) {
    return resolvePath(FIGHTER_IMAGES[jaName]);
  }
  // 日本語表記のままの場合
  if (typeof FIGHTER_IMAGES !== 'undefined' && FIGHTER_IMAGES[enId]) {
    return resolvePath(FIGHTER_IMAGES[enId]);
  }
  return resolvePath("./img/common/personel.png");
}

let stageBanData = [];

async function loadStageBanData(tier) {
  try {
    const response = await fetch(resolvePath(`./js/data/fighter_stage_ban_prob_${tier}.json`));
    stageBanData = await response.json();
  } catch (err) {
    console.error("Failed to load stage ban data for tier:", tier, err);
    // フォールバックとして、事前にロードされている global 定数を使用
    if (typeof STAGE_BAN_PROB_DATA !== 'undefined') {
      stageBanData = STAGE_BAN_PROB_DATA;
    }
  }
}

async function initStageBanPage() {
  const container = document.getElementById("stage-ban-container");
  if (!container) return;

  // レート帯セレクトボックスの検知
  const rateSelect = document.getElementById("chara-rate-select");
  if (rateSelect) {
    initFloatingRateSelector(rateSelect);
  }
  const initialTier = rateSelect ? rateSelect.value : "1500-3000";

  // 初期データのロード
  await loadStageBanData(initialTier);

  const targetFighter = container.getAttribute("data-fighter");
  if (targetFighter) {
    // 個別ファイターページ用：ドロップダウンは不要で対象ファイターの表のみ表示
    const tableContainer = document.createElement("div");
    tableContainer.className = "stage-table-wrapper";
    createViewToggle(container, tableContainer);
    container.appendChild(tableContainer);
    renderTable(targetFighter, tableContainer);

    // レート帯切り替えイベント
    if (rateSelect) {
      rateSelect.addEventListener("change", async (e) => {
        await loadStageBanData(e.target.value);
        renderTable(targetFighter, tableContainer);
      });
    }
    return;
  }

  // プレイヤー選択のドロップダウン生成
  const selectorDiv = document.createElement("div");
  selectorDiv.className = "player-selector";
  const select = document.createElement("select");
  
  const populateFighterSelector = (prevSelectedValue) => {
    select.innerHTML = "";
    stageBanData.forEach((fighterObj) => {
      const option = document.createElement("option");
      option.value = fighterObj.name;
      option.textContent = fighterObj.name;
      if (fighterObj.name === prevSelectedValue) {
        option.selected = true;
      }
      select.appendChild(option);
    });
  };

  const initialSelected = stageBanData.length > 0 ? stageBanData[0].name : null;
  populateFighterSelector(initialSelected);
  
  // 選択されたファイターの画像表示用コンテナ
  const selectedImageContainer = document.createElement("div");
  selectedImageContainer.className = "selected-fighter-image-container";
  const selectedImage = document.createElement("img");
  selectedImageContainer.appendChild(selectedImage);

  selectorDiv.appendChild(select);
  selectorDiv.appendChild(selectedImageContainer);
  
  const tableContainer = document.createElement("div");
  tableContainer.className = "stage-table-wrapper";
  createViewToggle(container, tableContainer);
  
  container.appendChild(selectorDiv);
  container.appendChild(tableContainer);

  const updateTableForSelected = () => {
    const selectedFighter = select.value;
    if (selectedFighter) {
      selectedImage.src = getFighterImageByEnglishId(selectedFighter);
      selectedImage.alt = selectedFighter;
      renderTable(selectedFighter, tableContainer);
    }
  };

  select.addEventListener("change", updateTableForSelected);

  // 全体ページ用レート帯切り替えイベント
  if (rateSelect) {
    rateSelect.addEventListener("change", async (e) => {
      const currentSelected = select.value;
      await loadStageBanData(e.target.value);
      populateFighterSelector(currentSelected);
      updateTableForSelected();
    });
  }

  updateTableForSelected();
}

function renderTable(fighterName, container) {
  container.innerHTML = "";
  const fighterObj = stageBanData.find(obj => obj.name === fighterName);
  if (!fighterObj) return;
  let fighterData = JSON.parse(JSON.stringify(fighterObj.data));

  // マリオがいない場合は先頭に追加
  if (!fighterData.find(row => row.BAN_FIGHTER === "mario" || row.BAN_FIGHTER === "マリオ")) {
    const marioRow = {
      BAN_FIGHTER: "マリオ",
      FD: 0.0, BF: 0.0, PS2: 0.0, SBF: 0.0, HB: 0.0, VT: 0.0, SV: 0.0
    };
    fighterData.unshift(marioRow);
  }

  // === 0. グリッド・カード共通の「対象ファイター固定バナー」===
  // スクロール中も常に上部に貼り付いて「誰の拒否ステージか」を明示する
  const fighterBanner = document.createElement("div");
  fighterBanner.className = "stage-fighter-banner";

  const bannerImg = document.createElement("img");
  bannerImg.src = getFighterImageByEnglishId(fighterName);
  bannerImg.alt = fighterName;
  bannerImg.className = "stage-fighter-banner-img";

  const bannerLabel = document.createElement("div");
  bannerLabel.className = "stage-fighter-banner-label";

  const bannerSub = document.createElement("span");
  bannerSub.className = "stage-fighter-banner-sub";
  bannerSub.textContent = "拒否ステージ一覧";

  const bannerName = document.createElement("span");
  bannerName.className = "stage-fighter-banner-name";
  bannerName.textContent = fighterName;

  bannerLabel.appendChild(bannerSub);
  bannerLabel.appendChild(bannerName);
  fighterBanner.appendChild(bannerImg);
  fighterBanner.appendChild(bannerLabel);
  container.appendChild(fighterBanner);

  // === 1. グリッドテーブル表示 (tableView) ===
  const tableView = document.createElement("div");
  tableView.className = "stage-table-view";

  const table = document.createElement("table");
  table.className = "stage-ban-table";

  const thead = document.createElement("thead");
  const trHead = document.createElement("tr");

  // ヘッダー左端に対象ファイターの画像を表示して誰の表かひと目でわかるように
  const thFighter = document.createElement("th");
  thFighter.className = "th-fighter-col";
  const thFighterInner = document.createElement("div");
  thFighterInner.className = "th-fighter-inner";
  const thFighterImg = document.createElement("img");
  thFighterImg.src = getFighterImageByEnglishId(fighterName);
  thFighterImg.alt = fighterName;
  thFighterImg.className = "th-fighter-img";
  thFighterInner.appendChild(thFighterImg);
  
  const thFighterLabel = document.createElement("span");
  thFighterLabel.className = "th-fighter-label";
  thFighterLabel.textContent = "拒否ステージ";
  thFighterInner.appendChild(thFighterLabel);
  
  thFighter.appendChild(thFighterInner);
  trHead.appendChild(thFighter);

  STAGE_CONFIG.forEach(stage => {
    const th = document.createElement("th");
    th.innerHTML = `
      <div class="header-stage-inner">
        <img src="${resolvePath(stage.img)}" alt="${stage.name}" class="header-stage-img">
        <span class="header-stage-name">${stage.name}</span>
      </div>
    `;
    trHead.appendChild(th);
  });
  thead.appendChild(trHead);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  const filteredData = fighterData.filter(row => row.BAN_FIGHTER !== "omakase" && row.BAN_FIGHTER !== "おまかせ");
  
  filteredData.forEach((row, index) => {
    const tr = document.createElement("tr");
    tr.className = "stage-ban-data-row";
    const tdFighter = document.createElement("td");
    tdFighter.className = "fighter-col";
    const imgFighter = document.createElement("img");
    imgFighter.src = getFighterImageByEnglishId(row.BAN_FIGHTER);
    imgFighter.alt = row.BAN_FIGHTER;

    // ファイター画像にリンクを付与
    const fighterPageUrl = getFighterPageUrl(row.BAN_FIGHTER);
    if (fighterPageUrl) {
      const aFighter = document.createElement("a");
      aFighter.href = fighterPageUrl;
      aFighter.title = row.BAN_FIGHTER;
      aFighter.appendChild(imgFighter);
      tdFighter.appendChild(aFighter);
    } else {
      tdFighter.appendChild(imgFighter);
    }

    tr.appendChild(tdFighter);

    STAGE_CONFIG.forEach(stage => {
      const tdStage = document.createElement("td");
      tdStage.className = "prob-col";
      
      const prob = row[stage.id] || 0;
      tdStage.textContent = `${prob.toFixed(1)}%`;
      
      // 元の色分け（赤色透過度）に戻す
      const alpha = prob / 100.0;
      tdStage.style.backgroundColor = `rgba(231, 65, 43, ${alpha})`;
      tdStage.style.color = alpha > 0.4 ? "white" : "#ddd";
      tdStage.style.textShadow = alpha > 0.4 ? "1px 1px 2px black" : "none";
      
      tr.appendChild(tdStage);
    });

    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  tableView.appendChild(table);

  // === 2. カード形式表示 (cardsView) ===
  const cardsView = document.createElement("div");
  cardsView.className = "stage-cards-view";

  // カード表示のヘッダー（「誰の拒否ステージか」を明示）
  // ※共通バナーがあるのでここは省略 — グリッドからカードに切り替えた際も
  //   バナーが残るので問題なし

  filteredData.forEach((row, index) => {
    const card = document.createElement("div");
    card.className = "fighter-card stage-ban-data-card";
    card.style.cursor = "pointer";
    card.title = "クリックで拡大表示";

    // ファイター情報
    const cardFighterInfo = document.createElement("div");
    cardFighterInfo.className = "card-fighter-info";

    const imgFighter = document.createElement("img");
    imgFighter.src = getFighterImageByEnglishId(row.BAN_FIGHTER);
    imgFighter.alt = row.BAN_FIGHTER;

    const nameFighter = document.createElement("span");
    nameFighter.className = "card-fighter-name";
    nameFighter.textContent = row.BAN_FIGHTER;

    // ファイター画像・名前にリンクを付与
    const cardFighterPageUrl = getFighterPageUrl(row.BAN_FIGHTER);
    if (cardFighterPageUrl) {
      const aFighterImg = document.createElement("a");
      aFighterImg.href = cardFighterPageUrl;
      aFighterImg.title = row.BAN_FIGHTER;
      aFighterImg.appendChild(imgFighter);
      const aFighterName = document.createElement("a");
      aFighterName.href = cardFighterPageUrl;
      aFighterName.className = "card-fighter-link";
      aFighterName.appendChild(nameFighter);
      cardFighterInfo.appendChild(aFighterImg);
      cardFighterInfo.appendChild(aFighterName);
    } else {
      cardFighterInfo.appendChild(imgFighter);
      cardFighterInfo.appendChild(nameFighter);
    }
    card.appendChild(cardFighterInfo);

    // 拒否ステージ一覧 (拒否率順にソート)
    const cardStagesList = document.createElement("div");
    cardStagesList.className = "card-stages-list";

    const stagesWithProb = STAGE_CONFIG.map(stage => ({
      name: stage.name,
      img: stage.img,
      prob: row[stage.id] || 0
    })).sort((a, b) => b.prob - a.prob);

    stagesWithProb.forEach(s => {
      const cardStageItem = document.createElement("div");
      cardStageItem.className = "card-stage-item";

      const imgStage = document.createElement("img");
      imgStage.src = resolvePath(s.img);
      imgStage.alt = s.name;

      const nameStage = document.createElement("span");
      nameStage.className = "card-stage-name";
      nameStage.textContent = s.name;

      const probStage = document.createElement("span");
      probStage.className = "card-stage-prob";
      probStage.textContent = `${s.prob.toFixed(1)}%`;

      // バッジの背景色も元の赤色透過度ルールに準拠
      const alpha = s.prob / 100.0;
      probStage.style.backgroundColor = `rgba(231, 65, 43, ${alpha})`;
      probStage.style.color = alpha > 0.4 ? "white" : "#ddd";
      probStage.style.textShadow = alpha > 0.4 ? "1px 1px 2px black" : "none";

      cardStageItem.appendChild(imgStage);
      cardStageItem.appendChild(nameStage);
      cardStageItem.appendChild(probStage);
      cardStagesList.appendChild(cardStageItem);
    });

    card.appendChild(cardStagesList);

    // カードクリックで同じ行のカードをすべて展開・格納する
    card.addEventListener("click", (e) => {
      // リンクがクリックされた場合は遷移を優先する
      if (e.target.closest("a")) return;
      
      const isOpen = card.classList.contains("is-open");
      const allCards = Array.from(cardsView.querySelectorAll(".fighter-card"));
      const myTop = card.offsetTop;
      
      // 同じ行にある（offsetTopが等しい）カードを抽出
      const rowCards = allCards.filter(c => c.offsetTop === myTop);
      
      if (isOpen) {
        // すでに開いていれば閉じる
        rowCards.forEach(c => c.classList.remove("is-open"));
      } else {
        // 閉じていれば開く
        rowCards.forEach(c => c.classList.add("is-open"));
      }
    });

    cardsView.appendChild(card);
  });

  container.appendChild(tableView);
  container.appendChild(cardsView);

  // 初期状態は未展開とするため、コンテナから expand クラスを外す
  container.classList.remove("is-expanded");

  if (filteredData.length > 5) {
    const btnDiv = document.createElement("div");
    btnDiv.style.textAlign = "center";
    btnDiv.style.marginTop = "16px";
    const btn = document.createElement("button");
    btn.className = "stage-ban-expand-btn";
    btn.textContent = "さらに表示";
    btn.style.padding = "8px 24px";
    btn.style.cursor = "pointer";
    btn.style.background = "linear-gradient(135deg, #e7412b, #c43420)";
    btn.style.color = "white";
    btn.style.border = "none";
    btn.style.borderRadius = "20px";
    btn.style.fontWeight = "bold";
    btn.style.boxShadow = "0 4px 12px rgba(231, 65, 43, 0.4)";
    btn.style.transition = "transform 0.2s";

    btn.addEventListener("click", () => {
      const isExpanded = container.classList.toggle("is-expanded");
      btn.textContent = isExpanded ? "閉じる" : "さらに表示";
    });

    btn.addEventListener("mouseover", () => btn.style.transform = "scale(1.05)");
    btn.addEventListener("mouseout", () => btn.style.transform = "scale(1)");

    btnDiv.appendChild(btn);
    container.appendChild(btnDiv);
  }

  // DOMにレンダリング後、最初の行のカードを開く
  setTimeout(() => {
    const allCards = Array.from(cardsView.querySelectorAll(".fighter-card"));
    if (allCards.length > 0) {
      const firstRowTop = allCards[0].offsetTop;
      allCards.forEach(c => {
        if (c.offsetTop === firstRowTop) {
          c.classList.add("is-open");
        }
      });
    }
  }, 50);
}

function createViewToggle(container, tableContainer) {
  if (container.querySelector(".view-toggle-container")) return;

  const toggleContainer = document.createElement("div");
  toggleContainer.className = "view-toggle-container";
  
  const btnGrid = document.createElement("button");
  btnGrid.id = "view-toggle-grid";
  btnGrid.className = "view-toggle-btn";
  btnGrid.textContent = "テーブル";
  
  const btnCards = document.createElement("button");
  btnCards.id = "view-toggle-cards";
  btnCards.className = "view-toggle-btn active";
  btnCards.textContent = "カード表示";

  toggleContainer.appendChild(btnCards);
  toggleContainer.appendChild(btnGrid);
  
  // セレクターDivの後、tableContainerの前に挿入するために、挿入位置を調整
  const selector = container.querySelector(".player-selector");
  if (selector) {
    container.insertBefore(toggleContainer, tableContainer);
  } else {
    container.appendChild(toggleContainer);
  }

  // 初期ビューモード: カード表示をデフォルトにする
  let currentViewMode = "cards";
  tableContainer.classList.add("view-cards");

  const setViewMode = (mode) => {
    currentViewMode = mode;
    if (mode === "grid") {
      btnGrid.classList.add("active");
      btnCards.classList.remove("active");
      tableContainer.classList.remove("view-cards");
    } else {
      btnGrid.classList.remove("active");
      btnCards.classList.add("active");
      tableContainer.classList.add("view-cards");
    }
  };
  
  btnGrid.addEventListener("click", () => setViewMode("grid"));
  btnCards.addEventListener("click", () => setViewMode("cards"));
}

function initFloatingRateSelector(rateSelect) {
  if (!rateSelect) return;

  // すでに存在している場合は作成しない
  if (document.querySelector(".floating-rate-selector")) return;

  // フローティングコンテナを作成
  const floatingDiv = document.createElement("div");
  floatingDiv.className = "floating-rate-selector";
  
  // グラフ風のSVGアイコン
  const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  icon.setAttribute("width", "16");
  icon.setAttribute("height", "16");
  icon.setAttribute("viewBox", "0 0 24 24");
  icon.setAttribute("fill", "none");
  icon.setAttribute("stroke", "white");
  icon.setAttribute("stroke-width", "2");
  icon.setAttribute("stroke-linecap", "round");
  icon.setAttribute("stroke-linejoin", "round");
  icon.innerHTML = `<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>`;
  floatingDiv.appendChild(icon);

  // ラベル
  const label = document.createElement("span");
  label.textContent = "レート:";
  label.style.fontSize = "12px";
  label.style.fontWeight = "bold";
  label.style.color = "white";
  floatingDiv.appendChild(label);

  // セレクトボックスの複製
  const newSelect = document.createElement("select");
  Array.from(rateSelect.options).forEach(opt => {
    const newOpt = document.createElement("option");
    newOpt.value = opt.value;
    newOpt.textContent = opt.textContent;
    newOpt.selected = opt.selected;
    newSelect.appendChild(newOpt);
  });
  floatingDiv.appendChild(newSelect);

  document.body.appendChild(floatingDiv);

  // フローティングセレクト値の変更をメインセレクトに同期
  newSelect.addEventListener("change", (e) => {
    rateSelect.value = e.target.value;
    rateSelect.dispatchEvent(new Event("change"));
  });

  // メインセレクト値の変更をフローティングセレクトに同期
  rateSelect.addEventListener("change", (e) => {
    newSelect.value = e.target.value;
  });

  // IntersectionObserverによる表示・非表示の切り替え
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // メインセレクトが表示されている時はフローティングを非表示にする
        floatingDiv.classList.remove("visible");
      } else {
        // メインセレクトが画面外になったらフローティングを表示する
        floatingDiv.classList.add("visible");
      }
    });
  }, {
    threshold: 0
  });

  // メインセレクトの親要素コンテナを監視
  const parentContainer = rateSelect.closest(".rate-selector-container") || rateSelect;
  observer.observe(parentContainer);
}


