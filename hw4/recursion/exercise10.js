const sumOfDigits = (num) => {
  if (num < 0) {
    throw new Error("Please provide a positive number");
  }
  if (num < 10) {
    return num;
  }

  return (num % 10) + sumOfDigits(Math.floor(num / 10));
};
console.log(sumOfDigits(-12345)); // Output: 15
