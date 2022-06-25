const titulo = document.querySelector("h1");
const subtitulo = document.querySelector("h2");
const primeiroParagrafo = document.querySelector(".paragrafo1");
const primeiraDiv = document.querySelector(".primeiraDiv");
const paragrafo2 = document.querySelector(".paragrafo1");
const titulo3 = document.querySelector("h3");
const paragrafo3 = document.querySelector(".paragrafo3");

primeiroParagrafo.remove();

const imagem = document.createElement("img");
imagem.setAttribute('src', "https://bloginterocitro.files.wordpress.com/2014/03/38472215.jpg" );
imagem.setAttribute('alt', "Imagem da capa do álbum The Dark Side Of the moon, com um prisma atravessado por um arco íris");
imagem.style.width = "300px";
imagem.style.height = "300px";
primeiraDiv.appendChild(imagem);

function changeHigh() {
  imagem.style.width = "200px";
}
imagem.addEventListener("mouseover", changeHigh);

primeiraDiv.appendChild(paragrafo2);
primeiraDiv.style.backgroundColor = "#C61788";