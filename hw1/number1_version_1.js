"use strict"

function findSign(a, b, c) {
    let n = true;
    if(a == 0 || b == 0 || c == 0) {
        return "unsigned";
    }

    if(a < 0) {
        n = !n;
    }

    if(b < 0) {
        n = !n;
    }

    if(c < 0) {
        n = !n;
    }

    if(n === true) {
        return "+"
    }

    return "-"
}

let result = findSign(-14, 5, 0);
console.log(result);

result = findSign(-8, 9, -6);
console.log(result);

result = findSign(4, 19, -2);
console.log(result);