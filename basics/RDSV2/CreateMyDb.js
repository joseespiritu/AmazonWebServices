const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'rdsexamples.cghqph0bt4oo.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'password',
    port: 3306
});

con.connect(function (err) {
    if (err) throw err;
    console.log('Connected');

    con.query("CREATE DATABASE testdb", function (err, result) {
        if (err) throw err;
        console.log('Database is created');
    })
});
