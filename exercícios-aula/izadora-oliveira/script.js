const paragrafo = document.querySelector("p");
//console.log(paragrafo);

paragrafo.innerHTML = "Alterando o texto"
paragrafo.style.color = "purple";
paragrafo.style.fontSize = "26px";

const div1 = document.querySelector("#primeira-div");
div1.style.width = "120px";
div1.style.height = "120px";
div1.style.backgroundColor = "blue";
div1.style.margin = "20px"

const div2 = document.querySelector("#segunda-div");
div2.style.width = "120px";
div2.style.height = "120px";
div2.style.backgroundColor = "purple";
div2.style.margin = "20px"

const div3 = document.querySelector("#terceira-div");
div3.style.width = "120px";
div3.style.height = "120px";
div3.style.backgroundColor = "orange";
div3.style.margin = "20px"

paragrafo.setAttribute('class','paragrafo')
