# Processing_speed_measurement_by_Node

Node.jsで処理速度を測るリポジトリ

単純な計算やデータベースアクセスの速度を測る

環境

Express



コンテナ作成

```
$ docker-compose up -d --build
```

コンテナとイメージ破棄

```
$ docker-compose down --rmi all --volumes --remove-orphans
```

各種コンテナに入る

```
appコンテナ：ここでNode.jsを動かしている
$ docker-compose exec app bash
```

```
mysqlコンテナ：ここでmysqlを動かしている
$ docker-compose exec mysql bash
```

構築

ルートの ` app.env.example ` をコピーして ` app.env ` ファイルを、

mysqlディレクトリにある ` mysql.env.example ` をコピーして　` mysql.env` ファイルを

それぞれ作成する


```
$ docker-compose exec app bash
```

```
bash# npm install
```

年率計算

```
bash# node calc.js
```

ライプニッツ級数で円周率を求める

```
bash# Leibniz.js
```

CRUD操作

```
bash# cd databases

bash# node create_table.js

bash# node createusers.js

bash# node selectusers.js

bash# node updateusers.js

bash# node deleteusers.js
```