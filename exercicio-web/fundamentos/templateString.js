const nome = 'Rebeca';
const concatenacao = 'Olá' + '!';

const template = `
      Olá
      ${nome}!` //concatena 
console.log(concatenacao, template);      


//Expressões...
console.log(`1 + 1 = ${ 1 + 1 }`);

const up = texto => texto.toUpperCase()//function para tornar letras maiusculas
console.log(`Ei...${up(nome +  ' cuidado')}!`);