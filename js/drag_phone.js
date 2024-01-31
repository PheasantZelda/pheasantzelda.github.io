let draggedItem = null;

const nonImageArea = document.getElementById("nonImageArea");
const mappingAreas = document.querySelectorAll(".MU_result");
const draggableItems = document.querySelectorAll(".item");

function handleTouchStart(e) {
  draggedItem = e.target;
  let touch = e.touches[0];
  startX = touch.clientX - parseFloat(draggedItem.style.left || 0);
  console.log("startX: %s ", startX);
  startY = touch.clientY - parseFloat(draggedItem.style.top || 0);
  console.log("startY: %s ", startY);
  e.preventDefault();
}

function handleTouchMove(e) {
  if (!draggedItem) return;
  let touch = e.touches[0];
  draggedItem.style.left = `${touch.clientX - startX}px`;
  // console.log("moveX: %s ", draggedItem.style.left);
  draggedItem.style.top = `${touch.clientY - startY}px`;
  // console.log("moveY: %s ", draggedItem.style.top);
  e.preventDefault();
  e.target.classList.add("active");
}

function handleTouchEnd(e) {
  e.target.classList.remove("active");
  if (!draggedItem) return;

  mappingAreas.forEach((mappingArea) => {
    const rect = mappingArea.getBoundingClientRect();
    // console.log("rect: %s ", rect);
    // console.log("draggedItem %s", draggedItem);

    let left = parseFloat(draggedItem.style.left) + startX;
    let top = parseFloat(draggedItem.style.top) + startY;
    // console.log("left: %s ", left);
    // console.log("top: %s ", top);
    // console.log("rect.left: %s ", rect.left);
    // console.log("rect.top: %s ", rect.top);
    // console.log("rect.bottom: %s ", rect.bottom);
    // console.log("rect.right: %s ", rect.right);
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
      draggedItem.crossOrigin = "anonymous";
      mappingArea.append(draggedItem);
      console.log("draggedItem : %s", draggedItem.getElementById);
      console.log(
        "left, top: %s %s",
        draggedItem.style.left,
        draggedItem.style.top
      );
      startX = "0px";
      startY = "0px";
      draggedItem.style.left = "0px";
      draggedItem.style.top = "0px";
    }
  });
}

draggableItems.forEach((item) => {
  item.addEventListener("touchstart", handleTouchStart);
  item.addEventListener("touchmove", handleTouchMove);
  item.addEventListener("touchend", handleTouchEnd);
});
