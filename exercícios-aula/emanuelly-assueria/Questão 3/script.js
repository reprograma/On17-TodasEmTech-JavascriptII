//Pegando os elementos através do DOM
const aCaixa = document.querySelector(".div1");
const oForm = document.querySelector(".formulario");
const etiquetas = document.querySelectorAll("#labels");
const entradas = document.querySelector("input");
const botaoEnviar = document.querySelector(".botao1")

// Construindo estilos para os elementos

oForm.style.display = "flex";
oForm.style.flexDirection = "column";
oForm.style.alignItems = "center";
oForm.style.margin = "30px";
// oForm.style.backgroundColor = "red"
oForm.style.justifyContent = "center";

aCaixa.style.backgroundColor = "pink";
aCaixa.style.display = "flex";
aCaixa.style.flexDirection = "column";
aCaixa.style.width = "800px";
aCaixa.style.alignItems = "center";
aCaixa.style.borderRadius = "10px";

//Mostrando imagem através do evento de submissão
oForm.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const imagem = document.createElement("img");
  imagem.setAttribute("src", "ilustra.jpeg");
  imagem.style.width = "950px";
  imagem.style.height = "350px";
  imagem.style.margin = "auto";
  aCaixa.appendChild(imagem);
  const texto = document.createElement("p");
  texto.innerHTML = "Recebimento de informações para contato";
  aCaixa.appendChild(texto);
});