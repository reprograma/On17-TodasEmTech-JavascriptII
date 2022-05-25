const elementMain = document.querySelector("#body");
const title = document.querySelector("#title");
const article = document.querySelector("article");
const image = document.querySelector("#image");
const text = document.querySelector("#text");
const linkPage = document.querySelector("#linkPage ");

text.setAttribute("class", "newText");
//console.log(text)
image.style.borderRadius = "6%";

const container = document.querySelector(".container");
const newP = document.createElement("p");
const newTextP = document.createTextNode("Venha conhecer o Marrocos em 2022!");
newP.appendChild(newTextP);
container.appendChild(newP);

console.log(`O elemento mãe do meu elemento article é o ${elementMain}`);
console.log(
  `Os elementos filhe do meu elemento article são os ${image}, ${text}, ${linkPage} e ${newP}`,
);
console.log(`O elemento irmão do meu elemento p é o ${linkPage}`);


function eventoImagemDiminui(){
  image.style.width = "25rem";
 };
 image.addEventListener("mouseenter", eventoImagemDiminui);
 function eventoImagemAumenta(){
     image.style.width = "80rem";
 };
 image.addEventListener("mouseleave", eventoImagemAumenta);