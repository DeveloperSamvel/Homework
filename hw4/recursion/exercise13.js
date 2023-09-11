const generateCombinations = (inputArray, combinationLength) => {
  const combinations = [];
  const generate = (inputArray, combinationLength, currentCombination = []) => {
    if (combinationLength === 0) {
      combinations.push(currentCombination);
      return;
    }
    for (let i = 0; i < inputArray.length; i++) {
      const current = inputArray[i];
      const remaining = inputArray.slice(i + 1);
      generate(remaining, combinationLength - 1, [
        ...currentCombination,
        current,
      ]);
    }
  };
  generate(inputArray, combinationLength);
  return combinations;
};

const inputArray = [1, 2, 3, 4];
console.log(generateCombinations(inputArray, 2)); // Output: [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]
