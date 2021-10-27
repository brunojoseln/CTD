//1 - Crie uma função que converta polegadas em centímetros. 
// Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.
function polegEmCenti(poleg){
    let centi = poleg * 2.54
    console.log(poleg+ " polegadas é igual a "+ centi + " centimetros ")
}
polegEmCenti(29);

//2 - Crie uma função que receba uma string e a converta em um URL.
// ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"

function stringParaUrl(texto){
    console.log("http://www."+texto+".com.br")
}
stringParaUrl("Brunow")


//3 - Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).
function exclamacao(texto){
    console.log(texto+"!")
}
exclamacao("Socorro")

// 4 - Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.
function idadeCachorro(idade){
    console.log("A idade do cachorro é "+idade*7)
}
idadeCachorro(5);

// 5 - Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.

function salario(valor){
    console.log("Seu salário é de "+valor/160+" por hora")
}
salario(1800)

// 6 - Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. Em seguida, execute a função, testando diferentes valores. 

function calculoIMC(peso,altura){
    console.log("Seu IMC é "+peso/(altura^2))
}

calculoIMC(80,1.77)

//7 - Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. 

function maiuscula(texto){
    console.log(texto.toUpperCase())
}
maiuscula("Quando acordou o dinossauro ainda estava lá")

// 8 - Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro.

function tipo(variavel){
    console.log("A variável é do tipo "+typeof(variavel))
}
tipo(3.7);

// 9 Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.
function circunferencia(raio){
    console.log("A Circunferência é: "+(2*Math.PI)*raio)
}
circunferencia(100)

// var person = {
//     firstName: "Antonio",
//     lastName: "Henrique",
//     idade: 37,
//     peso: 68,
//     altura: 1.72,
//     imc: function calcularIMC(peso,altura) {
//       altura = this.altura;
//       return Math.round(this.peso / (altura * altura));
//     }
//   };
  
//   qualoimc = console.log(`${person.firstName} ${person.lastName} de ${person.idade} anos tem o indice de massa corporal de ${person.imc()}`);
