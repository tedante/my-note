
# MVC Callback 

## 1. [MVC ?](https://www.tutorialspoint.com/mvc_framework/mvc_framework_introduction.htm)

Model View Controller or MVC is an architectural pattern that separates an application into three main logical components. Each of these components are built to handle specific development aspects of an application. MVC is one of the most frequently used industry-standard web development framework to create scalable and extensible projects.

**Model** adalah bagian yang berhubungan dengan komunikasi data dari aplikasi kita ke sumber datanya (contoh sumber data: file json, file csv, database, dll).

**View** adalah bagian yang berhubungan dengan tampilan atau user interface.

**Controller** adalah bagian yang menghubungkan atau mengkomunikasikan antara model dan view.


![flow MVC](https://miro.medium.com/max/700/1*hTlpGXMh9EFefBIT9NrTDQ.png)


## 2. [Callback](https://www.w3schools.com/js/js_callback.asp)

**"I will call back later!"**

A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished


## 3. Buat folder models, views, dan controllers

Membuat aplikasi untuk memanipulasi data buku, termasuk didalamnya CRUD 


## 4. Buat file induk atau utama (index atau app)


## 5. Buat command help

Bagusnya setiap kita bikin aplikasi bikin dulu bagian atau perintah "help" supaya orang lain yang mau pakai aplikasi itu jelas bisa ngapain aja dan sebagainya.

## 6. Buat file controller

`'JANGAN LUPA module.exports PAKAI ES'`


## 7. Require/Import controller 

## 8. Buat file view

## 9. Buat command lain

- Setiap kita akan menambah command maka buat dulu commandnya di file utama
- Buat fungsinya di controller
- Buat fungsi di model data yang bersangkutan untuk fungsi baru ini
- Panggil fungsi modelnya di controller
- Pastikan data yang kita inginkan sudah benar
- Buat view
- Hubungkan controller ke view



## ! Important Notes !
- module.exports PAKAI ES
- Pahami Alur MVC dan Callback-nya
- console.log disetiap buat sesuatu yang baru untuk memastikan bahwa semuanya aman
- Terus latihan, bisa karena terbiasa jadi biasakan

# Referensi

- https://www.tutorialsteacher.com/mvc/mvc-architecture#:~:text=MVC%20stands%20for%20Model%2C%20View,data%20retrieved%20from%20the%20database.
- https://www.tutorialspoint.com/mvc_framework/mvc_framework_introduction.htm
- https://jagongoding.com/web/memahami-konsep-mvc/
- https://medium.com/@rhodunda/mvc-design-pattern-fe76175a01de
- https://www.w3schools.com/js/js_callback.asp
- https://www.freecodecamp.org/news/javascript-callback-functions-what-are-callbacks-in-js-and-how-to-use-them/

- https://www.youtube.com/watch?v=wQ3nXy4Ho5I
- https://www.youtube.com/watch?v=PoRJizFvM7s
- https://www.youtube.com/watch?v=qtfi4-8dj9c
