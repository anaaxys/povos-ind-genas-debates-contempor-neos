var elementosHeader = document.querySelectorAll(".scroll_header")
var elementosTexto = document.querySelectorAll(".scrollitem")
mds();

for (var i = 0; i < elementosTexto.length; i++) {
  if (elementosTexto[i].offsetTop + elementosTexto[i].offsetHeight / (elementosTexto[i].offsetHeight / 100) < window.innerHeight) {
    elementosTexto[i].classList.add("scrollou")
  }
}

window.addEventListener("scroll", mds)

function mds() {
  for (var i = 0; i < elementosHeader.length; i++) {
    elementosHeader[i].classList.toggle("scrollou", window.scrollY > 75);
  }

  for (var i = 0; i < elementosTexto.length; i++) {
    elementosTexto[i].classList.toggle("scrollou", window.scrollY > (elementosTexto[i].offsetTop + elementosTexto[i].offsetHeight / (elementosTexto[i].offsetHeight / 100)) - window.innerHeight);
  }
}