const firstDiv = document.querySelector("#first-div");
const secondDiv = document.querySelector("#second-div");
const thirdDiv = document.querySelector("#third-div");
const paragraph = document.querySelector("p");

console.log(paragraph);

paragraph.innerHTML = "Alterando valor do parágrafo";

firstDiv.style.backgroundColor = "red";
firstDiv.style.width = "300px";
firstDiv.style.height = "200px";

secondDiv.style.backgroundColor = "blue";
secondDiv.style.width = "300px";
secondDiv.style.height = "200px";

terceiraDiv.style.backgroundColor = "yellow";
terceiraDiv.style.width = "300px";
terceiraDiv.style.height = "200px";

paragraph.setAttribute("class", "paragraph");
