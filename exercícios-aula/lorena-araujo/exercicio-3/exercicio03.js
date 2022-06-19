const tituloTexto = document.querySelector("#titulo");
const subtituloTexto = document.querySelector("#subtitulo");
const paragrafo = document.querySelector("p");
const primeiraDiv = document.querySelector("#primeira_div");
const Input = document.querySelector("#input");
const conteudo = document.querySelector("body");
const formulario = document.querySelector(".primeiro-form");

conteudo.style.background = "white";
conteudo.style.color = "purple";
conteudo.style.textAlign = "justify";

tituloTexto.style.textAlign = "justify";
tituloTexto.style.background = "white";
tituloTexto.style.padding = "35px";

subtituloTexto.style.textAlign = "justify";

paragrafo.style.border = "5.5px solid";

paragrafo.style.margin = "30px";
paragrafo.style.padding = "30px";

primeiraDiv.style.textAlign = "justify";
primeiraDiv.style.margin = "80px";
primeiraDiv.style.fontSize= "30px"

formulario.addEventListener("submit", (evento) => {
evento.preventDefault();
let imagem = document.createElement("img");
imagem.setAttribute("src", "https://www.oficinadanet.com.br/imagens/post/25197/images.jpg");
imagem.style.width = "550px";
imagem.style.height = "550px";
div.appendChild(imagem);

let texto = document.createElement("p");
texto.innerHTML = "Lorem Ipsum"
div.appendChild(texto);
texto.style.margin = "25px auto";
});