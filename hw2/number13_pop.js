const arr = [15, 6, 1, 9];

const pop = (arr) => {
  let length = arr.length;
  let lastElem = arr[length - 1];

  delete arr[arr.length - 1];
  arr.length = arr.length - 1;

  return lastElem;
};

console.log(pop(arr));
console.log("arr", arr);
