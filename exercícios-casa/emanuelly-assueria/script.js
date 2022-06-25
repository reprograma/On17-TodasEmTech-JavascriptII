//01
//ESTAPA 03
const titulo = document.querySelector("tittle");
const artigo = document.querySelector("article");
const paragrafo = document.querySelector("p");
const imagem = document.querySelector("img");
const linkPortifolio = document.querySelector("a");

//ETAPA 04
const testeClasse = document.createElement('class');
paragrafo.appendChild(testeClasse);


//ETAPA 05
titulo.style.display = "flex";
titulo.style.alignItems = "center";
titulo.style.justifyContent = "center";
titulo.style.flexDirection = "column";
titulo.style.fontSize = "30px"

imagem.style.display = "flex";
imagem.style.borderRadius = "20px";
imagem.style.width = "600px";
imagem.style.margin = "20px";

artigo.style.display = "flex";
artigo.style.justifyContent = "center";
artigo.style.flexDirection = "column";
artigo.style.alignItems = "center";
artigo.style.fontSize = "20px";

linkPortifolio.style.textDecoration = "none";
linkPortifolio.style.backgroundColor = "pink";
linkPortifolio.style.padding = "10px";
linkPortifolio.style.borderRadius = "5px";
// linkPortifolio.style.color = "white";


//ETAPA 06
linkPortifolio.removeAttribute('href');
linkPortifolio.setAttribute('href', "https://behance.net/assueriart")

//ETAPA 07
const novoElemento = document.createElement('p');
novoElemento.textContent = ("suahdusahudha");
// const texto = document.createTextNode("Alguma coisa etc etc");
artigo.appendChild(novoElemento);



//02

//Elemento mãe
console.log(artigo.parentElement);

//Elementos filhas
console.log(artigo.children);

//Próxima irmã de <p>
console.log(paragrafo.nextElementSibling);


//03

function mouseEntra(){
    imagem.style.width = "800px";
  }
  
  function mouseSai(){
    imagem.style.width = "600px";
  }
  
  imagem.addEventListener('mouseenter', mouseEntra);
  
  imagem.addEventListener('mouseleave', mouseSai);


//04

