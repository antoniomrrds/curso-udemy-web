let  valor // Não  inicializada
console.log(valor) //padrao undefined

// valor = null//ausência de valor
// Console.log(valor)

//  console.log(valor.toString())//ERRO! 
 const produto = {};
 console.log(produto.preco);
 console.log(produto);

 produto.preco = 3.50;
 console.log(produto)
 
 produto.preco = undefined//Evite atribuir Undefined
 console.log(!!produto.preco)
 // delete produto.preço
 console.log(produto)

 produto.preco = null // sem preço
 console.log(!!produto.preco);
 console.log(produto)
 //0 usar null undefined nao definido