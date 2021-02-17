const express = require('express')
const app = express()

const saudacao = require('./saudacaoMid')
// Quando voce coloca na frente a  url que voce quer ele acessa direto ele aceita so ela 
// app.use("/opa",(req, res) => { 
//     res.send('Estou<b> Bem</b>! ')
// })
// neste caso vc usa o next para desencadear uma funcao atras da outra

app.use(saudacao('Guilherme'))

app.use('/opa', (req, res,next) => {
    console.log("Before !!!")
    next()
})
app.get('/clientes/relatorio', (req,res) => { 
    res.send(`Cliente relatório : completo = ${req.query.completo} ano = ${req.query.ano}`)
})


app.post('/corpo', (req, res) => { 
    let corpo = ''
    req.on('data',function(parte){
        corpo += parte
    })

    req.on('end', function () {
        res.send(corpo)
     })
})
app.get('/clientes/:id', (req, res) => { 
    res.send(`Cliente ${req.params.id} Selecionado !!! `)
})

app.get('/opa', (req, res,next) => {
    console.log("During !!! ")
    //json com dados adicionais 
    res.json({
        data: [
            { id: 7, name: 'Ana', position: 1 },
            { id: 23, name: 'Joaquim ', position: 2 },
            { id: 43, name: 'Romilda', position: 3 }

        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })

    next()
    //json com array
    // res.json([
    //     {id:7, name:'Ana', position:1},
    //     {id:23, name:'Joaquim ', position:2},
    //     {id:43, name:'Romilda', position:3}
    // ])
    //json com objeto 
    // res.json({
    //     name: 'Ipad 36Gb',
    //     price: 1899.00,
    //     discount: 0.15
    // })
    // res.send('Estou<b> Bem</b>! ')
})


app.use('/opa', (req, res) => {
    console.log("Later !!!")

})

app.listen(3000, () => {
    console.log("Backend working ...")
})

// Quando voce usa o use vem todos os metodos do http