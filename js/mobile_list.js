let listBtn = document.querySelectorAll(".modal__menu__inner__list");
let clickBtn = document.querySelectorAll(".modal__menu__text");

for (let element of clickBtn) {
  element.addEventListener("click", function () {
    listBtn.classList.toggle("list__show");
  });
}

console.log("success");
