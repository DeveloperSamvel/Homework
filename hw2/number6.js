"use strict" 

// without method parseInt
const parseInteger = (users) => {
    let arr = [];

    arr = users.map(item => isNaN(item) ? null : item * 1);
    return arr;
}

console.log(parseInteger(["1", "2", "34"]));
console.log(parseInteger(["1", "px", "2323"]));




// with method parseInt
const parseIntegerVersion2 = (users) => {
    let arr = [];

    arr = users.map(item => isNaN(item) ? null : parseInt(item));
    return arr;
}


// console.log(parseIntegerVersion2(["1", "2", "34"]));
// console.log(parseIntegerVersion2(["1", "px", "2323"]));
