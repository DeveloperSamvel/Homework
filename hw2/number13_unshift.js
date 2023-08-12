const arr = [1, 2, 3, 4, 43, 17];

const unshift = (argArr, ...props) => {
  let arr1Length = argArr.length;
  let arr2Length = props.length;
  let newArrLength = arr1Length + arr2Length;

  for (let i = newArrLength - 1; i >= 0; i--) {
    if (i >= arr2Length) {
      argArr[i] = argArr[i - arr2Length];
    } else {
      argArr[i] = props[i];
    }
  }

  return argArr.length;
};

console.log(unshift(arr, 8, 21, 7, 9));
console.log(arr);
