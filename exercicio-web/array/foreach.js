const aprovados = ['antonio','rafaela','paula','agatha']

aprovados.forEach(function(nome,indice){// for each que estou falando ele percorre o array  um array tem tres parametros o nome o indicie e o prprio array e o quarto e undefined
    console.log(` ${indice+1}) ${nome}`)
    console.log(x)
})


aprovados.forEach(nome=> console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

// fazer um array demontrando como funciona o forEach 
