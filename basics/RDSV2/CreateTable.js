const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'rdsexamples.cghqph0bt4oo.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'password',
    port: 3306,
    database: 'testdb',
});

con.connect(function (err) {
    if (err) throw err;
    console.log('Connected');

    const sql = "CREATE TABLE customers (name VARCHAR(255), email VARCHAR(255))";

    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log('Table is created');
    });
});
