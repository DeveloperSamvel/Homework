"use strict"

function sum(arr = []) {
    let sum = 0;

    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
    }

    return sum;
}

function sumEachRow(arr = []) {
    let newArr = [];

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        newArr.push(sum(element));
    }

    return newArr;
}

let newArr = sumEachRow([[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]]);
console.log(newArr)

newArr = sumEachRow([[8, 35, 2], [8], [5, 6, -5 , -6], [1, 3, -9, 0,-1]]);
console.log(newArr)

newArr = sumEachRow([[1], [2], [3], [4]]);
console.log(newArr)