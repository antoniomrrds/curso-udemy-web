//tem objetivo de function assincrona

const { promises } = require("fs");
const { reject, set } = require("lodash");

 function falarDepoisDe(segundos, frase){
     return new Promise((resolve,reject) => { 
         setTimeout(() => {
         resolve(frase)

     }, segundos*1000)
     })
    }

    falarDepoisDe(3, 'Que Legal!!')
    .then((frase,abc)=> frase.concat('???'))
    .then(outraFrase=> console.log(outraFrase))
    .catch(e => console.log(e))//tratar erro