/*Crie um HTML com três divs vazias e um parágrafo com texto. Cada div com um id 
Faça uma tag script no fim do body selecione todos os elementos do html e guarde em variáveis.*/


const numeroUm = document.querySelector("#primeira"); 
const numeroDois = document.querySelector("#segunda");
const numeroTres = document.querySelector("#terceira");
const paragrafoUnico = document.querySelector("#paragrafo");


/*- mude o estilo das divs para que cada uma seja uma caixa com uma cor diferente*/

numeroUm.style.backgroundColor = "blue";
numeroUm.style.width = "500px"
numeroUm.style.height = "200px";
numeroUm.style.margin ="20px";

numeroDois.style.backgroundColor = "yellow";
numeroDois.style.width = "500px"
numeroDois.style.height = "200px";
numeroDois.style.margin ="20px";

numeroTres.style.backgroundColor = "red";
numeroTres.style.width = "500px"
numeroTres.style.height = "200px";
numeroTres.style.margin ="20px";

/*- mostre o valor de <p> no console */
console.log(paragrafoUnico);

/*
- mude o valor de <p> 
*/
paragrafoUnico.innerHTML = "modificando valor";

//- adicione pelo javascript uma classe para o paragrafo */

paragrafoUnico.setAttribute("class", "paragrafo");
