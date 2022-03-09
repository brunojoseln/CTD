window.onload = function(){
    var itens =  document.querySelectorAll(".item")
    var pai = document.querySelector(".container")

    var itemsInvertidos = [...itens];
    itensInvertidos = itemsInvertidos.reverse();

    for(i in itemsInvertidos){
        console.log(itensInvertidos[i])
        pai.appendChild(itensInvertidos[i])
    }
}

function alterarTema(){
    document.querySelector("body").classList.toggle('dark');
}