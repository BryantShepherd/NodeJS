var https = require('https');
var fs = require('fs');

var options = {
    key: fs.readFileSync("./key.pem"),
    cert: fs.readFileSync("./cert.pem")
};

var connect = require('connect');

https.createServer(options, connect).listen(8080);