function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesEl = document.querySelector("#boxes");
const inputNumberEl = document.querySelector("input[type=number]");
const creatorEl = document.querySelector("[data-create]");
const destroyerEl = document.querySelector("[data-destroy]");

creatorEl.addEventListener("click", boxCreator);
destroyerEl.addEventListener("click", boxDestroyer);

function boxCreator(quantity) {
  const boxes = [];
  quantity = inputNumberEl.value;

  let width = 30;
  let height = 30;
  let adder = 0;

  for (let i = 0; i < quantity; i += 1) {
    const box = document.createElement("div");
    if (!boxesEl.firstChild) {
      box.style.width = width + adder + "px";
      box.style.height = height + adder + "px";
      adder += 10;
    } else {
      adder += 10;
      box.style.width = parseInt(boxesEl.lastChild.style.width) + adder + "px";
      box.style.height =
        parseInt(boxesEl.lastChild.style.height) + adder + "px";
    }

    box.style.backgroundColor = getRandomHexColor();

    boxes.push(box);
  }
  boxesEl.append(...boxes);
}

function boxDestroyer() {
  boxesEl.innerHTML = "";
}
