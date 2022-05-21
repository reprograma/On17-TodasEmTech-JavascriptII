const div = document.querySelector(".container");
const form = document.querySelector(".form");
const labels = document.querySelectorAll("label");
const inputs = document.querySelectorAll("input");
const buttonSubmit = document.querySelector(".buttonSubmit");

div.style.display = "flex";
div.style.flexDirection = "column";
div.style.justifyContent = "center";

form.style.width = "900px";
form.style.height = "350px";
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.justifyContent = "center";
form.style.margin = "100px auto";
form.style.padding = "0 50px";
form.style.color = "#F0F7EE";
form.style.backgroundColor = "black";
form.style.border = "1px solid #EE3A57";

labels.forEach((label) => (label.style.margin = "10px 0"));
inputs.forEach((input) => {
  input.style.color = "#F0F7EE";
  input.style.backgroundColor = "black";
  input.style.border = "1px solid #EE3A57";
  input.style.borderRadius = "5px";
  input.style.height = "20px";
});

buttonSubmit.style.color = "#F0F7EE";
buttonSubmit.style.backgroundColor = "#EE3A57";
buttonSubmit.style.marginTop = "40px";
buttonSubmit.style.borderRadius = "5px";
buttonSubmit.style.height = "40px";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let image = document.createElement("img");
  image.setAttribute("src", "contato.png");
  image.style.width = "950px";
  image.style.height = "350px";
  image.style.margin = "auto";
  div.appendChild(image);
  let text = document.createElement("p");
  text.innerHTML = "Formulário de contato com HTML e CSS";
  div.appendChild(text);
  text.style.margin = "20px auto";
});
