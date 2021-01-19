console.log( typeof Array ,typeof new Array ,typeof [])

let aprovados  =  new Array ('Bia','Carlos','Ana')//usando a forma de objetos

console.log(aprovados)

aprovados = ['Bia', 'Carlos','Ana'] //usando a forma literal
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'

aprovados.push('Abia')
console.log(aprovados.length)

aprovados [9] = 'Rafael'

console.log(aprovados.length)
console.log(aprovados[8]== undefined)

console.log(aprovados)                                                                                                                                                                                                                                                                                                                                                        
aprovados.sort() // ordenar o Array
console.log(aprovados)
delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia','Carlos','Ana']
aprovados.splice(1,1,'Elementos1',2)//Ela serve para adicionar  e remover elementos o primeiro e o indicie  o segundo e a quntidade que vocÊ quer  exclui  para adicionar colocar no 3 pra frente com aspas 

console.log(aprovados)
console.log(aprovados.length)