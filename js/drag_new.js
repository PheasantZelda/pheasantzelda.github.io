window.addEventListener('DOMContentLoaded', () => {
  const drag = { target: null, touchon: 0 };
  const box2 = document.querySelectorAll('.box');

  document.addEventListener('touchstart', (e) => {
    const t = e.target;
    if (t.matches('.item')) {
      drag.target = t;
      drag.touchon = 1;
      drag.target.classList.add('dragging');
    }
  });

  document.addEventListener('touchmove', (e) => {
    e.preventDefault();
    if (drag.touchon) {
      const touch = e.touches[0];
      const target = document.elementFromPoint(touch.clientX, touch.clientY);

      box2.forEach((box) => {
        box.classList.toggle('over', target.closest('.box') === box);
      });
    }
  });

  document.addEventListener('touchend', () => {
    drag.touchon = 0;
    drag.target.classList.remove('dragging');

    const target = document.elementFromPoint(
      drag.target.getBoundingClientRect().left,
      drag.target.getBoundingClientRect().top
    );

    if (target.matches('.box')) {
      target.appendChild(drag.target);
    } else if (target.matches('.box .item')) {
      target.after(drag.target);
    }

    drag.target.classList.remove('dragging');
    drag.target = null;

    box2.forEach((box) => {
      box.classList.remove('over');
    });
  });
});
