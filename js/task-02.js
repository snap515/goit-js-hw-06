const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsEl = document.querySelector("#ingredients");
const ingredientsHtmlArray = [];

ingredients.forEach((ingredient) => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add("list");
  ingredientsHtmlArray.push(ingredientEl);
});

ingredientsEl.append(...ingredientsHtmlArray);
