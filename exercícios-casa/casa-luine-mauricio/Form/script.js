const inputName = document.querySelector("#name");
const inputPassword = document.querySelector("#password");
const button = document.querySelector("#button");

const form = document.querySelector("form");
const paragraph = document.createElement("p");
paragraph.innerText = "Sem permissão";
form.appendChild(paragraph);

function textEnter(event) {
  event.preventDefault();
  const name = inputName.value;
  if (name) {
    paragraph.innerText = `Olá, ${name}!`;
  } else {
    alert("Favor preencher o campo vazio");
  }
}

button.addEventListener("click", textEnter);