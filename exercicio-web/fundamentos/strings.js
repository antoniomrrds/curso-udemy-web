const escola = "cod3r";

console.log(escola.charAt(4));//letras  numero 0 e aprimeira letra
console.log(escola.charAt(5));//Quando não Existe ele volta vazio
console.log(escola.charCodeAt(3));// tabela unicode asc
console.log(escola.indexOf('3'));// o inverso  index
console.log(escola.substring(1));//exclue o primeiro
console.log(escola.substring(0,3));// do 1° ao 3° sem o 3
console.log('Escola '.concat(escola).concat("!"));// junta Escola com cod3r 
console.log('Escola ' + (escola) + ("!"));// junta Escola com cod3r 
console.log(escola.replace(3, 'e')); //substitue o 3 pelo de cod3r por = coder
console.log('Ana,Maria,Pedro'.split(','));//faz virar um Array
console.log("3" + 2);