const title = document.querySelector("h1");
const subtitle = document.querySelector("h2");
const fistParagraph = document.querySelector(".primeiro-paragrafo");
const firtDiv = document.querySelector(".primeira-div");
const secondParagraph = document.querySelector(".segundo-paragrafo");
const chapter = document.querySelector("h3");
const thirdParagraph = document.querySelector(".terceiro-paragrafo");

fistParagraph.remove();

const image = document.createElement("img");
image.setAttribute(
  "src",
  "https://imagens-revista-pro.vivadecora.com.br/uploads/2017/06/livros-para-arquitetos.jpg"
);
image.setAttribute(
  "alt",
  "imagem de um livro aberto cheio de corações saindo dele"
);
image.style.width = "300px";
image.style.height = "300px";
firtDiv.appendChild(image);

function changeHigh() {
  image.style.width = "150px";
}
image.addEventListener("mouseover", changeHigh);

firtDiv.appendChild(secondParagraph);
firtDiv.style.backgroundColor = "red";
