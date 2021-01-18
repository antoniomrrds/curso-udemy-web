const tecnologias = new Map()

tecnologias.set('react',{framework:false})
tecnologias.set('Angular',{framework:false})

console.log(tecnologias.react)
console.log(tecnologias.get('react').framework)

const chavesvariadas = new Map([
    [function(){},'Função'],
    [{},'Objetos'],
    [123,'Número'],
])

chavesvariadas.forEach((vl,ch)=>{
    console.log(ch,vl)
})

console.log(chavesvariadas.has(123))
chavesvariadas.delete(123)
console.log(chavesvariadas.has(123))
console.log(chavesvariadas.size)

chavesvariadas.set(123,'a')
chavesvariadas.set(455,'b')
chavesvariadas.set(123,'b')
console.log(chavesvariadas)

//Não ter repetição na chave 123 =a, 123 = b