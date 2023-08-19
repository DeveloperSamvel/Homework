const arr = [1, 2, 3, 4, 43, 17];

const push = (argArr, ...props) => {
  let arr1Length = argArr.length;
  let arr2Length = props.length;
  let newArrLength = arr1Length + arr2Length;

  for (let i = arr1Length; i < newArrLength; i++) {
    argArr[i] = props[i - arr1Length];
  }

  return argArr.length;
};

console.log(push(arr, 8, 21, 7, 9));
console.log(arr);
