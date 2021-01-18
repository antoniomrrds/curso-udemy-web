const quaseArray = { 0:'Rafael',1:'Ana',2:'Antônio'}
console.log(quaseArray)

Object.defineProperty(quaseArray,'toString',{
    value:function(){ return Object.values(this)},
    enumerable:false
})

console.log(quaseArray[0])

const meuArray = ['Rafel','Ana','Antônio']
console.log(quaseArray.toString(),meuArray)

