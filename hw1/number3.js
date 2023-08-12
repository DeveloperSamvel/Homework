"use strict"

function _sort(arr = []) {
    let newArr = [];
    
    let i = Math.min(...arr);
    let max = Math.max(...arr);

    while( i <= max ) {
        if( arr.findIndex(element => element === i) !== -1) {
            newArr.push(i);
        }
        else {
            newArr.push(undefined);
        }
        i++;
    }

    return newArr;
}

let newArr = _sort([4, 3, 0, 9]);
console.log(newArr)

newArr = _sort([26, 30, 19, 5]);
console.log(newArr)