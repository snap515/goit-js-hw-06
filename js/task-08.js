const formEl = document.querySelector("form.login-form");

formEl.addEventListener("submit", onSubmitButton);

function onSubmitButton(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  if (
    event.currentTarget.elements.email.value === "" ||
    event.currentTarget.elements.password.value === ""
  ) {
    alert("Заполните все строки");
  } else {
    formData.forEach((value, name) => {
      console.log(name, value);
    });
  }

  event.currentTarget.reset();
}
