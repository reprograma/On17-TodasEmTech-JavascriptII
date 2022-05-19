/*Crie um HTML com três divs vazias e um parágrafo com texto. Cada div com um id 
Faça uma tag script no fim do body selecione todos os elementos do html e guarde em variáveis.*/
const primeiraDiv = document.querySelector("#primeira-div");
const segundaDiv = document.querySelector("#segunda-div");
const terceiraDiv = document.querySelector("#terceira-div");
const paragrafo = document.querySelector("p");

// mostre o valor de <p> no console
console.log(paragrafo);

//mude o valor de <p> 
paragrafo.innerHTML = "Alterando o parágrafo";
 

//mude o estilo das divs para que cada uma seja uma caixa com uma cor diferente
primeiraDiv.style.backgroundColor = "#FDFD96";
primeiraDiv.style.width = "150px";
primeiraDiv.style.height = "150px";
primeiraDiv.style.margin = "20px";



segundaDiv.style.backgroundColor = "#CCA9DD";
segundaDiv.style.width = "150px";
segundaDiv.style.height = "150px";
segundaDiv.style.margin = "20px";




terceiraDiv.style.backgroundColor = "#BDECB6";
terceiraDiv.style.width = "150px";
terceiraDiv.style.height = "150px";
terceiraDiv.style.margin = "20px";

//adicione pelo javascript uma classe para o paragrafo
paragrafo.setAttribute("class", "paragrafo");
