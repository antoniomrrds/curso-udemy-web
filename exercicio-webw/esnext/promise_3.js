function gerarNumerosEntre(min, max) { 
    if (min > max) [max, min] = [min, max]
    
    return new Promise(resolve => {
        //numero randomico o um e pra entra o maximo
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

gerarNumerosEntre(10, 11)
    .then(num => num * 10)
    .then(numX10 => `O Número gerado foi ${numX10}`)
    .then(console.log)