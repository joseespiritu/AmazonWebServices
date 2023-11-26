const express = require('express');
const mysql = require('mysql');
require('dotenv').config();

const app = express();

app.use(express.json({ limit: '10kb' }));

const conn = mysql.createConnection({
    host: process.env.RDS_HOST,
    user: process.env.RDS_USER,
    password: process.env.RDS_PASSWORD,
    database: 'restapi'
});

conn.connect((err) => {
    if (err) throw err;
    console.log('Database is connected to app');
});

app.get('/api/items/:id', (req, res) => {
    const { id } = req.params;
    let sql = `SELECT * FROM items WHERE id=${id}`;

    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        return apiResponse(res, results);
    });
});

app.get('/api/items', (req, res) => {
    let sql = "SELECT * FROM items";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        return apiResponse(res, results);
    });
});

app.post('/api/items', (req, res) => {
    const { title, body } = req.body;

    const sql = "INSERT INTO items SET ?";

    let query = conn.query(sql, { title, body }, (err, results) => {
        if (err) throw err;
        return apiResponse(res, results);
    });
});

app.put('/api/items/:id', (req, res) => {
    const { id } = req.params;
    const { title, body } = req.body;

    let sql = `UPDATE items SET title='${title}', body='${body}' WHERE id=${id}`;

    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        return apiResponse(res, results);
    });
});

app.delete('/api/items/:id', (req, res) => {
    const { id } = req.params;
    let sql = `DELETE FROM items WHERE id=${id}`;

    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        return apiResponse(res, results);
    });
});

function apiResponse(res, results) {
    return res.json({
        status: 'success',
        data: results
    });
}

app.listen(3000, () => {
    console.log('Server started');
});