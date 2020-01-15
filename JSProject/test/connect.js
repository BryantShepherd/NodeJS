const connect = require('connect');
const http = require('http');
const uuid = require('uuid/v4');
var app = connect();

// http.createServer(app).listen(3000);
console.log('server running on port 3000');
console.log(uuid().slice(0, 6));