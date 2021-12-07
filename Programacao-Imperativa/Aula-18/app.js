let  loopDePares = (num)=>{
    for (i =0 ; i <= 100; i++){
        let soma = num + i;
        if(soma % 2 == 0){
            console.log("O Número; " + soma + " é par")
        }
    }
}
loopDePares(4);


let  loopDeImpares = (num, palavra)=>{

    for (i =0 ; i <= 100; i++){
        let soma = num + i;
        if(soma % 2 !== 0){
            console.log("O Número; "  + soma + " é Ímpare a palavra é; "+ palavra)
        }
    }
}
loopDeImpares(1,"Impar");
