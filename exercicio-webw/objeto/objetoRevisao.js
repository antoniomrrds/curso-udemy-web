// coleção dinâmica de pares chave / valor 

const produto = new Object 
produto.nome = 'cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto'] 
console.log(produto)
const carro = {
    modelo:'A4',
    valor: 89100,
    proprietario:{
        nome:'Raul',
        idade:56,
        endereco:{
            logradouro:'Rua Cobre',
            numero:"88"
        }

    },condrutores:[{
        nome:'Antônio',
        idade:55
    }, {
        nome:'rafa',
        idade: 55
    }],
    calcularValoreguro: function(){
        //...
    }
}
//acessando atributo atraves de ponto


carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValoreguro
console.log(carro)

console.log(carro.condutores)
