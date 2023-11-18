const { Client } = require('pg');

const client = new Client({
    host: 'pgdb.cghqph0bt4oo.us-east-1.rds.amazonaws.com',
    user: 'postgres',
    password: 'password',
    database: 'pgdatabase',
    port: 5432,
    ssl: { sslmode: 'require', rejectUnauthorized: false }
});

const selectData = () => {
    client.connect();
    client.query("SELECT * FROM Employee", (err, result) => {
        if (!err) {
            console.log(result.rows);
        } else {
            console.log('Unable to get data', err);
        }
        client.end();
    });
};

selectData();
