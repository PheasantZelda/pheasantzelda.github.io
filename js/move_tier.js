/**
 * move_tier.js
 * スマブラSP 最強技ジェネレーター
 */
'use strict';

// ===== 技データ（6列×4行 = 24マス）=====
const MOVES = [
  { ja: 'ベース',en: 'Base',            cls: 'label-other'  },
  { ja: '弱',    en: 'Jab',             cls: 'label-ground' },
  { ja: 'DA',    en: 'Dash Attack',     cls: 'label-ground' },
  { ja: '上強',  en: 'Up tilt',         cls: 'label-ground' },
  { ja: '横強',  en: 'Forward tilt',    cls: 'label-ground' },
  { ja: '下強',  en: 'Down tilt',       cls: 'label-ground' },
  { ja: '空N',   en: 'Neutral air',     cls: 'label-air'    },
  { ja: '空前',  en: 'Forward air',     cls: 'label-air'    },
  { ja: '空後',  en: 'Back air',        cls: 'label-air'    },
  { ja: '空上',  en: 'Up air',          cls: 'label-air'    },
  { ja: '空下',  en: 'Down air',        cls: 'label-air'    },
  { ja: '上スマ',en: 'Up smash',        cls: 'label-smash'  },
  { ja: '横スマ',en: 'Forward smash',   cls: 'label-smash'  },
  { ja: '下スマ',en: 'Down smash',      cls: 'label-smash'  },
  { ja: 'NB',    en: 'Neutral special', cls: 'label-sp'     },
  { ja: '上B',   en: 'Up special',      cls: 'label-sp'     },
  { ja: '横B',   en: 'Side special',    cls: 'label-sp'     },
  { ja: '下B',   en: 'Down special',    cls: 'label-sp'     },
  { ja: '掴み',  en: 'Grab',            cls: 'label-throw'  },
  { ja: '前投げ',en: 'Forward throw',   cls: 'label-throw'  },
  { ja: '後投げ',en: 'Back throw',      cls: 'label-throw'  },
  { ja: '上投げ',en: 'Up throw',        cls: 'label-throw'  },
  { ja: '下投げ',en: 'Down throw',      cls: 'label-throw'  },
  { ja: '切り札',en: 'Final smash',     cls: 'label-other'  },
];

// ===== ファイターデータ =====
const FIGHTERS = [
  { name: 'マリオ',              file: '01.マリオ_1p_512x512.png'              },
  { name: 'ドンキーコング',       file: '02.ドンキーコング_1p_512x512.png'      },
  { name: 'リンク',               file: '03.リンク_1p_512x512.png'              },
  { name: 'サムス',               file: '04.サムス_1p_512x512.png'              },
  { name: 'ダークサムス',         file: '05.ダークサムス_1p_512x512.png'        },
  { name: 'ヨッシー',             file: '06.ヨッシー_1p_512x512.png'            },
  { name: 'カービィ',             file: '07.カービィ_1p_512x512.png'            },
  { name: 'フォックス',           file: '08.フォックス_1p_512x512.png'          },
  { name: 'ピカチュウ',           file: '09.ピカチュウ_1p_512x512.png'          },
  { name: 'ルイージ',             file: '10.ルイージ_1p_512x512.png'            },
  { name: 'ネス',                 file: '11.ネス_1p_512x512.png'                },
  { name: 'キャプテン・ファルコン',file: '12.キャプテン・ファルコン_1p_512x512.png'},
  { name: 'プリン',               file: '13.プリン_1p_512x512.png'              },
  { name: 'ピーチ',               file: '14.ピーチ_1p_512x512.png'              },
  { name: 'デイジー',             file: '15.デイジー_1p_512x512.png'            },
  { name: 'クッパ',               file: '16.クッパ_1p_512x512.png'              },
  { name: 'アイスクライマー',     file: '17.アイスクライマー_1p_512x512.png'    },
  { name: 'シーク',               file: '18.シーク_1p_512x512.png'              },
  { name: 'ゼルダ',               file: '19.ゼルダ_1p_512x512.png'              },
  { name: 'ドクターマリオ',       file: '20.ドクターマリオ_1p_512x512.png'      },
  { name: 'ピチュー',             file: '21.ピチュー_1p_512x512.png'            },
  { name: 'ファルコ',             file: '22.ファルコ_1p_512x512.png'            },
  { name: 'マルス',               file: '23.マルス_1p_512x512.png'              },
  { name: 'ルキナ',               file: '24.ルキナ_1p_512x512.png'              },
  { name: 'こどもリンク',         file: '25.こどもリンク_1p_512x512.png'        },
  { name: 'ガノンドロフ',         file: '26.ガノンドロフ_1p_512x512.png'        },
  { name: 'ミュウツー',           file: '27.ミュウツー_1p_512x512.png'          },
  { name: 'ロイ',                 file: '28.ロイ_1p_512x512.png'                },
  { name: 'クロム',               file: '29.クロム_1p_512x512.png'              },
  { name: 'Mr.ゲーム&ウォッチ',  file: '30.Mr.ゲーム&ウォッチ_1p_512x512.png' },
  { name: 'メタナイト',           file: '31.メタナイト_1p_512x512.png'          },
  { name: 'ピット',               file: '32.ピット_1p_512x512.png'              },
  { name: 'ブラックピット',       file: '33.ブラックピット_1p_512x512.png'      },
  { name: 'ゼロスーツサムス',     file: '34.ゼロスーツサムス_1p_512x512.png'    },
  { name: 'ワリオ',               file: '35.ワリオ_1p_512x512.png'              },
  { name: 'スネーク',             file: '36.スネーク_1p_512x512.png'            },
  { name: 'アイク',               file: '37.アイク_1p_512x512.png'              },
  { name: 'ポケモントレーナー',   file: '38.ポケモントレーナー_1p_512x512.png'  },
  { name: 'ゼニガメ',             file: '38-1.ゼニガメ_1p_512x512.png'          },
  { name: 'フシギソウ',           file: '38-2.フシギソウ_1p_512x512.png'        },
  { name: 'リザードン',           file: '38-3.リザードン_1p_512x512.png'        },
  { name: 'ディディーコング',     file: '39.ディディーコング_1p_512x512.png'    },
  { name: 'リュカ',               file: '40.リュカ_1p_512x512.png'              },
  { name: 'ソニック',             file: '41.ソニック_1p_512x512.png'            },
  { name: 'デデデ',               file: '42.デデデ_1p_512x512.png'              },
  { name: 'ピクミン＆オリマー',   file: '43.ピクミン＆オリマー_1p_512x512.png'  },
  { name: 'ルカリオ',             file: '44.ルカリオ_1p_512x512.png'            },
  { name: 'ロボット',             file: '45.ロボット_1p_512x512.png'            },
  { name: 'トゥーンリンク',       file: '46.トゥーンリンク_1p_512x512.png'      },
  { name: 'ウルフ',               file: '47.ウルフ_1p_512x512.png'              },
  { name: 'むらびと',             file: '48.むらびと_1p_512x512.png'            },
  { name: 'ロックマン',           file: '49.ロックマン_1p_512x512.png'          },
  { name: 'Wii Fit トレーナー',   file: '50.Wii Fit トレーナー_1p_512x512.png'  },
  { name: 'ロゼッタ＆チコ',       file: '51.ロゼッタ＆チコ_1p_512x512.png'      },
  { name: 'リトルマック',         file: '52.リトルマック_1p_512x512.png'        },
  { name: 'ゲッコウガ',           file: '53.ゲッコウガ_1p_512x512.png'          },
  { name: '格闘Mii',             file: '54.格闘Mii_1p_512x512.png'             },
  { name: '剣術Mii',             file: '55.剣術Mii_1p_512x512.png'             },
  { name: '射撃Mii',             file: '56.射撃Mii_1p_512x512.png'             },
  { name: 'パルテナ',             file: '57.パルテナ_1p_512x512.png'            },
  { name: 'パックマン',           file: '58.パックマン_1p_512x512.png'          },
  { name: 'ルフレ',               file: '59.ルフレ_1p_512x512.png'              },
  { name: 'シュルク',             file: '60.シュルク_1p_512x512.png'            },
  { name: 'クッパJr.',            file: '61.クッパJr._1p_512x512.png'           },
  { name: 'ダックハント',         file: '62.ダックハント_1p_512x512.png'        },
  { name: 'リュウ',               file: '63.リュウ_1p_512x512.png'              },
  { name: 'ケン',                 file: '64.ケン_1p_512x512.png'                },
  { name: 'クラウド',             file: '65.クラウド_1p_512x512.png'            },
  { name: 'カムイ',               file: '66.カムイ_1p_512x512.png'              },
  { name: 'ベヨネッタ',           file: '67.ベヨネッタ_1p_512x512.png'          },
  { name: 'インクリング',         file: '68.インクリング_1p_512x512.png'        },
  { name: 'リドリー',             file: '69.リドリー_1p_512x512.png'            },
  { name: 'シモン',               file: '70.シモン_1p_512x512.png'              },
  { name: 'リヒター',             file: '71.リヒター_1p_512x512.png'            },
  { name: 'キングクルール',       file: '72.キングクルール_1p_512x512.png'      },
  { name: 'しずえ',               file: '73.しずえ_1p_512x512.png'              },
  { name: 'ガオガエン',           file: '74.ガオガエン_1p_512x512.png'          },
  { name: 'パックンフラワー',     file: '75.パックンフラワー_1p_512x512.png'    },
  { name: 'ジョーカー',           file: '76.ジョーカー_1p_512x512.png'          },
  { name: '勇者',                 file: '77.勇者_1p_512x512.png'                },
  { name: 'バンジョー＆カズーイ', file: '78.バンジョー＆カズーイ_1p_512x512.png'},
  { name: 'テリー',               file: '79.テリー_1p_512x512.png'              },
  { name: 'ベレトス',             file: '80.ベレトス_1p_512x512.png'            },
  { name: 'ミェンミェン',         file: '81.ミェンミェン_1p_512x512.png'        },
  { name: 'スティーブ',           file: '82.スティーブ_1p_512x512.png'          },
  { name: 'セフィロス',           file: '83.セフィロス_1p_512x512.png'          },
  { name: 'ホムラ',               file: '84.ホムラ_1p_512x512.png'            },
  { name: 'ヒカリ',               file: '84.ヒカリ_1p_512x512.png'            },
  { name: 'カズヤ',               file: '85.カズヤ_1p_512x512.png'              },
  { name: 'ソラ',                 file: '86.ソラ_1p_512x512.png'                },
];

const IMG_BASE = './img/fighter_all/';
let currentLang = 'ja';

// ===== Lazy Loading（画面外はロードしない）=====
const lazyImageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      if (img.dataset.src) {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      }
      observer.unobserve(img);
    }
  });
}, { rootMargin: '100px' });

// ===== ドラッグ関連（PC）=====
let dragSrcFighter = null;
let dragSrcCellEl  = null;

// ===== タッチドラッグ関連（スマホ）=====
let touchDragFighter = null;   // プールからのドラッグ
let touchDragCellEl  = null;   // セル間移動
let touchClone       = null;   // ドラッグ中のクローン要素
let touchStartX      = 0;
let touchStartY      = 0;

// ===== ドラッグ中クローン生成 =====
function createTouchClone(src, x, y) {
  removeTouchClone();
  touchClone = document.createElement('img');
  touchClone.src = src;
  touchClone.style.cssText = `
    position:fixed; width:70px; height:70px; object-fit:contain;
    pointer-events:none; opacity:0.7; z-index:9999;
    left:${x - 35}px; top:${y - 35}px; border-radius:4px;
  `;
  document.body.appendChild(touchClone);
}

function moveTouchClone(x, y) {
  if (touchClone) {
    touchClone.style.left = (x - 35) + 'px';
    touchClone.style.top  = (y - 35) + 'px';
  }
}

function removeTouchClone() {
  if (touchClone) { touchClone.remove(); touchClone = null; }
}

// ===== タッチ座標から drop 先のセルを取得 =====
function getCellUnderTouch(x, y) {
  // クローンを一時非表示にして elementFromPoint を取得
  if (touchClone) touchClone.style.display = 'none';
  const el = document.elementFromPoint(x, y);
  if (touchClone) touchClone.style.display = '';
  if (!el) return null;
  return el.closest('.move-cell');
}

// ===== グリッド生成 =====
function buildGrid() {
  const grid = document.getElementById('move-grid');
  if (!grid) return;
  grid.innerHTML = '';

  MOVES.forEach((move, idx) => {
    const cell = document.createElement('div');
    cell.className = 'move-cell';
    cell.dataset.idx = idx;

    // 技名ラベル（上部）
    const label = document.createElement('div');
    label.className = 'cell-label ' + move.cls;
    label.dataset.labelIdx = idx;
    label.textContent = move[currentLang];

    // 画像ドロップエリア（下部）
    const imgArea = document.createElement('div');
    imgArea.className = 'cell-img-area';
    imgArea.id = 'cell-' + idx;

    cell.appendChild(label);
    cell.appendChild(imgArea);
    grid.appendChild(cell);

    // PCドラッグ受け入れ
    cell.addEventListener('dragover', e => {
      e.preventDefault();
      cell.classList.add('drag-over');
    });
    cell.addEventListener('dragleave', () => cell.classList.remove('drag-over'));
    cell.addEventListener('drop', e => {
      e.preventDefault();
      cell.classList.remove('drag-over');
      if (dragSrcFighter) {
        setCellImage(imgArea, dragSrcFighter);
        dragSrcFighter = null;
      } else if (dragSrcCellEl && dragSrcCellEl !== imgArea) {
        const img = dragSrcCellEl.querySelector('img');
        if (img) {
          const f = { name: img.alt, file: img.dataset.file };
          setCellImage(imgArea, f);
          dragSrcCellEl.innerHTML = '';
        }
        dragSrcCellEl = null;
      }
    });
  });
}

// ===== セルへ画像をセット =====
function setCellImage(imgArea, fighter) {
  imgArea.innerHTML = '';
  const img = document.createElement('img');
  img.src = IMG_BASE + fighter.file;
  img.alt = fighter.name;
  img.dataset.file = fighter.file;
  img.className = 'cell-fighter-img';
  img.draggable = true;

  // セル間PC移動
  img.addEventListener('dragstart', () => {
    dragSrcFighter = null;
    dragSrcCellEl = imgArea;
  });

  // セル内画像のタッチ開始（セル間移動）
  img.addEventListener('touchstart', e => {
    e.stopPropagation();
    const t = e.touches[0];
    touchStartX = t.clientX; touchStartY = t.clientY;
    touchDragCellEl = imgArea;
    touchDragFighter = null;
    createTouchClone(img.src, t.clientX, t.clientY);
  }, { passive: true });

  const rmBtn = document.createElement('div');
  rmBtn.className = 'cell-remove-btn';
  rmBtn.innerHTML = '&times;';
  rmBtn.addEventListener('click', ev => {
    ev.stopPropagation();
    imgArea.innerHTML = '';
  });

  imgArea.appendChild(img);
  imgArea.appendChild(rmBtn);
}

// ===== ファイタープール生成 =====
function buildPool() {
  const pool = document.getElementById('fighter-pool');
  if (!pool) return;
  pool.innerHTML = '';

  FIGHTERS.forEach((fighter) => {
    const item = document.createElement('div');
    item.className = 'item';
    item.title = fighter.name;

    const img = document.createElement('img');
    img.dataset.src = IMG_BASE + fighter.file;
    img.alt = fighter.name;
    img.draggable = true;

    // PCドラッグ開始
    img.addEventListener('dragstart', () => {
      dragSrcFighter = fighter;
      dragSrcCellEl  = null;
    });

    // タッチ開始（プールから）
    item.addEventListener('touchstart', e => {
      const t = e.touches[0];
      touchStartX = t.clientX; touchStartY = t.clientY;
      touchDragFighter = fighter;
      touchDragCellEl  = null;
      const src = img.src || IMG_BASE + fighter.file;
      createTouchClone(src, t.clientX, t.clientY);
    }, { passive: true });

    lazyImageObserver.observe(img);
    item.appendChild(img);
    pool.appendChild(item);
  });
}

// ===== グローバルタッチイベント（touchmove / touchend）=====
document.addEventListener('touchmove', e => {
  if (!touchDragFighter && !touchDragCellEl) return;
  const t = e.touches[0];
  moveTouchClone(t.clientX, t.clientY);
  // スクロール防止（ドラッグ中のみ）
  const dx = Math.abs(t.clientX - touchStartX);
  const dy = Math.abs(t.clientY - touchStartY);
  if (dx > 5 || dy > 5) e.preventDefault();
}, { passive: false });

document.addEventListener('touchend', e => {
  if (!touchDragFighter && !touchDragCellEl) return;
  const t = e.changedTouches[0];
  const targetCell = getCellUnderTouch(t.clientX, t.clientY);

  if (targetCell) {
    const cellIdx = targetCell.dataset.idx;
    const imgArea = document.getElementById('cell-' + cellIdx);
    if (imgArea) {
      if (touchDragFighter) {
        setCellImage(imgArea, touchDragFighter);
      } else if (touchDragCellEl && touchDragCellEl !== imgArea) {
        const srcImg = touchDragCellEl.querySelector('img');
        if (srcImg) {
          const f = { name: srcImg.alt, file: srcImg.dataset.file };
          setCellImage(imgArea, f);
          touchDragCellEl.innerHTML = '';
        }
      }
    }
  }

  touchDragFighter = null;
  touchDragCellEl  = null;
  removeTouchClone();
}, { passive: true });

// ===== 言語切り替え =====
function setLang(lang) {
  currentLang = lang;
  document.getElementById('lang-ja').classList.toggle('active', lang === 'ja');
  document.getElementById('lang-en').classList.toggle('active', lang === 'en');
  document.querySelectorAll('.cell-label').forEach(lbl => {
    const i = parseInt(lbl.dataset.labelIdx);
    if (!isNaN(i) && MOVES[i]) lbl.textContent = MOVES[i][lang];
  });
}

// ===== リセット =====
function resetAll() {
  if (!confirm('全ての配置をリセットしますか？')) return;
  document.querySelectorAll('.cell-img-area').forEach(area => { area.innerHTML = ''; });
}

// ===== 画像ダウンロード =====
function downloadImage(targetId) {
  const box = document.getElementById(targetId || 'canvas-box');
  if (!box || typeof html2canvas === 'undefined') {
    alert('html2canvas が読み込まれていません。');
    return;
  }
  const ow = box.style.width, om = box.style.maxWidth;
  box.style.width = '1050px';
  box.style.maxWidth = '1050px';
  setTimeout(() => {
    html2canvas(box, { scale: 2, useCORS: true, backgroundColor: '#1b1a1a' }).then(canvas => {
      box.style.width = ow; box.style.maxWidth = om;
      const a = document.createElement('a');
      a.download = 'smash_move_tier_' + Date.now() + '.png';
      a.href = canvas.toDataURL('image/png');
      a.click();
    }).catch(err => {
      box.style.width = ow; box.style.maxWidth = om;
      console.error(err);
      alert('画像の生成に失敗しました。');
    });
  }, 100);
}

window.addEventListener('DOMContentLoaded', () => {
  buildPool();
  buildGrid();
  const titleInput = document.getElementById('grid-title-input');
  if (titleInput) {
    titleInput.addEventListener('input', () => {
      const d = document.getElementById('grid-title-display');
      if (d) d.textContent = titleInput.value;
    });
  }
});