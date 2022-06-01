const inputName = document.querySelector("#name");
const inputPassword = document.querySelector("#password");
const button = document.querySelector("button");


const form = document.querySelector("form");
const paragrafo = document.createElement("p");
paragrafo.innerText = "Sem permissão";
form.appendChild(paragrafo);


button.addEventListener("click", mensagem);

function mensagem(event) {
  event.preventDefault();
  const nome = inputName.value;
  if (nome) {
    paragrafo.innerText = `Olá, ${nome} =)`;
  } else {
    alert("Favor preencher o seu nome");
  }
}