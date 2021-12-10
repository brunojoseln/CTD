//Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno.

function Aluno(nome, qtdFaltas, notas){
    this.nome = nome;
    this.faltas = qtdFaltas;
    this.notas = notas;

    //Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1.


    this.calcularMedia = 
        this.notas.reduce((acc,num)=> {
            return acc+num/this.notas.lenght;
        })

    this.adicionarFalta = () => {
        return this.qtdFaltas++
    }

}


function Curso(nomeCurso, notaApr, faltaMax, listaAlunos = []){
    this.nomeCurso = nomeCurso;
    this.notaApr = notaApr;
    this.faltaMax = faltaMax;
    this.listaAlunos = listaAunos
    
    this.addAluno = (nome, qdtFaltas, notas) => {
        this.listaAlunos.push(new Aluno(nome,qtdFaltas,notas))
    };

    this.aprovado = (nome) => {
        let aluno = this.listaAlunos.find((procuraAluno) => procuraAluno.nome === nome);

        return (
            (aluno.media >= this.notaApr && aluno.qtdFaltas < this.faltas) || 
            (aluno.qtdFaltas === this.faltaMax && aluno.media >= this.notaApr * 1.1)
        );
        
    }
}
