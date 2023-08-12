const arr = [6, 5, 2, 3];

const shift = (arr) => {
    let firstElem = arr[0];
    for(let i = 0; i <= arr.length - 2; i++) {
        arr[i] = arr[i + 1]
    }

    delete arr[arr.length - 1];
    arr.length = arr.length - 1;

    return   firstElem;
}

console.log(shift(arr));
console.log("arr", arr);
// console.log(array1);