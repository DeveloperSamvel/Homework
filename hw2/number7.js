"use strict" 

const arr = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN, "6"];


// with method parseInt
const parseInteger = (users) => {
    let arr = [];

    arr = users.filter(item => item * 1);
    return arr;
}

// console.log(parseInteger(arr));



// with method parseInt
const parseIntegerVersion2 = (users) => {
    let arr = [];

    arr = users.filter(item => parseInt(item));
    return arr;
}

// console.log(parseIntegerVersion2(arr));


// version where "6" is not the correct answer
const parseIntegerVersion3 = (users) => {
    let arr = [];

    arr = users.filter(item => item === Number(item));
    return arr;
}

// console.log(parseIntegerVersion3(arr));
