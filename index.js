const express = require('express')
const app = express()
const Entrada = require('./middlewareTest')
const bodyParser =  require('body-parser')
const userApi =  require('./api/usuario')
require('./api/product')(app, ' params')

app.post('/usuario', userApi.save)
app.get('/usuario', userApi.obter)

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(Entrada('Vinicius'))

app.use('/', (req, res, next) => {
    console.log('Foi chamado...')
    next()
})

app.get('/client/relatorio', (req, res) => {
    res.send(`Client relatório: completo ${req.query.completo} ano: ${req.query.ano}`)
})

app.post('/replicar', (req, res) => {
    res.send(req.body.name)
})

app.get('/client/:id', (req, res) => {
    res.send(`Client ${req.params.id} selecionado`)
})

app.get('/', (req, res) => {
    res.json({
        id: 4584,
        nome: 'Vinicius'
    })
})

app.listen(3333, () => {
    console.log('Esta rodando...')
})