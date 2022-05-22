const divPrimeira = document.querySelector(".divPrimeira");
const imagemAda = document.createElement("img");
imagemAda.setAttribute('src', "https://www.univ-lyon2.fr/medias/photo/img-3921_1626791514035-JPG");
imagemAda.setAttribute('alt', "imagem Ada");
divPrimeira.appendChild(imagemAda) ;
 
 
 function eventoImagemDiminui(){
    imagemAda.style.width = "404px";
   };
   
   function eventoImagemAumenta(){
       imagemAda.style.width = "500px";
   };
   
   imagemAda.addEventListener("mouseenter", eventoImagemDiminui);
   imagemAda.addEventListener("mouseleave", eventoImagemAumenta);