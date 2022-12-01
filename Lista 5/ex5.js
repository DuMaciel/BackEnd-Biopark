const express = require('express')
const app = express();

app.get('/', (req, res) => {
    const data = new Date();
    console.log(data)
    res.send(`<h1>Voce se conectou</h1><p>${data}</p>`)

})

app.listen(3000, () => {
    console.log("server listen to http://localhost:3000");
})