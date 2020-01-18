const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "guest",
    password: "guest",
    database: "customers"
});

con.query("SELECT * FROM customers where name regexp 'er$'", (err, result) => {
    if (err) throw err;
    console.log(result[0]);
});
