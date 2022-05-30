const formularioDadosPessoais = document.querySelector("#fieldset");
const tituloPrincipal = document.querySelector("legend")
const titulosForm = document.querySelector("label");
const botaoEnviar = document.querySelector("#botao");
const imagem = document.querySelector("#imagem");

//Todo elemento de estilo que existir nessa oagina deverá ser criado através do DOM
formularioDadosPessoais.style.width = "30%";
formularioDadosPessoais.style.backgroundColor ="#BDECB6";
formularioDadosPessoais.style.margin= "20px 10px";
tituloPrincipal.style.margin = "10px";
tituloPrincipal.style.textAlign="center";
titulosForm.style.margin = "10px";
botaoEnviar.style.backgroundColor = "#4CAF50";
botaoEnviar.style.color = "white";
botaoEnviar.style.padding = "10px 12px";
botaoEnviar.style.textAlign = "center";
botaoEnviar.style.textDecoration = "none";
botaoEnviar.style.display = "flex";
botaoEnviar.style.fontSize = "16px";
botaoEnviar.style.position = "absolute";
botaoEnviar.style.cursor = "pointer";
imagem.style.display = "none";

// Assim que o evento de submit for acionado, faça aparecer uma foto e um elemento de texto com a descrição dessa foto.
botaoEnviar.addEventListener('click', (evento) => {
  evento.preventDefault();

  imagem.style.display = "block";

});
