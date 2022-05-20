//ETAPA3: Crie uma variável para armazenar cada um dos seus elementos HTML no javascript;
const articleNoticias = document.querySelector(".article_noticias");

const divArticle = document.querySelector(".div_article");

const tituloNoticia = document.querySelector(".titulo_noticias");

const subtituloNoticias = document.querySelector(".subtitulo_noticias");

const paragrafoNoticias = document.querySelector("p");

const articleImg = document.querySelector(".article_img");

const linkNoticia = document.querySelector(".link_noticia");

const body = document.querySelector("body");

//ETAPA4: Adicione uma `classe` para o seu elemento de parágrafo usando o DOM;
paragrafoNoticias.className = "paragafro_noticia";

//ETAPA5: Crie ou modifique o `estilo` da sua imagem usando o DOM;
articleImg.addEventListener("mouseenter", function () {
  articleImg.style.border = "6px solid grey";
});

articleImg.addEventListener("mouseleave", function (e) {
  articleImg.style.border = "none";
});

//ETAPA6: Modifique o valor do atributo `href` do seu link utilizando o DOM;
linkNoticia.removeAttribute("href");
linkNoticia.setAttribute(
  "href",
  "https://www1.folha.uol.com.br/cotidiano/2022/05/onda-de-frio-deve-permanecer-ate-o-final-da-semana-no-centro-sul-do-pais.shtml"
);
console.log(linkNoticia);

//ETAPA7: Crie um novo elemento HTML utilizando o DOM e o adicione ao seu HTML.
const novoFooter = document.createElement("footer");
novoFooter.innerText = "©Copyright 2022";

body.appendChild(novoFooter);

novoFooter.style.textAlign = "center";

//#### 2. Utilizando o mesmo HTML do exercício 1, diga(`mostrando com o console.log() ou console.dir()`):
//- Quem é o elemento `pai/mãe` do seu artigo?
console.log(body);

//- Quem são os elementos `filhes` do seu artigo?
console.log(
  divArticle,
  tituloNoticia,
  subtituloNoticias,
  paragrafoNoticias,
  articleImg,
  novoFooter
);

//- Qual elemento é o `próximo irmão` do elemento parágrafo?

console.log(articleImg);

//#### 3. Utilizando o mesmo HTML do exercício 1, faça uma `função de evento` que aumente o tamanho da minha imagem quando eu passar o mouse por cima dela e que quando eu retirar o meu mouse de cima da imagem ela retorne ao tamanho original;

articleImg.addEventListener("mouseenter", function () {
  articleImg.style.width = "40vw";
});

articleImg.addEventListener("mouseleave", function () {
  articleImg.style.width = "60vw";
});
