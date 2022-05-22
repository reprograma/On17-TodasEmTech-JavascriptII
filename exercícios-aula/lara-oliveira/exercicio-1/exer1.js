const firstDiv = document.querySelector('#first-div');
const secondDiv = document.querySelector('#second-div');
const thirdDiv = document.querySelector('#third-div');

const paragraph = document.querySelector('p');

console.log(paragraph);

paragraph.innerHTML = 'O texto da tag p foi alterado com sucesso!';


firstDiv.style.border = '5px solid #7FB800';
firstDiv.style.width = '270px';
firstDiv.style.height = '60px';
firstDiv.style.margin = '10px';
firstDiv.style.backgroundColor = '#7FB800'

secondDiv.style.border = '5px solid #F6511D';
secondDiv.style.width = '270px';
secondDiv.style.height = '60px';
secondDiv.style.margin = '10px';
secondDiv.style.backgroundColor = '#F6511D';

thirdDiv.style.border = '5px solid #FFB400';
thirdDiv.style.width = '270px';
thirdDiv.style.height = '60px';
thirdDiv.style.margin = '10px';
thirdDiv.style.backgroundColor = '#FFB400';

paragraph.setAttribute('class', 'first-paragraph');