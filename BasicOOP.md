# Basic Object Oriented Programming

**Record**

## 1. What
OOP adalah paradigma/model/konsep dalam pemrograman yang mendefinisikan desain dari software dalam bentuk OBJECT, bukan hanya dalam bentuk function dan logika saja.

## 2. Why
- Flexibility and maintainability
- Data can be hidden and cannot accessed by external code
- Simpleer to develoop and easier to understand
- New data and functions can be easily added

## 3. Class and Object

![class-instance-object](https://raw.githubusercontent.com/teddyKoerniadi/my-note/master/images/classObject.png)

`CLASS` adalah blueprint/cetakan/rancangan

`INSTANCE` adalah proses pembuatan object dari class

`OBJECT` adalah hasil instance dari class

Didalam OOP `VARIABLE` disebut juga dengan `PROPERTY` dan `FUNCTION` disebut juga dengan `METHOD`

## 4. Constructor
Constructor adalah function yang dijalankan ketika proses instance. Contructor biasanya digunakan untuk inisiasi property.

## 5. Let's Try

Kita punya sebuah smartphone yang memiliki spesifikasi
- `CPU` snapdragon 2070 
- `memory` 4GB 
- `storage` 64GB 


```js
class Smartphone {
    constructor(cpu, memory, storage) {
        this.cpu = cpu
        this.memory = memory
        this.storage = storage
    }

    bisaNyala() {}
    swipeLeft() {}
    swipeRight() {}
    showSpec() {}
}

let bambangSmartphone = new Smartphone("snapdragon 2070", "4GB", "64GB")

console.log(bambangSmartphone)
```

Alur dari pembuatan sebuah object:
![constructor](https://raw.githubusercontent.com/teddyKoerniadi/my-note/master/images/constructor.png)

## 6. [Method Chaining](https://medium.com/backticks-tildes/understanding-method-chaining-in-javascript-647a9004bd4f)
contoh method chaining: 

```js
str = "Pagi-Pagi"
console.log(str.split('').reverse().join(''))
```

Kata kunci: 

```js
return this
```

## 7. [Module Exports](https://www.tutorialsteacher.com/nodejs/nodejs-module-exports)
The module is a variable that represents the current module, and exports is an object that will be exposed as a module. So, whatever you assign to module.exports will be exposed as a module.

```js
module.exports = Smartphone
```

## 7. [fs.readFileSync](https://nodejs.org/docs/latest-v14.x/api/fs.html#fs_fs_readfilesync_path_options)
fs adalah sebuah module built in pada nodejs. Didalamnya terdapat function readFileSync yang dapat digunakan untuk membaca file.

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
- 
