const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url
    console.log("Alguem se conectou!")

    res.write(`<h1>Voce se conectou na url:${url}</h1>`)
    res.end("<p>Ate mais!</p>")
})

server.listen(3000, () => {
    console.log("server listen to http://localhost:3000");
})