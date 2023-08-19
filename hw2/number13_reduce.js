const arr = [52, 11, 9, 34, 56, 130, 45];

const iteration = (acc, element) => {
  return acc + element;
};

const reduce = (arr, initialValue) => {
  let acc = initialValue;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    acc = iteration(acc, element);
  }

  return acc;
};

console.log(reduce(arr, 0));
