let selectName = document.getElementById("userName");
let selectPass = document.getElementById("userPass");
let selectBtn = document.getElementById("userSend");

var novoElement = document.createElement("div");
document.body.appendChild(novoElement);
novoElement.setAttribute("id", "divDOM");
novoElement.appendChild(document.createTextNode("Sem permissão."));

function getUsername() {
    return document.getElementById("userName").value;
}

selectBtn.addEventListener('click', ()=>{
    let name = getUsername();
    let div = document.getElementById('divDOM');
    div.textContent = `Olá ${name}`;
})