
Array.prototype.forEach2 = function (callback) {
     for(let i = 0;i <this.length;i++){
         callback(this[i],i,this)

     }
}

const aprovados = ['antonio','rafaela','paula','agatha']

aprovados.forEach(function(nome,indice,array){// for each que estou falando ele percorre o array  um array tem tres parametros o nome o indicie e o prprio array e o quarto e undefined
    console.log(` ${indice+1}) ${nome}`)
    console.log(array)
})
