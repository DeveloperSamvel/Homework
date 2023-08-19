// Օրինակի համար arr.some((element) => element % 3 === 0);

const arr = [52, 11, 49, 130, 44];

const iteration = (item) => {
  if (item % 3 === 0) {
    return true;
  }

  return false;
};

const some = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (iteration(element)) {
      return true;
    }
  }

  return false;
};

console.log(some(arr));
