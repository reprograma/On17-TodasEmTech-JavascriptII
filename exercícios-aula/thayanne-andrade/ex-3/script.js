
const body = document.body;
const form = document.querySelector("form");
const botao = document.querySelector("form button");

function enviar(evento) {
    evento.preventDefault();
    const img = document.createElement("img");
    img.setAttribute('src','https://www.correio24horas.com.br/fileadmin/_processed_/0/b/csm_VF0720_Viola_Davis_Tout_3d988654d0.jpg');
    img.setAttribute("alt", "Viola Davis");
    const descricao = document.createElement("p");
    descricao.innerHTML = "Esta foto é da atriz Viola Davis";
    body.appendChild(img);
    body.appendChild(descricao);
}

form.addEventListener("submit", enviar);