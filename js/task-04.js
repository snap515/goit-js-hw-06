//  ---------с анонимной функцией----------

// const decrementButtonClickHandler = document.querySelector(
//   '[data-action="decrement"]'
// );
// const incrementButtonClickHandler = document.querySelector(
//   '[data-action="increment"]'
// );
// const valueEl = document.querySelector("#value");

// incrementButtonClickHandler.addEventListener("click", () => {
//   valueEl.textContent = Number(valueEl.textContent) + 1;
// });

// decrementButtonClickHandler.addEventListener("click", () => {
//   valueEl.textContent = Number(valueEl.textContent) - 1;
// });

// -----------c колбек функцией-----------

const decrementButtonEl = document.querySelector('[data-action="decrement"]');
const incrementButtonel = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");

let counterValue = 0;

incrementButtonel.addEventListener("click", incrementButtonClickHandler);
decrementButtonEl.addEventListener("click", decrementButtonClickHandler);

function incrementButtonClickHandler(event) {
  counterValue = counterValue + 1;
  valueEl.textContent = counterValue;
}

function decrementButtonClickHandler(event) {
  counterValue = counterValue - 1;
  valueEl.textContent = counterValue;
}
