function alterarTexto() {
    let userNumberChoice = prompt(`Escolha o felino que você quer alterar o texto
    0 - Tigre
    1 - Leão
    2 - Leopardo
    3 - Pantera Negra
    4 - Jaguar
    5 - Guepardo 
    `)

    let newText = prompt(`Insira o novo texto:`)

    let felineList = document.querySelectorAll('.item');
    let userChoice = felineList[userNumberChoice];

    let p = userChoice.querySelector('p');
    p.innerHTML = newText;


}

function alterarTitulo() {
    let userNumberChoice = prompt(`Escolha o felino que quer alterar o título
    0 - Tigre
    1 - Leão
    2 - Leopardo
    3 - Pantera Negra
    4 - Jaguar
    5 - Guepardo
    `)


    let userText = prompt("Insira o novo título: ")

    let felineList = document.querySelectorAll('.item');
    let userChoice = felineList[userNumberChoice];

    let text = userChoice.querySelector('h2');
    text.innerHTML = `${userText}`;

}


function alterarImagem() {

    var valorInserido = prompt(`Escolha o felino
    0 - Tigre 
    1 - Leão
    2 - Guepardo
    3 - Pantera Negra
    4 - Jaguar
    5 - Guepardo
    `)



    var urlInserida = prompt(`Agora insira a URL da imagem`)

    var listaFelinos = document.querySelectorAll(".item");

    var escolhaUsuario = listaFelinos[valorInserido];
    // escolhaUsuario.setAttribute("img", )
    var imagem = escolhaUsuario.querySelector('img')

    imagem.setAttribute("src", `${urlInserida}`)
}

function alterarTema() {
    document.querySelector("body").classList.toggle('dark');
}

/* 
Passo a passo para executar o desafio - Aula 7
1 - Criar a opção de escolha do felino 
2 - Verificar qual foi a escolha
3 - Definir uma url da internet
4 - Alteram o atributo "src"
*/
