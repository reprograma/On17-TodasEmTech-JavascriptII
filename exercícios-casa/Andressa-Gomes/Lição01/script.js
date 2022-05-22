const headerPrincipal = document.querySelector("#header01"); //Header
const tituloPrincipal = document.querySelector(".texto-header"); //h1
const section01 = document.querySelector("section");


tituloPrincipal.style.color = "white";
tituloPrincipal.style.background = "#DAA520";
headerPrincipal.style.fontWeight = "lighter";
headerPrincipal.style.display = "flex"
section01.style.border = "1px solid purple"
section01.style.background = "#FFDEAD"
section01.style.color = "#D2691E"

const divPrimeira = document.querySelector(".divPrimeira");
const imagemAda = document.createElement("img");
imagemAda.setAttribute('src', "https://www.univ-lyon2.fr/medias/photo/img-3921_1626791514035-JPG");
imagemAda.setAttribute('alt', "imagem Ada");
divPrimeira.appendChild(imagemAda) ;


imagemAda.style.position = "absolute"

