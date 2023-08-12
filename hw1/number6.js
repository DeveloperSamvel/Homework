"use strict"

function insertToMiddleArray(firstArray = [], secondArray = []) {
    let newArr = [];
    newArr.push(firstArray[0]);

    for (let i = 0; i < secondArray.length; i++) {
        newArr.push(secondArray[i]);
    }

    newArr.push(firstArray[1]);

    return newArr;
}

let newArr = insertToMiddleArray([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]);
console.log(newArr);

newArr = insertToMiddleArray([15, 150], [45, 75, 35] );
console.log(newArr);

newArr = insertToMiddleArray([[1, 2], [5, 6]], [[3, 4]]);
console.log(newArr);