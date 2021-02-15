//Hamburger
const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");
const toggle = document.querySelector(".header__menu");

btnHamburger.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    toggle.classList.add("fade-out");
    toggle.classList.remove("fade-in");
    body.classList.remove("noscroll");
    header.classList.remove("open");
    overlay.classList.add("fade-out");
    overlay.classList.remove("fade-in");
  } else {
    toggle.classList.add("fade-in");
    toggle.classList.remove("fade-out");
    body.classList.add("noscroll");
    header.classList.add("open");
    overlay.classList.add("fade-in");
    overlay.classList.remove("fade-out");
  }
});
