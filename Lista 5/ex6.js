const express = require('express')
const app = express();

app.get('/', (req, res) => {
    const dados = req.query
    if (Object.keys(dados).length === 0) {
        res.send('<h1>Voce nao enviou dados</h1>')
    } else {
        res.send(dados)

    }
})

app.listen(3000, () => {
    console.log("server listen to http://localhost:3000");
})