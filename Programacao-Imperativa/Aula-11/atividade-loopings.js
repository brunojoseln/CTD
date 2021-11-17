let filmes = ["Star Wars", "Totoro", "Rocky", "Pulp Fiction", "A vida é bela"]

function capitalizar(){
    for (let index = 0; index < filmes.length; index++) {
        filmes[index] = filmes[index].toUpperCase()
        console.log(filmes[index])
    }
}

capitalizar(filmes)