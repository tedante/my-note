# Node Postgres

**Record**

## 1. [Node Postgres is](https://node-postgres.com/)
node-postgres is a collection of node.js modules for interfacing with your PostgreSQL database.

`node-postgres` merupakan salah satu `LIBRARY/PACKAGE/DEPENDENCIES` untuk komunikasi data ke postgres.

LIBRARY/PACKAGE/DEPENDENCIES singkatnya adalah code orang lain yang bisa kita pakai.

Sebelum mulai ke tahap 2, mulai dari sekarang hampir semua project yang kita kerjakan harus menjalankan di terminal 

```npm init``` 

dan BUAT FILE .gitignore masukan "node_modules"

## 2. [Install Node Postgres](https://node-postgres.com/)
untuk menginstall library node-postgres bisa jalankan di terminal 

```npm install pg```

or

```npm i pg```


## 3. [Connection to Database](https://node-postgres.com/features/connecting)
Lihat referensi Programmatic
```js
const { Client } = require('pg')

const client = new Client({
  user: 'dbuser',
  host: 'database.server.com',
  database: 'mydb',
  password: 'secretpassword',
  port: 3211
})

client.connect()

// code ini untuk connection testing
client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})
```
biasanya code connection ini kita letakan di folder config/connection.js

## 4. [Setup/Migration](https://www.postgresqltutorial.com/postgresql-create-table/)
Setup/migration adalah proses untuk mendefinisikan atau merubah struktur (schema) dari database.

```sql
CREATE TABLE [IF NOT EXISTS] table_name (
   column1 datatype(length) column_contraint,
   column2 datatype(length) column_contraint,
   column3 datatype(length) column_contraint,
   table_constraints
);


CREATE TABLE accounts (
	user_id serial PRIMARY KEY,
	username VARCHAR ( 50 ) UNIQUE NOT NULL,
	password VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
	created_on TIMESTAMP NOT NULL,
    last_login TIMESTAMP 
);
```
biasanya kita letakan code ini di setup.js

## 5. [Seeder](https://www.postgresqltutorial.com/postgresql-insert-multiple-rows/)
Seeder adalah proses untuk memasukan data dummy ke dalam database.

```sql 
INSERT INTO table_name (column_list)
VALUES
    (value_list_1),
    (value_list_2),
    ...
    (value_list_n);


INSERT INTO 
    links (url, name)
VALUES
    ('https://www.google.com','Google'),
    ('https://www.yahoo.com','Yahoo'),
    ('https://www.bing.com','Bing');
```

biasanya kita letakan code ini di seeder.js

# Referensi 
- https://node-postgres.com/
- https://www.postgresqltutorial.com/
- https://laravel.com/docs/8.x/migrations#introduction
- https://docs.npmjs.com/creating-a-package-json-file
