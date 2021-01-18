const alunos = [
    {nome:'João',nota: 7.3,bolsista:false},
    {nome:'Maria',nota: 9.2,bolsista:true},
    {nome:'Pedro',nota: 9.8,bolsista:false},
    {nome:'Ana',nota: 8.7,bolsista:true}
]

//desafio 1: todos alunos são bolsistas? 
 //const totalunos = alunos.reduce((antecessor,atual) => antecessor+atual.nota,0)//o reduce soma termo 
//console.log(totalunos)
 const todosBolsistas = (resultado, bolsista)=> resultado && bolsista 
 console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//desafio 2: algum aluno e bolsistas

const algumBolsista = (resultado,bolsista) => resultado || bolsista 
console.log(alunos.map(e => e.bolsista).reduce(algumBolsista))