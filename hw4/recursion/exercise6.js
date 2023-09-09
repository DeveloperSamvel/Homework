const binarySearch = (sortedArray, target) => {
  function binarySearchRecursive(sortedArray, target, start, end) {
    if (start > end) {
      return -1;
    }
    const middle = Math.floor((start + end) / 2);
    if (sortedArray[middle] === target) {
      return middle;
    }
    if (target < sortedArray[middle]) {
      return binarySearchRecursive(sortedArray, target, start, middle - 1);
    }
    return binarySearchRecursive(sortedArray, target, middle + 1, end);
  }

  return binarySearchRecursive(sortedArray, target, 0, sortedArray.length - 1);
};

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
console.log(binarySearch(sortedArray, 9)); // Output: 4
console.log(binarySearch(sortedArray, 10)); // Output: -1
