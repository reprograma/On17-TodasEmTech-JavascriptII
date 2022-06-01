//ETAPA3: Crie uma variável para armazenar cada um dos seus elementos HTML no javascript;
const headerPrincipal = document.querySelector(".header1");
const tituloPrincipal = document.querySelector(".titulo-principal");
const containerPrincipal = document.querySelector("#container");
const section1 = document.querySelector(".familia");
const paragrafo = document.querySelector(".p")

//ETAPA4: Adicione uma `classe` para o seu elemento de parágrafo usando o DOM;
paragrafo.setAttribute('classe', paragrafo);

//ETAPA5: Crie ou modifique o `estilo` da sua imagem usando o DOM;  
 const primeiraDiv = document.querySelector(".cattleya-labiata");
 const imagemCattleya = document.createElement("img");
 imagemCattleya.setAttribute('src', "./img/cattleya labiata.jpg");
 imagemCattleya.setAttribute('alt', "imagem diversidade de orquídeas");
 segundaDiv.appendChild(imagemCattleya); 
 imagemCattleya.style.width="600px";

/*Prof. Aconteceu o mesmo problema com o exercício dado em aula nessa ETAPA5. A imagem que escolhi não esta imprimindo no Browse. 
comentei tudo e deixei apenas a imagem, como fizemos na revisão da quinta-feira, mas não adiantou muito.
Segui o passo a passo, mas não resolveu. Estou encucada com <main>, mas também não adiantou muito retirá-la do html.
Enfim, a ideia seria inserir uma img utilizando DOM mas não deu certo.*/
 
//- ETAPA6: Modifique o valor do atributo `href` do seu link utilizando os DOM;
const primeiroLinkHref = document.querySelector("#primeiro-link-href");
primeiroLinkHref.hasAttribute('href'); 

//Isso ficou obscuro pra mim, não consegui visualizar o resultado. 
//O resultado de todos, na real. Não to conseguindo visualizar o erro

//- ETAPA7: Crie um novo elemento HTML utilizando o DOM e o adicione ao seu HTML.
const novaTag = document. createElement('p');
const texto = document.createTextNode('Espero que esse dê certo, hahahah');
novaTag.appendChild(texto);
const minhaDiv = document.querySelector(".Etapa7");
minhaDiv.appendChild(novaTag);

