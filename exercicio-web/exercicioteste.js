// let array = [1,2,3,4,5,6,7,8,9,10] //pega dado sim dado não


// for (let index = 0; index < array.length; index +=2 ) {
//     const element = array[index];
//     console.log(element)

// }

const sum = (...args) => {
 
    return console.log( args.reduce((a, b) => a + b, 0))
  }
  sum(1,2,3,45,5)