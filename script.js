"use strict";

/* Get Navbar */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const header = document.getElementById("head");

/* Get Modal */
var modal = document.getElementById("myModal");
var btn = document.getElementById("show-modal");
var span = document.getElementsByClassName("close")[0];

/* Navbar */
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

window.addEventListener("scroll", function () {
  window.pageYOffset > 100
    ? header.classList.add("border")
    : header.classList.remove("border");
});

/* Modal */
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