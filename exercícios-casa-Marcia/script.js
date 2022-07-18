const primeiraDiv = document.querySelector("#primeira-div");
const segundaDiv = document.querySelector("#segunda-div");
const terceiraDiv = document.querySelector("#terceira-div");
const paragrafo = document.querySelector("p");

console.log(paragrafo);

paragrafo.innerHTML = "Alterando valor do parágrafo";

primeiraDiv.style.backgroundColor = "red";
primeiraDiv.style.width = "300px";
primeiraDiv.style.height = "200px";

segundaDiv.style.backgroundColor = "blue";
segundaDiv.style.width = "300px";
segundaDiv.style.height = "200px";

terceiraDiv.style.backgroundColor = "yellow";
terceiraDiv.style.width = "300px";
terceiraDiv.style.height = "200px";

paragrafo.setAttribute("class", "paragrafo");

///