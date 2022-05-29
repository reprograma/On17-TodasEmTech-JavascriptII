const headerPrincipal = document.querySelector("#header1");
const tituloPrincipal = document.querySelector(".título");
const primeiraSection = document.querySelector("#primeira-section");
const primeiraImagem = document.getElementsByClassName("img-1")
const linkBotao = document.querySelector(".botao")

tituloPrincipal.style.color="white";
tituloPrincipal.style.backgroundColor="green";
tituloPrincipal.style.fontSize="36px";
tituloPrincipal.style.textAlign="center";
tituloPrincipal.style.margin="36px auto";
primeiraSection.style.textAlign="center";
primeiraSection.style.marginh="0 auto";
primeiraSection.style.fontSize="20px";
primeiraSection.style.border="2px solid green";
linkBotao.style.textAlign="center";
linkBotao.style.marginTop="20px";
linkBotao.style.fontSize="20px";
linkBotao.style.textTransform="uppercase";

const segundaDiv = document.querySelector(".segunda-div");
const imagemFaunaPantanal = document.createElement("img")
imagemFaunaPantanal.setAttribute('src', "https://www.viajali.com.br/wp-content/uploads/2016/09/maravilhas-do-pantanal-1.jpg");
imagemFaunaPantanal.setAttribute('alt', "imagem onça pintada");
segundaDiv.appendChild(imagemFaunaPantanal);

segundaDiv.style.textAlign="center";
segundaDiv.style.marginTop="35px";
segundaDiv.style.border="2px solid green";
segundaDiv.style.padding="10px";

const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");

console.log(input1)
console.log(input2)

const valorInput1 = input1.value;
const valorInput2 = input2.value;

const botaoSubmit = document.querySelector("#botao-submit");

botaoSubmit.addEventListener('click', (evento) => {
    evento.preventDefault();
    const novaFrase = document.createElement('p');
    novaFrase.innerText = `Sem permissão`;
    const terceiraDiv = document.querySelector(".terceira-div");
    terceiraDiv.appendChild(novaFrase);

});

const novaMensagem = document.querySelector(".terceira-div")
botaoSubmit.addEventListener("click", (evento) => {
    novaMensagem.innerText = `Olá ${input1.value}`

    if (input1.value == "") {
        alert("Nome não informado!")
    }

});

