# Built-in

## [Push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
```js
[ "🦆", "🐔", "🐱", "🐎" ].push("🐶") // result => [ "🦆", "🐔", "🐱", "🐎", "🐶" ]
```

## [Join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
```js
[ "🦆", "🐔", "🐱", "🐎" ].join("-") // result => "🦆-🐔-🐱-🐎"
```

## [Concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
```js
let array1 = [ "🦆", "🐔"]
let array2 = [ "🐱", "🐎", "🐶" ]
let array3 = array1.concat(array2)

// array3 => [ "🦆", "🐔", "🐱", "🐎", "🐶" ]
```

## [Filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
```js
let array = [ "🐱", "🦆", "🐔", "🐱", "🐎", "🦆" ]

let result = array.filter((item) => {
    return item === "🐱"
})

// result => [ "🐱", "🐱"]
```

## [Find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
```js
let array = [ "🐱", "🦆", "🐔", "🐱", "🐎", "🦆" ]

let result = array.filter((item) => {
    return item === "🐱"
})

// result => "🐱"
```

## [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
```js
let array = [ "🐱", "🦆", "🐎", "🦆" ]

let result = array.map((item) => {
    return "🐉"
})

// result => [ "🐉", "🐉", "🐉", "🐉" ]
```

## [Slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
```js
let array = [ "🐱", "🦆", "🐎", "🦆", "🐉"]

let result = array.slice(1, 3)

// result => [ "🦆", "🐎" ]
```

References: 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
- https://www.linkedin.com/feed/update/urn:li:activity:7100833695816720384?utm_source=share&utm_medium=member_desktop