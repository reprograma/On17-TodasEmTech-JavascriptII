// adicionando evento de clique ao botão enviar
const btnEnviar = document.querySelector("input[type='submit']");
btnEnviar.addEventListener('click', (event)=>{
    event.preventDefault();
    const textoDigitado = document.querySelector("#nome_usuario").value;
    alert(`Seja bem vindo ${textoDigitado}`);
    document.querySelector("#valor_digitado").innerHTML = textoDigitado;
})