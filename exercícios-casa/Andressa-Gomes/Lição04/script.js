
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");

const botaoSubmit = document.querySelector('#botao-submit');

const form = document.querySelector(".formulario");
 form.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    const valorInput1 = input1.value;
    const valorInput2 = input2.value;
 });

 document.body.onload = adcElemento;

 function adcElemento () {
   var divNova = document.createElement("div");
   var conteudoNovo = document.createTextNode("Agradecemos sua visita");
   divNova.appendChild(conteudoNovo); 
 
   var divAtual = document.getElementById("div2");
   document.body.insertBefore(divNova, divAtual);
 }