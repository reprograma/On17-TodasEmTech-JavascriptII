const inputNome = document.querySelector("form > #nome");
const inputSenha = document.querySelector("form > #senha");
const botao = document.querySelector('button[form="form1"]');

const novoElemento = document.createElement("p");
novoElemento.innerText = "Sem Permissão";
const body = document.querySelector("body");
body.appendChild(novoElemento);

botao.addEventListener("click", (e) => {
  e.preventDefault();
  const nome = inputNome.value;
  novoElemento.innerText = `Olá, ${nome}`;
});
