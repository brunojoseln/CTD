let minhaCallBack = () => console.log("Quack")

setTimeout(minhaCallBack,3000);

setTimeout(function(){
    console.log('Olá Mundo!')
} , 1000)

function iniciais(nome, sobrenome){
    return nome[0] + sobrenome[0];
};

function bomDia(nome, sobrenome, callback){
    return 'Olá, ' + callback(nome, sobrenome);
};

console.log(bomDia('Amanda', 'Ferreira', iniciais))




