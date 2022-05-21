const headerPrincipal = document.querySelector("#header1");
const tituloPrincipal = document.querySelector(".tituloPrincipal");
const primeiraSection = document.querySelector("#primeiraSection");
const subTitulo = document.querySelector (".subtitulo");
const paragrafo = document.querySelector (".paragrafo")

headerPrincipal.style.backgroundColor ="pink";
headerPrincipal.style.display = "flex";

tituloPrincipal.style.color="blue";
tituloPrincipal.style.fontSize = "2rem";
tituloPrincipal.style.textShadow = "2px 2px black";

primeiraSection.style.fontFamily="Roboto, sans-serif";
primeiraSection.style.fontWeight="bold";
primeiraSection.style.border = "1px solid purple";
primeiraSection.style.margin = "15px";

const primeiraDiv = document.querySelector(".primeiraDiv");
const imagemRuPaul = document.createElement("img")
imagemRuPaul.setAttribute('src', "https://zh.rbsdirect.com.br/imagesrc/17067701.jpg?w=700");
imagemRuPaul.setAttribute('alt', "imagem RuPaul");
primeiraDiv.appendChild(imagemRuPaul);
imagemRuPaul.style.width = "500px"
imagemRuPaul.style.position = "center"

const input1=document.querySelector("#input1");
const input2=document.querySelector("#input2");

console.log(input1);
console.log(input2);

const valorInput1 = input1.value;
const valorInput2 = input2.value;

const botaoSubmit = document.querySelector("#botao-submit");

const form = document.querySelector(".primeiro-form");
 form.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    const valorInput1 = input1.value;
    const valorInput2 = input2.value;
    const segundaDiv = document.querySelector(".segundaDiv");
    const paragrafoNovo = document.createElement('p');
    paragrafoNovo.innerText = `Olá ${valorInput1}`;
    segundaDiv.appendChild(paragrafoNovo);
 });


function eventoImagemDiminui(){
    imagemRuPaul.style.width = "600px";
   };
   
   function eventoImagemAumenta(){
       imagemRuPaul.style.width = "1100px";
   };
   
   imagemRuPaul.addEventListener("mouseenter", eventoImagemAumenta);
   imagemRuPaul.addEventListener("mouseleave", eventoImagemDiminui);