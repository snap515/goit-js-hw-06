const formEl = document.querySelector("form.login-form");

formEl.addEventListener("submit", onSubmitButton);

function onSubmitButton(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  const formData = { email, password };

  if (formData.email === "" || formData.password === "") {
    alert("Заполните все строки");
  } else {
    console.log(formData);
  }
  event.currentTarget.reset();
}
