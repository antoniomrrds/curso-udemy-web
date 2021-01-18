function Aula(nome,videoId){
    this.nome = nome
    this.videoid = videoId
}

const aula1 = new Aula('Bem Vindo',123)
const aula2 = new Aula('Ate Breve',456)

console.log(aula1,aula2)

//Simulando o new eos ... significa que e um array

function novo(f,...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj,params)
    return obj
}

const aula3 = novo(Aula,'Bem vindo',123)
const aula4 = novo(Aula,'Bem vindo',123)
console.log(aula3,aula4)