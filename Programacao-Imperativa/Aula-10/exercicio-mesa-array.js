//Exercício Inverter array

//----- Invertendo Arrays -----
console.log('----- Invertendo arrays -----')

function imprimirInverso(valor){
    console.log(nomes.reverse());
}

var nomes = ['João','Carlos','Maria','Roberto','Francisca']

imprimirInverso(nomes);

// Exercício somar arrays
console.log("\n----- Somando arrays -----")

function somarArray(soma){
    let result = 0
    for (let index = 0; index < soma.length; index++) {
        result += soma[index];
    }
    console.log('O resultado da soma é ' +result)
}

somarArray([29,1,5,2])
somarArray([29,1,5,2,3,60])


// Exercicio de juntar palavras
console.log('\n ----- Unindo palavras -----')

function somarPalavras(palavras){
    let palavraSomada =  palavras[0]
    for (let index = 1; index < palavras.length; index++) {
        palavraSomada += ' ' + palavras[index];
    }
    console.log(palavraSomada)
}

somarPalavras(['Arroz','Doce','Abobora','Feijão'])
somarPalavras(['Eu','Gosto','de','Pipoca'])

//Exercicio Coleção de filmes
//1 - 2
console.log('\n ----- Deixando valores em upper case -----')
var catalogo = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"]
function capitalizar(valor){
    return valor.toUpperCase()
}

console.log(capitalizar(catalogo[3]))

//3
var catalogo2 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

function combinarArrays(array1,array2){
    return arraySomado = array1.concat(array2)
    // console.log(arraySomado)
}

arraySomado = combinarArrays(catalogo,catalogo2)
//4
var removido = arraySomado.pop()

//5
console.log('\n----- Comparando Valores -----')

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

for (let index = 0; index < asiaScores.length; index++) {
    console.log(asiaScores[index] == euroScores[index] ? 'O valor '+asiaScores[index]+' é igual a ' + euroScores[index]  : 'O valor '+asiaScores[index]+' é difernte de ' + euroScores[index] )
    
}