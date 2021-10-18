const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.static('public'));

// データベース接続情報
const connection = mysql.createConnection({
  host: 'mysql',
  port: 3306,
  user: 'root',
  password: 'test',
  database: 'test'
});

// データベースに接続できたらコンソールにConnectedを表示
connection.connect(function(err) {
  if (err) throw err;
  console.log('Connected');
  const sql = 'CREATE TABLE users (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, username VARCHAR(255))';
    connection.query(sql, function (err, result) {  
    if (err) throw err;  
  console.log('table created');  
  });
});

app.listen(3000);