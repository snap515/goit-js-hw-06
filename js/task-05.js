const nameInputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

nameInputEl.addEventListener("input", currentTargetOutputChanger);

function currentTargetOutputChanger(event) {
  event.currentTarget.value === ""
    ? (nameOutputEl.textContent = "Anonymous")
    : (nameOutputEl.textContent = event.currentTarget.value);
}
