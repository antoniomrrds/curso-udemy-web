const carrinho = [
//Estes são JSON e transformou em objeto
    '{"nome": "Borracha", "preco" : 3.45}',
    '{"nome" : "caderno" , "preco": 13.90}',
    '{"nome" : "kit de Lápis", "preco": 41.22}'
]
//Retornar um array apenas com os preços 

const paraObjetos = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
const resultado = carrinho.map(paraObjetos).map(apenasPreco)

console.log(resultado)