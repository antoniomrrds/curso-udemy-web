function gerarNumerosEntre(min,max, tempo){
    if(min > max)[max,min]  = [min, max]

    return new Promise(resolve => {
        setTimeout(function () {
            const fator= max -min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}


function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1,60,700),
        gerarNumerosEntre(1,60,8000),
        gerarNumerosEntre(1,60,1500),
        gerarNumerosEntre(1,60,400),
        gerarNumerosEntre(1,60,5000),
    ])
} 

console.time('promise')

gerarVariosNumeros()
    .then(( console.log))
    .then(() => {
        console.timeLog('promise')
        console.timeEnd('promise')
    })