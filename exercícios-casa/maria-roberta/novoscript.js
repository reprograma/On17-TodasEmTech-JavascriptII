const body = document.getElementById("body");
const section = document.querySelector(".beneficios");
const title = document.querySelector("h1");
const subtitulo = document.querySelector("h2");
const paragrafo = document.querySelector("p");
const imagem = document.querySelector("img");
const link = document.querySelector("a");
const footer = document.querySelector("footer");

//Estilização
body.style.backgroundColor = "LightBlue";
section.style.display = "flex";
section.style.flexDirection = "column";
section.style.textAlign = "center";
section.style.padding = "10px 50px";
title.style.border = "3px solid SteelBlue";
title.style.width = "100%";
title.style.textAlign = "center";

//Adicionando
paragrafo.classList.add("paragrafo");
paragrafo.style.textAlign = "justify";
paragrafo.style.padding = "15px 30px";

//Mudando
imagem.style.width = "300px";
imagem.style.marginBottom = "10px";

//Mudando link
link.setAttribute("href", "https://g1.globo.com/especial-publicitario/a-vida-e-pra-ja/noticia/2021/03/09/por-que-conviver-um-pet-faz-bem-veja-5-motivos-para-ter-um-animal-de-estimacao.ghtml");

//Criando footer
let footerText = document.createElement("p");
footerText.innerHTML = "Copyright © 2022 MDN Web Docs - Página desenvolvida por Maria Roberta - Aluna Front-End {Reprograma}";
footer.appendChild(footerText);

//Elemento pai/mãe
let article = document.getElementById('article-id').parentNode;
console.log(`O elemento pai/mãe da tag article é: ${article.parentElement.nodeName.toLowerCase()}`);

//Elementos filhos
console.log('Os elementos filhos do article são:');
let filhos = document.querySelectorAll('article > *');
filhos.forEach(console.log);
console.log('');

//Elemento próximo
console.log(`O elemento mais próximo do parágrafo é: ${paragrafo.nextElementSibling.nodeName.toLowerCase()}`);


//Evento da imagem
imagem.addEventListener("mouseover", (event) => {
  imagem.style.width = "370px";
});

imagem.addEventListener("mouseout", (event) => {
  imagem.style.width = "300px";
});