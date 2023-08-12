"use strict"

function recursion (n) {
    let sum = 0;
    if( n === 0 || n === 1) {
        return n;
    }

    let a = 0;
    let b = 1;
    for(let i = 2; i <= n; i++) {
        sum = a + b;
        a = b;
        b = sum;
    }

    return sum;
}

// with recursion
function recursion2 (n) {
    if( n === 0 || n === 1) {
        return n;
    }

    return recursion(n - 1) + recursion(n - 2);
}

let result = recursion(0);
console.log(result);

result = recursion(2);
console.log(result);

result = recursion(10);
console.log(result);

result = recursion(20);
console.log(result);