const section = document.querySelector(".sobre_pugs");
const title = document.querySelector("h1");
const subtitulo = document.querySelector("h2");
const paragrafo = document.querySelector("p");
const imagem = document.querySelector("img");
const link = document.querySelector("a");
const footer = document.querySelector("footer");


section.style.display = "flex";
section.style.flexDirection = "column";
section.style.textAlign = "center";
section.style.padding = "10px 50px";
title.style.color="#490A74";
subtitulo.style.backgroundColor="#B895EF";
subtitulo.style.color="#490A74";


paragrafo.classList.add("paragrafo");
paragrafo.style.textAlign = "justify";
paragrafo.style.padding = "20px 120px";


imagem.style.width = "250px";
imagem.style.marginBottom = "20px";


link.setAttribute(
  "href",
  "https://tudosobrecachorros.com.br/pug/"
);


let footerText = document.createElement("p");
footerText.innerHTML =
  "Todos os direitos reservados- 2022";
footer.appendChild(footerText);


let article = document.querySelector("article");
console.log(
  `Elemento pai e mãe do artigo: ${article.parentElement.nodeName.toLowerCase()}`
);


let children = article.childNodes;
let childrenList = [];
for (let i = 0; i < children.length; i++) {
  if (children[i].nodeName != "#text") {
    childrenList.push(children[i].nodeName.toLowerCase());
  }
}
console.log(`Elementos filhos do artigo: ${childrenList}`);


console.log(
  `Elemento mais próximo do parágrafo: ${paragrafo.nextElementSibling.nodeName.toLowerCase()}`
);


imagem.addEventListener("mouseover", (event) => {
  imagem.style.width = "450px";
});

imagem.addEventListener("mouseout", (event) => {
  imagem.style.width = "200px";
});
