const list = document.querySelector("#categories");
console.log(`Number of categories: ${list.children.length}`);
for (let i = 0; i < list.children.length; i++) {
  console.log(`Category: ${list.children[i].firstElementChild.textContent}
Elements: ${list.children[i].querySelector("ul").children.length}`);
}
