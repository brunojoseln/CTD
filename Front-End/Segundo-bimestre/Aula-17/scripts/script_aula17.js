let quantidadeFormulario = document.getElementById('quantidadeFormulario');
let botaoPesquisar = document.getElementById('botaoPesquisar');
let exibeResultado = document.getElementById('exibeResultado');

botaoPesquisar.addEventListener('click', function (evento) {
    evento.preventDefault();
    let quantidade = document.querySelector("#quantidadeFormulario").value;
    let divsCachorros = document.querySelector("#exibeResultado")
    console.log(quantidade);

    if (quantidadeFormulario.value != "") {
        //Executar a busca a API...
        fetch(`https://dog.ceo/api/breeds/image/random/${quantidade}`)
        .then(function(result){
            if(result.status == 200){
                return result.json();
            }else{
                throw "Erro."
            }
        })
        .then((result)=>{
            for(img of result.message){
                console.log(img)
                divsCachorros.innerHTML +=
                `
                    <img src="${img}"></img>
                `
            }
        })

        
    } else {
        alert("Você deve informar o número de imagens que deseja buscar")
    }
});

function atualizaPagina() {
    window.location.reload();
}