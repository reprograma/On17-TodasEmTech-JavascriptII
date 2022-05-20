/*

Exercício 1:

(OBS: O estilo está no arquivo style.css)

*/

const jsParagraph = document.getElementById("paragraphExer");
const jsIMG = document.getElementById("imageExer");
const jsLinks = document.getElementById("linksExer");
const jsTitle = document.getElementById("titleExer");
const jsArticle = document.getElementById("articleExer");

window.onload = function newjsStuff() {
    document.getElementById("imageExer").src = "./images/photo-1499346030926-9a72daac6c63-750x390.jpeg";
    document.getElementById("linksExer").href = "https://reprograma.com.br/";
}

var novoElement = document.createElement("div");
document.body.appendChild(novoElement);
novoElement.setAttribute("id", "divDOM");
novoElement.appendChild(document.createTextNode("[Este aqui é o texto da DIV criada via DOM, conforme arquivo script.js.]"));


/*

Exercício 2:

*/

function answerParent() {
    let answer = document.getElementById("articleExer").parentElement.nodeName;
    console.log(answer);
}

function answerChild() {
    let answer = document.getElementById('articleExer');
    let children = answer.children;
    console.log(children);
}

function answerSibling() {
    let answer = document.getElementById("paragraphExer").nextElementSibling;
    console.log(answer);
}


/*

Exercício 3:

(conforme resolução em aula)

*/

function shrinkImage() {
    jsIMG.style.width = "40px";
    jsIMG.style.height = "40px";
};

function normalImage() {
    jsIMG.style.width = "750px";
    jsIMG.style.height = "390px"
};

jsIMG.addEventListener("mouseenter", shrinkImage);
jsIMG.addEventListener("mouseleave", normalImage);


