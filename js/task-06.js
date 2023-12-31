const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  if (input.value.length < input.dataset.length) {
    input.classList.remove("valid");
    input.classList.add("invalid");
    return;
  }
  input.classList.remove("invalid");
  input.classList.add("valid");
});
