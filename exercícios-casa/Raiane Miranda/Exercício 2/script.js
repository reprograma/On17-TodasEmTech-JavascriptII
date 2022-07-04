const titulo = document.querySelector("h1");
const subtitulo = document.querySelector("h2");
const primeiroParagrafo = document.querySelector(".primeiro-paragrafo");
const primeiraDiv = document.querySelector(".primeira-div");
const segundoParagrafo = document.querySelector(".segundo-paragrafo");
const capitulo = document.querySelector("h3");
const terceiroParagrafo = document.querySelector(".terceiro-paragrafo");

primeiroParagrafo.remove();

const imagem = document.createElement("img");
imagem.setAttribute(
  "src",
  "https://imagens-revista-pro.vivadecora.com.br/uploads/2017/06/livros-para-arquitetos.jpg"
);
imagem.setAttribute(
  "alt",
  "imagem de um livro aberto cheio de corações saindo dele"
);
imagem.style.width = "300px";
imagem.style.height = "300px";
primeiraDiv.appendChild(imagem);

function alteraTamanho() {
  imagem.style.width = "150px";
}
imagem.addEventListener("mouseover", alteraTamanho);

primeiraDiv.appendChild(segundoParagrafo);
primeiraDiv.style.backgroundColor = "red";