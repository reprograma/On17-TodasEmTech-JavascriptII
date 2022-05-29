const formulario = document.querySelector("form");
formulario.style.background = "purple";
formulario.style.margin = "180px";
formulario.style.padding = "80px";

const titulo = document.querySelector("h1");
titulo.style.color = "white";

//campus de input e botão
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const botao = document.querySelector("#botao");

//criando elemento 
const novoElemento = document.querySelector("body");
const paragrafoNew = document.createElement("p");
paragrafoNew.innerText = "Sem permissão";
novoElemento.appendChild(paragrafoNew);

paragrafoNew.style.marginLeft = "680px";
paragrafoNew.style.fontSize = "30px";
paragrafoNew.style.color = "purple";

//texto modificado ao clicar no botao entrar 
botao.addEventListener("click", function (e) {
    e.preventDefault();
  
    if (email.value === "" && senha.value === "") {
      paragrafoNew.remove();
      paragrafoNew.innerText = `Verifique os campos preenchidos`;
      novoElemento.appendChild(novoParagrafo);
      e.stopPropagation();
    } else {
      paragrafoNew.remove();
  
      paragrafoNew.innerText = `Olá ${nome.value}! `;
      novoElemento.appendChild(paragrafoNew);
      paragrafoNew.style.color = "purple";
    }
  });




