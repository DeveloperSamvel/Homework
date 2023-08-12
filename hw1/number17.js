"use strict"

const rectangle1 = {
    width: 5,
    height: 10,
};

const rectangle2 = {
    width: 10,
    height: 5,
};

const rectangle3 = {
    width: 6,
    height: 8,
};

function areRectanglesSameArea(obj1 = {}, obj2 = {}) {
    if(!obj1.width || !obj1.height || !obj2.width || !obj2.height) {
        return "Invalid arguments";
    }

    if(obj1.width * obj1.height ===  obj2.width * obj2.height) {
        return true;
    }

    return false;
}

let result = areRectanglesSameArea(rectangle1, rectangle2);
console.log(result);

result = areRectanglesSameArea(rectangle1, rectangle3);
console.log(result);