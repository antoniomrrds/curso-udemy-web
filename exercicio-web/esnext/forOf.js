const { set } = require("lodash")

//for of percorre um array 
for (let antonio of 'best') {
    console.log(antonio.toUpperCase('antonio'))
}

const assuntoEcma = ['Map', 'Set', 'Promisse']

for (let i in assuntoEcma) {
    console.log(i)
}

for (let assunto of assuntoEcma) {
    console.log(assunto)
}


const assuntoMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])


for (let assunto of assuntoMap) {
    console.log(assunto)
}

for (let valor of assuntoMap.keys()) {
    console.log(valor)
}
for (let [ch, vl] of assuntoMap.entries()) {
    console.log(ch, vl)

}


const s = new set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}


