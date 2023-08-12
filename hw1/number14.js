"use strict"

function shallowCompare(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}

let a = { a: '1' };
let b = { a: '1'};
let result = shallowCompare(a, b);
console.log(result);

a = { a: '1' };
b = { a: '1', b: '2' };
result = shallowCompare(a, b);
console.log(result);

a = {};
b = {};
result = shallowCompare(a, b);
console.log(result);
