const form = document.querySelector(".login-form")
console.log(form)

form.addEventListener("submit", getEmail);

function getEmail(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert('Please fill in all the fields!')
  }

  console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}