const saudacao = (name) => {
    return function (req, res, next) { 
        console.log(`Seja Bem Vindo ${name} !!!`)
        next()
    }

} 
module.exports = saudacao