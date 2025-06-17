let draggedItem = null;
let startX = 0;
let startY = 0;

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
  draggedItem.style.left = ''; // Reset style
  draggedItem.style.top = ''; // Reset style
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

  let itemInserted = false;

  function handleDrop(targetArea) {
    const rect = targetArea.getBoundingClientRect();
    let left = parseFloat(draggedItem.style.left) + startX;
    let top = parseFloat(draggedItem.style.top) + startY;

    if (
      left >= rect.left &&
      left < rect.right &&
      top >= rect.top &&
      top < rect.bottom
    ) {
      const touch = e.changedTouches[0];
      const touchX = touch.clientX;
      const touchY = touch.clientY;

      let closestChild = null;
      let closestDistance = Infinity;

      Array.from(targetArea.children).forEach((child) => {
        if (child === draggedItem) return; // Skip the dragged item itself

        const childRect = child.getBoundingClientRect();
        const childCenterX = (childRect.left + childRect.right) / 2;
        const childCenterY = (childRect.top + childRect.bottom) / 2;
        const distance = Math.hypot(
          childCenterX - touchX,
          childCenterY - touchY
        );

        if (distance < closestDistance) {
          closestChild = child;
          closestDistance = distance;
        }
      });

      if (closestChild) {
        const closestRect = closestChild.getBoundingClientRect();
        if (touchY < closestRect.top + closestRect.height / 2) {
          targetArea.insertBefore(draggedItem, closestChild);
        } else {
          targetArea.insertBefore(draggedItem, closestChild.nextSibling);
        }
      } else {
        targetArea.appendChild(draggedItem);
      }

      draggedItem.style.left = ''; // Reset style
      draggedItem.style.top = ''; // Reset style
      itemInserted = true;
    }
  }

  mappingAreas.forEach((mappingArea) => handleDrop(mappingArea));
  nonImageAreas.forEach((nonImageArea) => handleDrop(nonImageArea));

  if (!itemInserted) {
    draggedItem.style.left = ''; // Reset style
    draggedItem.style.top = ''; // Reset style
  }

  draggedItem = null;
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

function setItemDraggablePhone(img) {
  // 例：タッチ開始・移動・終了イベントをimgに付与
  img.addEventListener('touchstart', handleTouchStart);
  img.addEventListener('touchmove', handleTouchMove);
  img.addEventListener('touchend', handleTouchEnd);
}

popup.querySelector('.add-mu-box').onclick = function () {
  const clone = box.cloneNode(true);
  // 画像を削除
  clone.querySelectorAll('.MU_result img').forEach((img) => img.remove());
  // デフォルトの背景・フォント色を設定
  const title = clone.querySelector('.MU_title');
  title.style.background = 'linear-gradient(90deg, #3d3c3c, #6b696e)';
  title.style.color = '#ffffff';
  clone.querySelector('.MU_title p').textContent = 'New Tier';
  box.after(clone);
  setMUBoxDraggable([clone]);
  // 追加：スマホ用タッチイベントも付与
  clone
    .querySelectorAll('.MU_result .item')
    .forEach((img) => setItemDraggablePhone(img));
  popup.remove();
};
