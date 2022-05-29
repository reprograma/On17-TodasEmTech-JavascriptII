const body = document.querySelector('#body');
body.style.backgroundColor = '#C4AF9A';
body.style.fontFamily = "Roboto Condensed, sans-serif";

const header = document.querySelector('#header');
header.style.backgroundColor = '#FB9F89';
header.style.margin = '50px';

const mainTitle = document.querySelector('.main-title');
mainTitle.style.color = '#1E1E24';
mainTitle.style.textAlign = 'center';
mainTitle.style.textTransform = 'uppercase';
mainTitle.style.paddingTop = '50px';
mainTitle.style.paddingBottom = '20px';

const subtitle = document.querySelector('.subtitle');
subtitle.style.color = '#1E1E24';
subtitle.style.textAlign = 'center';
subtitle.style.textTransform = 'uppercase';
subtitle.style.paddingBottom = '50px';

const article = document.querySelector('#article');
article.style.margin = '80px';

const artSubt = document.querySelector('.art-subt');
artSubt.style.textAlign = 'center';
artSubt.style.textTransform = 'uppercase';
artSubt.style.paddingBottom = '30px';

const paragraph = document.querySelector('p');
paragraph.setAttribute('class', 'first-paragraph');
const firstParagraph = document.querySelector('.first-paragraph');

firstParagraph.style.fontSize = '1.2rem';
firstParagraph.style.textAlign = 'justify';
firstParagraph.style.textIndent = '50px';

const secondParagraph = document.querySelector('.second-paragraph');

secondParagraph.style.fontSize = '1.2rem';
secondParagraph.style.textAlign = 'justify';
secondParagraph.style.textIndent = '50px';

const artImage = document.querySelector('.art-img');
artImage.style.display = 'block';
artImage.style.marginLeft = 'auto';
artImage.style.marginRight = 'auto';
artImage.style.width = '40rem';
artImage.style.borderRadius = '90px';
artImage.style.paddingTop = '30px';
artImage.style.paddingBottom = '30px';

function imgEventBigger() {
    artImage.style.width = "30rem";
}
function imgEventNormal() {
    artImage.style.width = "50rem";
}

artImage.addEventListener("mouseenter", imgEventBigger);
artImage.addEventListener("mouseleave", imgEventNormal);


const newImage = document.createElement('img');
newImage.setAttribute('src', 'https://rd1.com.br/wp-content/uploads/2021/09/20210914-ines-brasil.jpg');
newImage.setAttribute('alt', 'Inês Brasil em A Fazenda');
secondParagraph.appendChild(newImage);

newImage.style.display = 'block';
newImage.style.marginLeft = 'auto';
newImage.style.marginRight = 'auto';
newImage.style.width = '40rem';
newImage.style.borderRadius = '90px';
newImage.style.paddingTop = '100px';
newImage.style.paddingBottom = '30px';

const linkDiv = document.querySelector('#link-div');
linkDiv.style.border = 'solid 5px #FB9F89';
linkDiv.style.marginLeft = '80px';
linkDiv.style.marginRight = '80px';
linkDiv.style.textDecoration = 'none';

const instaLink = document.querySelector('.insta-link');
instaLink.style.padding = '40px';
instaLink.style.marginTop = '20px';
instaLink.style.marginBottom = '20px'
instaLink.style.fontSize = '1.6rem';
linkDiv.style.display = 'flex';
linkDiv.style.justifyContent = 'center';
linkDiv.style.textTransform = 'uppercase';
linkDiv.style.color = '#1E1E24';

instaLink.href = 'https://www.instagram.com/inesbrasiltv/?hl=pt-br';



console.log(
    `O elemento mãe da tag article é o ${article.parentElement.nodeName.toLowerCase()}`
  );

let h3 = document.querySelector('h3');
let p = document.querySelector('p');
let img = document.querySelector('img');

console.log(
    `Este elemento é filhe do article, ${h3.nodeName.toLowerCase()} `
  );
console.log(
    `Este elemento é filhe do article, ${p.nodeName.toLocaleLowerCase()} `
  );
console.log(
    `Este elemento é filhe do article, ${img.nodeName.toLocaleLowerCase()} `
  );


console.log(
    `O irmão seguinte do elemento parágrafo é ${p.nextElementSibling.nodeName.toLowerCase()}`
  );

//const pDiv = document.querySelector('.p-div');
//const secondParagraph = document.createElement('p');
//secondParagraph.innerText = "Penúltima filha entre nove, de uma família bastante humilde e evangélica, Inês" 
//pDiv.appendChild(secondParagraph);
        



