const http = require('http');
const url = require('url');
const fs = require('fs');
const mail = require('./mailer.js');

http.createServer((request, response) => {
    var q = url.parse(request.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function (err, data) {
        if (err) {
            response.writeHead(404, {'content-type': 'text/html'});
            return response.end('404 not found');
        }
        response.writeHead(200, {'content-type': 'text/html'});
        response.write(data);
        return response.end();
    })
}).listen(8080);

mail.mail();