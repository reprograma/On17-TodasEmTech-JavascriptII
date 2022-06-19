const rayheartGuerreiras = document.querySelector(".rayheart");
const titulo = document.querySelector("h1");
const formularioRayheart = document.querySelector("#formulario-guerreiras");
const campoInput = document.querySelector("#nome");
const campoUsuario = document.querySelector("#user");
const campoSenha = document.querySelector("#senha");
const campoPassword = document.querySelector("#password");


rayheartGuerreiras.style.fontFamily="Anek Latin, sans-serif";
titulo.style.textAlign = "center";
titulo.style.color = "purple";
formularioRayheart.style.textAlign = "center";

const form = document.querySelector("form");
const paragrafo = document.createElement("p");
paragrafo.innerText = "Sem permissão!";
form.appendChild(paragrafo);

// Não consegui fazer a última parte, deu erro no formulário todo :(
