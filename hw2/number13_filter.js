// Օրինակի համար arr.filter((element) => element > 40);

const arr = [52, 11, 9, 34, 56, 130, 45];

const iteration = (item) => {
  if (item > 40) {
    return true;
  }

  return false;
};

const filter = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (iteration(element)) {
      newArr.push(element);
    }
  }

  return newArr;
};

console.log(filter(arr));
