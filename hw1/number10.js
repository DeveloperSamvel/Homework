"use strict"

function convertAcronym(str) {
    let result = "";
    let arr = str.split(" ");

    for (let i = 0; i < arr.length; i++) {
        result += arr[i][0];
    }

    return result.toUpperCase();
}

let result = convertAcronym("Prisoner of War");
console.log(result);

result = convertAcronym("Have a good nightʼ");
console.log(result);