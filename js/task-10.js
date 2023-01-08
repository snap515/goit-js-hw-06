function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const elements = {
  input: document.querySelector("input[type='number']"),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  boxesStorage: document.querySelector("#boxes"),
};

console.log(elements.input.value);

// elements.createBtn.addEventListener("click", boxesCreator);
// elements.destroyBtn.addEventListener("click", boxesDestroyer);

// function boxesCreator(quantity) {}

// const numberInputEl = document.querySelector("input[type='number']");
// console.log(numberInputEl);
// const createButtonEl = document.querySelector("button[data-create]");
// const destroyButtonEl = document.querySelector("button[data-destroy]");
// const boxesStorageEl = document.querySelector("#boxes");

// numberInputEl.addEventListener("input", inputNumbersReader);
// createButtonEl.addEventListener("click", boxesCreator);

// function inputNumbersReader(event) {
//   console.log(event.currentTarget.valueAsNumber);
//   return event.currentTarget.valueAsNumber;
// }

// function boxesCreator(event) {
//   const box = document.createElement("div");
//   box.style.width = "30px";
//   box.style.height = "30px";
//   box.style.backgroundColor = getRandomHexColor();
//   boxesStorageEl.appendChild(box);
// }
