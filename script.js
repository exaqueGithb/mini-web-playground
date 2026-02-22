const btn = document.getElementById("btn");
const text = document.getElementById("text");
const output = document.getElementById("output");

btn.addEventListener("click", () => {
  output.textContent = text.value;
});
