const http = require('http');

const server = http.createServer((req, res) => {
    res.write('CHECKA SIDAN BABY!');
    res.end();
})

server.listen(5000);