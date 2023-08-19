// Օրինակի համար arr.find((element) => element > 13);

const arr = [5, 12, 8, 130, 44];

const iteration = (item) => {
  if (item > 13) {
    return item;
  }

  return;
};

const find = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (element === iteration(element)) {
      return element;
    }
  }

  return;
};

console.log(find(arr));
