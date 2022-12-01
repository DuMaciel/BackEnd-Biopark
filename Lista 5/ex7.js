const express = require('express')
const app = express();
const fs = require('fs')

app.get('/', (req, res) => {
    const html = fs.readFileSync('index.html').toString()
    res.send(html)
})

app.get('/dados', (req, res) => {
    const dados = req.query
    if (Object.keys(dados).length === 0) {
        res.send('<h1>Voce nao enviou dados</h1>')
    } else {
        const string = escrever(dados)
        res.send(string)
    }
})

app.listen(3000, () => {
    console.log("server listen to http://localhost:3000");
})

function escrever(obj) {
    return `Seu nome é ${obj.nome}, sua idade é ${obj.idade} anos e você mora em ${obj.cidade}`
}