function playGame(){

    var pontosPlayer, pontosCpu, valorUsuario = 0;
    var replay = false;
    pontosPlayer = pontosCpu = valorUsuario = 0;
    var arrayValores = [0,"Papel", "Pedra", "Tesoura"]
    console.log(valorUsuario)


    var numVit = parseInt(prompt("Insira o número de vitorias para o jogo acabar"));

    function valorInseridoUsuario(){
        do{
            valorUsuario = parseInt(prompt(`
            Jogo da velha \n
            1 - Papel 
            2 - Pedra 
            3 - Tesoura 
        `))
        if(!(valorUsuario >= 1 && valorUsuario <= 3)){
            alert("Valor inválido, por favor digite um número entre 1 e 3 ")
        }
        valorUsuario = parseInt(valorUsuario);
        }while(!(valorUsuario >= 1 && valorUsuario <= 3));

        return valorUsuario;
    }

    function valorCPU(){
        return parseInt(Math.random() * 3 +1)
    }

    function verificarVitoria(pPlayer,pCpu){
        switch(pPlayer){
            case 1:
                if(pCpu == 1){
                    alert(`
                    Você jogou: ${arrayValores[pPlayer]}
                    CPU jogou: ${arrayValores[pCpu]}
                    Houve empate :O
                    Você: ${pontosPlayer} x CPU: ${pontosCpu}
                    `);
                }else if(pCpu == 2){
                    pontosPlayer++;
                    alert(`
                    Você jogou: ${arrayValores[pPlayer]}
                    CPU jogou: ${arrayValores[pCpu]}
                    Você venceu :)
                    Você: ${pontosPlayer} x CPU: ${pontosCpu}
                    `);
                }else{
                    pontosCpu++;
                    alert(`
                    Você jogou: ${arrayValores[pPlayer]}
                    CPU jogou: ${arrayValores[pCpu]}
                    Você perdeu :(
                    Você: ${pontosPlayer} x CPU: ${pontosCpu}
                    `);
                }
            break;
            case 2:
                if(pCpu == 1){
                    pontosCpu++;
                    alert(`
                    Você jogou: ${arrayValores[pPlayer]}
                    CPU jogou: ${arrayValores[pCpu]}
                    Você perdeu :(
                    Você: ${pontosPlayer} x CPU: ${pontosCpu}
                    `);
                }else if(pCpu == 2){
                    alert(`
                    Você jogou: ${arrayValores[pPlayer]}
                    CPU jogou: ${arrayValores[pCpu]}
                    Houve empate
                    Você: ${pontosPlayer} x CPU: ${pontosCpu}
                    `);
                }else{
                    pontosPlayer++;
                    alert(`
                    Você jogou: ${arrayValores[pPlayer]}
                    CPU jogou: ${arrayValores[pCpu]}
                    Você venceu :)
                    Você: ${pontosPlayer} x CPU: ${pontosCpu}
                    `);
                }
            break;
            case 3:
                if(pCpu == 1){
                    pontosPlayer++;
                    alert(`
                    Você jogou: ${arrayValores[pPlayer]}
                    CPU jogou: ${arrayValores[pCpu]}
                    Você Venceu :)
                    Você: ${pontosPlayer} x CPU: ${pontosCpu}
                    `);
                }else if(pCpu == 2){
                    pontosCpu++;
                    alert(`
                    Você jogou: ${arrayValores[pPlayer]}
                    CPU jogou: ${arrayValores[pCpu]}
                    Você perdeu :(
                    Você: ${pontosPlayer} x CPU: ${pontosCpu}
                    `);
                }else{
                    alert(`
                    Você jogou: ${arrayValores[pPlayer]}
                    CPU jogou: ${arrayValores[pCpu]}
                    Empate
                    Você: ${pontosPlayer} x CPU: ${pontosCpu}
                    `);
                }
            break;
        }
    }

    function reiniciarPartida(){
        pontosPlayer, pontosCpu, valorUsuario, vencedor = 0

    }

    function jogo(player = valorInseridoUsuario(),cpu = valorCPU()){
        verificarVitoria(player,cpu)
    }

    do{
        jogo();
    }while(pontosCpu < numVit && pontosPlayer < numVit)

    function anunciarVencedor(){
        if(pontosCpu > pontosPlayer){
            alert(`
            Fim de Jogo
            CPU ganhou
            --------------`)
        }else{
            alert(`
            Fim de Jogo
            Você ganhou
            --------------`)
        }
        replay = confirm("Deseja jogar novamente?")
        
    }

    anunciarVencedor();
    
    while(replay){
        reiniciarPartida();
        jogo();
        anunciarVencedor();
    }

        
}
// for(let i = 0; i <= 100; i++){
//     arrayValores.push(valorCPU())
// }
