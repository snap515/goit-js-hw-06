const bodyEl = document.querySelector("body");
const changeColorBtnEl = document.querySelector(".change-color");
const colorNameEl = document.querySelector(".color");

changeColorBtnEl.addEventListener("click", bodyColorChanger);

function bodyColorChanger(event) {
  colorNameEl.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = colorNameEl.textContent;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
