const express = require('express')

const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))//E o padrão que vem com requisiçao do formulário

app.post('/usuarios', (req, resp) => { //Função midlewares sao como canos que conecta e treansmitem dados
    console.log(req.body)
    resp.send('<h1> Parabéns. Usuário Incluido</h1>')
})


app.post('/usuarios/:id', (req, resp) => { //Função midlewares sao como canos que conecta e treansmitem dados
    console.log(req.params.id)
    console.log(req.body)
    console.log(req.query)
    resp.send('<h1> Parabéns. Usuário Alterado</h1>')
})

app.listen(3003)
//node server.js para iniciar o servidor
// dir e igual ao ls 
//estou usando o nodemon para startar e só usar o nodemon no prompt
