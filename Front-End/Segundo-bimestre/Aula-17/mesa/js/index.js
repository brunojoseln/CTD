let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let img = document.querySelector('#foto')
let button = document.querySelector('#random')

// Aqui realizamos a consulta da promisse, esperando sua resposta assíncrona

function retornarDados(){ 
    fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then(data => {
        renderizarDadosUsuario(data)
    });
}
retornarDados()

function renderizarDadosUsuario(dados) {
    nome.innerHTML = `${dados.results[0].name.title} ${dados.results[0].name.first} ${dados.results[0].name.last} `
    img.setAttribute('src', `${dados.results[0].picture.large}`)
    email.innerHTML = `<b>Email: </b>${dados.results[0].email}`


    /* -------------------------------- Tarefa 1 -------------------------------- */
    // Aqui devem desenvolver uma função que seja exibida na tela:
    // a foto, o nome completo do usuário e o e-mail.
    // Isto deve ser baseado nas informações que obtemos da API e inseridas no HTML.
}

button.addEventListener('click',()=>{
    retornarDados()
})

/* --------------------------- Tarefa 2 (extra) --------------------------- */
// Aqui você pode ir para o ponto extra de usar o botão que está comentado no HTML.
// Você pode descomentar o código no index.html e usar esse botão para executar uma nova solicitação API, sem recarregar a página.
// Cabe aos desenvolvedores decidirem qual bloco de código deve ser contido dentro de uma função para que ele possa ser executado toda vez que um clique de botão for realizado.