# Method Chaining, readFileSync and JSON

**Record**

![posisi-middleware](https://raw.githubusercontent.com/teddyKoerniadi/my-note/master/images/posisi-middleware.png)

## 1. [Method Chaining](https://medium.com/backticks-tildes/understanding-method-chaining-in-javascript-647a9004bd4f)
"Method chaining merupakan salah satu konsep yang ada dalam paradigma OOP untuk mengikat / merantai method." - [Ahmad Oriza](https://www.codepolitan.com/belajar-method-chaining-dan-implementasinya-dalam-php-57b54c754d53b-5)

Salah satu manfaat dari method chaining adalah lebih mudah dibaca.

```js
// Tanpa chaining
class ChainAble {
  firstMethod() {
    console.log('This is the First Method');
  }
  
  secondMethod() {
    console.log('This is the Second Method');
  }
  
  thirdMethod() {
    console.log('This is the Third Method');
  }
}

const chainAbleInstance = new ChainAble()
chainAbleInstance.firstMethod();
chainAbleInstance.secondMethod();
chainAbleInstance.thirdMethod();

```

contoh penggunaan method chaining: 

```js
// Dengan chaining
const chainAbleInstance = new ChainAble()
object.firstMethod().secondMethod().thirdMethod();
```

```js
str = "Pagi-Pagi"
console.log(str.split('').reverse().join(''))
```


## `It’s all about THIS`

```js
return this
```

`'this'` mempresentasikan object instance dan keseluruhan yang ada di dalamnya.  

## 2. [fs.readFileSync](https://nodejs.org/docs/latest-v14.x/api/fs.html#fs_fs_readfilesync_path_options)
fs adalah sebuah module built in pada nodejs. Didalamnya terdapat function readFileSync yang dapat digunakan untuk membaca file.

## 3. [JavaScript Object Notation](https://www.json.org/json-en.html)
JSON (JavaScript Object Notation) is a lightweight data-interchange format. 

Sebuah format untuk pertukaran data yang dapat digunakan pada beragam bahasa pemrograman dimana setiap bahasa pemrograman memiliki cara tersendiri dalam interaksinya. 

Dibuat berdasarkan format object pada Javascript (`key: value`).

Tipe data dari value JSON:
- Boolean
- String
- Number
- Array
- Object
- Null

Contoh 1 data dalam json
```js
// file users.json
{
    "name": "Teddy Monitor",
    "email": "teddy@email.com",
    "password": "teddywadidaw",
    "isActive": true,
    "age": 20
}
```

Contoh banyak data dalam json
```js
// file users.json
[
    {
        "name": "Teddy Monitor",
        "email": "teddy@email.com",
        "password": "teddywadidaw",
        "isActive": true,
        "age": 20
    },
    {
        "name": "Alexander Zulkifli",
        "email": "alex@email.com",
        "password": "alexoranginggris",
        "isActive": true,
        "age": 20
    },
    {
        "name": "Tatang Topi",
        "email": "tatang@email.com",
        "password": "topinambahganteng",
        "isActive": false,
        "age": 20
    },
    {
        "name": "Wawan Jaya Abadi",
        "email": "wawan@email.com",
        "password": "gakwarteggakfren",
        "isActive": true,
        "age": 20
    }
]
```

# Reference:
- https://www.petanikode.com/java-oop/
- https://www.freecodecamp.org/news/object-oriented-programming-concepts-21bb035f7260/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/
- https://medium.com/backticks-tildes/understanding-method-chaining-in-javascript-647a9004bd4f
- https://www.tutorialspoint.com/method-chaining-in-javascript
- https://nodejs.org/api/fs.html
- https://www.youtube.com/playlist?list=PLCZlgfAG0GXAiH1acKFPx8EtpJAq44gjPd
- https://dev.to/samanthaming/3-ways-to-set-default-value-in-javascript-2253
- https://www.tutorialsteacher.com/nodejs/nodejs-module-exports
- https://nodejs.org/docs/latest-v14.x/api/fs.html#fs_file_system
- https://www.codepolitan.com/belajar-method-chaining-dan-implementasinya-dalam-php-57b54c754d53b-5
- https://www.youtube.com/watch?v=EluVFXu4GOU