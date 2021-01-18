//let e const 
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

//Template String 
const produto = 'ipad'
console.log(`${produto} é caro !!`)

//Destructuring = desmontar  

const [l,e,...tras] ="cod3r"//estes 3 pontos significa rash que transforma em array
console.log(l,e,tras)

const [x,,y] = [1,2,3]
console.log(x,y)

const{idade: i, nome }= {nome:'Ana',idade:9}
console.log(i,nome)



