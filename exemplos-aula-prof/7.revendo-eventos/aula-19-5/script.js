const botaoEnviar = document.querySelector("#enviar");

// botaoEnviar.addEventListener("click", (e)=>{
//     e.preventDefault();
//     const meuInput = document.querySelector("#meu-input");
//     const valorMeuInput = meuInput.value;
//     const meuH2 = document.createElement("h2");
//     meuH2.innerText = `Aqui tá fazendo ${valorMeuInput} graus`;
//     document.body.append(meuH2);
// });

botaoEnviar.addEventListener("click", mostraGraus);

function mostraGraus(evento) {
    evento.preventDefault();
    const meuInput = document.querySelector("#meu-input");
    const valorMeuInput = meuInput.value;
    const meuH2 = document.createElement("h2");
    meuH2.innerText = `Aqui tá fazendo ${valorMeuInput} graus`;
    document.body.append(meuH2);
};

