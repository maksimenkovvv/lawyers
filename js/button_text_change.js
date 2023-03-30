const mediaQuery = "screen and (max-width: 380px)";
const updateStyles = () => {
  const isMax340 = matchMedia(mediaQuery).matches;
  matchMedia(mediaQuery).addEventListener("change", updateStyles, {
    once: true,
  });
  if (isMax340) {
    document.getElementById("text__change").textContent = "Отправить заявку";
  } else {
    document.getElementById("text__change").textContent = "Отправить";
  }
};
updateStyles();
