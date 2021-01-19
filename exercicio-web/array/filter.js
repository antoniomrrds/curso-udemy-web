//filter epra filtrar
const produtos = [
{ nome:'Notebook',preco : 2499, fragil: true},
{ nome:'ipad Pro',preco : 4199, fragil: true},
{ nome:'copo de vidro',preco : 12.49, fragil: true},
{ nome:'copo de plástico',preco : 18.99, fragil: false}
]
//o meu foi com condicional 
console.log(produtos.filter(function(p){
    if( p.preco > 2500){
        return p
    }  else if (p.fragil ==false){
    return p
     }//return p.preco > 2500//o filter em ação 
                                                                                                                                                 
}))

const caro = produto => produto.preco >= 500
const  fragil = produto => produto.fragil 

console.log(produtos.filter(caro).filter(fragil))