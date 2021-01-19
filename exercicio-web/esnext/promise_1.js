// funcoes para demonstrar passo a passo do then lembre - se que ele trabalha em cima da resposta do outro que foi declaradao antes

const primeiraElemento = (array) => { return array[0] }

const primeiraLetra = (string) => { return string[0] }

const letraMinuscula = letra => letra.toLowerCase()

//Promise
// ela so devolve um valor
//Caso necessite de mais de um valor passe um Objeto 

new Promise(function (resolve) {
    // cumprirPromessa(3)
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
    //  cumprirPromessa({
    //      x: 4,
    //      y:5
    //  })
})
    //para executar usa o then 
    .then(primeiraElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)

console.log(typeof Promise)// function
console.log(typeof p)// Objeto

