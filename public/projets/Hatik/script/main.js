function removeimg() {
  const imgHatik = document.querySelector("#hatik-top-page");
  if (window.innerWidth < 769) {
    imgHatik.classList.add("none");
  }
}
function addimg() {
  const imgHatik = document.querySelector("#hatik-top-page");
  if (window.innerWidth > 769) {
    imgHatik.classList.remove("none");
  }
}

function goToTopPage() {
  window.scrollTo(0, 0);
}

const navlogo = document.getElementById("nav-logo");

window.addEventListener("resize", function addimg() {
  const imgHatik = document.querySelector("#hatik-top-page");
  if (window.innerWidth > 769) {
    imgHatik.classList.remove("none");
  }
});
window.addEventListener("resize", function removeimg() {
  const imgHatik = document.querySelector("#hatik-top-page");
  if (window.innerWidth < 769) {
    imgHatik.classList.add("none");
  }
});
window.addEventListener("load", function addimg() {
  const imgHatik = document.querySelector("#hatik-top-page");
  if (window.innerWidth > 769) {
    imgHatik.classList.remove("none");
  }
});
window.addEventListener("load", function removeimg() {
  const imgHatik = document.querySelector("#hatik-top-page");
  if (window.innerWidth < 769) {
    imgHatik.classList.add("none");
  }
});
navlogo.addEventListener("click", function () {
  goToTopPage();
});
