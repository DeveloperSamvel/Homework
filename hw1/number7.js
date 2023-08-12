"use strict"

function factorial(num) {
    if(num === 0 || num === 1) {
        return 1;
    }

    return num * factorial(num - 1);
}

function printText(num) {
    return num + "! = " + factorial(num);
}

let newArr = printText(5);
console.log(newArr);

newArr = printText(1);
console.log(newArr);

newArr = printText(7);
console.log(newArr);