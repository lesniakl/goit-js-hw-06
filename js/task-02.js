const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

function addToList(items) {
  const list = document.querySelector("#ingredients");
  const newItems = [];
  for (const item of items) {
    const newItem = document.createElement("li");
    newItem.textContent = item;
    newItem.classList.add("item");
    newItems.push(newItem);
  }
  list.append(...newItems);
}

addToList(ingredients);
