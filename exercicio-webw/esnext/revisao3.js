//ES8: Object.values/Object.entries

const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

//Melhorias na Notação Literal

const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'Oi Gente!!!!'
    }
}

console.log(pessoa.nome, pessoa.ola())

//class em javaScript nada mais do que função

class Animal { }
class Cachorro extends Animal {//chama por herança extends
    falar() {
        return 'Au au!'
    }
} console.log(new Cachorro().falar())