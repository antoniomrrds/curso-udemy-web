//Função em JS  é First-Class Object (Citzens)
// Higher Order function

//Criar de foram Literal 

function fun1(){ }


// Armazenar em uma variável

const fun2 = function(){}

//Armazenar em uma Array 
const array = [function(a, b){ return a + b},fun1,fun2]

console.log(array[0](2, 3))

// Armazernar em um atributo de objeto  

const obj = {}
obj.falar = function (){return 'Opa'}

console.log(obj.falar())

//Passaar  função como parametro
function run(fun){
    fun()
}

run(function(){console.log('Executando')})

//Uma função pode retornar/conter uma função

function soma (a, b){
    return function(c){
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)