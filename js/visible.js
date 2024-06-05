function hideElements() {
  var elements = document.getElementsByClassName('hide');

  for (var i = 0; i < elements.length; i++) {
    elements[i].style.opacity = '0';
  }
}
function visibleElements() {
  var elements = document.getElementsByClassName('hide');

  for (var i = 0; i < elements.length; i++) {
    elements[i].style.opacity = '1';
  }
}

function toggleElements() {
  var elements = document.getElementsByClassName('show');
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].classList.contains('hide')) {
      elements[i].classList.remove('hide');
    } else {
      elements[i].classList.add('hide');
    }
  }
}

function enElements() {
  var enlements = document.getElementsByClassName('text_EN');
  var jplements = document.getElementsByClassName('text_JP');

  for (var i = 0; i < enlements.length; i++) {
    enlements[i].style.display = 'inline-block';
  }
  for (var i = 0; i < jplements.length; i++) {
    jplements[i].style.display = 'none';
  }
}
function jpElements() {
  var enlements = document.getElementsByClassName('text_EN');
  var jplements = document.getElementsByClassName('text_JP');
  for (var i = 0; i < enlements.length; i++) {
    enlements[i].style.display = 'none';
  }
  for (var i = 0; i < jplements.length; i++) {
    jplements[i].style.display = 'inline-block';
  }
}

function toggleElements() {
  var elements = document.getElementsByClassName('show');
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].classList.contains('text_EN')) {
      elements[i].classList.add('show');
    } else {
      elements[i].classList.add('hide');
    }
  }
}
