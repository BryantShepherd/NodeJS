const http = require('http');

var senderEmail = "tuananh.lai.54@gmail.com";

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var dataID = getRndInteger(20, 2000);

var data = JSON.stringify({
    email: senderEmail,
    data: `('Nana', 'dog', 'm', '2000-09-02', ${dataID})`
});
const requestOptions = {
    host: "127.0.0.1",
    path: "/",
    port: 3000,
    method: 'POST',
    header: {
        'content-type' : 'application/json',
        'content-length': data.length
    }
};
var request = http.request(requestOptions, (res) => {
    console.log("Request Created!" + res.statusCode);
    res.on('data', d => {
        process.stdout.write(d);
    })
});

request.write(data);
request.end();

console.log("POSTed");