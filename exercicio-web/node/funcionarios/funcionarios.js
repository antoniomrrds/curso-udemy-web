const { default: Axios } = require("axios")

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const  funcionarios = response.data
    // console.log(funcionarios)


const chineses = f => f.pais === 'China'
const mulheres = f => f.genero ==='F'
const menorSalario =(func,funcAtual)=>{
    return func.salario < funcAtual.salario ? func : funcAtual
}

//mulher chinesa com menor salário

const func = funcionarios
.filter(chineses)
.filter(mulheres)
.reduce(menorSalario)
console.log(func)
})