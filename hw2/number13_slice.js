const arr = [52, 11, 9, 34, 56, 130, 45];

const iteration = (element) => {
  return element;
};

const slice = (arr, start = 0, end = arr.length) => {
  let newArr = [];
  if (start < 0) {
    if (start < -arr.length) {
      start = 0;
    } else {
      start = arr.length + start;
    }
  }

  if (end < 0) {
    end = arr.length + end;
  }

  if (end > arr.length) {
    end = arr.length;
  }

  for (let i = start; i < end; i++) {
    const element = arr[i];

    newArr.push(iteration(element));
  }

  return newArr;
};

console.log(slice(arr));
