// Crie uma variável para armazenar cada um dos seus elementos HTML no javascript;

const headerCorpo = document.querySelector("#headerUm"); //header
const tituloPrincipal = document.querySelector(".titulo-principal"); //h1
const artigoCorpo = document.querySelector("#artigo-texto"); //article
const sectionUm = document.querySelector(".primeira-secao"); //seção
const paragrafoUnico = document.querySelector("#paragrafo1"); //paragrafo
const divImagensP = document.querySelector('#anchor'); // âncora 
const botao = document.querySelector('.botao-link') //link
const texto2 = document.querySelector("#texto_jubarte");
const texto3 = document.querySelector("#texto_franca"); 
const Franca = document.querySelector("#card_baleia2"); //segunda baleia
 
//Adicione uma `classe` para o seu elemento de parágrafo usando o DOM;

paragrafoUnico.setAttribute("class", "paragrafo-adicionado");

//criando a tag imagem e alterando pelo js

const secaoUm = document.querySelector(".primeira-secao");
const imagemBaleia = document.createElement("img")
imagemBaleia.setAttribute('src', "https://www.revistaplaneta.com.br/wp-content/uploads/sites/3/2021/04/baleia-scaled.jpg");
imagemBaleia.setAttribute('alt', "imagem baleia jubarte");
secaoUm.appendChild(imagemBaleia);
imagemBaleia.style.width = "100%";
imagemBaleia.style.height = "100%";


//modificando paragrafo
paragrafoUnico.innerHTML = "Algumas espécies de baleias são os maiores animais do planeta, pesando dezenas, ou até centenas de toneladas. É o caso da baleia-azul (Balaenoptera musculus), que pode chegar a 150 toneladas e 33 metros de comprimento, sendo o maior animal que existe, ou já existiu, na Terra.Assim como os golfinhos, as baleias são mamíferos marinhos pertencentes à ordem dos cetáceos (ordem Cetacea), que são os mamíferos mais bem adaptados à vida no meio aquático, tendo uma estrutura corporal totalmente especializada a este ambiente, com representantes em todos os oceanos.  Seu corpo é longo e hidrodinâmico, seus membros foram adaptados a nadadeiras e seu orifício respiratório está localizado na parte superior da cabeça, o que facilita que subam para respirar sem tirar o corpo da água, pois, assim como todos os mamíferos, os golfinhos e baleias também precisam respirar ar atmosférico.";
paragrafoUnico.style.textAlign= "justify";
paragrafoUnico.style.fontSize= "1.2rem";

//Modifique o valor do atributo `href` do seu link utilizando os DOM;
botao.style.border = "radius";
botao.style.backgroundColor = 'darkblue';
botao.style.margin = '15px';
botao.style.fontColor = 'white';
botao.style.fontSize= "1.5rem";


const link = document.querySelector("#home"); //link href 
link.textContent = "conheça as baleias que vem ao Brasil";
link.style.color="white";
link.style.textDecoration= "none";


//#### 2. Utilizando o mesmo HTML do exercício 1, diga(`mostrando com o console.log() ou console.dir()`): 
//- Quem é o elemento `pai/mãe` do seu artigo? 
// console.log(artigoCorpo)

//- Quem são os elementos `filhes` do seu artigo? 
console.log(paragrafoUnico);
console.log(divImagensP);
console.log(Franca);
console.log(texto2);
console.log(texto3);

//- Qual elemento é o `próximo irmão` do elemento parágrafo?
console.log(divImagensP);

//#### 3. Utilizando o mesmo HTML do exercício 1, faça uma `função de evento` que aumente o tamanho da minha imagem quando eu passar o mouse por cima dela e que quando eu retirar o meu mouse de cima da imagem ela retorne ao tamanho original;

const whale = document.querySelector("#card_baleia");
const baleiaPequena = document.createElement("img")
baleiaPequena.setAttribute('src', "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/baleia-jubarte.jpg"); 
baleiaPequena.setAttribute('alt', "imagem baleia jubarte");
whale.appendChild(baleiaPequena);
baleiaPequena.style.width = "600px";

function eventoImagemDiminui(){
    baleiaPequena.style.width = "200px";
    };
function eventoImagemAumenta(){
    baleiaPequena.style.width = "600px";
    };

baleiaPequena.addEventListener("mouseenter", eventoImagemDiminui);
baleiaPequena.addEventListener("mouseleave", eventoImagemAumenta);


// ETAPA2: Use o DOM com o javascript para selecionar os campos de input e o botão; 
// - ETAPA3: Crie um novo elemento HTML usando o DOM, dê um valor para ele com o texto: `Sem permissão `, e adicione ele ao seu HTML;
// - ETAPA4: Adicione um evento para que após a usuária clique no botão com o texto  `entrar`, o novo elemento tenha o seu texto de `Sem permissão` substituído por: `Olá + o nome da pessoa`;

const segundaDiv = document.querySelector("#segunda-div");
const semPemissao = document.createElement("p");
semPemissao.innerHTML = "sem permissão";
segundaDiv.appendChild(semPemissao);

const botaoSubmit = document.querySelector("#botao-submit");
botaoSubmit.addEventListener('click', (evento)=>{
    evento.preventDefault();
    const input1 = document.querySelector("#input1");
    const valorInput1 = input1.value;
    semPemissao.innerHTML = `Olá, ${valorInput1}`
});
