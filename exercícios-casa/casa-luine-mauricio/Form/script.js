
//#### 4. Formulário: 
//- ETAPA1: Crie um documento HTML com um pequeno formulário de login, contendo um `título` 
// + os campos de input com etiquetas de `nome` e `senha` + um botão com o texto `entrar`.
//- ETAPA2: Use o DOM com o javascript para selecionar os campos de input e o botão; 
//- ETAPA3: Crie um novo elemento HTML usando o DOM, dê um valor para ele com o texto: 
// `Sem permissão `, e adicione ele ao seu HTML;
// - ETAPA4: Adicione um evento para que após a usuária clique no botão com o texto  
// `entrar`, o novo elemento tenha o seu texto de `Sem permissão` substituído por: `Olá + o nome da pessoa`;


//- ETAPA2: Use o DOM com o javascript para selecionar os campos de input e o botão; //
const inputName = document.querySelector("#name");
const inputPassword = document.querySelector("#password");
const button = document.querySelector("#button");

//- ETAPA3: Crie um novo elemento HTML usando o DOM, dê um valor para ele com o texto: 
// `Sem permissão `, e adicione ele ao seu HTML;

const form = document.querySelector("form");
const paragraph = document.createElement("p");
paragraph.innerText = "Sem permissão";
form.appendChild(paragraph);


// - ETAPA4: Adicione um evento para que após a usuária clique no botão com o texto  
// `entrar`, o novo elemento tenha o seu texto de `Sem permissão` substituído por: `Olá + o nome da pessoa`;

function textEnter(event) {
  event.preventDefault();
  const name = inputName.value;
  if (name) {
    paragraph.innerText = `Olá, ${name}!`;
  } else {
    alert("Favor preencher o campo vazio");
  }
}

button.addEventListener("click", textEnter);