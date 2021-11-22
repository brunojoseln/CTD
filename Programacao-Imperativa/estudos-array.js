// let umArray = [1, 2, 3];
// let outroArray = [4, 5];

// function mover(ar1,ar2){
//     ar2.push(ar1.pop())
// }

// mover(umArray,outroArray)


// function medalhaDeAcordoComPosto(num){
//     let premios = ["nada","ouro", "prata", "bronze", "nada", "nada"]
//     return num >0 && num < 4 ? premios[num] : "nada"
//   }

// console.log(medalhaDeAcordoComPosto(20))

// function lucroTotal(umPeriodo) {
//     let somatoria = 0;
//     for (let mes of umPeriodo) {
//       somatoria = somatoria + mes;
//     }
//     return somatoria;
//   }

//   console.log(lucroTotal([100,50]))

//   function quantidadeDeMesesComLucro(umPeriodo) {
//     let quantidade = 0;
//     for (let mes of umPeriodo) {
//       mes > 0 ? quantidade++ : null
//     }
//     return quantidade;
//   }

// function saldosDosMesesComLucro(umPeriodo) {
//     let saldos = [];
//     for (let i = 0; i < umPeriodo.length; i++) {
//       umPeriodo[i] > 0 ? saldos.push(umPeriodo[i]) : null
//     }
//     return saldos;
//   }
  
//   console.log(saldosDosMesesComLucro([1,5,-37,4]))

function naipeDoTruco(valor){
    let contador = 1
    let result = []
    for(let i = 0; i < 12; i++){
      contador !== 8 && contador !== 9 && contador <= 12 ? result.push(contador + " de "+ valor) : null
        contador++
    }
    return result;
  }  

  console.log(naipeDoTruco("Batata"))