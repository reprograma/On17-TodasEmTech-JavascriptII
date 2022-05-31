//let headerPrincipal = document.getElementById("header1");
//const tituloPrincipal = document.getElementsByClassName("titulo-principal");
const headerPrincipal = document.querySelector("#header1");
const tituloPrincipal = document.querySelector(".titulo-principal");
const section1 = document.querySelector("section");


tituloPrincipal.style.color="white";
headerPrincipal.style.backgroundColor="#0DA649";
tituloPrincipal.style.fontFamily="Roboto, sans-serif";
headerPrincipal.style.display = "flex";
section1.style.fontFamily="Roboto, sans-serif";
section1.style.fontWeight="bold";
section1.style.border = "1px solid purple";
section1.style.margin = "15px";

const primeiraDiv = document.querySelector(".primeira-div");
const imagemDom = document.createElement("img");
imagemDom.setAttribute('src', "https://i.ytimg.com/vi/RbQGn6vBlys/maxresdefault.jpg");
imagemDom.setAttribute('alt', "imagem DOM");
primeiraDiv.appendChild(imagemDom);
imagemDom.style.width = "600px";

// headerPrincipal.removeChild(tituloPrincipal); => remover um item // 

// criar eventos //

const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");

console.log(input1);
console.log(input2);



const botaoSubmit = document.querySelector('#botao-submit');
const segundaDiv = document.querySelector(".segunda-div")


botaoSubmit.addEventListener('click', (evento) =>{
    evento.preventDefault();
    const valorInput1 = input1.value;
    const valorInput2 = input2.value;
    const paragrafoNovo = document.createElement('p');
    paragrafoNovo.innerText = `O DOM é ${valorInput1} e ${valorInput2}`;
    segundaDiv.appendChild(paragrafoNovo);
});

function eventoImagemDiminui(){
    imagemDom.style.width = "40px";
   };
   
   function eventoImagemAumenta(){
       imagemDom.style.width = "500px";
   };
   
   imagemDom.addEventListener("mouseenter", eventoImagemDiminui);
   imagemDom.addEventListener("mouseleave", eventoImagemAumenta);
