const express = require('express')
var json = require('./filmes.json');
const app = express()

app.get('/filmes/:id', function(req, res) {
    id = req.params.id;
    data = json.filmes;
    data.forEach(filme => {
        if (filme.id == id)
            res.send(filme)
    })
})
app.get('/filmes/:id/comentarios', function(req, res) {
    id = req.params.id;
    data = json.comentarios;
    ans = {};
    data.forEach(coment => {
        if (coment.id == id)
            ans.push(coment)
    })
    res.send(ans)
})
app.listen(3000)