const arr = [
  [11, 2, 1],
  [4, 4, 6],
  [8, 6, 7],
];

function minArr(arr = []) {
  return arr.map((element) => Math.min(...element));
}

console.log(minArr(arr));
