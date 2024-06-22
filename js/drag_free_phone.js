let draggedItem = null;
let startX = 0;
let startY = 0;

const nonImageAreas = document.querySelectorAll('.Fighter_box');
const mappingAreas = document.querySelectorAll('.MU_result');
const draggableItems = document.querySelectorAll('.item');

function handleTouchStart(e) {
  draggedItem = e.target;
  draggedItem.style.position = 'absolute';
  draggedItem.style.zIndex = 1000;
  document.body.appendChild(draggedItem);
  let touch = e.touches[0];
  startX = touch.clientX - draggedItem.getBoundingClientRect().left;
  startY = touch.clientY - draggedItem.getBoundingClientRect().top;
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

  let inserted = false;

  function insertInArea(area) {
    const rect = area.getBoundingClientRect();
    let left = parseFloat(draggedItem.style.left) + startX;
    let top = parseFloat(draggedItem.style.top) + startY;

    if (
      left >= rect.left &&
      left < rect.right &&
      top >= rect.top &&
      top < rect.bottom
    ) {
      let closestItem = null;
      let closestDistance = Infinity;

      Array.from(area.children).forEach((child) => {
        if (child !== draggedItem) {
          const childRect = child.getBoundingClientRect();
          const childCenterY = (childRect.top + childRect.bottom) / 2;
          const distance = Math.abs(childCenterY - top);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestItem = child;
          }
        }
      });

      if (closestItem) {
        const closestRect = closestItem.getBoundingClientRect();
        const insertBefore = top < closestRect.top + closestRect.height / 2;
        if (insertBefore) {
          area.insertBefore(draggedItem, closestItem);
        } else {
          area.insertBefore(draggedItem, closestItem.nextSibling);
        }
      } else {
        area.appendChild(draggedItem);
      }

      inserted = true;
    }
  }

  mappingAreas.forEach(insertInArea);
  if (!inserted) {
    nonImageAreas.forEach(insertInArea);
  }

  // Reset style
  draggedItem.style.left = '';
  draggedItem.style.top = '';
  draggedItem.style.position = '';
  draggedItem.style.zIndex = '';
  draggedItem = null;
}

draggableItems.forEach((item) => {
  item.addEventListener('touchstart', handleTouchStart);
  item.addEventListener('touchmove', handleTouchMove);
  item.addEventListener('touchend', handleTouchEnd);
});
