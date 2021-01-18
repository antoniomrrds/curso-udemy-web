const notas = [6.7 ,7.4, 9.8, 8.1, 7.7]//let variavel local

for(let i in notas){
    console.log(i,notas[i])
}

const pessoa = {
    nome: 'Antony',
    sobrenome: 'Marcos',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}