const countOccurrences = (array, searchElement) => {
  let increment = 1;
  if (array.length === 0) {
    return 0;
  }
  if (array[0] === searchElement) {
    return increment + countOccurrences(array.slice(1), searchElement);
  }

  return countOccurrences(array.slice(1), searchElement);
};

const numbers = [2, 3, 4, 2, 3, 5, 2, 6, 2];
console.log(countOccurrences(numbers, 2));
