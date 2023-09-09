const permutations = (str) => {
  const result = [];
  if (str.length === 1) {
    return [str];
  }

  // foreach chem grel, vorovhetev string@ chi kara foreach ani,
  // es el chem uzum array sarqem, heto ed nuyn array@ het berem depi string
  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    const remaining = str.slice(0, i) + str.slice(i + 1);
    const remainingPermutations = permutations(remaining);
    for (let j = 0; j < remainingPermutations.length; j++) {
      result.push(current + remainingPermutations[j]);
    }
  }
  return result;
};
console.log(permutations("hello")); // ["hello", "helol", "heoll", "hlelo", "hleol", "hlleo", "hlloe"];
