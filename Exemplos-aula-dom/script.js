//const headerPrincipal = document.getElementById("header1");
const headerPrincipal = document.querySelector("#header1");
const tituloPrincipal = document.querySelector(".titulo-principal");
const section1 = document.querySelector("#primeira-section")


tituloPrincipal.style.color="white";
headerPrincipal.style.backgroundColor="#bd48ad";
 tituloPrincipal.style.fontFamily="Koulen, sans-serif";
section1.style.fontFamily="Koulen, sans-serif";
headerPrincipal.style.display="flex";
section1.style.fontWeight="bold";
section1.style.border="1px solid purple";
section1.style.margin="15px";

const primeiraDiv = document.querySelector(".primeira-div");
const imagemLuisaSonza = document.createElement("img");
imagemLuisaSonza.setAttribute('src', "./img/f80ee5b0-d1e3-11ec-bf7f-0ecba9f41c0a.jpg");
imagemLuisaSonza.setAttribute('alt', "imagem Luísa Sonza");
primeiraDiv.appendChild(imagemLuisaSonza);
imagemLuisaSonza.style.width="600px";

const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");

const botaoSubmit = document.querySelector('#botao-submit');

botaoSubmit.addEventListener('click', (evento)=>{
evento.preventDefault();
const valorInput1 = input1.value;
const valorInput2 = input2.value;
const segundaDiv = document.querySelector(".segunda-div");
const paragrafoNovo = document.createElement('p');
paragrafoNovo.innerText = `A Luísa Sonza é ${valorInput1} e ${valorInput2}`;
segundaDiv.appendChild(paragrafoNovo);
});

const form = document.querySelector(".primeiro-form");
form.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    const valorInput1 = input1.value;
    const valorInput2 = input2.value;
    const segundaDiv = document.querySelector(".segunda-div");
    const paragrafoNovo = document.createElement('p');
    paragrafoNovo.innerText = `A Luísa Sonza é ${valorInput1} e ${valorInput2}`;
    //segundaDiv.appendChild(paragrafoNovo);
    document.body.append(paragrafoNovo);
});






