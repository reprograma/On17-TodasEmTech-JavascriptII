//estilizando e chamando todos os elementos
const elementoBody = document.querySelector("body");
elementoBody.style.backgroundColor = "grey";

const titulo = document.querySelector("h1");
titulo.style.color = "black";
titulo.style.boxShadow = "2rem"
//dizer o elemento pai, filhos e imão do artigo no console
console.log(elementoBody);


const artigo = document.querySelector("article");

const paragrafo = document.querySelector("p");
paragrafo.style.color ="#ffffff";

const divImagem = document.querySelector(".img-principal");

const linkArtigo = document.querySelector("a");
linkArtigo.style.textDecoration ="none"
linkArtigo.style.color = "pink"
linkArtigo.style.fontSize = "28px";
linkArtigo.style.margin = "50px";

//adicionando uma classe para paragrafo
paragrafo.classList.add("primeiro-paragrafo");

//criando um elemento imagem 
const imagemArtigo = document.createElement("img");
imagemArtigo.setAttribute("src", " https://static.wixstatic.com/media/c39ebe_15a19552ad3a4e5383d13eede9275e7a~mv2.jpg/v1/fill/w_648,h_431,al_c,q_90/c39ebe_15a19552ad3a4e5383d13eede9275e7a~mv2.jpg" );
imagemArtigo.setAttribute("alt", "Imagem Pina Baush Dançando");
divImagem.appendChild(imagemArtigo);
imagemArtigo.style.width = "200px"


//criar evento da imagem 
function eventoImagemDiminui(){
    imagemArtigo.style.width = "40px";
    
   };
   
   function eventoImagemAumenta(){
       imagemArtigo.style.width = "100%";
       
   };
   
   imagemArtigo.addEventListener("mouseenter", eventoImagemDiminui);
   imagemArtigo.addEventListener("mouseleave", eventoImagemAumenta);


linkArtigo.setAttribute("href", "https://www.youtube.com/watch?v=bgBPFPOXbrU");

//criar novo elemento
const novoElemnto = document.querySelector(".elemento")
const subTitulo = document.createElement("h2");
novoElemnto.appendChild(subTitulo);
//criar texto dentro do h2
const texto = document.createTextNode("Dance, dance senão estamos perdidos - Pina Bausch");
subTitulo.appendChild(texto);





