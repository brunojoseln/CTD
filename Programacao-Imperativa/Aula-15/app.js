//Requerindo arquivo pessoas.js
let arrayPessoas = require('./modules/pessoas')


//2. Criação do construtor conta bancária
function ContaBancaria(numero,tipo,saldo,titular){
    this.numeroConta = numero,
    tipoConta = tipo,
    saldoConta = saldo,
    titularConta = titular
}

let joao = new ContaBancaria(0002,'poupança',1000,"joao da silva")

//3. Criação dinamica de array de objetos
let arrayObjPessoas = []

for (let i = 0; i < arrayPessoas.length; i++) {
    arrayObjPessoas.push(
        new ContaBancaria(
        arrayPessoas[i].numero, arrayPessoas[i].tipo, arrayPessoas[i].saldo, arrayPessoas[i].titular));

}

// console.log(arrayObjPessoas[1])

//4. Objeto banco  5. Consulta cliente 

banco = {
    pessoas: arrayObjPessoas,

    consultarCliente: function(nomeCliente){
        for (let i = 0; i < arrayPessoas.length; i++) {
            if (arrayPessoas[i].titular == nomeCliente) {
                return arrayPessoas[i]
            }else{
                null
            }
            return 'Pessoa não encontrada'
        }
    }

}

console.log(banco.pessoas)
console.log(banco.consultarCliente("Abigael Natte"))


