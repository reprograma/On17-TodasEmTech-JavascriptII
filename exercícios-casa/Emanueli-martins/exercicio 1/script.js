// variavel para armazenar os elementos do html
const header = document.querySelector("header");
const titulo = document.querySelector("h1");
const paragrafo = document.querySelector("p");
const imagem = document.querySelector("img");
const link = document.querySelector("a");

//alterando o href do link
link.setAttribute (
    "href",
    "https://reprograma.com.br/"
);
link.style.color="black"
link.style.backgroundColor="white"

imagem.addEventListener
    imagem.style.width = "100%";
    

// elemento pai/mae do artigo
console.log(
    `O elemento mãe da tag article é o ${article.parentElement.nodeName.toLowerCase()}`
  );

  // elemento filho
  console.log(
    `Este elemento é filhe do article, ${h1.nodeName.toLowerCase()} `
  );
console.log(
    `Este elemento é filhe do article, ${p.nodeName.toLocaleLowerCase()} `
  );
console.log(
    `Este elemento é filhe do article, ${img.nodeName.toLocaleLowerCase()} `
  );