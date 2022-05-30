const primeiraDiv = document.querySelector("primeiraDiv");
const segundaDiv = document.querySelector("segundaDiv");
const terceiraDiv = document.querySelector("terceiraDiv");
const paragrafo = document.querySelector("p")

//imprimindo paragrafo
console.log(paragrafo);

//Alterando conteúdo parágrafo paraparagrafo.innerHTML = "Alterando valor do paragrafo";

//Alterando o estilo das divs para que cada um seja caixa primeira 

primeiraDiv.style.background = "green";
primeiraDiv.style.width = "150px";
primeiraDiv.style.height = "150px";
primeiraDiv.style.margin = "20px";

primeiraDiv.style.background = "black";
primeiraDiv.style.width = "150px";
primeiraDiv.style.height = "150px";
primeiraDiv.style.margin = "20px";

primeiraDiv.style.background = "blue";
primeiraDiv.style.width = "150px";
primeiraDiv.style.height = "150px";
primeiraDiv.style.margin = "20px";

paragrafo.setAttribute("class", "paragrafo");

console.log("paragrafo")