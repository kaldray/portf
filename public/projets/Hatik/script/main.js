function goToTopPage() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const navlogo = document.getElementById("nav-logo");

window.addEventListener("resize", function addOrRemove() {
  const imgHatik = document.querySelector("#hatik-top-page");
  if (window.innerWidth > 769) {
    imgHatik.classList.remove("none");
  } else {
    imgHatik.classList.add("none");
  }
});

window.addEventListener("DOMContentLoaded", function addOrRemoveOnLoad() {
  const imgHatik = document.querySelector("#hatik-top-page");
  if (window.innerWidth > 769) {
    imgHatik.classList.remove("none");
  } else {
    imgHatik.classList.add("none");
  }
});

// go to top page when i click on page logo
navlogo.addEventListener("click", function () {
  goToTopPage();
});
