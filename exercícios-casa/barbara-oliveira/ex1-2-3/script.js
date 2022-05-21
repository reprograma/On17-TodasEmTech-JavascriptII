const container = document.querySelector("article");
const title = document.querySelector("h1");
const paragraph = document.querySelector("p");
const div = document.querySelector("div");
const gif = document.querySelector("img");
const link = document.querySelector("a");

container.style.display = "flex";
container.style.flexDirection = "column";
container.style.alignItems = "center";
container.style.padding = "0 10rem";

title.style.color = "orange";
title.style.fontWeight = "bold";
title.style.fontSize = "3rem";
title.style.textAlign = "center";
title.style.paddingTop = "2rem";

paragraph.style.color = "#555";
paragraph.style.fontSize = "1.5rem";
paragraph.style.textAlign = "justify";
paragraph.style.padding = "0 1rem";

div.style.display = "flex";
div.style.flexDirection = "column";
div.style.alignItems = "center";
div.style.border = "1px solid orange";
div.style.borderRadius = "10px";
div.style.margin = "1rem 0";
div.style.padding = "1rem";

gif.style.padding = "1.5rem";

link.style.color = "#555";
link.style.fontSize = "1.2rem";
link.style.fontWeight = "bold";
link.style.textAlign = "center";
link.style.paddingBottom = "1.5rem";
link.style.textDecoration = "none";

paragraph.setAttribute("class", "only-paragraph");

const subtitle = document.createElement("h2");
subtitle.innerText = "Fluxograma do Grafo";
subtitle.style.color = "#555";
container.appendChild(subtitle);

const flowchart = document.createElement("img");
flowchart.setAttribute("src", "flowchart.png");
flowchart.setAttribute("alt", "fluxograma de resolução do grafo de palavras");
flowchart.setAttribute(
  "href",
  "https://github.com/babigoliveira/palavras-relacionadas"
);
container.appendChild(flowchart);
flowchart.style.width = "500px";

const article = document.querySelector("article");
console.log(
  `O elemento pai/mãe da tag article é: ${article.parentElement.nodeName.toLowerCase()}`
);

const children = article.childNodes;
const childrenList = [];

for (let i = 0; i < children.length; i++) {
  if (children[i].nodeName != "#text") {
    childrenList.push(children[i].nodeName.toLowerCase());
  }
}
console.log(`Os elementos filhes da tag article são: ${childrenList}`);

console.log(
  `O elemento mais próximo do parágrafo é: ${paragraph.nextElementSibling.nodeName.toLowerCase()}`
);

function eventGrow() {
  flowchart.style.width = "600px";
}
function eventDecrease() {
  flowchart.style.width = "400px";
}
flowchart.addEventListener("mouseover", eventGrow);
flowchart.addEventListener("mouseout", eventDecrease);
