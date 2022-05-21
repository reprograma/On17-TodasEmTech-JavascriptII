const divContainer = document.querySelector(".div_container");
console.log(divContainer);

const inputUsuario = document.querySelector("#input_login");

const inputSenha = document.querySelector("#input_senha");

const botao = document.querySelector("#button");

const novoParagrafo = document.createElement("p");
novoParagrafo.innerText = "Sem permissão";

novoParagrafo.style.color = "red";

divContainer.appendChild(novoParagrafo);

botao.addEventListener("click", function (e) {
  e.preventDefault();

  if (inputUsuario.value === "" && inputSenha.value === "") {
    novoParagrafo.remove();
    novoParagrafo.innerText = `Usuário e senha incorretos`;
    divContainer.appendChild(novoParagrafo);
    e.stopPropagation();
  } else {
    novoParagrafo.remove();

    novoParagrafo.innerText = `Olá ${inputUsuario.value}! `;
    divContainer.appendChild(novoParagrafo);
    novoParagrafo.style.color = "green";
  }
});
