const arr = [
  ["a", "b", "s", "d", "f"],
  ["v", "e", "g", "o"],
  ["r", "p", "w", "u"],
];

let word = "food";

function findWord(arr = [], word) {
  const oneString = arr.flat().join("");
  let newWord = "";
  console.log(oneString);
  for (let letter of word) {
    if (oneString.includes(letter)) {
      newWord += letter;
    }
  }

  console.log("newWord", newWord);

  if (newWord === word) {
    return true;
  }

  return false;
}

console.log(findWord(arr, word));
