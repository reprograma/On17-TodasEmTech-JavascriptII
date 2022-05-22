//let headerPrincipal = document.getElementById("header1");
//const tituloPrincipal = document.getElementsByClassName("titulo-principal");
const headerPrincipal = document.querySelector("#header1");
const tituloPrincipal = document.querySelector(".titulo-principal");
const section1 = document.querySelector("section");



tituloPrincipal.style.color="white";
headerPrincipal.style.backgroundColor="#DB7093";
tituloPrincipal.style.fontFamily="Roboto, sans-serif";
headerPrincipal.style.justifyContent = 'center';
headerPrincipal.style.alignItems = 'center';
headerPrincipal.style.display = "flex";
section1.style.fontFamily="Roboto, sans-serif";
section1.style.fontWeight="bold";
section1.style.border = "1px solid LightPink";
section1.style.margin = "15px";



const primeiraDiv = document.querySelector(".primeira-div");
const imagemSaoPaulofrio = document.createElement("img");
imagemSaoPaulofrio.setAttribute('src', "https://www.maisgoias.com.br/cdn-cgi/image/fit=contain,width=960,quality=90,format=auto/https://uploads.emaisgoias.com.br/2020/08/frio-em-sao-paulo.jpg");
imagemSaoPaulofrio.setAttribute('alt', "imagem Sao Paulo frio");
primeiraDiv.appendChild(imagemSaoPaulofrio);
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");



 
 function eventoImagemDiminui(){
    imagemSaoPaulofrio.style.width = "600px";
   };
   
   function eventoImagemAumenta(){
    imagemSaoPaulofrio.style.width = "700px";
   };
   
   imagemSaoPaulofrio.addEventListener("mouseenter", eventoImagemDiminui);
   imagemSaoPaulofrio.addEventListener("mouseleave", eventoImagemAumenta);


   const elementoBody=document.querySelector("body");
   console.log(elementoBody);

   const nome=document.querySelector("#input1");
   const senha=document.querySelector("#input2");

   const novoParagrafo=document.createElement("p");
   novoParagrafo.innerText="Sem Permissão";
   elementoBody.appendChild(novoParagrafo);

   const botao=document.querySelector("#botao-submit");
   botao.addEventListener("click",function(e){
      e.preventDefault();
      if (nome.value===""&&senha.value===""){
         novoParagrafo.remove();
         novoParagrafo.innerText="Campo vazio";
         elementoBody.appendChild(novoParagrafo);
         e.stopPropagation();
      } else{
         novoParagrafo.remove();
         novoParagrafo.innerText=`Olá, ${nome.value}`;
         elementoBody.appendChild(novoParagrafo);
         
      }
   
   })




