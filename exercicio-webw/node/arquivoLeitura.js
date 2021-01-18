const fs = require('fs')


const caminho = __dirname + '/arquivo.json'

//Como ler um arquivo sicrono...

const conteudo = fs.readFileSync(caminho,'utf-8')
console.log(conteudo)

//assicrono...  le fora de sincronia 

fs.readFile(caminho,'utf-8',(err,conteudo)=>{
    const config = JSON.parse(conteudo) //transformou uma string em um objeto 
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')

console.log(config.db)

fs.readdir(__dirname, (err,arquivos)=>{
    console.log('Conteúdo da Pasta ...')
    console.log(arquivos)
})