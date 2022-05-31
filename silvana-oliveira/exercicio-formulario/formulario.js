const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const botaoSubmit = document.querySelector("#botao-submit");
const divisao = document.querySelector("div");
const p = document.createElement("p");

p.textContent = "Sem permissão";

divisao.appendChild(p);

const form = document.querySelector(".form1");
 form.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    const valorInput1 = input1.value;
    const paragrafoNovo = document.querySelector("p");
    paragrafoNovo.innerText = `Olá ${valorInput1}`;
    document.body.append(paragrafoNovo);
});