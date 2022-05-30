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
const imagemLuisaSonza = document.createElement("img");
imagemLuisaSonza.setAttribute('src', "https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2022/02/luisa.jpg");
imagemLuisaSonza.setAttribute('alt', "imagem Luísa Sonza");
primeiraDiv.appendChild(imagemLuisaSonza);
imagemLuisaSonza.style.width = "600px";

const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");

console.log(input1);
console.log(input2);

const valorInput1 = input1.value;
const valorInput2 = input2.value;

console.log(valorInput1);
console.log(valorInput2);