const pessoa = {

    nome : 'Rebeca',
    idade :2,
    peso: 13

}

console.log(Object.keys(pessoa))// Um objeto é chave e valor ou seja keys = chave ]
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))//entradas


Object.entries(pessoa).forEach(([chave,valor])=>{
    console.log(`${chave}: ${valor}`)
    
})
Object.defineProperty(pessoa, 'dataNascimento',{//definir propriedades
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})


pessoa.dataNascimento = '01/01/2017'

console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// object.assign (ECMAScript 2015)

const dest ={a: 1}
const o1 = {b:2}
const o2 ={c:3, a: 4}

const obj = Object .assign(dest,o1,o2) //Ele concatena ou seja ele pega o ultimo valor 

Object.freeze (obj)
obj.c = 1234
console.log(obj)