const http = require('http')

// const server = http.createServer((req, res) => {
//     res.end("Welcome")
// });

//Using emitter apis

const server = http.createServer()

server.on('request', (req, res) => {
    res.end('welcome');
})

server.listen(50000)