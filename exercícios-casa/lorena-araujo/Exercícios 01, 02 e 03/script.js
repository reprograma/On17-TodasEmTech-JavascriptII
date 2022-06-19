// Combo exercícios - 1

const link = document.querySelector("a");
const divPrincipal = document.querySelector(".primeira-div");
const primeiroH2 = document.querySelector(".primeiro-h2");
const articlePrincipal = document.querySelector("#article");
const segundoH2 = document.querySelector(".segundo-h2");
const personagensPrincipais = document.querySelector(".personagem");
const primeiraGuerreira = document.querySelector("#hikaru");
const segundaGuerreira = document.querySelector("#umi");
const terceiraGuerreira = document.querySelector("#fuu");
const paragrafo = document.querySelector("p");
const rodape = document.querySelector("footer");

articlePrincipal.style.fontFamily="Anek Latin, sans-serif";
divPrincipal.style.fontFamily="Anek Latin, sans-serif";
articlePrincipal.style.textAlign = "center";
divPrincipal.style.textAlign = "center";
articlePrincipal.style.fontSize = "20px";
divPrincipal.style.fontSize = "20px";
primeiroH2.style.backgroundColor = "Orchid";
segundoH2.style.backgroundColor = "Orchid";
primeiroH2.style.color = "White";
segundoH2.style.color = "White";

paragrafo.classList.add("Rayearth");

primeiraGuerreira.setAttribute("alt", "Imagem Hikaru Shidou");
primeiraGuerreira.style.width = "400px";

segundaGuerreira.setAttribute("alt", "Imagem Umi Ryuuzak");
segundaGuerreira.style.width = "300px";

terceiraGuerreira.setAttribute("alt", "Imagem Fuu Hououji");
terceiraGuerreira.style.width = "300px";

link.setAttribute("href", "https://pt.wikipedia.org/wiki/Guerreiras_M%C3%A1gicas_de_Rayearth");

const textoRodape = document.createElement("p"); textoRodape.innerText ="Feito com muito amor para a aula da semana 8 da {Reprograma}";
rodape.appendChild(textoRodape);
textoRodape.style.textAlign = "center";
textoRodape.style.color = "purple";
textoRodape.style.textWeight = "bold";
textoRodape.style.fontSize = "18px";
textoRodape.style.backgroundColor = "Orchid";

// Combo exercícios - 2 - Comentada pois estava causando problemas de exibição na minha página

// const article = document.querySelector("article");
// console.log(`O elemento mãe do meu artigo é o: ${article.parentElement.nodeName.toLowerCase()}`
// );


// console.log(
// `Esse elemente é o primeire filhe do meu article, ${segundoH2.nodeName.toLowerCase()}`;
// console.log(
// `Esse elemente é o segunde filhe do article, ${personagensPrincipais.nodeName.toLocaleLowerCase()}`);
// console.log(
// `Este elemente é o terceire filhe do article, ${primeiraGuerreira.nodeName.toLocaleLowerCase()}`);

// console.log(
// `O próximo irmão do elemento parágrafo é ${segundaGuerreira.nextElementSibling.nodeName.toLowerCase()}`);

// Combo exercícios - 3

function eventoImagemDiminui1(){
primeiraGuerreira.style.width = "60px";
};

function eventoImagemAumenta1(){
primeiraGuerreira.style.width = "400px";
};

primeiraGuerreira.addEventListener("mouseenter", eventoImagemDiminui1);
primeiraGuerreira.addEventListener("mouseleave", eventoImagemAumenta1);

function eventoImagemDiminui2(){
segundaGuerreira.style.width = "60px";
};

function eventoImagemAumenta2(){
segundaGuerreira.style.width = "300px";
};

segundaGuerreira.addEventListener("mouseenter", eventoImagemDiminui2);
segundaGuerreira.addEventListener("mouseleave", eventoImagemAumenta2);

function eventoImagemDiminui3(){
terceiraGuerreira.style.width = "60px";
};

function eventoImagemAumenta3(){
terceiraGuerreira.style.width = "300px";
};

terceiraGuerreira.addEventListener("mouseenter", eventoImagemDiminui3);
terceiraGuerreira.addEventListener("mouseleave", eventoImagemAumenta3);

// Combo exercícios - 4

