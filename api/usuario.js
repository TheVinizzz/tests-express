function save(req, res) {
    res.send('Usuario > salvar')
}

function obter(req, res) {
    res.send('Usuario > obter')
}

module.exports = { save, obter}