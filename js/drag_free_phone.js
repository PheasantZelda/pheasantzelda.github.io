let draggedItem = null;
let startX = 0;
let startY = 0;

const nonImageAreas = document.querySelectorAll('.Fighter_box');
const mappingAreas = document.querySelectorAll('.MU_result');
const draggableItems = document.querySelectorAll('.item');

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
