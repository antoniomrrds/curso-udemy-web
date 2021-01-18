//Usando minha formúla
const nums = [1,2,3,4,5]

for (let index = 0; index < nums.length;index++ ) {
    const element = 2*nums[index];
    console.log(element)
}

//for com Propósito

let  resultado = nums.map(function(e){//gera um novo array transformado

    return e * 2 
})

console.log(resultado)


const triplo = e => e * 3 

const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro) //cálculos sucessivos

console.log(resultado)


