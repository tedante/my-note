# Rekursi (Recursion)

## 1. [Apa itu rekursi?](https://developer.mozilla.org/en-US/docs/Glossary/Recursion)

Rekursi intinya adalah sebuah fungsi yang didalamnya itu memanggil dirinya sendiri. Rekursi memiliki input yang nantinya dapat menjadi 2 kondisi yaitu base case (ends recursion) dan recursive case (resume recursion) 

## 2. [Kenapa kita perlu paham rekursi](https://rizafahmi.com/2020/03/26/rekursi-atau-recursion/)

rekursi adalah salah satu pengetahuan fundamental yang sangat diharapkan dikuasai oleh developer. Dan yang tidak kalah penting adalah banyak sekali algoritma diluar sana yang menggunakan rekursi sehingga dengan memahaminya, secara tidak langsung kita bisa mengerti algoritma yang menggunakan rekursi.

Namun sebenarnya pun tanpa rekursi pun kita bisa saja menggunakan perulangan untuk menciptakan solusi yang sama. Akan tetapi setidaknya kita mengerti cara kerja rekursi.

## 3. Contoh perbedaan looping dengan rekursi

Penghitung mundur dengan looping 
```
function countdown(number) {
    for(let i = number; i >= 0; i++) {
        console.log(i)
    }
}

countdown(10)
```
Penghitung mundur dengan rekursi 
```
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

## 4. [Detail cara kerja](https://rizafahmi.com/2020/03/26/rekursi-atau-recursion/)

![example1](https://raw.githubusercontent.com/teddyKoerniadi/my-note/master/images/recursion.png)

![example2](https://raw.githubusercontent.com/teddyKoerniadi/my-note/master/images/stack_tracing_recursion.png)

# Referensi 
- https://sequelize.org/v5/manual/hooks.html