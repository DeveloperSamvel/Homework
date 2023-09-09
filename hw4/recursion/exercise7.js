const flattenArray = (arr) => {
  if (arr.length === 0) {
    return [];
  }
  if (Array.isArray(arr[0])) {
    return flattenArray(arr[0]).concat(flattenArray(arr.slice(1)));
  }
  return [arr[0]].concat(flattenArray(arr.slice(1)));
};

const nestedArray = [1, [2, [3, 4], 5], 6];
console.log(flattenArray(nestedArray)); // Output: [1, 2, 3, 4, 5, 6]
