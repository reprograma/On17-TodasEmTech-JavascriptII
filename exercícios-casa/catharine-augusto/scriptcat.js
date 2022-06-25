const headerPrincipal = document.querySelector("#header1");
const tituloPrincipal = document.querySelector(".titulo-principal");
const section1 = document.querySelector("primeira-section");

tituloPrincipal.getElementsByClassName.color= "white";
tituloPrincipal.style.fontFamily= "'Staatliches', cursive;";
headerPrincipal.style.backgroundColor= "#581845";
headerPrincipal.style.display = "flex";
section1.style.fontFamily= "'Barlow', sans-serif";
section1.style.fontWeight="bold";
section1.style.border="1px solid #900C3F";
section1.style.margin = "20px";

const primeiraDiv = document.querySelector("primeira-div");
const imagemRihanna = document.createElement("img");
imagemRihanna.setAttribute('src', "https://tracklist.com.br/wp-content/uploads/2021/03/rihanna-1024x626.jpg");
imagemRihanna.setAttribute('alt', "rihanna com as mãos no queixo");
primeiraDiv.appendChild(imagemRihanna);
imagemRihanna.style.width = "800px";



