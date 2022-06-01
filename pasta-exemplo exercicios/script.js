const headerPrincipal = document.getElementById("header-1");
const tituloPrincipal = document.querySelector(".titulo-principal");


headerPrincipal.style.color="#fff";
headerPrincipal.style.background="#567890";



const primeiraDiv = document.querySelector(".primeira-div");
const imagemAnnita = document.createElement("img");
imagemAnnita.setAttribute("src", "https://i.ytimg.com/vi/ch4UiD9fDwE/maxresdefault.jpg");
imagemAnnita.setAttribute("alt", "Imagem Annita");
primeiraDiv.appendChild(imagemAnnita);

imagemAnnita.style.width="100vh";

const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");

const botaoSubmit = document.querySelector('#botao-submit');

// botaoSubmit.addEventListener('click', (evento)=>{
//     evento.preventDefault();
//     const valorInput1 = input1.value;
//     const valorInput2 = input2.value;
//     const segundaDiv = document.querySelector(".segunda-div");
//     const paragrafoNovo = document.createElement('p');
//     paragrafoNovo.innerText = `A Annita é ${valorInput1} e ${valorInput2}`;
//     segundaDiv.appendChild(paragrafoNovo);
// });

const form = document.querySelector(".form");
 form.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    const valorInput1 = input1.value;
    const valorInput2 = input2.value;
    const segundaDiv = document.querySelector(".segunda-div");
    const paragrafoNovo = document.createElement('p');
    paragrafoNovo.innerText = `A  Annita é ${valorInput1} e ${valorInput2}`;
    segundaDiv.appendChild(paragrafoNovo);
 });

 function eventoImagemDiminui(){
    imagemAnnita.style.width = "300px";
   };
   
   function eventoImagemAumenta(){
       imagemAnnita.style.width = "800px";
   };
   
   imagemAnnita.addEventListener("mouseenter", eventoImagemDiminui);
   imagemAnnita.addEventListener("mouseleave", eventoImagemAumenta);
   

