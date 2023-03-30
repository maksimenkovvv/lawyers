let listBtn = document.querySelectorAll(".modal__menu__inner__list");
let clickBtn = document.querySelectorAll(".modal__menu__text");

clickBtn.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    listBtn[i].classList.toggle("list__show");
  });
});

console.log("success");
