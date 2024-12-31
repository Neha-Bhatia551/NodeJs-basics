const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url==='/') {
        res.end('This is our homepage');
    } 
    else if(req.url==='/about') {
        res.end('Here is about us section')
    } else {
    res.end(`
        <h1>Oops!</h1>
        <p>We cant seem to find the page you are looking for</p> 
        <a href='/'>backhome</a>`)}
});

server.listen(50000);