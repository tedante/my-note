
function countdown2(number) {
    for(let i = number; i >= 0; i--) {
        console.log(i)
    }
}

countdown2(10)

function countdown(number) {
    console.log(number)

    if (number <= 0) {
        return;
    } else {
        countdown(number - 1)
    }
}

countdown(10)