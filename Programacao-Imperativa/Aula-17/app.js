let numeros = [1,2,3,4];

let dobro = numeros.map(item =>{
    // console.log(item);
    return item * 2;
});

console.log(dobro);

let idade =[22,44,53,12,45,7,18,16]
let maiores = idade.filter((idade)=> {
    return idade%2
})

console.log(maiores)

let soma = idade.reduce((acumulador, item) => {
    return acumulador+item
})

console.log(soma)

let paises = ['Brasil', 'França', 'Japão']

let sesiap = paises.reverse((pais) =>{
    console.log(pais)
})

console.log(sesiap)

