const express = require('express');
const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
    host: "localhost",
    user: 'guest',
    password: 'guest',
    database: 'nodemysql'
});

//connect
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Connected");
});

const app = express();

// Create database
app.get('/createdb', (request, response) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        response.send("database created");
    })
});

// Create table
app.get('/createposttable', (request, response) => {
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id));';
    db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        response.send("POST table created");
    })
});

app.listen('3000', () => {
    console.log('Server started on port 3000');
});