document
  .getElementById('customImageInput')
  .addEventListener('change', function (e) {
    const files = e.target.files;
    if (!files.length) return;
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = function (evt) {
        const img = document.createElement('img');
        img.src = evt.target.result;
        img.className = 'item custom';
        img.draggable = true;
        img.alt = 'カスタム画像';
        document.getElementById('nonImageArea').appendChild(img);

        // ここでスマホ用ドラッグイベントも付与
        if (typeof setItemDraggablePhone === 'function') {
          setItemDraggablePhone(img);
        }
      };
      reader.readAsDataURL(file);
    });
  });
