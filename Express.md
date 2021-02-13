# Sequelize Intro

## 1. [Express?](https://expressjs.com/)

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

Dari sini kita bisa lihat express adalah sebuah nodejs web application framework yang menyediakan sekian banyak fitur yang bisa kita pakai.

## 2. [Framework?](https://www.niagahoster.co.id/blog/apa-itu-framework/)

Framework itu sebuah kerangka program atau mungkin bisa dibilang juga sebagai kumpulan-kumpulan kode yang bisa kita pakai fungsi-fungsinya.

## 3. [Client and Server](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview)

Secara singkat mekanisme aplikasi web itu alurnya seperti ini, pertama browser seperti chrome dll itu yang **client** akan mengirimkan permintaan (**request**), lalu ada yang memproses request dari client tersebut nanti hasilnya (**response**) akan dikirim lagi ke client, yang memproses ini disebut **server**.

![client and server](https://raw.githubusercontent.com/teddyKoerniadi/my-note/master/images/client-server.png)

## 4. [NPM init](https://docs.npmjs.com/creating-a-package-json-file)

Sebelum install express, pastikan sudah menjalankan command `npm init` di terminal. Command ini sebagai tool untuk membuat file package.json 

dalam package.json terdapat:

- list package yang ada di project
- versi spesifik dari package
- dan informasi lainnya berkaitan dengan project

## 4. [Install Express](https://expressjs.com/en/starter/installing.html)

Untuk menginstal express jalankan command `npm install express` di terminal. Tunggu sebentar hingga proses download selesai, lalu cek package.json pastikkan sudah ada express di 'depedencies'.

bentuk lain dari command install express:

```
npm i express
npm i express --save
```


## 4. [Express Basic Code](https://expressjs.com/en/starter/hello-world.html)

Buat file utama (app.js/index.js) 

```
/**
 * Import express
*/
const express = require('express') // import/require package express
const app = express() // invoke express
const port = 3000 // set port untuk dapat diakses 

/**
 * Route
*/
app.get('/', (req, res) => {
  res.send('Hello World!')
})

/**
 * listen the app / Jalankan server
*/
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```


## 4. [Route](https://expressjs.com/en/starter/basic-routing.html)

Route itu suatu titik aplikasi untuk meresponse client.
Struktur dasar route: 

```
app.METHOD(PATH, HANDLER)
``` 

Dimana:

- app is an instance of express.
- METHOD is an HTTP request method, in lowercase.
- PATH is a path on the server.
- HANDLER is the function executed when the route is matched.

Diatas tertulis ada yang namanya METHOD, method itu sebenarnya ada banyak dan akan dibahas seiring berjalannya waktu. Tapi yang paling sering dipakai itu adalah:

- GET untuk read
- POST untuk create 
- PUT/PATCH untuk update
- DELETE untuk delete

## 4. [Try to show data]


## 5. [Route Params](https://expressjs.com/en/guide/routing.html#route-parameters)

Params atau Route Parameters atau URL Segments digunakan untuk menangkap sebuah **value yang ada di URL**. Nantinya value tersebut akan dimasukan ke dalam object **req.params**.

Basic example:
```
app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
})
```

## 6. [Query String](http://expressjs.com/en/5x/api.html#req.query)

sebuah property pada di route yang ditandai dengan tanda tanya (?).

```
// GET /search?q=xiaomi
console.log(req.query.q)
// => "xiaomi"
```

# Referensi 
- https://www.hostinger.co.id/tutorial/apa-itu-npm/
- https://sequelize.org/v5/identifiers.html
- https://medium.com/wripolinema/sudah-kenal-sama-orm-34712e85c6fa
- https://medium.com/@Ayra_Lux/a-guide-to-orm-sequelize-c276c7b6dd18