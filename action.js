var i = 1;


function myFunction(x) {
    var fundo = document.getElementById("cabeca");
    var itens = document.getElementById("ul");
    x.classList.toggle("change");
    fundo.style.height = "100%";
    itens.style.display = "block"
    if (i == 2) {
        fundo.style.height = "50px";
        fundo.style.width = "100%";
        itens.style.display = "none"
        i = 0;
    }
    i++;
    console.log(i);
}