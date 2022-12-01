const express = require('express')
const app = express();

app.get('/', (req, res) => {
    console.log("Alguem se conectou!")
    res.send("<h1>Voce se conectou</h1>")

})

app.listen(3000, () => {
    console.log("server listen to http://localhost:3000");
})