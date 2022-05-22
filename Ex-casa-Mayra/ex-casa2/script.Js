const formulario=document.querySelector("form1");
const inputNome=document.querySelector("#input-nome");
const inputSenha=document.querySelector("#input-senha");
const button=document.querySelector("#botao");

const paragrafo=document.createElement("p");
paragrafo.innerText="Sem Permissão";
formulario.appendChild(paragrafo);
button.addEventListener("click", mensagem);

function mensagem(event) {
    event.preventDefault();
    const nome = inputNome.value;
    const senha = inputSenha.value;
    if (nome){
        paragrafo.innerText = `Olá, ${nome}!`;

    } else {
        alert ("Sem Permissão");
    }
}