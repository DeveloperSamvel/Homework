const arr = [1, 2, [[[[31, 4]]]], [[[[[43, 17]]]]]];

function flattenArray(arr, newArr, depth) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (Array.isArray(element)) {
      if (depth > 0) {
        flattenArray(element, newArr, depth - 1);
      } else {
        newArr.push(element);
      }
    } else {
      newArr.push(element);
    }
  }
  return newArr;
}

const flat = (arr, depth = 1) => {
  let newArr = [];
  return flattenArray(arr, newArr, depth);
};

console.log(flat(arr, 5));
