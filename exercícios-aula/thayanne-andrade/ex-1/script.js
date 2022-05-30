// Capturando todos os elementos da página HTML
const primeiraDiv = document.querySelector("#primeira__div");
const segundaDiv = document.querySelector("#segunda__div");
const terceiraDiv = document.querySelector("#terceira__div");
let primeiroParagrafo = document.querySelector("#primeira__div p");
let segundoParagrafo = document.querySelector("#segunda__div p");
let terceiroParagrafo = document.querySelector("#terceira__div p");


// imprimindo os paragrafos no console
console.log(primeiroParagrafo);
console.log(segundoParagrafo);
console.log(terceiroParagrafo);

//alterando o valor da tag p
primeiroParagrafo.innerHTML = "Daqui pra frente, quanto mais, principalmente.. Daqui pra frente, quanto mais, principalmente.. Qual é o diminutivo de golfinho?. Agora, mais do que nunca, é a hora.. Diz-me com quem andas e te direi se vou contigo..";
segundoParagrafo.innerHTML = "Daqui pra frente, quanto mais, principalmente.. Os últimos serão os primeiros e os do meio sempre serão os do meio.. Cemeteries are just garbage dumps filled with humans. Pobre só enche a barriga quando morre afogado.. Como se escreve o número 0 em algarismos romanos? Cemeteries are just garbage dumps filled with humans. Na vida tudo é passageiro, menos o motorista e o cobrador…. Uma coisa é certa: ninguém sai vivo dessa vida.. Só não compro uma bicicleta porque não sei nadar.. Se barba fosse respeito, bode não tinha chifre.";
terceiroParagrafo.innerHTML = "O dinheiro não traz felicidade, então, dê todo o seu pra mim e seja feliz.. You say potatoe, I say starchy carbs. Evite acidentes. Faça de propósito.. Eu sem mim não existo.. Evite acidentes. Faça de propósito..Como se escreve o número 0 em algarismos romanos?. Na vida tudo é passageiro, menos o motorista e o cobrador…. A única mulher que andou na linha o trem pegou.. Um é pouco, dois é bom e três é ímpar.. Um é pouco, dois é bom e três é ímpar..Daqui pra frente, quanto mais, principalmente.. Onde quer que você esteja você sempre estará lá.. Há males que vêm para o pior.. Onde quer que você esteja você sempre estará lá.. O importante é o que importa..";
// imprimindo os novos paragrafos no console
console.log(primeiroParagrafo);
console.log(segundoParagrafo);
console.log(terceiroParagrafo);


//estilização das divs
primeiraDiv.style.width = "100%";
primeiraDiv.style.height = "300px"
primeiraDiv.style.backgroundColor = "blue";
primeiraDiv.style.color = "#fff";

segundaDiv.style.width = "100%";
segundaDiv.style.height = "400";
segundaDiv.style.backgroundColor = "yellow";
segundaDiv.style.color = "#fff"

terceiraDiv.style.width = "100%";
terceiraDiv.style.height = "500px";
terceiraDiv.style.backgroundColor = "orange";
terceiraDiv.style.color = "#fff";