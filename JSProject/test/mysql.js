var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "guest",
    password : "guest",
    database: "pet"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected");
    var sqlQuery = 'insert into pet values ?';
    var values = [
        ['Katy', 'hamster', 'f', '2010-02-01', 14],
        ['Leroy', 'hamster', 'm', '2015-09-16', 11]
    ];
    con.query(sqlQuery, [values],(err, result) => {
        if (err) throw err;
        console.log(result);
    });
});