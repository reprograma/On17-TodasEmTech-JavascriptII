
const body = document.body;
const form = document.querySelector("form");
const botao = document.querySelector("form button");

botao.style.width = "120px";
botao.style.height = "80px";
botao.style.padding = "12px";
botao.style.color = "#fff";
botao.style.fontSize = "18px";
botao.style.fontWeight = "bold";
botao.style.fontFamily = "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', sans-serif";
botao.style.backgroundColor = "#7f7fff";
botao.style.borderRadius = "8px";
botao.style.border = "none";

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