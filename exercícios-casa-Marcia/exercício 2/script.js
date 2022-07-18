//let headerPrincipal = document.getElementById("header1"); ou
const headerPrincipal = document.querySelector("#header1");
 const tituloPrincipal = document.querySelector(".titulo-principal"); 
//const tituloPrincipal = document.getElementsByClassName("titulo-principal");
const section1 = document.querySelector("section");

tituloPrincipal.style.color="white";
headerPrincipal.style.backgroundColor="#7e459b";
tituloPrincipal.style.fontFamily="Roboto, sans-serif";
headerPrincipal.style.display = "flex";
section1.style.fontFamily="Roboto, sans-serif";
section1.style.fontWeight="bold";
section1.style.border = "1px solid purple";
section1.style.margin = "15px";

const primeiraDiv = document.querySelector(".primeira-div");
const imagemGato = document.createElement("img");
imagemGato.setAttribute('src', "https://uploads.spiritfanfiction.com/historias/capas/202107/o-pequeno-gato-de-tweek-22620876-070720210224.jpg");
imagemGato.setAttribute('alt', "gatinho filhote");
primeiraDiv.appendChild(imagemGato);// Escolha 2 elementos que um que será removido e um adicionado pelo DOM.
imagemGato.style.width ="480px";
imagemGato.style.border = "1px solid purple";
imagemGato.style.margin = "20vh";

headerPrincipal.removeChild(tituloPrincipal);//Escolha 2 elementos que um que será removido e um adicionado pelo DOM.

imagemGato.textContent += "Olá sumiu o gato"
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");


console.log(input1);
console.log(input2);


//o 5o elemento deverá ser filho do 4o, utilize algum método relacional do DOM para alterar algum atributo CSS desse filho e desse pai.
const formulario = document.querySelector("fieldset");
formulario.style.width = "50%";

const botaoSubmit = document.querySelector("#botao-submit");
const segundaDiv = document.querySelector(".segunda-div")

botaoSubmit.addEventListener('click', (evento)=>{
evento.preventDefault();
const valorInput1 = input1.value;
const valorInput2 = input2.value;
  const paragrafoNovo = document.createElement('p');
  paragrafoNovo.innerText = `O nome do seu pet é ${valorInput2}`;
  segundaDiv.appendChild(paragrafoNovo);
});


//Adicione algum evento ao 3o elemento. Esse evento deverá ser visível ao usuário.
function eventoImagemDiminui(){
  imagemGato.style.width = "50px";
};
function eventoImagemAumenta(){
  imagemGato.style.width = "500px";
};

imagemGato.addEventListener("mouseenter" , eventoImagemDiminui);
imagemGato.addEventListener("mouseleave" , eventoImagemAumenta);