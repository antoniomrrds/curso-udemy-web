// IIFE -> Immediately Invoked Function Expression impede de voce mexer com escopo global


(function(){
    console.log('Será executado na hora!!!')
    console.log('Foge do escopo mais abragente!!!')
})()

console.log("a")