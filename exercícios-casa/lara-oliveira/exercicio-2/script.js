const backgroundBody = document.querySelector('#body');
document.body.style.backgroundImage = "url('bts-background.webp')";
backgroundBody.style.fontFamily = 'Grape Nuts, cursive';
backgroundBody.style.fontSize = '2rem';

const forms = document.querySelector('#forms');
forms.style.margin = '200px';
forms.style.display = 'flex';
forms.style.alignItems = 'center';
forms.style.justifyContent = 'center';
forms.style.flexDirection = 'column';

const submitBtn = document.querySelector('.submit-btn');
submitBtn.style.backgroundColor = '#A4969B';
submitBtn.style.border = 'none';
submitBtn.style.fontFamily = 'Grape Nuts, cursive';
submitBtn.style.fontSize = '1.5rem';
submitBtn.style.margin = '5rem';
submitBtn.style.padding = '0.5rem';
submitBtn.style.width = '30rem';
submitBtn.style.borderRadius = '5rem';

const inputUser = document.querySelector('#user');
inputUser.style.backgroundColor = '#A4969B';
inputUser.style.border = 'none';
inputUser.style.padding = '10px'
inputUser.style.borderRadius = '5rem';

const inputPassword = document.querySelector('#password');
inputPassword.style.backgroundColor = '#A4969B';
inputPassword.style.border = 'none';
inputPassword.style.padding = '10px'
inputPassword.style.borderRadius = '5rem';


submitBtn.addEventListener('click', (evento) => {
    evento.preventDefault();

    const valorInput1 = inputUser.value;
    const valorInput2 = inputPassword.value;

    const userName = 'laraof';
    const passWord = 'wearebulletproof';

    const printPhrase = document.createElement('p');

    if (valorInput1 == userName && valorInput2 == passWord) {
        printPhrase.innerText = "Olá, Lara! Vamos ver os lindos do BTS?";
        document.body.append(printPhrase);
      } else {
        printPhrase.innerTexte = "Sem permissão!";  
        document.body.append(printPhrase);
      }
});

