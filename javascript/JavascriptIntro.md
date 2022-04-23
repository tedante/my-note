# Conditional and Primitive Data Type

## 1. Data Type Test
```js
console.log(5)
console.log("Emeizing")
console.log("5")
console.log("this is "5"")
console.log("this is '5'")
console.log(true)
console.log(null)
```

```js
console.log(typeof 5)
console.log(typeof "Emeizing")
console.log(typeof "5")
console.log(typeof "this is '5'")
console.log(typeof true)
console.log(typeof null)
```

## 2. Variable
```js
console.log("Nama saya adalah Juned")
console.log("Juned lahir di bandung")
console.log("Juned lahr pada tahun 1997")
console.log("Juned memiliki 2 saudara")
```

Disini kita lihat juned dipanggil berkali-kali, supaya lebih efisien maka kita gunakan variable.

```js
// Declaration
var bucket 

// Assignment
bucket = data

// Re-assignment
bucket = data
```

```js
// Declaration + Assignment
var bucket = data
```

```js
// Error
var bucket
var bucket = data
```

Kita akan mengganti "Juned" dengan sebuah variable
```js
var name = 'Juned'
console.log("Nama saya adalah " + name)
console.log(name + " lahir di bandung")
console.log(name + " lahr pada tahun 1997")
console.log(name + " memiliki 2 saudara")
```

'Style' penamaan variable:
- camelCase
- snake_case
- PascalCase
- kebab-case (tidak bisa digunakan di javascript)

Jika mereferensi ke [w3schools](https://www.w3schools.com/js/js_conventions.asp), penamaan variable di javascript menggunakan camelCase.


## 3. [Mathematical Operations](https://www.w3schools.com/js/js_arithmetic.asp)
```
+ Addition
- Subtraction   
* Multiplication  
/ Multiplication  
% Modulus (Remainder)
```

```js
console.log(2 + 3)
console.log(6 - 3)
console.log(2 * 3)
console.log(10 / 2)
console.log(10 % 2)
```

Watch out for doing math operation to non numbers!

Try 5 * ‘hello’ or true / 8!


```js
console.log("hello" * 8)
console.log(true / 2)
console.log("Hello" + 8)
console.log("Hello" - 8)
console.log(true + 8)
```

## 4. [Comparison Operations](https://www.w3schools.com/js/js_operators.asp)
```
==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
```

```js
console.log(2 == "2")
console.log(2 === "2")
console.log(2 !== "2")
console.log("Andi" === "Budi")

console.log(2 > 3)
console.log(3 < 3)
console.log(3 <= 3)
```

## 5. [Logical Operations](https://www.w3schools.com/js/js_arithmetic.asp)
```
&&	logical and
||	logical or
!	logical not
```


## 6. [Conditional](https://www.w3schools.com/js/js_arithmetic.asp)
```js
/**
 * Bentuk dasar
 */
 if(true) {
    console.log("+ this block will be executed if true")
 } else {
    console.log("- this block will be executed")
 }
```

```js
var umur = 15

// 1 Kondisi
if(umur >= 17) {
    console.log("sudah memiliki ktp")
}
```

```js
var umur = 15

// 2 Kondisi
if(umur >= 17) {
    console.log("sudah memiliki ktp")
} else {
    console.log("belum memiliki ktp")
}
```

```js
var rating = 3 // 1 - 10

// > 2 Kondisi
if(rating <= 5) {
    console.log("Not good")
} else if (rating <= 8) {
    console.log("Good")
} else {
    console.log("Really Good, Emeizing")
}
```


conditional with logical operator

```js
var umur = 15

if(umur > 0 && umur <= 16) {
    console.log("belum memiliki ktp")
} else {
    console.log("sudah memiliki ktp")
}
```


```js
var umur = 17

// negasi
if(!true) {
    console.log("negasi")
}

// more negasi
if(!umur >= 17) {
    console.log("sudah memiliki ktp")
} else {
    console.log("belum memiliki ktp")
}

// something wrong ?
if(umur > 0 || umur <= 16) {
    console.log("belum memiliki ktp")
} else {
    console.log("sudah memiliki ktp")
}
```

## 6. [Truthy Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

# Referensi 
- https://www.w3schools.com/js/js_const.asp
- https://www.w3schools.com/js/js_let.asp
- https://www.w3schools.com/js/js_conventions.asp
- https://developer.mozilla.org/en-US/docs/Glossary/Falsy
- https://developer.mozilla.org/en-US/docs/Glossary/Truthy
- https://developer.mozilla.org/en-US/docs/Web/API/Console/log
- https://2ality.com/2012/09/expressions-vs-statements.html