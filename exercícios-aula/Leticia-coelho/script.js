const primeiraDive = document.querySelector("#primeiraDiv");
const segundaDive = document.querySelector("#segundaDiv");
const terceiraDive = document.querySelector("#terceiraDiv");
const paragrafo = document.querySelector(".primeiro-p")

console.log(paragrafo);

paragrafo.InnerHTML = "alterando paragrafo";

primeiraDive.style.backgroundColor = "pink";
primeiraDive.style.width = "150px";
primeiraDive.style.height = "150px";
primeiraDive.style.margin = "20px";
primeiraDive.style.borderRadius = "30px";

segundaDive.style.backgroundColor = "red";
segundaDive.style.width = "150px";
segundaDive.style.height = "150px";
segundaDive.style.margin = "20px";
segundaDive.style.borderRadius = "30px";

terceiraDive.style.backgroundColor = "black";
terceiraDive.style.width = "150px";
terceiraDive.style.height = "150px";
terceiraDive.style.margin = "20px";
terceiraDive.style.borderRadius = "30px";

paragrafo.satAtribute("class", "segundo-p");

