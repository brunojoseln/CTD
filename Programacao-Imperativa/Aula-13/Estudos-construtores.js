//Criaçao de um objeto
let pessoas = {
    nome: 'Maria',
    anoNascimento: 1800,
    pais: 'França',
    saudacao: function(){
        console.log('Olá eu sou ' + this.nome)
    }
}
//Exibição do objeto pessoas
console.log(pessoas)
//Exibição de um atributo do objeto
console.log(pessoas.anoNascimento)
//Exibição de um método
pessoas.saudacao()

//Criação de uma função construtora
function Jogos(nome, estilo){
    this.nome = nome;
    this.estilo = estilo
}

//Instanciando objeto dentro de uma váriavel
let godOfWar = new Jogos("God of War","Aventura")
console.log(godOfWar)

//Instaciando e exibindo objeto
console.log(new Jogos("Need for Speed","Corrida"))