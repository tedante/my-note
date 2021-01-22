# Sequelize Intro

## 1. [Apa itu sequelize?](https://sequelize.org/v5/)

Promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.

## 2. [Install sequelize](https://sequelize.org/v5/manual/getting-started.html)
Jangan lupa, npm init dan .gitignore

Install sequelize.

commad: `npm install --save sequelize`

Install database driver. 

commad: `npm install --save pg`

## 3. [Install sequelize-cli](https://sequelize.org/master/manual/migrations.html)
Sequelize-cli adalah sebuah bantuan lagi dari sequelize, yang dapat mengenerate file2 yang nanti kita butuhkan dalam penggunaan sequlize.

commad: `npm install -D sequelize-cli`


## 4. [Initialize sequelize-cli](https://sequelize.org/v5/manual/migrations.html#installing-cli)
commad: `npx sequelize-cli init`

Init ini akan mengenerate 4 folder yaitu:

- config, contains config file, which tells CLI how to connect with database
- models, contains all models for your project
- migrations, contains all migration files
- seeders, contains all seed files

## 5. [Config sequelize](https://sequelize.org/v5/manual/migrations.html#installing-cli)
Sesuaikan credential untuk koneksi ke database ada di config/config.json.

## 6. [Help](https://sequelize.org/v5/manual/migrations.html#installing-cli)
Kalau bingung atau butuh bantuan, coba jalankan command `npx sequelize-cli help` atau lihat ke dokumentasi.

## 7. [Create database](https://sequelize.org/master/manual/migrations.html)
Buat database melalui sequelize.

commad: `npx sequelize-cli db:create`

## 8. [Generate model and migration](https://sequelize.org/v5/manual/migrations.html#creating-first-model--and-migration-)
Dengan generate model maka otomatis akan mengenerate juga migration, yang isinya adalah instruksi untuk membuat table dengan nama plural dari model beserta attributtes yang ada dalam table.

commad: `npx sequelize-cli model:generate --name User --attributes name:string,email:string,password:string,isActive:boolean`

kalau kita ingin melihat apa saja attribute yang ada di model:generate, bisa digunakan command `npx sequelize-cli model:generate --help`.  

## 9. [Running Migration](https://sequelize.org/v5/manual/migrations.html#running-migrations)
Menjalankan semua migration yang statusnya belum dijalankan.

commad: `npx sequelize-cli db:migrate`

Bisa juga mengundo migration,

command: `npx sequelize-cli db:migrate:undo:all`

## 10. [Generate seeder](https://sequelize.org/v5/manual/migrations.html#creating-first-seed)
Mengenerate file seeder.

commad: `npx sequelize-cli seed:generate --name demo-user`

## 11. [Running seeder](https://sequelize.org/v5/manual/migrations.html#running-seeds)
Menjalankan semua seeder.

commad: `npx sequelize-cli db:seed:all`

## 12. Using model
Menggunakan model yang telah di generate oleh sequelize, bisa di require index dari folder model lalu diikuti dengan nama modelnya. 

```
const { User } = require('./models/index') 
```
or
```
const User = require('./models/index').User
```

## 13. [Get data](https://sequelize.org/v5/manual/querying.html) 
Menampilkan data dari table.
```
User
    .findAll()
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })
```
more detail: https://sequelize.org/v5/class/lib/model.js~Model.html#static-method-findAll

# Referensi 
- https://sequelize.org/v5
- https://sequelize.org/v5/identifiers.html
- https://medium.com/wripolinema/sudah-kenal-sama-orm-34712e85c6fa
- https://medium.com/@Ayra_Lux/a-guide-to-orm-sequelize-c276c7b6dd18