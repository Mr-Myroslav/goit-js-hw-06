let name = document.getElementById("name-input");
let huina = document.getElementById("name-output");

document.addEventListener("keyup" ,() => {
    if (name.value == "") {
        huina.innerHTML = "Anonymous";
    }
    else {
        huina.innerHTML = name.value;
    }
});
