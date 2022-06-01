const tituloTexto = document.querySelector("h1");
const subtituloTexto = document.querySelector("#subtítulo-texto");
const primeiroParagrafo = document.querySelector(".primeiro-paragrafo");
const segundoParagrafo = document.querySelector(".segundo-paragrafo");
const listaDom = document.querySelectorAll("#lista-dom");
const item = document.querySelector(".item");

//Escolha 2 elementos que um que será removido e um adicionado pelo DOM
document.body.removeChild(subtituloTexto);
document.body.removeChild(segundoParagrafo);

const novoParagrafo = document.createElement("p");
document.body.appendChild(novoParagrafo);
novoParagrafo.innerText = "Até aqui consegui adicionar alguns elementos";

primeiroParagrafo.addEventListener("mouseenter", () => {
  primeiroParagrafo.style.color = "blue";
});

primeiroParagrafo.addEventListener("mouseout", () => {
  primeiroParagrafo.style.color = "black";
});

listaDom.forEach(element => {
    element.style.color = 'green'
})

