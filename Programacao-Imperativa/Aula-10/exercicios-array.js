var animais = ['Pato','Galinha','Cachorro','Vaca','Baleia','Leão','Tigre']

// .join - Junta os elementos do array e separa com ,
console.log(animais.join())

// .pop - Deleta e retorna o ultimo elemento do Array
console.log(animais.pop())

// .push - Adiciona um elemento ao array
animais.push('Dinossauro')
console.log(animais.join())

// .shift retorna o primeiro registro da array, indice 0
console.log(animais.shift())

// unshift - Adiciona um elemento no indico 0 e retorna o número de registros dentro da array
console.log(animais.unshift('Dragão'))
console.log(animais.join())