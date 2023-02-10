window.addEventListener('DOMContentLoaded', ()=>{
  const drag={target:null,mouseon:0};
  const box=document.querySelectorAll('.box');
  document.addEventListener('mousedown',e=>{
    const t=e.target;
    if(t.matches('.item')){
      drag.target=t;
      drag.mouseon=1;
      drag.target.classList.add('dragging');
    }
  });
  document.addEventListener("dragover",e=> {
    e.preventDefault();
    const t=e.target;
    box.classList.toggle('over',t.closest('.box') && drag.mouseon);
  });
  document.addEventListener("mouseup",e=> {
    drag.mouseon=0;
    drag.target.classList.remove('dragging');
  });
  document.addEventListener('drop',e=>{
    const t=e.target;
    if(t.matches('.box')){
      t.appendChild(drag.target);
    }
    if(t.matches('.box .item')){
      t.after(drag.target);
    }
    drag.target.classList.remove('dragging');
    drag.target=null;
    drag.mouseon=0;
    box.classList.remove('over');
  });
  document.addEventListener("touchstart", e=>{
    const t=e.target;
    if(t.matches('.item')){
      drag.target=t;
      drag.target.classList.add('dragging');
    }
  });
  document.addEventListener("touchmove", e=> {
    e.preventDefault();
    const t=e.target;
    box.classList.toggle('over',t.closest('.box'));
  });
  document.addEventListener("touchend", e=> {
    const t=e.target;
    if(t.matches('.box')){
      t.appendChild(drag.target);
    }
    if(t.matches('.box .item')){
      t.after(drag.target);
    }
    drag.target.classList.remove('dragging');
    drag.target=null;
    box.classList.remove('over');
  });
});