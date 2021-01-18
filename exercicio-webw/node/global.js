console.log(global)
global.MinhaApp = Object.freeze({
    saudacao(){
        return 'Estou em todos os Lugares !!!'

    },
    nome: 'Sitema Legal'
})

//Se Você não usar o freeze vai fuder geral  por conta do  global poder ser modificado 