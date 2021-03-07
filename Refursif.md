# Rekursif (Recursive)

## 1. [Apa itu rekursif?](https://developer.mozilla.org/en-US/docs/Glossary/Recursion)

rekursif intinya adalah sebuah fungsi yang didalamnya itu memanggil dirinya sendiri. rekursif memiliki input yang nantinya dapat menjadi 2 kondisi yaitu base case (ends recursion) dan recursive case (resume recursion) 

## 2. [Kenapa kita perlu paham rekursif](https://rizafahmi.com/2020/03/26/rekursif-atau-recursion/)

rekursif adalah salah satu pengetahuan fundamental yang sangat diharapkan dikuasai oleh developer. Dan yang tidak kalah penting adalah banyak sekali algoritma diluar sana yang menggunakan rekursif sehingga dengan memahaminya, secara tidak langsung kita bisa mengerti algoritma yang menggunakan rekursif.

Namun sebenarnya pun tanpa rekursif pun kita bisa saja menggunakan perulangan untuk menciptakan solusi yang sama. Akan tetapi setidaknya kita mengerti cara kerja rekursif.

## 3. Contoh perbedaan looping dengan rekursif

Penghitung mundur dengan looping 
```js
function countdown(number) {
    for(let i = number; i >= 0; i--) {
        console.log(i)
    }
}

countdown(10)
```
Penghitung mundur dengan rekursif 
```js
function countdown(number) {
    console.log(number)

    if (number <= 0) {
        return;
    } else {
        countdown(number - 1)
    }
}

countdown(10)
```

## 4. Cara kerja
Contoh 1:

![example2](https://raw.githubusercontent.com/teddyKoerniadi/my-note/master/images/stack_tracing_recursion.png)


Contoh 2:

![example1](https://raw.githubusercontent.com/teddyKoerniadi/my-note/master/images/recursion.png)

# Referensi 
- https://developer.mozilla.org/en-US/docs/Glossary/Recursion
- https://rizafahmi.com/2020/03/26/rekursif-atau-recursion
- https://www.youtube.com/watch?v=B0NtAFf4bvU
- https://www.youtube.com/watch?v=-JV_YbJR1GY
