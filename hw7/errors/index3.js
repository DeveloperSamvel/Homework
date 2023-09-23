const reverseString = (s) => {
  try {
    s = s.split("").reverse().join("");
    return s;
  } catch (error) {
    return "s.split is not a function";
  }
};

console.log(reverseString("Hello"));
// console.log(reverseString(46));
