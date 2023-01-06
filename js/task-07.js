const fontSizeControlInput = document.querySelector("#font-size-control");
const textOutput = document.querySelector("#text");

fontSizeControlInput.setAttribute(
  "value",
  fontSizeControlInput.getAttribute("min")
);
fontSizeControlInput.addEventListener("input", fontSizeChanger);

function fontSizeChanger(event) {
  textOutput.style.fontSize = event.currentTarget.value + "px";
}
