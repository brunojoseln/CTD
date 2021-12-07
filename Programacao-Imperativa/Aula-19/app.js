let jason = require('./pessoas')
let popularArray = []

function Pessoas (nome, sexo, altura) {
    this.nome = nome, 
    this.sexo = sexo,
    this.altura =altura
}

for (let i = 0; i < jason.length; i++){
    popularArray.push(new Pessoas(
        jason[i].nome, 
        jason[i].sexo,
        jason[i].altura
    ))
}



// a maior e a menor altura do grupo;
// a média de altura das mulheres;
// o número de homens


let alturas = []

for (let i = 0; i < jason.length; i++){

   alturas.push(popularArray[i].altura)

}

console.log('A maior altura é '+Math.max(...alturas));
console.log('A menor altura é '+Math.min(...alturas));

let soma = 0
let mulheres = 0
let homens = 0

for (let i = 0; i < jason.length; i++){
    if (jason[i].sexo == 'F'){
        soma += jason[i].altura 
        mulheres++
    }else {homens++}
}

console.log("A média de mulheres é igual "+ soma / mulheres); 
console.log("A quantidade de homens é "+homens);
