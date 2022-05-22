const headerPrincipal = document.querySelector("#header01"); //Header
const tituloPrincipal = document.querySelector(".texto-header"); //h1
const section1 = document.querySelector("section");

tituloPrincipal.style.color = "#fffafa";
tituloPrincipal.style.background = "#9400d3";
headerPrincipal.style.fontWeight = "bold";
headerPrincipal.style.display = "flex"
section01.style.fontWeight = "bold"
section01.style.border = "1px solid purple"
section01.style.margin = "10px"
section01.style.background = "black"
section01.style.color = "white"

const divPrimeira = document.querySelector(".divPrimeira");
const imagemLuisaSonza = document.createElement("img");
imagemLuisaSonza.setAttribute('src', "https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2022/02/luisa.jpg");
imagemLuisaSonza.setAttribute('alt', "imagem Luísa Sonza");
divPrimeira.appendChild(imagemLuisaSonza) ;

const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");

const botaoSubmit = document.querySelector('#botao-submit');

// botaoSubmit.addEventListener('click', (evento)=>{
//     evento.preventDefault();
//     const valorInput1 = input1.value;
//     const valorInput2 = input2.value;
//     const segundaDiv = document.querySelector(".divSegunda");
//     const paragrafoNovo = document.createElement('p');
//     paragrafoNovo.innerText = `A Luísa Sonza é ${valorInput1} e ${valorInput2}`;
//     divSegunda.appendChild(paragrafoNovo);
// });

const form = document.querySelector(".primeiro-form");
 form.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    const valorInput1 = input1.value;
    const valorInput2 = input2.value;
    const divSegunda = document.querySelector(".divSegunda");
    const paragrafoNovo = document.createElement('p');
    paragrafoNovo.innerText = `A Luísa Sonza é ${valorInput1} e ${valorInput2}`;
    divSegunda.appendChild(paragrafoNovo);
 });


 function eventoImagemDiminui(){
     imagemLuisaSonza.style.width = "40px";
    };
    
    function eventoImagemAumenta(){
        imagemLuisaSonza.style.width = "500px";
    };
    
    imagemLuisaSonza.addEventListener("mouseenter", eventoImagemDiminui);
    imagemLuisaSonza.addEventListener("mouseleave", eventoImagemAumenta);