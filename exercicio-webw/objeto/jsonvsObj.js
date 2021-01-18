//J ava S cript O bject N otation isto e json
// transformando um objeto em json atráves do stringify()
const obj = { a:1,b:2,c:3,soma() { return a + b + c }}
console.log(JSON.stringify(obj))

//console.log(JSON.parse("{a: 1,b: 2, c:3 }"))
//console.log(JSON.parse("{'a': 1,'b': 2, 'c':3 }"))
//JSON usa aspas duplas em chave/valor "{ json}" e colchetes e aspas simples
//json em umobjeto usa o parse
console.log(JSON.parse('{"A":1,"b":2,"c":3}'))
console.log(JSON.parse('{"A":1,"b":"string","c":true,"d": {}, "e":[] }'))
