# Middleware, Session and Bcrypt

**Record**

## 1. [Middleware](https://expressjs.com/en/guide/writing-middleware.html)

Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle.

![posisi-middleware](https://raw.githubusercontent.com/teddyKoerniadi/my-note/master/images/posisi-middleware.png)

Secara gampangnya middleware itu function yang ada di tengah-tengah antara request dari user dan handlernya, cirinya function middleware adalah di parameternya ada req, res, dan next.

Kita sebenarnya sudah mengunakan middleware seperti ketika express.urlencoded dan membuat Router modular.

Tapi sekarang kita akan membuat middleware sendiri.

[Example 1](https://expressjs.com/en/guide/routing.html#route-handlers):
```js
app.get('/example/b', function (req, res, next) {
  console.log('the response will be sent by the next function ...')
  next()
}, function (req, res) {
  res.send('Hello from B!')
})
```

Dalam middleware itu bukan hanya log saja tapi bisa berisi apa saja sesuai dengan keinginan kita, karena dia itu function. 

Salah satu implementasi middleware adalah misalnya kita mau ada pengecekan jika user itu sudah login atau belum, jika dia sudah login maka bisa mengakses "/post" tapi jika belum login maka arahkan ke halaman login.

Example 2:
```js
const express = require('express')
const app = express()

// ini adalah middleware
// ============================
const isLogin = function (req, res, next) {
  console.log('LOGGED')
  next() // THE KEY
}
// ============================

// kita pakai middleware ke route di bawahnya
// ============================
app.use(isLogin)
// ============================

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000)
```

Or

```js
const express = require('express')
const app = express()

// ini adalah middleware
// ============================
const isLogin = function (req, res, next) {
  console.log('LOGGED')
  next() // THE KEY
}
// ============================

// kita pakai middleware di route satuan
app.get('/', isLogin, function (req, res) {
  res.send('Hello World!')
})

app.listen(3000)
```

Example 3:
```js
// ini adalah middleware
// ============================
const isLoginMiddleware = function (req, res, next) {
  console.log(req.body.isLogin)
  if(req.body.isLogin) {
    next()
  } else {
    res.redirect("/login")
  }
}
// ============================
```

## 2. [Session](https://www.npmjs.com/package/express-session)

Session sesuatu yang memungkinkan kita untuk menyimpan data secara sementara di server. 
Data akan tersedia pada semua halaman walaupun kita pindah route.

`DATA SESSION DISINI BUKAN UNTUK DISIMPAN KE DATABASE TAPI SEBAGAI SEBUAH TANDA`

Jadi beda penggunaannya antara data di session dengan data di database.

## 3. [Install express-session](https://www.npmjs.com/package/express-session)

perintah untuk menginstall express session

```
npm install express-session
```

Cara menggunakan session di aplikasi
```js
// codingan lain

const session = require('express-session')

app.use(session({
    secret: 'antara aku engkau dan code',
    resave: false,
    saveUninitialized: true,
}))
```
Ketika kita meng-use session maka ada minimal 3 hal yang kita butuhkan yaitu:
1. secret
2. resave
3. saveUninitialized

Kita tidak akan membahas tentang apa saja maksudnya dari hal-hal yang ada disession, kita akan coba fokus ke penggunaannya.

## 4. [Penggunaan Session](https://www.npmjs.com/package/express-session)

Untuk mengakses atau men-set session kita bisa menggunakan `req.session` 

Contoh penggunaan sederhana:
```js
app.get('/', function(req, res){
   if(req.session.page_views){
      req.session.page_views++;
      res.send("You visited this page " + req.session.page_views + " times");
   } else {
      req.session.page_views = 1;
      res.send("Welcome to this page for the first time!");
   }
});
```

## 5. [Destroy Session](https://www.npmjs.com/package/express-session)

Untuk menghapus atau men-destroy session yang ada maka bisa menggunakan `req.session.destroy()` 

```js
req.session.destroy()
```

## 6. [BcryptJS](https://www.npmjs.com/package/bcryptjs)

Library/Package ini digunakan untuk melakukan hashing.

Perintah untuk meng-install bcryptjs
```
npm i bcryptjs
```

## 7. [Password Hashing with BcryptJS (Sync) ](https://www.npmjs.com/package/bcryptjs)

```js
let bcrypt = require('bcryptjs');
let salt = bcrypt.genSaltSync(10);
let hash = bcrypt.hashSync("B4c0/\/", salt);
// Store hash in your password DB.
```

## 8. [Password Hashing with BcryptJS (Sync) ](https://www.npmjs.com/package/bcryptjs)
```
// Load hash from your password DB.
bcrypt.compareSync("B4c0/\/", hash); // true
bcrypt.compareSync("not_bacon", hash); // false
```


# Referensi 
- https://expressjs.com/en/guide/using-middleware.html
- https://developer.okta.com/blog/2018/09/13/build-and-understand-express-middleware-through-examples
- https://www.npmjs.com/package/express-session
- https://github.com/expressjs/session#store
- https://auth0.com/blog/hashing-in-action-understanding-bcrypt/
- 
- 
