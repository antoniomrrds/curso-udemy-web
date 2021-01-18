function tratarErroElancar(erro) {
    //throw new Error('I am Sorry for the mistake!!!!')
    //throw 10
    // throw true
    // throw 'Mensagem'
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date 
    }
}
function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!!!!!')

    } catch (e) {
        tratarErroElancar(e) //tratar  o Erro
    }finally{//sempre ira se chamar
        console.log('Final')
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)