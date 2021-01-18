//Estrategia 1 para gerar valor Padrão

function soma(a,b,c) {

    a = a || 1
    b = b || 1 
    c = c || 1
    return a +b + c
}

console.log(soma(),soma(3), soma(1, 2 ,3),soma(0,0,0))

//Estrategia 2 , 3 e 4 para gerar valor padrão

function soma1(a,b,c){
    a = a !== undefined ? a : 1
    b = 1 in arguments  ? b : 1
    c = isNaN(c) ? 1 : c
    return a+ b +c 

}

console.log(soma1(),soma1(3),soma1(1,2, 3),soma1(0, 0 , 0))



// valor padrao do es2015 
function soma2(a =1 , b = 1 ,c = 1) {

    return a + b +c 
}

console.log(soma2(),soma2(3),soma2(1,2,3),soma2(0,0,0))