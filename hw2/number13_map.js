// Օրինակի համար arr.map((element) => element * 2);

const arr = [52, 11, 49, 130, 45];

const iteration = (item) => {
  return item * 2;
};

const map = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(iteration(arr[i]));
  }

  return newArr;
};

console.log(map(arr));
