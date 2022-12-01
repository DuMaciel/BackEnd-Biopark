const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url
    switch (url) {
        case '/usuario':
            res.end('<h1 align="center">Voce se conectou na base de dados de usuario</h1>')
            break
        case '/produto':
            res.end('<h1 align="center">Voce vai cadastrar um novo produto</h1>')
            break
        default:
            res.statusCode = 404;
            res.end('<h1 align="center">Essa pagina nao existe</h1><p align="center">error 404</p>')
    }
})

server.listen(3000, () => {
    console.log("server listen to http://localhost:3000");
})