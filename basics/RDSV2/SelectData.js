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
    console.log('Conected');

    con.query("SELECT * FROM customers", function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});
