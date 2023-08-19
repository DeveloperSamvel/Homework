// const arr = [
//   [3, 4, 1],
//   [5, 2, 3],
//   [1, 6, 2],
// ];
const arr = [
  [3, 5, 1],
  [4, 2, 6],
  [1, 3, 2],
];
const k = 10;

function filterRowsAndColumnsBySum(arr = [], k) {
  let newArr = [];
  let rowsToKeep = [];
  let colsToKeep = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    let sumI = 0;
    let sumJ = 0;
    for (let j = 0; j < element.length; j++) {
      sumI += arr[i][j];
      sumJ += arr[j][i];
    }

    if (sumI <= k) {
      rowsToKeep.push(i);
    }

    if (sumJ <= k) {
      colsToKeep.push(i);
    }

    console.log("rowsToKeep", rowsToKeep);
    console.log("colsToKeep", colsToKeep);
  }

  for (let i = 0; i < arr.length; i++) {
    let indexAddedValues = newArr.length;
    if (rowsToKeep.indexOf(i)) {
      newArr[i] = [];
    }
    for (let j = 0; j < arr[i].length; j++) {
      if (rowsToKeep.indexOf(i)) {
        console.log("i", i);
        newArr[i].push(arr[i][j]);
        console.log("newArr[indexAddedValues]", newArr[i]);
      }
    }
  }

  return newArr;
}

console.log(filterRowsAndColumnsBySum(arr, k));
