// Օրինակի համար arr.findIndex((element) => element > 13);

const arr = [5, 12, 8, 130, 44];

const iteration = (item) => {
  if (item > 13) {
    return item;
  }

  return;
};

const findIndex = (arr) => {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (element === iteration(element)) {
      return i;
    }
  }

  return index;
};

console.log(findIndex(arr));
