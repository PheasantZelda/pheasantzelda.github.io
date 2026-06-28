/**
 * color_tier.js
 * スマブラSP カラーバリエーションジェネレーター
 */
'use strict';

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
  { name: 'ホムヒカ',             file: '84.ホムヒカ_1p_512x512.png'            },
  { name: 'カズヤ',               file: '85.カズヤ_1p_512x512.png'              },
  { name: 'ソラ',                 file: '86.ソラ_1p_512x512.png'                },
];

const IMG_BASE = './img/fighter_all/';
const TOTAL_CELLS = 90; // 10列×9行

// ===== Lazy Loading（画面に近づいた時だけ読み込む）=====
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
}, { rootMargin: '50px' }); // 画面に入る直前にロード

let activeCellIdx = null;

// ===== グリッド生成 =====
function buildGrid() {
  const grid = document.getElementById('color-grid');
  if (!grid) return;
  grid.innerHTML = '';

  for (let i = 0; i < TOTAL_CELLS; i++) {
    const cell = document.createElement('div');
    cell.className = 'color-cell';
    cell.dataset.idx = i;

    if (i >= FIGHTERS.length) {
      // 余りマスは非表示
      cell.style.visibility = 'hidden';
      cell.style.pointerEvents = 'none';
      grid.appendChild(cell);
      continue;
    }

    const fighter = FIGHTERS[i];

    // ===== 上部バッジ（初期は空文字 → 未選択時は何も表示しない）=====
    const badge = document.createElement('div');
    badge.className = 'color-cell-badge';
    badge.id = 'badge-' + i;
    badge.textContent = ''; // 未選択時は空

    // ===== 画像エリア =====
    const imgArea = document.createElement('div');
    imgArea.className = 'color-cell-img-area';

    const img = document.createElement('img');
    img.id = 'img-' + i;
    img.dataset.src = IMG_BASE + fighter.file;
    img.alt = fighter.name;
    img.style.opacity = '0.3'; // 初期：薄く表示
    imgArea.appendChild(img);
    lazyImageObserver.observe(img);

    cell.appendChild(badge);
    cell.appendChild(imgArea);

    // クリック / タップでカラーモーダルを開く
    cell.addEventListener('click', () => openColorModal(i, fighter));

    grid.appendChild(cell);
  }
}

// ===== カラー選択モーダルを開く =====
function openColorModal(cellIdx, fighter) {
  activeCellIdx = cellIdx;
  const modal = document.getElementById('color-modal');
  document.getElementById('modal-fighter-name').textContent = fighter.name + ' のカラーを選択';

  const list = document.getElementById('modal-color-list');
  list.innerHTML = '';

  // ファイル名からベース部分を抽出（例: "01.マリオ"）
  const match = fighter.file.match(/^(.*?)_\dp_512x512\.png$/);
  const baseName = match ? match[1] : fighter.file.replace('.png', '');

  for (let p = 1; p <= 8; p++) {
    const colorFile = match ? baseName + '_' + p + 'p_512x512.png' : fighter.file;
    const colorSrc = IMG_BASE + colorFile;

    const item = document.createElement('div');
    item.className = 'modal-color-item';

    const img = document.createElement('img');
    img.src = colorSrc;
    img.alt = p + 'P';

    const lbl = document.createElement('div');
    lbl.className = 'modal-color-label';
    lbl.textContent = p + 'P';

    item.appendChild(img);
    item.appendChild(lbl);
    item.addEventListener('click', () => applyColor(p, colorSrc));
    list.appendChild(item);
  }

  modal.classList.remove('hidden');
}

function closeColorModal() {
  document.getElementById('color-modal').classList.add('hidden');
  activeCellIdx = null;
}

// ===== カラーをセルに反映 =====
function applyColor(colorP, imgSrc) {
  if (activeCellIdx === null) return;

  const badge = document.getElementById('badge-' + activeCellIdx);
  const img   = document.getElementById('img-'   + activeCellIdx);

  // バッジに「*P」を表示
  if (badge) badge.textContent = colorP + 'P';
  // 画像を更新して通常の透明度に
  if (img) {
    img.src = imgSrc;
    img.style.opacity = '1';
  }

  closeColorModal();
}

// ===== リセット =====
function resetColorTable() {
  if (!confirm('全ての配置を初期状態（薄め表示）にリセットしますか？')) return;

  FIGHTERS.forEach((fighter, i) => {
    const badge = document.getElementById('badge-' + i);
    const img   = document.getElementById('img-'   + i);
    if (badge) badge.textContent = ''; // バッジをクリア
    if (img) {
      img.src = IMG_BASE + fighter.file;
      img.style.opacity = '0.3';
    }
  });
}

// ===== 画像ダウンロード =====
function downloadImage(targetId) {
  const box = document.getElementById(targetId || 'color-canvas-box');
  if (!box || typeof html2canvas === 'undefined') {
    alert('html2canvas が読み込まれていません。');
    return;
  }
  const ow = box.style.width, om = box.style.maxWidth;
  box.style.width = '1050px';
  box.style.maxWidth = '1050px';

  setTimeout(() => {
    html2canvas(box, { scale: 2, useCORS: true, backgroundColor: '#2c2a2a' }).then(canvas => {
      box.style.width = ow; box.style.maxWidth = om;
      const a = document.createElement('a');
      a.download = 'smash_color_tier_' + Date.now() + '.png';
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
  buildGrid();

  const titleInput = document.getElementById('color-title-input');
  if (titleInput) {
    titleInput.addEventListener('input', () => {
      const d = document.getElementById('color-title-display');
      if (d) d.textContent = titleInput.value;
    });
  }
});
