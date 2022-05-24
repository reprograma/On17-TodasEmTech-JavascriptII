//let headerPrincipal = document.getElementById("header1");
//const tituloPrincipal = document.getElementsByClassNam(".titulo-principal");
const headerPrincipal = document.querySelector("#header1");
const tituloPrincipal = document.querySelector(".titulo-principal");
const section1 = document.querySelector("section");


tituloPrincipal.style.color="white";
headerPrincipal.style.backgroundColor="#B895EF";
tituloPrincipal.style.fontFamily="Roboto, sans-serif";
headerPrincipal.style.display = "flex";
section1.style.fontFamily="Roboto, sans-serif";
section1.style.fontWeight="bold";
section1.style.border = "1px solid purple";
section1.style.margin = "15px";

const primeiraDiv = document.querySelector(".primeira-div");
const imagemPug = document.createElement("img");
imagemPug.setAttribute('src', "https://www.clubeparacachorros.com.br/wp-content/uploads/2018/05/pug-caracteristicas.jpg");
imagemPug.setAttribute('alt', "imagem de um pug abricot");
primeiraDiv.appendChild(imagemPug);
imagemPug.style.width = "600px";
//headerPrincipal.removeChild(tituloPrincipal);

const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");

console.log(input1);
console.log(input2);


const botaoSubmit = document.querySelector('#botao-submit');

botaoSubmit.addEventListener('click', (evento)=>{
    evento.preventDefault();
    const valorInput1 = input1.value;
    const valorInput2 = input2.value;
    const segundaDiv = document.querySelector(".segunda-div");
    const paragrafoNovo = document.createElement('p');
    paragrafoNovo.innerText = `Os pugs são ${valorInput1} e ${valorInput2}`;
    segundaDiv.appendChild(paragrafoNovo);
});

    function eventoImagemDiminui(){
        imagemPug.style.width = "40px";
    };

    function eventoImagemAumenta(){
        imagemPug.style.width = "500px";
    };

 imagemPug.addEventListener("mouseenter", eventoImagemDiminui);
 imagemPug.addEventListener("mouseleave", eventoImagemAumenta);