const { Client } = require('pg');

const client = new Client({
    host: 'pgdb.cghqph0bt4oo.us-east-1.rds.amazonaws.com',
    user: 'postgres',
    password: 'password',
    database: 'pgdatabase',
    port: 5432,
    ssl: { sslmode: 'require', rejectUnauthorized: false }
});

const insertData = () => {
    client.connect();
    client.query("INSERT INTO Employee (ID, NAME, EMAIL) VALUES ('2', 'jhon', 'jhon@email.com')", (err, result) => {
        if (!err) {
            console.log(result);
        } else {
            console.log(err);
        }
        client.end();
    });
};

insertData();
