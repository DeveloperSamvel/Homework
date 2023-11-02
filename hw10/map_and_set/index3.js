let arr = [1, 5, 4, 2, 6, 8, 2, 1, 3];

function removeDuplicateItems(arr) {
    const newMap = new Map();
    
    arr.forEach(element => {
        if(!newMap.get(element)) {
            newMap.set(element, element);
        }
    });


    return [...newMap.values()];
}

const result = removeDuplicateItems(arr);
console.log(result);