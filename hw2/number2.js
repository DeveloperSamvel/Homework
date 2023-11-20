"use strict"

const acronym = (str) => {
    let arr = str.split(" ");
    return arr.map((item) => {
        return item[0];
    })
        .join("")
        .toUpperCase();
}

console.log(acronym("Prisoner of War"));