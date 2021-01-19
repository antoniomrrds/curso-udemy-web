//operador ... rest(juntar)/spread(espalhar)
//usar rest com parâmetro de Função
//Usar spread com objeto 
const funcionario = {nome:'Maria',Salario: 1245}
const clone = {...funcionario}
console.log(clone)

//Usar spread com array 
const grupoA = ['João','Pedro','Gloria']
const grupoFinal = ['Maria','Rafaela',...grupoA]

console.log(grupoFinal)