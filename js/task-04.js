const decrementButtonClickHandler = document.querySelector(
  '[data-action="decrement"]'
);
const incrementButtonClickHandler = document.querySelector(
  '[data-action="increment"]'
);
const valueEl = document.querySelector("#value");

incrementButtonClickHandler.addEventListener("click", () => {
  valueEl.textContent = Number(valueEl.textContent) + 1;
});

decrementButtonClickHandler.addEventListener("click", () => {
  valueEl.textContent = Number(valueEl.textContent) - 1;
});
