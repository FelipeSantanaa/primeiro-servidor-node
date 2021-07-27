const http = require('http')

http.createServer((req, res) => {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        })
        res.end('Servidor funcionando redondinho!')
    }).listen(3000, 'localhost', () => console.log('O servidor está rodando...'))