//novo recuro do ES2015
//Esta funçao serve para tirar e um operador de destruturação

const pessoa ={
    nome : 'Ana' ,
    idade : 5, 
    endereco:{
         logradouro:'Rua ABC',
         número: 1000,

} 

}

const {nome,idade} = pessoa 
console.log(nome, idade)

const {nome: n,idade: i} = pessoa
console.log(n,i)

const{ sobrenome,bemHumorada= true}= pessoa
console.log(sobrenome,bemHumorada)

const { endereco:{logradouro, numero, cep}}=pessoa
console.log(logradouro,numero,cep)

//cons{conta:{ag,num}} = pessoa
//console.log(ag,num)
