"use strict";
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const navMenu = document.querySelector(".nav-menu");
const header = document.getElementById("head");
const overlay = document.querySelector(".overlay");
var modal = document.getElementById("myModal");
var btn = document.getElementById("show-modal");
var span = document.getElementsByClassName("close")[0];

let toggleNavbar = function() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  overlay.classList.toggle("d-none");
}

hamburger.addEventListener("click", toggleNavbar);

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", toggleNavbar)
);

overlay.addEventListener("click", toggleNavbar)

window.addEventListener("scroll", function () {
  window.pageYOffset > 100
    ? header.classList.add("bb-primary")
    : header.classList.remove("bb-primary");
});

btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};