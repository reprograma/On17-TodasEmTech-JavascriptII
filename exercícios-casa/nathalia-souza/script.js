//ETAPA3: Crie uma variável para armazenar cada um dos seus elementos HTML no javascript;
const elementoArtigo = document.getElementById('artigo')
const elementoassunto = document.getElementById('assunto')
const elementoParagrafoAssunto = document.getElementById('paragrafoassunto')
const elementoImgAssunto = document.getElementById('imgassunto')

//- ETAPA4: Adicione uma `classe` para o seu elemento de parágrafo usando o DOM;
elementoParagrafoAssunto.classList.add('principalassunto')

//- ETAPA5: Crie ou modifique o `estilo` da sua imagem usando o DOM;     
elementoImgAssunto.style.borderRadius='50%';

//- ETAPA6: Modifique o valor do atributo `href` do seu link utilizando os DOM;
elementoassunto.setAttribute('href','https://github.com/naahsouzajs');

//- ETAPA7: Crie um novo elemento HTML utilizando o DOM e o adicione ao seu HTML. 
const novaTag = document.createElement ('p');
novaTag.innerText = 'agua deve ser bebido durante o dia'
//const elementoTexto = document.createTextNode('beber agua ajuda')
//novaTag.appendChild(elementoTexto)
elementoArtigo.appendChild(novaTag)

//#### 2. Utilizando o mesmo HTML do exercício 1, diga(`mostrando com o console.log() ou console.dir()`): 

const PaiDoArtigo = elementoArtigo.parentElement
console.log(PaiDoArtigo)

const filhosDoArtigo = elementoArtigo.children
console.log(filhosDoArtigo)

const proximoIrmao = elementoParagrafoAssunto.nextElementSibling
console.log(proximoIrmao)



