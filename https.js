var https = require('https');
var fs = require('fs');
var options = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
};

https.createServer(options, (req, res) => {
    res.end("Hello Client");
}).listen(8080);