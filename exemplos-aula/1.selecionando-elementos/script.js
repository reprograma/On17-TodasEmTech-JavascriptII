const headerPrincipal = document.querySelector('#header-ines');

const mainTitle = document.querySelector('.main-title');
const firstSection = document.querySelector('#first-section');

headerPrincipal.style.color = 'yellow';
headerPrincipal.style.backgroundColor = 'green';
headerPrincipal.style.padding = '50px';
headerPrincipal.style.fontFamily = "'Oswald', sans-serif";

firstSection.style.fontFamily = "'Oswald', sans-serif";
firstSection.style.margin = "5rem";

const firstDiv = document.querySelector(".first-div");
const imgInesBrasil = document.createElement("img");
imgInesBrasil.setAttribute('src', "https://f.i.uol.com.br/fotografia/2021/12/31/164096525761cf24896fcdd_1640965257_3x2_md.jpg");
imgInesBrasil.setAttribute('alt', "Imagem Inês Brasil");
firstDiv.appendChild(imgInesBrasil);
imgInesBrasil.style.width = "30rem";

// headerPrincipal.removeChild(mainTitle);

const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');

console.log(input1);
console.log(input2);


const submitButton = document.querySelector('#submit-btn');

submitButton.addEventListener('click', (evento) => {
    evento.preventDefault();

    const valorInput1 = input1.value;
    const valorInput2 = input2.value;
    const secondDiv = document.querySelector('.second-div');

    const printPhrase = document.createElement('p');
    printPhrase.innerText = "A Inês Brasil é " + valorInput1 +"e make make make love é " + valorInput2;
    //secondDiv.appendChild(printPhrase);
    document.body.append(printPhrase);
});



function imgEventBigger() {
    imgInesBrasil.style.width = "50rem";
}
function imgEventNormal() {
    imgInesBrasil.style.width = "30rem";
}

imgInesBrasil.addEventListener("mouseenter", imgEventBigger);
imgInesBrasil.addEventListener("mouseleave", imgEventNormal);







