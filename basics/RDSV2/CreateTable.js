const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'nodeexample.cghqph0bt4oo.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'password',
    port: 3306,
    database: 'restapi',
});

con.connect(function (err) {
    if (err) throw err;
    console.log('Connected');

    const sql = "CREATE TABLE items (id Int (3) primary key auto_increment Not Null, title VARCHAR(255), body VARCHAR(255))";

    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log('Table is created');
    });
});
