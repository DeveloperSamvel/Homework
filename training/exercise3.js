const arr = [
  ["abbb", "eded", ["sesded", "e7dedw"], "deded"],
  ["8", "1", "99", "462"],
  ["dede", "qwws", "frvr", "uju"],
];

let word = "e7dedw";

function findWord(arr = [], word) {
  let newArr = arr.flat(Infinity) || [];
  return newArr.indexOf(word) !== -1 ? true : false;
}

console.log(findWord(arr, word));
