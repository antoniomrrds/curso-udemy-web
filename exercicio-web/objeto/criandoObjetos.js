//Formas de criação de objeto 
//usando notação literal

const obj1 = {
    nome:"Antônio Marcos",
    idade:'22',
    EstadoCivil:"Solteiro"
}
console.log(obj1)

//Object em JS

console.log(typeof Object, typeof new Object)

const obj2 = new Object 
console.log(obj2)

//Funçãoes Construtoras 
function Produto (nome,preco,desconto){
    this.nome = nome 
    this.getPrecoComDesconto=() =>{
        return preco * (1 - desconto)
    }
}
const p1 = new Produto('Caneta',7.99,0.15)
const p2 = new Produto('Notebook',2998.99,0.25)
console.log(p1.getPrecoComDesconto(),p2.getPrecoComDesconto())

//Função Factory 

function criarFuncionario(nome,salarioBase,faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase/30)*(30- faltas)
        }
    }
}

const f1 = criarFuncionario('João',7980,4)
const f2 = criarFuncionario('Antonio',1800,5)
console.log(f1.getSalario(), f2.getSalario())

//Object.create

const filha = Object.create(null)
filha.nome ='Ana'
console.log(filha)

// Um Função Famosa que retorna objecto...

const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)