const fs = require('fs')
const path = require('path')



function readArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function (_, conteudo){
            resolve(conteudo.toString())
        })
        console.log("Depois de Ler")
    })
    
}
const caminho = path.join(__dirname, 'dados.txt')

readArquivo(caminho)
    // .then(conteudo => console.log(conteudo))
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)