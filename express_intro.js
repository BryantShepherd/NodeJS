const express = require('express');

var app = express();

app.get('/users/:userId', (request, response) => {
    response.send(request.params);
})

app.listen(8888);