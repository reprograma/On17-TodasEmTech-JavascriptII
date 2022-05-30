
const headerPrincipal = document.querySelector("#header1"); //Header
const tituloPrincipal = document.querySelector(".titulo-principal"); //h1
const section1 = document.querySelector("section");

tituloPrincipal.style.color = "white";
headerPrincipal.style.backgroundColor="blue";
tituloPrincipal.style.fontFamily="Roboto, sans-serif";
section1.style.fontFamily="Roboto, sans-serif";
section1.style.fontWeight="bold";
section1.style.border = "1px solid purple";
section1.style.margin = "15px";

const primeiraDiv = document.querySelector(".primeira-div");
const imagemLuisaSonza = document.createElement("img");
imagemLuisaSonza.setAttribute('src', "https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2022/02/luisa.jpg");
imagemLuisaSonza.setAttribute('alt', "imagem Luísa Sonza");
primeiraDiv.appendChild(imagemLuisaSonza);
imagemLuisaSonza.style.width = "600px";
//headerPrincipal.removeChild(tituloPrincipal);

const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");

console.log(input1);
console.log(input2);


const botaoSubmit = document.querySelector("#botao-submit");


botaoSubmit.addEventListener('click', (evento)=>{
    evento.preventDefault();
    const valorInput1 = input1.value;
    const valorInput2 = input2.value;
    const segundaDiv = document.querySelector(".segunda-div");
    const paragrafoNovo = document.createElement('p');
    paragrafoNovo.innerText = `a Luisa Sonza é ${valorInput1} e ${valorInput2}`;
    segundaDiv.appendChild(paragrafoNovo);
});

function eventoImagemDiminui(){
    imagemLuisaSonza.style.width = "40px";
    };
function eventoImagemAumenta(){
    imagemLuisaSonza.style.width = "500px";
    };

imagemLuisaSonza.addEventListener("mouseenter", eventoImagemDiminui);
imagemLuisaSonza.addEventListener("mouseleave", eventoImagemAumenta);

