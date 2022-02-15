function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const backColor = document.querySelector(".change-color");

backColor.addEventListener("click", changeColor);

function changeColor(event) {
  const color = getRandomHexColor();
  document.getElementsByClassName("color")[0].innerHTML = `${color}`;
  document.querySelector("body").style = `background-color: ${color};`;
 

  console.log(document.getElementsByClassName("color"))
// console.log(document.querySelector("body"))
}