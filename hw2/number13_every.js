// Օրինակի համար arr.every((element) => element > 13);

const arr = [51, 11, 48, 130, 44];

const iteration = (item) => {
  if (item > 13) {
    return true;
  }

  return false;
};

const every = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (!iteration(element)) {
      return false;
    }
  }

  return true;
};

console.log(every(arr));
