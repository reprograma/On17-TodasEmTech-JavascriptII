const headerPrincipal = document.querySelector("#header1"); //Header
const tituloPrincipal = document.querySelector(".titulo-principal"); //h1
const section1 = document.querySelector("section");

headerPrincipal.style.background = "pink";
headerPrincipal.style.fontFamily = "Arial";
tituloPrincipal.style.color = "red";
section1.style.fontFamily = "Arial";

const primeiraDiv = document.querySelector(".primeira-div");
const imagemLuisaSonza = document.createElement("img");
imagemLuisaSonza.setAttribute('src', "https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2022/02/luisa.jpg");
imagemLuisaSonza.setAttribute('alt', "imagem Luísa Sonza");
primeiraDiv.appendChild(imagemLuisaSonza);
imagemLuisaSonza.style.width = "600px";
//headerPrincipal.removeChild(tituloPrincipal)

const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");

console.log(input1);
console.log(input2);

const form = document.querySelector(".primeiro-form");
 form.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    const valorInput1 = input1.value;
    const valorInput2 = input2.value;
    const segundaDiv = document.querySelector(".segunda-div");
    const paragrafoNovo = document.createElement('p');
    paragrafoNovo.innerText = `A Luísa Sonza é ${valorInput1} e ${valorInput2}.`;
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