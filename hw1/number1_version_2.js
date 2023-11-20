"use strict"

function findSign(a, b, c) {
    let number = a * b * c;

    let dedhed = {
        "0": "unsigned",
        [-1]: "-",
        [1]: "+",
    };

    return dedhed[number / Math.abs(number) || 0];
}

let result = findSign(-14, 5, 0);
console.log(result);

result = findSign(-8, 9, -6);
console.log(result);

result = findSign(4, 19, -2);
console.log(result);