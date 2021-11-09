function microondas(opcao, tempo){
    switch (opcao){
        case 1:
            console.log("Pipoca")
            if(tempo > 30){
                console.log("Kabooom")
            }else if(tempo < 10){
                console.log("Tempo insuficiente :(")
            }else if (tempo >= 20){
                console.log("A comida queimou :(")
            }else{
                console.log("Prato pronto, bom apetite!!!")
            }
        break;
        case 2:
            console.log("Macarrão")
            if(tempo > 24){
                console.log("Kabooom")
            }else if(tempo < 8){
                console.log("Tempo insuficiente :(")
            }else if (tempo >= 16){
                console.log("A comida queimou :(")
            }else{
                console.log("Prato pronto, bom apetite!!!")
            }
        break;
        case 3:
            console.log("Carne")
            if(tempo >= 45){
                console.log("Kabooom")
            }else if(tempo < 15){
                console.log("Tempo insuficiente :(")
            }else if (tempo >= 30){
                console.log("A comida queimou :(")
            }else{
                console.log("Prato pronto, bom apetite!!!")
            }
        break
        case 4:
            console.log("Feijão")
            if(tempo >= 36){
                console.log("Kabooom")
            }else if(tempo < 12){
                console.log("Tempo insuficiente :(")
            }else if (tempo >= 24){
                console.log("A comida queimou :(")
            }else{
                console.log("Prato pronto, bom apetite!!!")
            }
        break
        case 5:
            console.log("Brigadeiro")
            if(tempo >= 24){
                console.log("Kabooom")
            }else if(tempo < 8){
                console.log("Tempo insuficiente :(")
            }else if (tempo >= 16){
                console.log("A comida queimou :(")
            }else{
                console.log("Prato pronto, bom apetite :D")
            }
        break
        default:
            console.log("Prato Inexistente")
        break
    }
}

microondas(1,20)

