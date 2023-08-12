"use strict"

function maxInNegatives(arr = []) {
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(element < 0 && element > max) {
            max = element;
        }
    }

    return max;
}

function productNegativeNumbers(arr = []) {
    let result = 1;
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if( !Array.isArray(element) ) {
            return "Invalid Argument";
        }
    }


    for (let i = 0; i < arr.length; i++) {
        let maxRow = maxInNegatives(arr[i]);
        if(maxRow !== -Infinity) {
            newArr.push(maxRow);
        }
    }

    if(newArr.length === 0) {
        return "No negatives";
    }

    for (let i = 0; i < newArr.length; i++) {
        result *= newArr[i];
    }

    return result;
}

let result = productNegativeNumbers([[2, -9, -3, 0], [1, 2], [-4 , -11, 0]]);
console.log(result);

result = productNegativeNumbers([[3, 4], [11, 0], [5, 6, 7, 8]]);
console.log(result);

result = productNegativeNumbers([1, 2, 3]);
console.log(result);