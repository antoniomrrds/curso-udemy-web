function soma(){

    let soma = 0
    for(i in arguments){//Argumentos e um Array 
        
        soma+= arguments[i]
 
    }
    return soma 
}
console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2 , 3.3))

console.log(soma(1.1, 2,2,"Teste"))
console.log('a','b','c')