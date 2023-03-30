// Сразу создаём переменные
let navbar = document.getElementById("menu__fixed").classList;
let active_class = "menu__fixed__scrolled";

window.addEventListener("scroll", (e) => {
  if (scrollY > 100) {
    navbar.add(active_class);
  } else {
    navbar.remove(active_class);
  }
});
