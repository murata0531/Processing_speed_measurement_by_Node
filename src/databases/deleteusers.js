const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.static('public'));

const connection = mysql.createConnection({
  host: 'mysql',
  port: 3306,
  user: 'root',
  password: 'test',
  database: 'test'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Connected');

    let start = performance.now();

    connection.query(
        'DELETE FROM users',
        (error, results) => {
            console.log(results);
            connection.end();
            let end = performance.now() - start;
            console.log((end/1000) + "[sec]");
        }
    );
});
