"use strict"

const acronym = (str) => {
    let text = "";
    let arr = str.split(" ");
    let newArr = arr.map((item) => {
        return item[0];
    });

    return newArr.join("").toUpperCase();
}

console.log(acronym("Prisoner of War"));