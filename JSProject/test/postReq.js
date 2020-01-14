const http = require('http');

// data
const data =  JSON.stringify({
    data: "Nothing to do really."
});
// generate option object
const option = {
    host: '127.0.0.1',
    port: 8888,
    path: '/',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'content-length': data.length
    }
};

// https.request
const req = http.request(option, (res) =>{
    console.log(`statusCode: ${res.statusCode}`);
    res.on('data', d => {
        process.stdout.write(d);
    })
});

req.on('error', (error) => {
    console.error(error);
});

req.write(data);
req.end();