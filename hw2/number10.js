"use strict"

const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43];

let sum = arr.reduce((acc, el) => (el >= 18 ? acc + el : acc), 0);
console.log("sum", sum)