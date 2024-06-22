let draggedItem = null;

const nonImageAreas = document.querySelectorAll('.Fighter_box');
const mappingAreas = document.querySelectorAll('.MU_result');
const draggableItems = document.querySelectorAll('.item');

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

      let closestChild = null;
      let closestChildDistance = Infinity;

      Array.from(mappingArea.children).forEach((child) => {
        const childRect = child.getBoundingClientRect();
        const childCenterX = (childRect.left + childRect.right) / 2;
        const childCenterY = (childRect.top + childRect.bottom) / 2;
        const distance = Math.hypot(
          childCenterX - touch.clientX,
          childCenterY - touch.clientY
        );

        if (distance < closestChildDistance) {
          closestChild = child;
          closestChildDistance = distance;
        }
      });

      if (closestChild) {
        mappingArea.insertBefore(draggedItem, closestChild);
      } else {
        mappingArea.appendChild(draggedItem);
      }

      draggedItem.style.left = ''; // Reset style
      draggedItem.style.top = ''; // Reset style
    }
  });

  nonImageAreas.forEach((nonImageArea) => {
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

      let closestChild = null;
      let closestChildDistance = Infinity;

      Array.from(nonImageArea.children).forEach((child) => {
        const childRect = child.getBoundingClientRect();
        const childCenterX = (childRect.left + childRect.right) / 2;
        const childCenterY = (childRect.top + childRect.bottom) / 2;
        const distance = Math.hypot(
          childCenterX - touch.clientX,
          childCenterY - touch.clientY
        );

        if (distance < closestChildDistance) {
          closestChild = child;
          closestChildDistance = distance;
        }
      });

      if (closestChild) {
        nonImageArea.insertBefore(draggedItem, closestChild);
      } else {
        nonImageArea.appendChild(draggedItem);
      }

      draggedItem.style.left = ''; // Reset style
      draggedItem.style.top = ''; // Reset style
    }
  });
}

draggableItems.forEach((item) => {
  item.addEventListener('touchstart', handleTouchStart);
  item.addEventListener('touchmove', handleTouchMove);
  item.addEventListener('touchend', handleTouchEnd);
});
