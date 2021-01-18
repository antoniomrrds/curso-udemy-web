//pota padrão 80
//porta e um a requisição onde você passa o valor da porta e ela fica esperando um unico processo por vez
const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({extended : true}))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())//Converter para JSON = string

})

app.get('/produtos/:id',(req,res,next) =>{
    res.send(bancoDeDados.getProduto(req.params.id))
})
app.post('/produtos',(req,res, next)=>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco:req.body.preco 
    })
    res.send(produto)//JSON
})

app.put('/produtos/:id',(req,res, next)=>{
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco 
    })
    res.send(produto)//JSON
})

//Função excluir
app.delete('/produtos/:id',(req,res, next)=>{
    const produto = bancoDeDados.excluirProduto(req.params.id)  
    res.send(produto)//JSON
})
app.listen(porta, () => {
    console.log(`Servidor executando na Porta ${porta}.`)
})
/* npm i --save-dev nodemon@1.14.11 -E este comando e pra instalar o nodemon e na frente a versão do @ a versão e -E que significa inaltravel e ele serve so nas da dependencias de criação */
//npm start para roda o nodemon 
// para finalizar ctrl +c mais o enter