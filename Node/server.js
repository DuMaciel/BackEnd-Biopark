const { response } = require('express');
const express = require('express');
const fs = require('fs');
const app = express();



app.get('/users', (req, res) => {
    const dados = getDados(0);
    res.send(dados)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const dado = getDados(id);
    res.send(dado)
})

app.listen(3000, () => {
    console.log('teste')
})


function getDados(id = 0) {
    const dados = JSON.parse(fs.readFileSync('./db.json'));
    if (id === 0) { return dados; }
    const dado = dados.filter(dado => dado.id == id);

    if (!dado.length) { return 'Usuario não existe!' }
    return dado;
}