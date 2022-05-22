const headerPrincipal = document.querySelector("#titulo");
const paragrafoPrincipal = document.querySelector("#paragrafo");
const artigoPrincipal = document.querySelector("#artigo");
const primeiraDiv = document.querySelector("#primeira-div");
const bodyPrincipal = document.querySelector("#body");


tituloPrincipal.style.color = "pink";
headerPrincipal.style.backgroundColor = "#0DA649";
tituloPrincipal.style.fontFamily = "Roboto, sans-serif";
headerPrincipal.style.display = "flex";
artigoPrincipal.style.fontFamily = "Roboto, sans-serif";
artigoPrincipal.style.fontWeight = "bold";
artigoPrincipal.style.border = "1px solid pink";
artigoPrincipal.style.margin = "15px";


const imagemDom = document.createElement("img");
imagemDom.setAttribute('src', "https://i.pinimg.com/originals/f1/31/79/f13179a5e8cf9d25dfea33e0932606e8.jpg");
imagemDom.setAttribute('alt', "imagem HTML, CSS e JS");
primeiraDiv.appendChild(imagemDom);