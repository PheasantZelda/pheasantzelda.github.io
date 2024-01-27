let draggedItem = null;
let startX = 0;
let startY = 0;

const nonImageArea = document.getElementById('nonImageArea');
const mappingAreas = document.querySelectorAll('.box');
const draggableItems = document.querySelectorAll('.item');

function handleDragStart(e) {
  draggedItem = e.target;
}

function handleDragEnd() {
  draggedItem = null;
}

function handleTouchStart(e) {
  draggedItem = e.target;
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
}

function handleTouchEnd(e) {
  if (!draggedItem) return;

  mappingAreas.forEach((mappingArea) => {
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
    }
  });

  // if (!draggedItem.parentNode) {
  //   // マッピングエリア外に出た場合
  //   draggedItem.style.left = ''; // スタイルをリセット
  //   draggedItem.style.top = ''; // スタイルをリセット
  //   nonImageArea.appendChild(draggedItem);
  // }

  draggedItem = null;
  e.preventDefault();
}

draggableItems.forEach((item) => {
  item.addEventListener('dragstart', handleDragStart);
  item.addEventListener('dragend', handleDragEnd);

  item.addEventListener('touchstart', handleTouchStart);
  item.addEventListener('touchmove', handleTouchMove);
  item.addEventListener('touchend', handleTouchEnd);
});
