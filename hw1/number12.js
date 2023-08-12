"use strict"

function invert(obj = {}) {
    let newObj = {};
    for (const key in obj) {
        const element = obj[key];

        let valuesArr = Object.values(obj)
        let elemFirstIndex = valuesArr.findIndex((elem) => elem === element);
        let elemLastIndex = valuesArr.findLastIndex((elem) => elem === element);

        if( elemFirstIndex !== elemLastIndex ) {
            if( !newObj[element] ) {
                newObj[element] = [];
            }
            newObj[element].push(key);
        }
        else {
            newObj[element] = key;
        }
    }

    return newObj;
}

let result = invert({ a: "1", b: "2" });
console.log(result);

result = invert({ a: "1", b: "2", c: "2" });
console.log(result);

result = invert({ a: "1", b: "2", c: "2", d: "2" });
console.log(result);