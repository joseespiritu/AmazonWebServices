const { Client } = require('pg');

const client = new Client({
    host: 'pgdb.cghqph0bt4oo.us-east-1.rds.amazonaws.com',
    user: 'postgres',
    password: 'password',
    database: 'pgdatabase',
    port: 5432,
    ssl: { sslmode: 'require', rejectUnauthorized: false }
});

const updateData = () => {
    client.connect();
    client.query("UPDATE Employee SET EMAIL='updated@email.com' WHERE id=2", (err, result) => {
        if (!err) {
            console.log(result);
        } else {
            console.log(err);
        }
        client.end();
    });
};

updateData();
