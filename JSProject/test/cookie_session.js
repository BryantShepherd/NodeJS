const express = require('express');
const cookieSession = require('cookie-session');

var app = express()
.use(cookieSession({
    keys: ['my secret key']
}))
.use('/home', function(req, res) {
    if (req.session.views) {
        req.session.views++;
    } else {
        req.session.views = 1;
    }
    res.end("Total views: " + req.session.views);
})
.use('/reset', function(req, res) {
    delete req.session.views;
    res.end('Cleared all your views');
})
.listen(3000);