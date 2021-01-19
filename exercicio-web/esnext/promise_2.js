//CALL-BACK HELL PRO CAUSA DE UMA DENTRO DA OUTRA
// setTimeout(function () {
//     console.log('Execultando callback !!! ')
    
//     setTimeout(function () {
        
//         console.log('Execultando callback !!! ')
        
//         setTimeout(function () {
        
//             console.log('Execultando callback !!! ')
            
//         }, 2000)
        
//     },2000)

// }, 2000)

// ai ta a diferenca entre a  promisse e a callback bem mais simplista

function esperarPor(tempo = 2000) { 
    return new Promise(function (resolve) { 
        setTimeout(function () { 
            console.log('Executando Promise ...')
            resolve()
        },tempo)
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)