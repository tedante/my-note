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
- https://www.codepolitan.com/belajar-method-chaining-dan-implementasinya-dalam-php-57b54c754d53b-5