
//2
document.documentElement.style.backgroundColor = "#AFEEEE";
document.body.style.fontFamily = "Arial, Helvetica, sans-serif";
document.body.style.fontSize = "1.125rem";
document.body.style.textAlign = "center";

//3
const titulo1 = document.querySelector("h1");
const article = document.querySelector("article");
const paragrafos = document.querySelectorAll("p");
const imagem = document.querySelector("img");
const link = document.querySelector("a");
link.style.display = "block";
link.style.marginTop = "30px";

//4
paragrafos.forEach((item) => {
  item.classList.add("paragrafo"), item.style.textAlign = "justify";
});

//5
imagem.style.width = "600px";
imagem.style.display = "block";
imagem.style.margin = "auto";

//6
link.setAttribute("href", "https://reprograma.com.br/");

//7
const footer = document.createElement("footer");
document.body.insertBefore(footer, article.nextSibling);
const p = document.createElement("p");
footer.appendChild(p);
p.innerHTML = "Atividade {reprograma}.";


//Ex 2

//Elemento mãe
console.log(article.parentElement);

//Elementos filhas
console.log(article.children);

//Próxima irmã de <p>
console.log(paragrafos[2].nextElementSibling);

//Ex 3

function passarMouse(){
  imagem.style.width = "100%";
}

function retirarMouse(){
  imagem.style.width = "600px";
}

imagem.addEventListener('mouseenter', passarMouse);

imagem.addEventListener('mouseleave', retirarMouse); 