const lineInput = document.getElementById("font-size-control");
const textSize = document.getElementById("text");

lineInput.addEventListener("input", () => {
    textSize.style = `font-size: ${lineInput.value}px;`;
});