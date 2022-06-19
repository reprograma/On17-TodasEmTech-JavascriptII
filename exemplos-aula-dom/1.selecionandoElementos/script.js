// let headerPrincipal = document.getElementById("header1");
//const tituloPrincipal = document.getElementsByClassName("titulo-principal");
const headerPrincipal = document.querySelector("#header1");
const tituloPrincipal = document.querySelector(".titulo-principal");
const section1 = document.querySelector("section")

tituloPrincipal.style.color="purple";
headerPrincipal.style.backgroundColor="orchid";
// headerPrincipal.style.fontWeight="bold";
tituloPrincipal.style.fontFamily="Anek Latin, sans-serif";
section1.style.fontFamily="Anek Latin, sans-serif";
section1.style.fontWeight="bold";
section1.style.border= "1px solid purple";
section1.style.margin="15px";

// Pegou a div, colocou na constante primeiraDiv e selecionou pela classe
const primeiraDiv = document.querySelector(".primeira-div");

// Colocou o nome da tag imagem, colocou na variável iamgem Luisa Sonza
const imagemLuisaSonza = document.createElement("img");

// Settou o atributo, tanto para o source que é caminho para a imagem quanto para o alt text (pode colocar uma imagem salva no computador também)
imagemLuisaSonza.setAttribute("src", "https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2022/06/10092059/luisa-sonza-assume-que-ja-fez-suruba-com-varios-1.jpeg");
imagemLuisaSonza.setAttribute("alt", "imagem da Luísa Sonza");

// Para conseguir assimilar a imagem ao div é necessário colocá-la de alguma forma dentro da div com o appendChild, o valor passado dentro da função é o elemento de imagem que acabamos de criar 
primeiraDiv.appendChild(imagemLuisaSonza);

imagemLuisaSonza.style.width = "600px";
// headerPrincipal pq é a div que está englobando o título
// headerPrincipal.removeChild(tituloPrincipal);

const input1 = document.querySelector("#input1")
const input2 = document.querySelector("#input2")
console.log(input1);
console.log(input2);

const valorInput1 = input1.value;
const valorInput2 = input2.value;

// console.log(valorInput1);
// console.log(valorInput2);

const botaoSubmit = document.querySelector('#botao-submit');
const segundaDiv = document.querySelector(".segunda-div");

// botaoSubmit.addEventListener("click", (evento) => {
//   evento.preventDefault();
//   const valorInput1 = input1.value;
//   const valorInput2 = input2.value;
//   const segundaDiv = document.querySelector(".segunda-div");
//   const paragrafoNovo = document.createElement("p");
//   paragrafoNovo.innerText = `A Luísa Sonza me lembra ${valorInput1} e também ${valorInput2}`;
//   segundaDiv.appendChild(paragrafoNovo);
// });

const form = document.querySelector(".primeiro-form");
form.addEventListener("submit", (evento) =>{
  evento.preventDefault();
  const valorInput1 = input1.value;
  const valorInput2 = input2.value;
  const segundaDiv = document.querySelector(".segunda-div");
  const paragrafoNovo = document.createElement("p");
  paragrafoNovo.innerText = `A Luísa Sonza me lembra ${valorInput1} e também ${valorInput2}`;
  //segundaDiv.appendChild(paragrafoNovo);
  document.body.append(paragrafoNovo);
});

// const eventoImagem = e => {
function eventoImagemDiminui(){
  imagemLuisaSonza.style.width = "40px";
};

function eventoImagemAumenta(){
  imagemLuisaSonza.style.width = "500px";
};

imagemLuisaSonza.addEventListener("mouseenter", eventoImagemDiminui);
imagemLuisaSonza.addEventListener("mouseleave", eventoImagemAumenta);
