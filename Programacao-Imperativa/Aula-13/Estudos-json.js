let pessoa = {
    nome: 'Vinicius',
    idade: 21,
    altura: 1.80
}

let json = JSON.stringify(pessoa);

console.log(json)

let objectAgain = JSON.parse(json)

console.log(objectAgain)