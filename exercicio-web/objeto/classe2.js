class Avo {
    constructor(sobrenome){ 
        this.sobrenome =  sobrenome
    }
}
//extends fazer uma inteligação entre as classes
class Pai extends Avo {
      constructor(sobrenome, profissao = 'Professor'){
          super(sobrenome)
          this.profissao = profissao
        
      }
}
//super faz inteligação com os classes
class Filho extends Pai{
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)
