"use strict";

const btnEl = document.querySelectorAll(".btn");
const timesEl = document.querySelector(".times");
const overlayEl = document.querySelector(".overlay");
const modalEl = document.querySelector(".modal");

for (let i = 0; i < btnEl.length; i++) {
  btnEl[i].addEventListener("click", function () {
    overlayEl.classList.remove("hidden");
    modalEl.classList.remove("hidden");
  });
}

function closeModal() {
  overlayEl.classList.add("hidden");
  modalEl.classList.add("hidden");
}

timesEl.addEventListener("click", closeModal);

overlayEl.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modalEl.classList.contains("hidden")) {
    closeModal();
  }
});

// DRY - DON'T REPEAT YOURSELF

// const arr = [1, 2, 3];
// console.log(arr.length);

// const obj = {
//   name: "Isaac",
// };

// console.log(obj.name);
