const reverseString = (s) => {
  return s.split("").reverse().join("");
};

try {
  // console.log(reverseString("Hello"));
  console.log(reverseString(46));
} catch (error) {
  console.log(error.message);
}
