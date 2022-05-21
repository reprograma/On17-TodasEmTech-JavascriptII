let div = document.querySelector(".container");
let formulario = document.querySelector(".formulario");
let labels = document.querySelectorAll("label");
let inputs = document.querySelectorAll("input");
let buttonSubmit = document.querySelector(".buttonSubmit");

div.style.display = "flex";
div.style.flexDirection = "column";
div.style.justifyContent = "center";

formulario.style.width = "900px";
formulario.style.height = "350px";
formulario.style.display = "flex";
formulario.style.flexDirection = "column";
formulario.style.justifyContent = "center";
formulario.style.margin = "100px auto";
formulario.style.padding = "0 50px";
formulario.style.color = "#F0F7EE";
formulario.style.backgroundColor = "black";
formulario.style.border = "1px solid #EE3A57";

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

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  let imagem = document.createElement("img");
  imagem.setAttribute("src", "contato.png");
  imagem.style.width = "950px";
  imagem.style.height = "350px";
  imagem.style.margin = "auto";
  div.appendChild(imagem);
  let texto = document.createElement("p");
  texto.innerHTML = "Formulário de contato com HTML e CSS";
  div.appendChild(texto);
  texto.style.margin = "20px auto";
});
