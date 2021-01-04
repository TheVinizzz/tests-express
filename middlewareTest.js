function Entrando(name) {
    return function(req, res, next) {
        console.log(`Bem vindo ${name}`)
        next()
    }
}

module.exports = Entrando