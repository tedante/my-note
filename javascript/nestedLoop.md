# Nested Loop

```js
for (let i = 0; i < 5; i++) {
    console.log(`ini i: ${i} >>>>>`);

    for (let j = 0; j < 5; j++) {
        console.log(`waw i: ${j} --`);
    }
}
```


```js
let i = 0
while(i < 5) {
    console.log(`ini i: ${i} >>>>>`);

    for (let j = 0; j < 5; j++) {
        console.log(`waw i: ${j} --`);
    }
    i++;
}
```

```js
let row = 5
let col = 6

for (let i = 0; i < row; i++) {
    let line = ""
    
    for (let j = 0; j < col; j++) {
        line += "*"
    }

    console.log(line);
}
```

```js
let row = 10
let col = 6

for (let i = 0; i < row; i++) {
    let line = ""

    for (let j = 0; j < col; j++) {
        if(i === 0 || i === row - 1 || j === 0 || j === col - 1) {
            line += "*"
        } else {
            line += " "
        }
    }

    console.log(line);
}
```

```js
let row = 5
let col = 4

for (let i = 0; i < row; i++) {
    console.log(`loop i ke ${i} sebelum syntax break >>>>>>`);

    if(i === 3) {
        console.log(`masuk if, lalu break;;;;`);
        break;
    }

    console.log(`loop i ke ${i} setelah  syntax break -----`);
}

console.log(`waw selesai`);
```

```js
let row = 5
let col = 4

for (let i = 0; i < row; i++) {
    console.log(`loop i ke ${i} sebelum syntax break >>>>>>`);

    if(i === 3) {
        console.log(`masuk if, lalu continue;;;;`);
        continue;
    }

    console.log(`loop i ke ${i} setelah  syntax break -----`);
}

console.log(`waw selesai`);
```



## Latihan
```js
/**
 * Tampilkanlah seperti dibawah ini, dengan menggunakan nested loop
 
 123
 456
 789

 */


/**
 * Tampilkanlah seperti dibawah ini, dengan menggunakan nested loop
 
 ***
 **
 *
 
 */

/**
 * Tampilkanlah seperti dibawah ini, dengan menggunakan nested loop
 
 123
 45
 6
 
 */
```