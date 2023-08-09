const control = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

control.addEventListener("input", () => {
  console.log(control.value);
  text.style.fontSize = `${control.value}px`;
});
