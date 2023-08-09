function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const boxes = document.querySelector("#boxes");
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");

function createBoxes(amount) {
  const newBoxes = [];
  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement("div");
    newBox.style.width = `${30 + 10 * i}px`;
    newBox.style.height = `${30 + 10 * i}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    newBoxes.push(newBox);
  }
  boxes.append(...newBoxes);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

create.addEventListener("click", () => {
  createBoxes(controls.firstElementChild.value);
});

destroy.addEventListener("click", destroyBoxes);
// console.log(controls.children[0]);
