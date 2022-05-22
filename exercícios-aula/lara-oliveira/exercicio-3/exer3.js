const body = document.querySelector('#body');

body.style.backgroundColor = 'gray';

const header = document.querySelector('#header');
const mainTitle = document.querySelector('.main-title');

header.style.backgroundColor = '#431259';
header.style.display = 'flex';
header.style.alignItems = 'center';
mainTitle.style.padding = '5rem';
mainTitle.style.color = "white";
mainTitle.style.fontFamily = 'Zen Loop, cursive';
mainTitle.style.fontSize = '5rem';
mainTitle.style.marginLeft = '20px'

const headerImg = document.querySelector('.header-img');
const headerIcon = document.createElement('img');
headerIcon.setAttribute('src', 'https://i2.wp.com/nerdizmo.uai.com.br/wp-content/uploads/sites/29/2015/02/jack-capa.jpg?fit=810%2C360&ssl=1&resize=1280%2C720');
headerIcon.setAttribute('alt', 'Jack Skellington');
header.appendChild(headerIcon);
headerIcon.style.width = '20vw';
headerIcon.style.height = '40vh'
headerIcon.style.borderRadius = "100px";
headerIcon.style.marginLeft = '250px'

const mainContent = document.querySelector('main-content');

mainContent.style.fontFamily = 'Zen Loop, cursive';

const form = document.querySelector('#form');

form.style.overflow = 'hidden';

const allLabels = document.querySelector('.all-labels');
allLabels.style.fontFamily = 'Zen Loop, cursive';
