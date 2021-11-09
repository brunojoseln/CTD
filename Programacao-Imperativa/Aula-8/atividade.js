function podeSubir(altura, acompanhada){

    if(altura > 1.40 && altura < 2.0 ){
        console.log
        return 'Acesso permitido'
    }
    else if (altura > 1.40 && acompanhada){
        return 'Acesso permitido'
    }
    else if(altura < 1.40){
        return 'Acesso negado'
    }
    else{
        return 'Acesso negado'
    }

}

console.log(podeSubir(1.40,false))
console.log(podeSubir(1.41,false))