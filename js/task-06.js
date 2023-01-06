const textInputEl = document.querySelector("#validation-input");

textInputEl.addEventListener("focus", FocusInputChecker);
textInputEl.addEventListener("blur", BlurInputChecker);

function BlurInputChecker(event) {
  if (event.currentTarget.value === "") {
    return;
  }

  event.currentTarget.value.length ===
  Number(textInputEl.getAttribute("data-length"))
    ? textInputEl.classList.add("valid")
    : textInputEl.classList.add("invalid");
}

function FocusInputChecker(event) {
  textInputEl.classList.remove("valid");
  textInputEl.classList.remove("invalid");
}
