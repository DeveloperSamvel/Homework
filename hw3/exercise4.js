const arr = [
  [11, 2, 1],
  [4, 4, 6],
  [8, 6, 7],
];

function rotateMatrix(arr = []) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    for (let j = 0; j < element.length; j++) {
      if (!newArr[j]) {
        newArr[j] = [];
      }

      newArr[j][i] = arr[i][j];
    }
  }
  return newArr;
}

console.log(rotateMatrix(arr));
