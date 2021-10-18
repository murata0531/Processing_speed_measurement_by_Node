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
dbコンテナ：ここでmysqlを動かしている
$ docker-compose exec mysql bash
```

構築

```
$ docker-compose exec app bash
```

```
bash# cp .env.example .env
```

```
bash# composer install

bash# php artisan key:generate

```

年率計算

```
bash# php artisan calc
```

CRUD操作

```
bash# php artisan createusers

bash# php artisan selectusers

bash# php artisan updateusers

bash# php artisan deleteusers
# 注意

.envファイルの ` DB_HOST ` の項目は ` db ` にする

mysqlのユーザやパスワードは ` mysql/Dockerfile ` に記述してある