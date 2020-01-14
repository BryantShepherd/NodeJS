const http = require('http');
const mysql = require('mysql');
const nodeMailer = require('../test/mailer.js');

// create server + receive POST
let body = [];
let dataReceived;
let emailReceived;
const server = http.createServer((request, response) => {
    var url = request.url;
    if (request.method === 'POST') {
        switch(url) {
            case '/':
                console.log("POSTing...");
                processSQLRequest(request);
                break;
            default:
                send404(response);
                console.log("nothing here.");
        }
    }
});

server.listen(3000);
console.log("Listening at localhost:3000");

function processSQLRequest(request) {
    request.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        dataReceived = JSON.parse(body)["data"];
        emailReceived = JSON.parse(body)["email"];
        insertDatabase(dataReceived);
        updateByEmail(emailReceived, dataReceived);
    });
}
function insertDatabase(dataReceived) {
    var sqlInsertQuery = "insert into pet values " + dataReceived;
    var con = mysql.createConnection({
        host: "localhost",
        user: "guest",
        password: "guest",
        database: "pet"
    });
    con.query(sqlInsertQuery, (err, result) => {
        if (err) throw err;
        console.log(result);
    })
}

// TODO: send email after finish
function updateByEmail(emailReceived, dataReceived) {
    var mailOptions = {
        from: 'laituananh1711@gmail.com',
        to: emailReceived,
        subject: "Database Updated",
        text: dataReceived
    };
    nodeMailer.mail(mailOptions);
}

function send404(response) {
    response.writeHead(404, {'content-type' : 'text/html'});
    response.write("404 not found");
    response.end();
}