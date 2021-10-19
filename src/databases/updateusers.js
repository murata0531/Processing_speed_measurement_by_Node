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

    let data = "user";

    connection.query(
        'SELECT * FROM users',
        (error, select_results) => {
            for (let i in select_results) {
                console.log(select_results[i].id);
                connection.query(
                    'UPDATE users SET username =  ? WHERE id = ?',
                    [data,select_results[i].id],(error, update_results) => {
                        //本来なら同期処理をするべきだが、promiseを無視してくるため、無理矢理
                        if(i == select_results.length - 1){
                            connection.end();
                            let end = performance.now() - start;
                            console.log((end/1000) + "[sec]");
                        }
                    }
                );
            }
        }
    );
});
