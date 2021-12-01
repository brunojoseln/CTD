//Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.

let numerosPares = [2, 4 , 8, 20, 30]

let numerosImpares= numerosPares.map((numeros)=>{

    return numeros-1
})
console.log(numerosImpares)

// Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria.

let nomes = ['João', 'Roberto', 'Maria','Carlos','Antônio','Maria']

let filtro = nomes.filter((nome)=>{
    console.log(nome)
    return nome === "Maria"

})

console.log(filtro)

//Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.
//Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”

let numeros = [12,21,185,13,58,51,35]

let numerosNovos = numeros.reduce((acumulador,num)=>{
    return acumulador += '-'+num
})

console.log(numerosNovos)

//2.1 Crie uma função que receba um array composto por números e retorna uma nova matriz (array) com todos os valores divididos pela soma de toda a matriz, usando map() e reduce().

let numeros2 = [1,2,3,4,5,6,70]



let matrizSoma = numeros2.map((num)=>{
    return num/numeros.reduce((acumulador,numAtual) =>{
        return acumulador+numAtual
    })
})

console.log(matrizSoma)

//2.2 Crie uma função que receba um array de palavras e um número, e que retorna uma matriz (array) com apenas as palavras que têm mais do que uma quantidade de letras maior do que o número informado. (verifique como funciona o método filter ())

let arrayDePalavras = ['Carro', 'Bicicleta', 'Avião', 'Mochila', 'Lápis']

function contaPalavras(palavras, numero){
    palavras.filter((palavras) => {
        if (palavras.length >= numero) {
            console.log(palavras)
        }
    })
}
contaPalavras(arrayDePalavras,7)

