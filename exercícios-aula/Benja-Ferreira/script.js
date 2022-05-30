const primeiraDiv = document.querySelector("#primeira-div");
const segundaDiv = document.querySelector("#segunda-div");
const terceiraDiv = document.querySelector("#terceira-div");
const paragrafo = document.querySelector("paragrafo");

//- mostre o valor de <p> no console
console.log(paragrafo);

//- mude o valor de <p> 
paragrafo.innerHTML = "Mudando o valor do parágrafo";

//- mude o estilo das divs para que cada uma seja uma caixa com uma cor diferente

primeiraDiv.style.backgroundcolor="#f542dd";
primeiraDiv.style.width="600px";
primeiraDiv.style.margin="20px";
primeiraDiv.style.height="150px";

segundaDiv.style.backgroundcolor="#f542ad";
segundaDiv.style.width="600px";
segundaDiv.style.margin="20px";
segundaDiv.style.height="150px";

terceiraDiv.style.backgroundcolor="#f54272";
terceiraDiv.style.width="600px";
terceiraDiv.style.margin="20px";
terceiraDiv.style.height="150px";


//- adicione pelo javascript uma classe para o paragrafo
paragrafo.setAttribute('classe', 'paragrafo');