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

    for (let i = 0; i < 100; i++) {
        let data = {
            username: "user" + i
        };
        connection.query(
            'INSERT INTO users SET ?',
            [data],(error, results) => {
                console.log(data.username);
                //本来なら同期処理をするべきだが、promiseを無視してくるため、無理矢理
                if(i == 99){
                    connection.end();
                    let end = performance.now() - start;
                    console.log((end/1000) + "[sec]");
                }
            }
        );
    }
});
