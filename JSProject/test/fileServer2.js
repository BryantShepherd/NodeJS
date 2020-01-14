var http = require('http');
var fs = require('fs');
var path = require('path');

function send404(response) {
    response.writeHead(404, {'content-type': 'text/plain'});
    response.write("Where is everybody? :(");
    response.end();
}

var mimeLookUp = {
    ".js" : "application/javascript",
    ".html" : "text/html",
};

var server = http.createServer((request, response) => {
    if (request.method === 'GET') {
        var fileurl;
        if (request.url === '/') {
            fileurl = '/index.html';
        } else {
            fileurl = request.url;
        }
        console.log(request.url + " " + fileurl);
        var filepath = path.resolve("main" + fileurl);
        console.log(typeof filepath);
        var fileExt = path.extname(filepath);
        var mimeType = mimeLookUp[fileExt];
        if (!mimeType) {
            send404(response);
            return;
        }

        fs.exists(filepath, (exists) => {
            if (!exists) {
                send404(response);
                return;
            }
            response.writeHead(200, {'content-type': mimeType});
            fs.createReadStream(filepath).pipe(response);
        })
    }

});

server.listen(8080);
console.log("Server running on localhost:8080");