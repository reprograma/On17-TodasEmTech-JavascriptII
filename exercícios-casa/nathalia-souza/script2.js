// ETAPA2: Use o DOM com o javascript para selecionar os campos de input e o botão; 
const elementoPrimeiroInput = document.getElementById('primeiroinput')
const elementosegundoinput = document.getElementById('segundoinput') 
const elementoBtnEnter = document.getElementById('btnenter')
const elementoFormulario = document.getElementById('formulario')

//ETAPA3: Crie um novo elemento HTML usando o DOM, dê um valor para ele com o texto: `Sem permissão `, e adicione ele ao seu HTML;
const novaTag = document.createElement ('p')
novaTag.innerText = 'sem permissao'
elementoFormulario.appendChild(novaTag)

//ETAPA4: Adicione um evento para que após a usuária clique no botão com o texto  `entrar`, o novo elemento tenha o seu texto de `Sem permissão` substituído por: `Olá + o nome da pessoa`; 
elementoBtnEnter.addEventListener ('click', function (evento){
    evento.preventDefault()
const nome = elementoPrimeiroInput.value
novaTag.innerText = 'Olá ' + nome

})