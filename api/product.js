module.exports = (app, text) => {
    function save(req,res) {
        res.send('Product > save' + text)
    }

    function take(req,res) {
        res.send('Product > save' + text)
    }

    app.post('/product', save)
    app.get('/product', take)
}