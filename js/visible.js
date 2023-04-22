function hideElements() {
  var elements = document.getElementsByClassName("hide");

  for (var i = 0; i < elements.length; i++) {
    elements[i].style.opacity = "0";
  }
}
function visibleElements() {
  var elements = document.getElementsByClassName("hide");

  for (var i = 0; i < elements.length; i++) {
    elements[i].style.opacity = "1";
  }
}

function toggleElements() {
  var elements = document.getElementsByClassName("show");
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].classList.contains("hide")) {
      elements[i].classList.remove("hide");
    } else {
      elements[i].classList.add("hide");
    }
  }
}
