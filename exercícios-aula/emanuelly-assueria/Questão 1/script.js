const primeiraDiv = document.querySelector("#primeira-div");
const segundaDiv = document.querySelector("#segunda-div");
const terceiraDiv = document.querySelector("#terceira-div");
const paragrafo1 = document.querySelector(".paragrafo1")

//Imprimindo no console o parágrafo
console.log(paragrafo1)

// Modificando o conteúdo do parágrafo
paragrafo1.innerHTML = "Mudando o conteúdo do parágrafo";


//Criando estilos para as divs
primeiraDiv.style.backgroundColor = "#C41886";

segundaDiv.style.backgroundColor = "#12A6FF";

terceiraDiv.style.backgroundColor = "#C41886";

// Colocando uma class para o parágrafo
paragrafo1.setAttribute("class", "paragrafo1");

