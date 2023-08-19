// Օրինակի համար arr.forEach((item) => console.log(item));

const arr = [15, 6, 1, 9];

const iteration = (item) => {
  console.log(item);
};

const foreach = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    iteration(element);
  }

  return;
};

console.log(foreach(arr));
