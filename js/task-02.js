const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const items = ingredients.map(makeItems);
function makeItems (element) {
  const item = document.createElement('li');
  item.textContent = element;
  item.classList.add('item');
  return item;
}
const ingredientListEl = document.querySelector('#ingredients');
ingredientListEl.append(...items);
