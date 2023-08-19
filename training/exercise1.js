const arr = [
  [11, 2, 1],
  [4, 4, 6],
  [8, 6, 7],
];

function sum(arr) {
  return arr.reduce((acc, elem) => acc + elem, 0);
}

function maxSumIndex(arr = []) {
  let newArr = arr.map((element) => sum(element)) || [];
  let newArrMaxValue = Math.max(...newArr);

  return newArr.indexOf(newArrMaxValue);
}

console.log(maxSumIndex(arr));
