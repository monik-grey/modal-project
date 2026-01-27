"use strict";
const btnEl = document.querySelectorAll(".btn");
const showModalEl = document.querySelector(".modal");
const overlayEl = document.querySelector(".overlay");
const timesEl = document.querySelector(".times");
console.log(btnEl);

for (let i = 0; i < btnEl.length; i++)
  btnEl[i].addEventListener("click", openModal);

function openModal() {
  showModalEl.classList.remove("hidden");
  overlayEl.classList.remove("hidden");
}

function closeModal() {
  showModalEl.classList.add("hidden");
  overlayEl.classList.add("hidden");
}

timesEl.addEventListener("click", closeModal);

overlayEl.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !showModalEl.classList.contains("hidden")) {
    closeModal();
  }
});
