const http = require('http');

const server = http.createServer((req, res) => {

    console.log("Alguem se conectou!")
    res.write("<h1>Voce se conectou</h1>")
    res.end("<p>Ate mais!</p>")
})

server.listen(3000, () => {
    console.log("server listen to http://localhost:3000");
})