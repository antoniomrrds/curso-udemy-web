//Pessoa -> 123 -> {...}

const pessoa ={ nome:'João'}

pessoa.nome = 'Pedro'
console.log(pessoa)
//pessoa -> 456 -> {...}
//pessoa = { nome : 'Ana' }
//congelo objeto e não pode altera-lo
Object.freeze(pessoa)

pessoa.nomeme = 'Maria'
pessoa.end = "Rua ABC"

delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)
const pessoaConstante = Object.freeze({nome:"Antônio"})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)
