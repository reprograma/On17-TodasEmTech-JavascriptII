/*1. Use o DOM para realizar alterações na sua página:
- ETAPA1: Crie um documento HTML que contenha um `título` e um `artigo`, e dentro desse artigo deve haver pelo menos: `um parágrafo`, `uma imagem` e `um link <a>`. (O tema do artigo fica sob escolha da aluna); 
- ETAPA2: (OPCIONAL) Dê um estilo para o seu HTML; 
- ETAPA3: Crie uma variável para armazenar cada um dos seus elementos HTML no javascript;
- ETAPA4: Adicione uma `classe` para o seu elemento de parágrafo usando o DOM;
- ETAPA5: Crie ou modifique o `estilo` da sua imagem usando o DOM;     
- ETAPA6: Modifique o valor do atributo `href` do seu link utilizando os DOM;
- ETAPA7: Crie um novo elemento HTML utilizando o DOM e o adicione ao seu HTML.*/

//ETAPA1 - Feito

//ETAPA2
document.documentElement.style.backgroundColor = "lightgreen";
document.body.style.fontFamily = "Arial, Helvetica, sans-serif";
document.body.style.fontSize = "1.125rem";
document.body.style.textAlign = "center";
document.body.style.lineHeight = "30px";

//ETAPA3
const cabecalho = document.querySelector("header");
const titulo1 = document.querySelector("h1");
const article = document.querySelector("article");
const paragrafos = document.querySelectorAll("p");
const imagem = document.querySelector("img");
const link = document.querySelector("a");
link.style.display = "block";
link.style.marginTop = "30px";

cabecalho.style.backgroundColor = "darkgreen";
cabecalho.style.padding = "8px 12px"
titulo1.style.color = "white";

//ETAPA4
paragrafos.forEach((item) => {
  item.classList.add("paragrafo"), item.style.textAlign = "justify";
});

//ETAPA5
imagem.style.width = "400px";
imagem.style.display = "block";
imagem.style.margin = "auto";

//ETAPA6
link.setAttribute("href", "https://reprograma.com.br/");

//ETAPA7
const footer = document.createElement("footer");
document.body.insertBefore(footer, article.nextSibling);
const p = document.createElement("p");
footer.appendChild(p);
p.innerHTML = "Projeto {reprograma} - Turma On17 FrontEnd";

footer.style.backgroundColor = "darkgreen";
footer.style.padding = "6px 10px";

/*2. Utilizando o mesmo HTML do exercício 1, diga(`mostrando com o console.log() ou console.dir()`): 
- Quem é o elemento `pai/mãe` do seu artigo? 
- Quem são os elementos `filhes` do seu artigo? 
- Qual elemento é o `próximo irmão` do elemento parágrafo?*/

//Elemento mãe
console.log(article.parentElement);

//Elementos filhas
console.log(article.children);

//Próxima irmã de <p>
console.log(paragrafos[2].nextElementSibling);

/*3. Utilizando o mesmo HTML do exercício 1, faça uma `função de evento` que aumente o tamanho da minha imagem quando eu passar o mouse por cima dela e que quando eu retirar o meu mouse de cima da imagem ela retorne ao tamanho original;*/

function passarMouse(){
  imagem.style.width = "50%";
}

function retirarMouse(){
  imagem.style.width = "400px";
}

imagem.addEventListener('mouseenter', passarMouse);

imagem.addEventListener('mouseleave', retirarMouse); 