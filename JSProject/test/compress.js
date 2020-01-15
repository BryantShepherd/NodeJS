const express = require('express');
const compress = require('compression');

const app = express();

app.use(compress())
.use(express.static(__dirname + '/public'))
.listen(3000);

