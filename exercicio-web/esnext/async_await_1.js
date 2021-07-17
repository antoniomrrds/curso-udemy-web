function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(), tempo)
            // console.log('Executando promise...')
    })
}

// async function = dentro da funcao voce pode usar o await 
// ou seja async faz a funcao de torna assincrona com isso parece muito com a promise

// esperarPor(2000)
//     .then(() => console.log('Executando promise 1..'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 2..'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 3..'))
// marque a funcao com async 
// aparenta ser um codigo sincrono

    function retornarValor(){
        return new Promise( resolve => { 
            setTimeout(() => resolve(10) ,5000)
    })
}

async function valorRapido(){
    return 20
}

    async function executar(){
        // let valor = await retornarValor() 
         let valor = await valorRapido() 
        await esperarPor(1500)
        console.log(`Async/Await ${valor}...`)
        await esperarPor(1500)
        console.log(`Async/Await ${valor+1}...`)
        await esperarPor(1500)
        console.log(`Async/Await ${valor+2}...`)
        return valor + 3
    }

    async function executaDeVedade(){
        const valor  =  await executar()
        console.log(valor)
    }

    executaDeVedade()

    // executar().then(console.log) = voce so consegue acessar o valor do return usando o then 
