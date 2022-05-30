// Selecionando todos os elementos HTML
const section = document.querySelector(".posts");
const header = document.querySelector("header");
const titulo = document.querySelector("h1");
const tituloArtigo = document.querySelector("h2");
const paragrafoArtigo = document.querySelector("p");
const boxImagem = document.querySelector("div");
const imagemArtigo = document.querySelector("img");
const linkArtigo = document.querySelector("a");
const rodapeArtigo = document.querySelector("footer");

//Adicionando estilos via JS
section.style.height = "100vh";
section.style.display = "flex";
section.style.flexDirection = "column";
section.style.backgroundColor = "#f9f9f9";

header.style.width = "100%";
header.style.height = "80px";
header.style.backgroundColor = "#bc3ad5";
header.style.color = "white";
header.style.textAlign = "center";
header.style.padding = "20px 20px"

// Adicionando classe a tag h1
tituloArtigo.classList.add("titulo__artigo");
tituloArtigo.style.textAlign = "center";
tituloArtigo.style.margin = "8px 0";

// Adicionando classe a tag p
paragrafoArtigo.classList.add("paragrafo__artigo");
paragrafoArtigo.style.textAlign = "center";
paragrafoArtigo.style.padding = "20px 30px";

// Adicionando estilo a imagem
boxImagem.style.display = "flex";
boxImagem.style.justifyContent = "center";
imagemArtigo.style.width = "300px";
imagemArtigo.style.height = "300px";

// Manipulando o link

linkArtigo.style.textAlign = "center";
linkArtigo.setAttribute(
    "href",
    "https://www.alura.com.br/artigos/entendendo-como-funciona-box-model-e-o-box-sizing"
);



// criando um elemento na tag footer
let textoRodape = document.createElement("p");
textoRodape.innerHTML = "Feito por Thayanne Andrade";
rodapeArtigo.appendChild(textoRodape);



// imprimindo no console os elementos pai/mãe da tag article
const tagArticle = document.querySelector("article");
console.log(
    `O elemento pai/mãe de ARTICLE é: ${tagArticle.parentElement.nodeName.toLowerCase()}`
);

// imprimindo no console os filhos da tag article
const filhoArticle = tagArticle.childNodes;
const filhosDeArticle = [];
for (i = 0, i < filhoArticle.length; i++) {
    if(filhoArticle[i].nodeName != "#text") {
        filhosDeArticle.push(filhoArticle[i].nodeName.toLowerCase());
    }
}

console.log(`Os filhos da tag ARTICLE são: ${filhosDeArticle}`);


// encontrando o elemento mais próximo da tag p
console.log(`O elemento mais próximo da tag P é ${paragrafoArtigo.nextElementSibling.nodeName.toLowerCase()}`)


// Criando uma função que altera o comportamento da imagem

imagemArtigo.addEventListener("mouseover", (event) => {
    imagemArtigo.style.width = "320px";
})

imagemArtigo.addEventListener("mouseout", (event) => {
    imagemArtigo.style.width = "300px";
})