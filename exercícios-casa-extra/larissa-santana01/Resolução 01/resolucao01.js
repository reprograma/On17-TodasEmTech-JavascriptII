// - ETAPA3: Crie uma variável para armazenar cada um dos seus elementos HTML no javascript;
const headerCabecalho = document.querySelector('#cabecalho');
const tituloPrincipal = document.querySelector('#titulo');
const navegacaoMenu = document.querySelector('#navegacao');
const primeiroArtigo = document.querySelector('#artigo');
const primeiraDiv = document.querySelector('#div1');
const primeiroParagrafo = document.querySelector("p");
const imagemMalia = document.querySelector("img");
const linkSite = document.querySelector("a");

//ETAPA4: Adicione uma `classe` para o seu elemento de parágrafo usando o DOM;
const classeParagrafo = document.querySelector('.classeParagrafo');
primeiroParagrafo.classList.add("classeParagrafo");
//segundoParagrafo.innerText = 'Da Sul pro mundo';
//console.log(segundoParagrafo);

//PrimeiroArtigo.style.Background 


//ETAPA5: Crie ou modifique o `estilo` da sua imagem usando o DOM; 
imagemMalia.style.width = "500px";
imagemMalia.style.marginBottom = "500px";
imagemMalia.style.position = "let";


//ETAPA6: Modifique o valor do atributo `href` do seu link utilizando os DOM;
linkSite.setAttribute(
    "href",
    "https://open.spotify.com/artist/06Ta0NqRjBW6qubwdyeb9u"
  );

//ETAPA7: Crie um novo elemento HTML utilizando o DOM e o adicione ao seu HTML. 
