let draggedItem = null;

const nonImageAreas = document.querySelectorAll('.Fighter_box');
const mappingAreas = document.querySelectorAll('.MU_result');
const draggableItems = document.querySelectorAll('.item');
const draggableItemstext = document.querySelectorAll('.text_box');

function handleTouchStartText(e) {
  if (!e.target.classList.contains('text_box')) {
    return;
  }

  draggedItem = e.target;
  draggedItem.style.left = ''; // スタイルをリセット
  draggedItem.style.top = ''; // スタイルをリセット
  let touch = e.touches[0];
  startX = touch.clientX - parseFloat(draggedItem.style.left || 0);
  startY = touch.clientY - parseFloat(draggedItem.style.top || 0);
  e.preventDefault();
}

function handleTouchStart(e) {
  draggedItem = e.target;
  draggedItem.style.left = ''; // スタイルをリセット
  draggedItem.style.top = ''; // スタイルをリセット
  let touch = e.touches[0];
  startX = touch.clientX - parseFloat(draggedItem.style.left || 0);
  startY = touch.clientY - parseFloat(draggedItem.style.top || 0);
  e.preventDefault();
}

function handleTouchMove(e) {
  if (!draggedItem) return;
  let touch = e.touches[0];
  draggedItem.style.left = `${touch.clientX - startX}px`;
  draggedItem.style.top = `${touch.clientY - startY}px`;
  e.preventDefault();
  e.target.classList.add('active');
}

function handleTouchEnd(e) {
  e.target.classList.remove('active');
  if (!draggedItem) return;

  // mappingAreasを毎回取得し直す
  document.querySelectorAll('.MU_result').forEach((mappingArea) => {
    const rect = mappingArea.getBoundingClientRect();

    let left = parseFloat(draggedItem.style.left) + startX;
    let top = parseFloat(draggedItem.style.top) + startY;

    if (
      left >= rect.left &&
      left < rect.right &&
      top >= rect.top &&
      top < rect.bottom
    ) {
      const touch = e.changedTouches[0];
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;
      draggedItem.style.left = `${x - draggedItem.offsetWidth / 2}px`;
      draggedItem.style.top = `${y - draggedItem.offsetHeight / 2}px`;
      draggedItem.crossOrigin = 'anonymous';
      mappingArea.appendChild(draggedItem);
      draggedItem.style.left = ''; // スタイルをリセット
      draggedItem.style.top = ''; // スタイルをリセット
    }
  });

  // nonImageAreasも同様に毎回取得し直す場合は、下記も修正してください
  document.querySelectorAll('.Fighter_box').forEach((nonImageArea) => {
    const rect = nonImageArea.getBoundingClientRect();

    let left = parseFloat(draggedItem.style.left) + startX;
    let top = parseFloat(draggedItem.style.top) + startY;

    if (
      left >= rect.left &&
      left < rect.right &&
      top >= rect.top &&
      top < rect.bottom
    ) {
      const touch = e.changedTouches[0];
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;
      draggedItem.style.left = `${x - draggedItem.offsetWidth / 2}px`;
      draggedItem.style.top = `${y - draggedItem.offsetHeight / 2}px`;
      draggedItem.crossOrigin = 'anonymous';
      nonImageArea.prepend(draggedItem);
      draggedItem.style.left = ''; // スタイルをリセット
      draggedItem.style.top = ''; // スタイルをリセット
    }
  });
}

draggableItems.forEach((item) => {
  item.addEventListener('touchstart', handleTouchStart);
  item.addEventListener('touchmove', handleTouchMove);
  item.addEventListener('touchend', handleTouchEnd);
});

draggableItemstext.forEach((item) => {
  item.addEventListener('touchstart', handleTouchStartText);
  item.addEventListener('touchmove', handleTouchMove);
  item.addEventListener('touchend', handleTouchEnd);
});

// スマホ用ドラッグイベントを画像に付与する関数
function setItemDraggablePhone(img) {
  img.addEventListener('touchstart', handleTouchStart);
  img.addEventListener('touchmove', handleTouchMove);
  img.addEventListener('touchend', handleTouchEnd);
}
