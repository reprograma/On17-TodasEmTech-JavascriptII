const header = document.querySelector('#header');
const principalTitle = document.querySelector('.principal-title');
const secondaryTitle = document.querySelector('.secondary-title');

header.removeChild(principalTitle);

secondaryTitle.innerHTML = 'The Corpse Bride';
header.appendChild(secondaryTitle);

const btnEvent = document.querySelector('#btn-event');

btnEvent.addEventListener('click', (btEvent) => {
    btEvent.preventDefault();

    const printFilms = document.createElement('ul');
    printFilms.innerHTML = 'The nightmare before christmas, Edward Scissorhands, Beetlejuice';
    document.body.append(printFilms);
});

const firstSection = document.querySelector('#first-section');

firstSection.style.fontFamily = 'Macondo', cursive;
