const artigoHeaderPrincipal = document.querySelector("#artigo-standup");
const paragrafoHeaderPrincipal =
    document.querySelector(".paragrafo-artigo");
const tituloHeaderPrincipal = document.querySelector(".titulo-artigo");
const imgHeaderPrincipal = document.querySelector(".imagem-artigo");
const linkHeaderPrincipal = document.querySelector(".link-artigo");

linkHeaderPrincipal.href = "https://www.facebook.com";

paragrafoHeaderPrincipal.setAttribute("class", "paragrafoHeaderPrincipal");
imgHeaderPrincipal.setAttribute("class", "imgHeaderPrincipal");

const paragrafo = document.createElement("p");
const texto = document.createTextNode("Joyce Liamara Marinheiro");
document.body.appendChild(texto);


var pai = artigoHeaderPrincipal.parentNode;
var filhos = artigoHeaderPrincipal.childNodes;
var irmaos = paragrafoHeaderPrincipal.nextElementSibling;

// function aumentaImagem(imgHeaderPrincipal) {
//     imgHeaderPrincipal.width = imgHeaderPrincipal.width + 50;
//     imgHeaderPrincipal.height = imgHeaderPrincipal.height + 50;
// }

imgHeaderPrincipal.onmouseover = function (event) {
    event.target.width = imgHeaderPrincipal.width + 50;
    event.target.height = imgHeaderPrincipal.height + 50;

}

imgHeaderPrincipal.onmouseout = function (event) {
    event.target.width = imgHeaderPrincipal.width - 50;
    event.target.height = imgHeaderPrincipal.height - 50;

}
// function diminuiImagem(imgHeaderPrincipal) {
//     imgHeaderPrincipal.width = imgHeaderPrincipal.width - 50;
//     imgHeaderPrincipal.height = imgHeaderPrincipal.height - 50;
// }

// imgHeaderPrincipal.addEventListener("mouseover", function(event){
//     event.target.
// })

/*item 3. Utilizando o mesmo HTML do exercício 1, faça uma `função de evento`
 que aumente o tamanho da minha imagem quando eu passar o mouse por cima dela 
 e que quando eu retirar o meu mouse de cima da imagem ela retorne ao tamanho 
 original;*/

console.log(filhos);
console.log(pai);
console.log(irmaos, "irmaos");
