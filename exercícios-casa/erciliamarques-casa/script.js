const tituloPrincipal = document.querySelector(".titulo-principal");

const section = document.querySelector(".section");
const subtitulo = document.querySelector("h2");
const paragrafo = document.querySelector(".paragrafo");
const imagem = document.querySelector("img");
const link = document.querySelector("a");
const footer = document.querySelector("footer");

// colocando estilo no HTML
section.style.display = "flex";
section.style.flexDirection = "column";
section.style.textAlign = "center";
section.style.padding = "20px 50px";

//colocando estilo no Titulo
tituloPrincipal.style.color="black";
tituloPrincipal.style.padding="10px";
subtitulo.style.padding="10px";

//colocando class no paragrafo
paragrafo.classList.add("paragrafo");
paragrafo.style.textAlign="justify";
paragrafo.style.color="black";

//modificando o estilo da imagem
imagem.style.width="250px";
imagem.style.margin="center";
imagem.style.marginLeft="1px";

//alterando o href do link
link.setAttribute (
    "href",
    "https://www.ecycle.com.br/manguezais/"
);
link.style.color="#b81733";

//Criando novo elemento
let footerText = document.createElement("p");
footerText.innerHTML =
  "Copyright © 2022 PTT Docs - Todos os direitos reservados";
footer.appendChild(footerText);
footer.style.color="#33334d";

//##### PARTE 2:

//Elemento pai/mãe da tag article
let article = document.querySelector("article");
console.log(
  `O elemento pai/mãe da tag article é: ${article.parentElement.nodeName.toLowerCase()}`
);

//Elementos filhes da tag article
let children = article.childNodes;
let childrenList = [];
for (let i = 0; i < children.length; i++) {
  if (children[i].nodeName != "#text") {
    childrenList.push(children[i].nodeName.toLowerCase());
  }
}
console.log(`Os elementos filhes da tag article são: ${childrenList}`);

//Elementos mais pŕoximo da tag p
console.log(
  `O elemento mais próximo do parágrafo é: ${paragrafo.nextElementSibling.nodeName.toLowerCase()}`
);

//##### PARTE 3:

//Função altera comportamento imagem

imagem.addEventListener("mouseover", (event) => {
  imagem.style.height = "500px";
  imagem.style.width = "550px";

});

imagem.addEventListener("mouseout", (event) => {
  imagem.style.height = "250px";
  imagem.style.width = "300px";

});