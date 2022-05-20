//let headerPrincipal = document.getElementById("header1"); ou
const headerPrincipal = document.querySelector("#header1");
const tituloPrincipal = document.querySelector(".titulo-principal");
const Artigo = document.querySelector(".artigo");
const paragrafo = document.querySelector("p");
const body = document.querySelector("body");

//1. Use o DOM para realizar alterações na sua página:
body.style.backgroundColor = "#CCA9DD";
tituloPrincipal.style.color = "white";
headerPrincipal.style.backgroundColor = "#7e459b";
tituloPrincipal.style.fontFamily = "Roboto, sans-serif";
tituloPrincipal.style.margin = "20px";
headerPrincipal.style.display = "flex";
Artigo.style.fontFamily = "Roboto, sans-serif";
Artigo.style.fontWeight = "bold";
Artigo.style.border = "1px solid purple";
Artigo.style.margin = "15px";
paragrafo.style.color = "white";
paragrafo.style.fontFamily = "Roboto, sans-serif";

//2. Utilizando o mesmo HTML do exercício 1, diga(`mostrando com o console.log() ou console.dir()`): 
//Quem é o elemento `pai/mãe` do seu artigo? 
console.log(Artigo.parentNode);
//Quem são os elementos `filhes` do seu artigo? 
console.log(Artigo.childNodes);
//Qual elemento é o `próximo irmão` do elemento parágrafo?
console.log(Artigo.nextElementSibling);


const primeiraDiv = document.querySelector(".primeira-div");
const imagemGato = document.createElement("img");
imagemGato.setAttribute('src', "http://www.universodegatos.com/wp-content/uploads/2017/11/gato-sofa-vermelho-header.jpg");
imagemGato.setAttribute('alt', "gatinho filhote");
primeiraDiv.appendChild(imagemGato); //anexa o arquivo
imagemGato.style.width = "480px";
imagemGato.style.display = "flex";
imagemGato.style.border = "1px solid purple";
imagemGato.style.margin = "20px";



const input2 = document.querySelector("#input2");
const input3 = document.querySelector("#input3");



console.log(input2);
console.log(input3);



/*3. Utilizando o mesmo HTML do exercício 1, faça uma `função de evento` que aumente o tamanho da minha imagem quando eu passar o mouse por cima dela e que quando eu retirar o meu mouse de cima da imagem ela retorne ao tamanho original;*/
function eventoImagemDiminui(e) {
  e.preventDefault();
  imagemGato.style.width = "50px";
};
function eventoImagemAumenta(e) {
  e.preventDefault();
  imagemGato.style.width = "500px";
};

imagemGato.addEventListener("mouseenter", eventoImagemDiminui);
imagemGato.addEventListener("mouseleave", eventoImagemAumenta);


//4. Formulário: 
const formulario = document.querySelector("fieldset");
formulario.style.width = "50%";

const botaoSubmit = document.querySelector("#botao-submit");
const segundaDiv = document.querySelector(".segunda-div")

botaoSubmit.addEventListener('click', (evento) => {
  evento.preventDefault();

  const valorInput2 = input2.value;
  const valorInput3 = input3.value;
  const paragrafoNovo = document.createElement('p');
  paragrafoNovo.innerText = `O  seu nome é ${valorInput2} e o nome do seu pet é ${valorInput3}`;
  segundaDiv.appendChild(paragrafoNovo);
});


const rodape = document.querySelector(".rodape");


rodape.style.alignItems = "center";
rodape.style.display = "flex";
rodape.style.color = "black";
rodape.style.fontWeight= "bold";
rodape.style.fontSize = "20px"
rodape.style.textAlign = "center";