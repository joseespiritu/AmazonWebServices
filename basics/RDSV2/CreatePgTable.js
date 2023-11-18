const { Client } = require('pg');

const client = new Client({
    host: 'pgdb.cghqph0bt4oo.us-east-1.rds.amazonaws.com',
    user: 'postgres',
    password: 'password',
    database: 'pgdatabase',
    port: 5432,
    ssl: { sslmode: 'require', rejectUnauthorized: false }
});

const createTable = () => {
    client.connect();
    client.query("CREATE TABLE Employee (ID INT PRIMARY KEY NOT NULL, NAME TEXT NOT NULL, EMAIL TEXT NOT NULL)", (err, result) => {
        if (!err) {
            console.log(result);
        } else {
            console.log(err);
        }
        client.end();
    });
};

createTable();
