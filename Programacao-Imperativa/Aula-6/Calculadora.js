function adicionar(x,y){
    let soma = x+y
    console.log("A soma de "+x+" e "+y+" é igual a: "+soma)
}
adicionar(10,5);

function subtracao(x,y){
    let sub = x-y
    console.log("A subtração de "+x+" - "+y+" é igual a: "+sub)
}
subtracao(200,10);

function multiplic(x,y){
    let mult = x*y
    console.log("A multipicação de "+x+" x "+y+" é igual a: "+mult)
}
multiplic(100, 35);

function multiplic2(x,y){
    return x*y
}


function divisao(x,y){
    let divi = x/y
    console.log("A divisão de "+x+" por "+y+" é igual a: "+divi)
}
divisao(50, 10);

function divisao2(x,y){
    return x/y
}

console.log ("-------------- Teste de Operações / Calculadora --------------")
adicionar(30,40);
subtracao(40,30);
multiplic(3.7, 10);
divisao(40.2);
divisao(40,0);
console.log("-------------------Terceira parte ----------------------")

function quadradoDoNumero(num){
    console.log (num+" elevado ao quadrado é igual a "+multiplic2(num,num));
}
quadradoDoNumero(2);

function media3(x,y,z){
    console.log("A média dos numeros é: "+divisao2(x+y+z,3))
}
media3(12,10,10);

function calculoPorcentagem(num,porcent){
    console.log(porcent+"% de "+num+" é = "+(num * porcent)/100)
}
calculoPorcentagem(200,10);

function geradorDePorcentagem(num,porcent){
    console.log(num+"% de "+porcent+" é igual a: "+(divisao2(porcent,100))*num)
}
geradorDePorcentagem(20,300)

