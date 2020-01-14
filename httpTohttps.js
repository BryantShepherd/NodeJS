var https = require('https');
var fs = require('fs');

var options = {
    key: fs.readFileSync("./key.pem"),
    cert: fs.readFileSync("./cert.pem")
};

https.createServer(options, (request, response) => {
    response.end("Secured!");
}).listen(443);

var http = require('http');
http.createServer((request, response) => {
    response.writeHead(301, {"Location" : "https://" + request.headers.host + request.url})
    response.end();
}).listen(80);