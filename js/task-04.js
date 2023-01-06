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

function incrementButtonClickHandler(event) {
  valueEl.textContent = Number(valueEl.textContent) + 1;
}

function decrementButtonClickHandler(event) {
  valueEl.textContent = Number(valueEl.textContent) - 1;
}

decrementButtonEl.addEventListener("click", decrementButtonClickHandler);
incrementButtonel.addEventListener("click", incrementButtonClickHandler);
