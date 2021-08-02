# Rekursif (Recursive)

## 1. [Function](https://developer.mozilla.org/en-US/docs/Glossary/Recursion)

Secara sederhana, function adalah kode program yang dirancang untuk menyelesaikan sebuah tugas tertentu yang bisa dipanggil berulang kali.

Function itu bisa return sebuah value atau menampilkan value.

```js
function cookIndomie(variant) {
    return "cook indomie " + variant + " selesai"
}

cookIndome("Goreng Kuah Soto") // or
console.log(cookIndome("Goreng Kuah Soto"))
```

```js
function cookIndomie(variant) {
    console.log("cook indomie " + variant + " selesai")
}

cookIndome("Goreng Kuah Soto")
```

Ketika membuat function perhatikan mau dipanggilnya seperti apa atau mekanisme outpusnya seperti apa.

## 2. [Apa itu function rekursif?](https://developer.mozilla.org/en-US/docs/Glossary/Recursion)

rekursif intinya adalah sebuah fungsi yang didalamnya itu memanggil dirinya sendiri. 

Function:
![one to one](./img/writing-function.png)

Fucntion Recursive:
![one to one](./img/recursive.png)

rekursif memiliki 2 kondisi yaitu base case (end recursion) dan recursive case (resume recursion).

## 2. [Kenapa kita perlu paham rekursif](https://rizafahmi.com/2020/03/26/rekursif-atau-recursion/)

rekursif adalah salah satu pengetahuan fundamental yang sangat diharapkan dikuasai oleh developer. Dan yang tidak kalah penting adalah banyak algoritma diluar sana yang menggunakan rekursif.

Secara umum semua kasus yang bisa selesai menggunakan looping maka bisa juga menggunakan rekursif, tapi tidak secara sebaliknya.
- Pencarian data dalam struktur data list dan tree
- Bahasa pemrograman yang tidak memiliki looping (Haskell, Erlang, Proglog)

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

    if (number == 0) {
        return;
    } 
    
    countdown(number - 1)
    
}

countdown(10)
```

Contoh lain:
1. Tambah angka 
2. Faktorial
3. Translate num string 
    - 1 -> A
    - 2 -> B
    - 3 -> C
    - 4 -> D
    - 5 -> E
    - 6 -> F
    - 7 -> G
    - 8 -> H
    - 9 -> I


# Referensi 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
- https://www.duniailkom.com/tutorial-belajar-java-pengertian-function-fungsi-bahasa-java/
- https://developer.mozilla.org/en-US/docs/Glossary/Recursion
- https://rizafahmi.com/2020/03/26/rekursif-atau-recursion
- https://www.youtube.com/watch?v=B0NtAFf4bvU
- https://www.youtube.com/watch?v=-JV_YbJR1GY
- https://www.youtube.com/watch?v=WPSeyjX1-4s
