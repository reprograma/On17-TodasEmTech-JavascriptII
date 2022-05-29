/* -ETAPA3: Crie uma variável para armazenar cada um dos seus elementos HTML no javascript; */

const section = document.querySelector(".container-principal");
const title = document.querySelector("h2");
const paragrafo = document.querySelector("p");
const imagem = document.querySelector(".header-logo");
const link = document.querySelector("a");
const footer = document.querySelector("footer");




/* - ETAPA4: Adicione uma `classe` para o seu elemento de parágrafo usando o DOM; */

paragrafo.classList.add(".paragrafo");

/* - ETAPA5: Crie ou modifique o `estilo` da sua imagem usando o DOM; */

imagem.style.width = "317px";

/* - ETAPA6: Modifique o valor do atributo `href` do seu link utilizando os DOM; */

link.setAttribute(
  "href",
  "https://pt.wikipedia.org/wiki/Universo_Estendido_DC"
);

/* - ETAPA7: Crie um novo elemento HTML utilizando o DOM e o adicione ao seu HTML.  */

let footerText = document.createElement("p");
footerText.innerHTML =
  "Site desenvolvido por Nathállia Cabral - Aula {Reprograma} | © Copyright 2022";
footer.appendChild(footerText);



//##### PARTE 2: //

//Quem é o elemento `pai/mãe` do seu artigo? 
let article = document.querySelector("article");
console.log(
  `O elemento pai/mãe da tag article é: ${article.parentElement.nodeName.toLowerCase()}`
);

//Quem são os elementos `filhes` do seu artigo? 
let titulo = document.querySelector("p");
console.log(
  `O elemento filhes da tag article é: ${titulo.nodeName.toLowerCase()}`
);

//Qual elemento é o `próximo irmão` do elemento parágrafo?
console.log(
  `O elemento mais próximo do parágrafo é: ${paragrafo.nextElementSibling.nodeName.toLowerCase()}`
);


//##### PARTE 3:

//Função altera comportamento imagem

imagem.addEventListener("mouseover", (event) => {
  imagem.style.width = "517px";
});

imagem.addEventListener("mouseout", (event) => {
  imagem.style.width = "317px";
});
