"use strict"

const sortBy = (arr, action) => {
    if(action === "Asc") {
        return arr.sort((a, b) => a - b)
    }
    if(action === "Desc") {
        return arr.sort((a, b) => b - a)
    }

    return "Enter correct sort type";
}

console.log(sortBy([4, 3, 2, 1], "Asc"));
console.log(sortBy([7, 8, 11, 66]));
console.log(sortBy([7, 8, 11, 66], "Desc"));