//1
const elementos = document.querySelectorAll("body *");
const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const div3 = document.querySelector("#div3");
const textos = document.querySelectorAll("div > p");

console.log(div1.textContent, div2.textContent, div3.textContent);

textos.forEach(item => console.log(item.innerHTML = "Valor alterado"));

div1.style.color = "red";
div2.style.color = "blue";
div3.style.color = "orange";


//2


