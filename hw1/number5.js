"use strict"

function convertToNumber(bin) {
    let num = 0;

    for (let i = 0; i < bin.length; i++) {
        let exponentiation = bin.length - 1 - i;
        num += bin[i] * 2 ** exponentiation;
    }

    return num;
}

let newArr = convertToNumber("010");
console.log(newArr)

newArr = convertToNumber("10010");
console.log(newArr)

newArr = convertToNumber("0101011");
console.log(newArr)