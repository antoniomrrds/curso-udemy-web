const pilotos = ['Vettel','Alonso','Raikkonen','Massa']
pilotos.pop()// Massa Quebrou o carro! ultimo sai
pilotos.push('Verstappen')//adiciona no ultimo 
console.log(pilotos)

pilotos.shift()// Remove o primeiro!!!!
console.log(pilotos)

pilotos.unshift('Haminton')//adiciona no primeiro
console.log(pilotos)

//splice adiciona e remove elementos em qualquer posição!!!!!!!!!!

//adicionar 
pilotos.splice(2,0,'Bottas','Massa')
console.log(pilotos)

//Remover
pilotos.splice(3,1)//massa Quebrou:(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)//slice = pedaço novo Array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4)//do 1 ao 4
console.log(algunsPilotos2)


