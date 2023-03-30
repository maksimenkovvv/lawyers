let menuBtnOpen = document.querySelectorAll(".button-js");
let menuBtnClose = document.querySelector(".modal__menu__close-btn-js");
let menu = document.querySelector(".b-modal__menu__container");

for (let element of menuBtnOpen) {
  element.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
}

menuBtnClose.addEventListener("click", function () {
  menu.classList.toggle("active");
});
