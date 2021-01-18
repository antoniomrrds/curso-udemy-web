class Pessoa{

    constructor(nome){
         this.nome =  nome
    }
    falar() {
        console.log(`Meu nome ${this.nome}`)
    }
}


const p1 = new Pessoa ('João')
p1.falar()

// função Factory sempre ele vai apontar para this  ele  carreaga com si isso 
const criarGado = nome => {
        return {
            falar: () => console.log(`Meu nome é ${nome}`)
        }
}

const p2 = criarGado('João')

p2.falar()