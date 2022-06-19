const tituloTexto = document.querySelector("h1");
const subtituloTexto = document.querySelector("h2");
const primeiroParagrafo = document.querySelector(".primeiro_paragrafo");
const segundoParagrafo = document.querySelector(".segundo_paragrafo");
const terceiroParagrafo = document.querySelector(".terceiro_paragrafo")

segundoParagrafo.remove ();

const novoItem = document.createElement("p");
document.body.appendChild(novoItem);
novoItem.innerText = "Adicionando mais um pouquinho de Lorem ipsum dolor sit amet";


primeiroParagrafo.addEventListener("mouseenter", () => {
  primeiroParagrafo.style.color = "pink";
});

segundoParagrafo.addEventListener("mouseleave", () => {
  segundoParagrafo.style.color = "black";
});

