const headerPrincipal = document.getElementById("header1");
const tituloPrincipal = document.querySelector(".titulo-principal");

tituloPrincipal.style.color = "white";
headerPrincipal.style.backgroundColor = "#FF5737";

const primeiraDiv = document.querySelector(".primeira-div");
const imagemLuisaSonza = document.createElement("img");
imagemLuisaSonza.setAttribute(
  "src",
  "https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2022/02/luisa.jpg",
);
imagemLuisaSonza.setAttribute("alt", "imagem Luísa Sonza");
primeiraDiv.appendChild(imagemLuisaSonza);
imagemLuisaSonza.style.width = "600px";
//headerPrincipal.removeChild(tituloPrincipal);

const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
console.log(input1);
console.log(input2);

const valorInput1 = input1.value;
const valorInput2 = input2.value;

console.log(valorInput1);
console.log(valorInput2);

const botaoSubmit = document.querySelector("#botao-submit");
botaoSubmit.addEventListener("click", (e) => {
  const segundaDiv = document.querySelector(".segunda-div");

  const valorInput1 = input1.value;
  const valorInput2 = input2.value;

  e.preventDefault();
  const paragrafoNovo = document.createElement("p");
  paragrafoNovo.innerText = `A Luisa Sonza é ${valorInput1} e ${valorInput2}`;
  segundaDiv.appendChild(paragrafoNovo);
});

//Evento usando form
/*const form = document.querySelector(".primeiro-form");
 form.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    const valorInput1 = input1.value;
    const valorInput2 = input2.value;
    const segundaDiv = document.querySelector(".segunda-div");
    const paragrafoNovo = document.createElement('p');
    paragrafoNovo.innerText = `A Luísa Sonza é ${valorInput1} e ${valorInput2}`;
    segundaDiv.appendChild(paragrafoNovo);
 });*/

function eventoImagemDiminui() {
  imagemLuisaSonza.style.width = "40px";
}

function eventoImagemAumenta() {
  imagemLuisaSonza.style.width = "500px";
}

imagemLuisaSonza.addEventListener("mouseenter", eventoImagemDiminui);
imagemLuisaSonza.addEventListener("mouseleave", eventoImagemAumenta);

// faltou o exercício 4
//lembrar de fazer