const subsetSum = (arr, target) => {
  if (target === 0) {
    if (arr.find((element) => element === target)) {
      return true;
    } else {
      return false;
    }
  } else {
    function iter(arr, target) {
      if (target === 0) return true;
      if (arr.length === 0) return false;
      const [first, ...rest] = arr;
      return iter(rest, target - first) || iter(rest, target);
    }
    return iter(arr, target);
  }
};

const inputArray = [2, 4, 6, 8];
console.log(subsetSum(inputArray, 10)); // Output: true
console.log(subsetSum(inputArray, 0)); // Output: false
