//Selecionando campos e input e botão
const section = document.querySelector("section");
const div1 = document.querySelector(".div-1");
const div2 = document.querySelector(".div-2");
const div3 = document.querySelector(".div-3");
const inputNome = document.querySelector("#name");
const inputSenha = document.querySelector("#password");
const button = document.querySelector("button");
const formulario = document.querySelector("form");
const body = document.querySelector("body");


body.style.backgroundColor = "#FFE4C4";
section.style.textAlign = "center";
section.style.paddingTop = "10rem";
div1.style.paddingTop = "1rem";
div2.style.paddingTop = "1rem";
div3.style.padding = "1rem";
inputNome.style.width = "15%";
inputNome.style.backgroundColor = "#FFF0F5";
inputSenha.style.width = "16%";
inputSenha.style.backgroundColor = "#FFF0F5";


const paragrafo = document.createElement("p");
formulario.appendChild(paragrafo);

function formLogin(event) {
  event.preventDefault();
  const nome = inputNome.value;
  const senha = inputSenha.value;
  if (nome === "Roberta" && senha === "123456") {
    paragrafo.innerText = `Olá, ${nome}! Que prazer te ter aqui!`;

  } else {
    paragrafo.innerText = "Sem permissão!";
  }
}

button.addEventListener("click", formLogin);
