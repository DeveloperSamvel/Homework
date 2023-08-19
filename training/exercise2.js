const arr = [
  [11, 2, 1],
  [4, 4, 6],
  [8, 6, 7],
];

function minArr(arr = []) {
  let newArr = arr.map((element) => Math.min(...element)) || [];
  return newArr;
}

console.log(minArr(arr));
