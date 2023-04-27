const zoom = document.querySelectorAll(".zoom");
const zoomback = document.getElementById("zoomback");
const zooming = document.getElementById("zooming");

zoom.forEach(function (value) {
  value.addEventListener("click", kakudai);
});
zoomback.addEventListener("click", modosu);

function kakudai(e) {
  zoomback.style.display = "flex";
  zooming.setAttribute("src", e.target.getAttribute("src"));
  zooming.classList.add("deka");
}
function modosu() {
  //e.target.style.display = "none";
  //これやると子要素にも伝播されるため、imgのみ消えてしまうようになる。
  //だから直接div要素を呼び出す。
  zoomback.style.display = "none";
  zooming.classList.remove("deka");
}
