const { Client } = require('pg');

const client = new Client({
    host: 'pgdb.cghqph0bt4oo.us-east-1.rds.amazonaws.com',
    user: 'postgres',
    password: 'password',
    port: 5432,
    ssl: { sslmode: 'require', rejectUnauthorized: false }
});

const createDatabase = () => {
    client.connect();
    client.query("CREATE DATABASE pgdatabase", (err, result) => {
        if (!err) {
            console.log(result);
        } else {
            console.log(err, err.stack);
        }
        client.end();
    });
};

createDatabase();
