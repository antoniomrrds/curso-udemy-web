const filhosDaMae = ['josé','Rafael','paula']
const filhosDoPai = ['Rana','Joel','Cintia']
console.log(filhosDoPai.length)//tamanho do array antes do casamento
console.log(filhosDaMae.length)
const casamento = filhosDaMae.concat(filhosDoPai)
console.log(`Depois do casamento a Junção dos filhos é ${casamento.length} e Nome dos filhos é ${casamento}`)//array depois do casamento

console.log(['a','b'].concat([1,2],[3,4],5,[[6,7]]))

