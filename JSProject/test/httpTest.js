var http = require('http');
var url = require('url');
var numberOfReqs = 0;
var server = http.createServer(function(request, response) {
    console.log(request.url);
    numberOfReqs++;
    response.setHeader('Content-Type', 'application/json');
    console.log(response.getHeader('content-type'));
    // console.log(url);
    // console.log(url.parse(request.url, true));
    const q = url.parse(request.url, true).query;
    // console.log(q);
    // console.log(request.url);
    const txt = q.year + " " + q.month;
    response.write("{'a': 1, 'b': 2}");
    response.end(txt);
});

server.listen(3000);
console.log("running at http://127.0.0.1:3000/?year=2017&month=July");