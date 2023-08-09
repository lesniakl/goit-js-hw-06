const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form.elements[0].value || !form.elements[1].value) {
    alert("Please enter your email address and password.");
    return;
  }
  const user = {
    [form.elements[0].name]: form.elements[0].value,
    [form.elements[1].name]: form.elements[1].value,
  };
  form.reset();
  console.log(user);
});
