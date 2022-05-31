/* Exercício 01 */

const articleUnico = document.querySelector("article");
const titulo = document.querySelector("h1");
const paragrafo1 = document.querySelector("p");
const paragrafo2 = document.querySelector("p");
const imagemVocal = document.querySelector("img");
const lista = document.querySelector("li");
const ancora = document.querySelector("a");
const rodape = document.querySelector("footer");
const p = document.createElement("p");

paragrafo1.classList.add("ptexto");
paragrafo2.classList.add("ptexto");
imagemVocal.style.width = "30rem";
imagemVocal.style.border = "0.2rem solid darkblue";
imagemVocal.setAttribute('alt', "Microfones enfileirados com luzes de um palco de show");
ancora.setAttribute('href', "http://oficinadecanto.com.br/sua-voz-sua-identidade/");
lista.style.marginTop = "1rem";
p.textContent = "Feito por Silvana Oliveira - Turma ON17 - Reprograma - TodasEmTech 2022";
rodape.appendChild(p);

/* Exercício 02 */

console.log("Elemento pai do article: header");
console.log("Elemento filho do article: h1");
console.log("Próximo irmão do elemento paragrafo: img");

/* Exercício 03 */

function eventoImagemDiminui(){
    imagemVocal.style.width = "40px";
   };
  
   function eventoImagemAumenta(){
       imagemVocal.style.width = "500px";
   };
  
   imagemVocal.addEventListener("mouseenter", eventoImagemDiminui);
   imagemVocal.addEventListener("mouseleave", eventoImagemAumenta);






