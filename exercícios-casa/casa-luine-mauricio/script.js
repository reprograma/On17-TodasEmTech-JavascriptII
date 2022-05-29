// #### 1. Use o DOM para realizar alterações na sua página: //
// - ETAPA3: Crie uma variável para armazenar cada um dos seus elementos HTML no javascript; //

var tituloPrincipal = document.querySelector(".titulo_principal");
var articlePrimeiro = document.querySelector("#article1");
var primeiraDiv = document.querySelector(".div1");
var divImg = document.querySelector(".img");
var segundaDiv = document.querySelector(".div2");
const paragrafo = document.querySelector("p");
const terceiraDiv = document.querySelector(".div3");
var link = document.querySelector(".link");




// Estilizando via JS //

articlePrimeiro.style.display = "flex";
articlePrimeiro.style.flexDirection = "column";
articlePrimeiro.style.textAlign = "center";
articlePrimeiro.style.text = "justify";
articlePrimeiro.style.margin = "0 5rem";
articlePrimeiro.style.backgroundColor = "#92a8d1";


tituloPrincipal.style.fontSize = "3rem";
primeiraDiv.style.fontFamily = "'Tiro Kannada', serif;"
terceiraDiv.style.paddingTop = "3%";
terceiraDiv.style.paddingBottom = "3%";
primeiraDiv.style.paddingTop = "3%";
link.style.border = "3px";
link.style.backgroundColor = "yellow";
link.style.padding = "0.3rem";
divImg.style.paddingBottom = "1.5rem";
divImg.style.paddingTop = "1.5rem";


// - ETAPA4: Adicione uma `classe` para o seu elemento de parágrafo usando o DOM; //

paragrafo.setAttribute("class","paragrafoUnico");

// - ETAPA5: Crie ou modifique o `estilo` da sua imagem usando o DOM; //

divImg.style.maxWidth = "1050px";

// ETAPA6: Modifique o valor do atributo `href` do seu link utilizando os DOM; //

link.setAttribute("src", "https://www.usinadosatos.org.br/midia/noticias/capao-redondo-107-anos-de-historia")

// ETAPA7: Crie um novo elemento HTML utilizando o DOM e o adicione ao seu HTML. //

const paragrafoSegundo = document.createElement("p");
paragrafoSegundo.innerText = "Site criado por Luine Mauricio - aluna Reprograma"
articlePrimeiro.appendChild(paragrafoSegundo);


// #### 2. Utilizando o mesmo HTML do exercício 1, diga(`mostrando com o console.log() 
// ou console.dir()`)://


//#### 3. Utilizando o mesmo HTML do exercício 1, faça uma `função de evento` que aumente o tamanho da minha imagem 
// quando eu passar o mouse por cima dela e que quando eu retirar o meu mouse de cima da imagem ela retorne ao tamanho original;


// #### 4. Formulário: //



