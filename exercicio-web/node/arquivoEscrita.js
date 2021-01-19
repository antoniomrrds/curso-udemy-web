const fs = require('fs')

const produto = {
    nome:'zenfone',
    preco: 7000,
    desconto: 0.15
}
//Escrevendo um arquivo apartir do node  usando write file
fs.writeFile(__dirname + 'arquivoAntony.json',JSON.stringify(produto),err=>{
    console.log(err ||'Arquivo Salvo!')
})