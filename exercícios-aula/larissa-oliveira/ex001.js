const primeiraDiv = document.querySelector("#primeira-div");
const segundaDiv = document.querySelector("#segunda-div");
const terceiraDiv = document.querySelector("#terceira-div");
const primeiroParagrafo = document.querySelector(".primeiro-paragrafo");

console.log("primeiroParagrafo");

primeiroParagrafo.innerText = "Exercicio da aula DOM";

primeiraDiv.style.backgroundColor = "yellow";
primeiraDiv.style.width = "300px";
primeiraDiv.style.height = "300px";

segundaDiv.style.backgroundColor = "red";
segundaDiv.style.width = "300px";
segundaDiv.style.height = "300px";

terceiraDiv.style.backgroundColor = "green";
terceiraDiv.style.width = "300px";
terceiraDiv.style.height = "300px";

primeiroParagrafo.setAttribute("class", "paragrafo");
