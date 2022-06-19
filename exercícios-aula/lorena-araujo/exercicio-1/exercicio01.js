const primeiraDiv = document.querySelector("#primeira_div");
const segundaDiv = document.querySelector("#segunda_div");
const terceiraDiv = document.querySelector("#terceira_div");
const primeiroParagrafo = document.querySelector("p");

console.log(primeiroParagrafo);

primeiroParagrafo.innerText = "Exercicio da aula DOM";

primeiraDiv.style.backgroundColor = "purple";
primeiraDiv.style.width = "450px";
primeiraDiv.style.height = "450px";

segundaDiv.style.backgroundColor = "pink";
segundaDiv.style.width = "450px";
segundaDiv.style.height = "450px";

terceiraDiv.style.backgroundColor = "grey";
terceiraDiv.style.width = "450px";
terceiraDiv.style.height = "450px";

primeiroParagrafo.setAttribute("class", "paragrafo");
