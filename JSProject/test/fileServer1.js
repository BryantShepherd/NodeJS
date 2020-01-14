const http = require('http');
const fs = require('fs');

let rawdata = fs.readFileSync('package.json');
let pkg = JSON.parse(rawdata);
console.log(pkg);

function send404(response) {
    response.writeHead(404, {'Content-type': 'text/plain'});
    response.write('There\'s literally nothing in here');
    response.end();
}
let body = [];
var server = http.createServer((request, response) => {
    if (request.method === 'GET' && request.url === '/') {
        response.writeHead(200, {'content-type': 'text/json'});
        fs.createReadStream('main/data.json').pipe(response);
    }

    if (request.method === 'POST') {
        response.writeHead(200, {"Content-Type": "application/json"});
        var otherArray = ["item1", "item2"];
        var otherObject = { item1: "item1val", item2: "item2val" };
        var json = JSON.stringify({
            anObject: otherObject,
            anArray: otherArray,
            another: "item"
        });
        request.on('data', (chunk) => {
            body.push(chunk);
        }).on('end', () => {
            body = Buffer.concat(body).toString();
            console.log(JSON.parse(body)["data"]);
            // at this point, `body` has the entire request body stored in it as a string
        });
        response.end();
        console.log('POST');
    } else {
        send404(response);
    }
});


server.listen(8888);
console.log("Server running at http://127.0.0.1:8888");