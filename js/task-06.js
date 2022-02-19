const input = document.getElementById("validation-input");

input.addEventListener("click", () => {
  input.focus();
});

input.addEventListener("blur", () => {
    input.classList.remove("valid");
    input.classList.remove("invalid");
    if (input.value.length === Number(input.dataset.length)) {
        input.classList.add("valid");
    }
     else {
        input.classList.add("invalid");
    }
});

