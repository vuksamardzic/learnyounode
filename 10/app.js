const http = require('http');
const fs = require('fs');

const fileToRead = process.argv[3];
const port = Number(process.argv[2]);

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' })

    const fsStream = fs.createReadStream(fileToRead);
    fsStream.pipe(res);
});

server.listen(port);